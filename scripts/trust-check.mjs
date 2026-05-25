#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = new Set(process.argv.slice(2));
const ci = args.has("--ci");
const freshness = args.has("--freshness");
const jsonOutIndex = process.argv.indexOf("--json");
const jsonOut = jsonOutIndex >= 0 ? process.argv[jsonOutIndex + 1] : null;

const report = {
  generatedAt: new Date().toISOString(),
  errors: [],
  warnings: [],
  stats: {
    markdownFiles: 0,
    htmlFiles: 0,
    linksChecked: 0,
    sources: 0,
    claims: 0
  }
};

function rel(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function exists(relPath) {
  return fs.existsSync(path.join(root, relPath));
}

function issue(kind, file, line, message) {
  const entry = { file: rel(file), line, message };
  report[kind === "error" ? "errors" : "warnings"].push(entry);
  const prefix = ci && kind === "error" ? `::error file=${entry.file},line=${line || 1}::` : "";
  console.log(`${prefix}${kind.toUpperCase()} ${entry.file}:${line || 1} ${message}`);
}

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === ".git" || name === "node_modules") continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function withoutCodeFences(text) {
  let inFence = false;
  return text
    .split(/\r?\n/)
    .map((line) => {
      if (/^\s*```/.test(line)) {
        inFence = !inFence;
        return "";
      }
      return inFence ? "" : line;
    })
    .join("\n");
}

function slugify(heading) {
  return heading
    .replace(/`/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

function anchorsForMarkdown(file) {
  const anchors = new Set();
  const text = withoutCodeFences(read(file));
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^\s{0,3}(#{1,6})\s+(.+)$/);
    if (match) anchors.add(slugify(match[2]));
  }
  return anchors;
}

function normalizeLink(target, fromFile) {
  if (!target || target.startsWith("mailto:") || target.startsWith("tel:")) return null;
  if (/^https?:\/\//.test(target)) {
    const github = target.match(/^https:\/\/github\.com\/YOTSingularity\/yearofthesingularity\/(blob|tree)\/main\/(.+)$/);
    if (!github) return { external: true, url: target };
    return {
      external: false,
      pathPart: decodeURIComponent(github[2].split("#")[0]),
      anchor: github[2].includes("#") ? github[2].split("#").slice(1).join("#") : "",
      directory: github[1] === "tree"
    };
  }
  if (target.startsWith("#")) {
    return { external: false, pathPart: rel(fromFile), anchor: target.slice(1), directory: false };
  }
  const [rawPath, anchor = ""] = target.split("#");
  const resolved = path.normalize(path.join(path.dirname(rel(fromFile)), rawPath)).replaceAll(path.sep, "/");
  return { external: false, pathPart: resolved, anchor, directory: false };
}

function checkLocalTarget(target, fromFile, line) {
  const normalized = normalizeLink(target, fromFile);
  if (!normalized) return;
  report.stats.linksChecked += 1;

  if (normalized.external) {
    try {
      const url = new URL(normalized.url);
      if (url.protocol !== "https:" && url.protocol !== "http:") {
        issue("error", fromFile, line, `Unsupported external URL protocol: ${target}`);
      }
    } catch {
      issue("error", fromFile, line, `Malformed external URL: ${target}`);
    }
    return;
  }

  const pathPart = normalized.pathPart || rel(fromFile);
  const full = path.join(root, pathPart);
  if (!fs.existsSync(full)) {
    issue("error", fromFile, line, `Broken local link: ${target}`);
    return;
  }

  if (normalized.directory && !fs.statSync(full).isDirectory()) {
    issue("error", fromFile, line, `Expected directory link target: ${target}`);
    return;
  }

  if (normalized.anchor && pathPart.endsWith(".md")) {
    const anchors = anchorsForMarkdown(full);
    const requested = normalized.anchor;
    const looseRequested = requested.replace(/-+/g, "-");
    const looseAnchors = new Set([...anchors].map((anchor) => anchor.replace(/-+/g, "-")));
    if (!anchors.has(requested) && !looseAnchors.has(looseRequested)) {
      issue("error", fromFile, line, `Missing markdown anchor #${normalized.anchor} in ${pathPart}`);
    }
  }
}

function checkLinks(file) {
  const text = withoutCodeFences(read(file));
  const lines = text.split(/\r?\n/);
  lines.forEach((line, index) => {
    const lineNo = index + 1;
    const mdLinks = line.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g);
    for (const match of mdLinks) checkLocalTarget(match[1], file, lineNo);
    const hrefs = line.matchAll(/\bhref="([^"]+)"/g);
    for (const match of hrefs) checkLocalTarget(match[1], file, lineNo);
    const scripts = line.matchAll(/\bsrc="([^"]+)"/g);
    for (const match of scripts) checkLocalTarget(match[1], file, lineNo);
  });
}

function checkPlaceholders(file, allowed) {
  const text = withoutCodeFences(read(file));
  const lines = text.split(/\r?\n/);
  const patterns = [/2026[.-]XX[.-]XX/, /\[CURRENT YEAR\]/, /\b202X\b/];
  lines.forEach((line, index) => {
    const lineNo = index + 1;
    const key = `${rel(file)}:${lineNo}`;
    const intentional = /REDACTED|INSUFFICIENT DATA|BEYOND/.test(line);
    if (patterns.some((pattern) => pattern.test(line)) && !allowed.has(key) && !intentional) {
      issue("error", file, lineNo, "Placeholder date or time marker needs a real date or an allowlist entry.");
    }
  });
}

function loadGraph() {
  const graphFile = path.join(root, "evidence/evidence-graph.json");
  if (!fs.existsSync(graphFile)) {
    issue("error", graphFile, 1, "Missing evidence graph.");
    return null;
  }
  try {
    const graph = JSON.parse(read(graphFile));
    report.stats.sources = graph.sources?.length || 0;
    report.stats.claims = graph.claims?.length || 0;
    return graph;
  } catch (error) {
    issue("error", graphFile, 1, `Invalid evidence graph JSON: ${error.message}`);
    return null;
  }
}

function daysSince(dateString) {
  const date = new Date(`${dateString}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return Infinity;
  return Math.floor((Date.now() - date.getTime()) / 86400000);
}

function checkGraph(graph) {
  if (!graph) return;
  const graphFile = path.join(root, "evidence/evidence-graph.json");
  const sourceIds = new Set();
  const urls = new Map();
  for (const source of graph.sources || []) {
    if (!source.id || !source.title || !source.url || !source.date || !source.last_checked) {
      issue("error", graphFile, 1, `Source ${source.id || "(missing id)"} lacks id, title, url, date, or last_checked.`);
    }
    if (source.url && !/^https:\/\//.test(source.url)) {
      issue("error", graphFile, 1, `Source ${source.id} must use https URL.`);
    }
    if (sourceIds.has(source.id)) issue("error", graphFile, 1, `Duplicate source id ${source.id}.`);
    sourceIds.add(source.id);
    if (urls.has(source.url) && urls.get(source.url) !== source.title) {
      issue("error", graphFile, 1, `Duplicate source URL has conflicting titles: ${source.url}`);
    }
    urls.set(source.url, source.title);
    if (freshness && daysSince(source.last_checked) > (graph.trust_policy?.source_freshness_days || 180)) {
      issue("error", graphFile, 1, `Source ${source.id} has stale last_checked date ${source.last_checked}.`);
    }
  }

  for (const claim of graph.claims || []) {
    const hasSources = Array.isArray(claim.sources) && claim.sources.length > 0;
    const highRisk = claim.risk_level === "high";
    const sourceRequired = ["empirically_supported", "reported_metric"].includes(claim.label) || highRisk;
    if (sourceRequired && !hasSources && claim.audit_status !== "needs-source-table") {
      issue("error", graphFile, 1, `Claim ${claim.id} requires sources or an explicit needs-source-table status.`);
    }
    for (const sourceId of claim.sources || []) {
      if (!sourceIds.has(sourceId)) issue("error", graphFile, 1, `Claim ${claim.id} references missing source ${sourceId}.`);
    }
    if (claim.location) {
      const file = claim.location.split(":")[0];
      if (!exists(file)) issue("error", graphFile, 1, `Claim ${claim.id} references missing file ${file}.`);
    }
  }
}

function checkTransmissionCount() {
  const readme = path.join(root, "README.md");
  const transmissionFiles = fs.readdirSync(path.join(root, "transmissions")).filter((file) => /^\d{3}-.+\.md$/.test(file));
  const text = read(readme);
  for (const file of transmissionFiles) {
    if (!text.includes(`transmissions/${file}`)) {
      issue("error", readme, 1, `README transmission table is missing ${file}.`);
    }
  }
}

function checkObservatoryData(graph) {
  const siteData = path.join(root, "observatory/data/signals.js");
  if (!fs.existsSync(siteData)) {
    issue("error", siteData, 1, "Missing observatory data.");
    return;
  }
  const text = read(siteData);
  for (const claim of graph?.claims || []) {
    if (["C001", "C003", "C005", "C006", "C009", "C011", "C013", "C016"].includes(claim.id) && !text.includes(claim.id)) {
      issue("error", siteData, 1, `Observatory data is missing claim ${claim.id}.`);
    }
  }
}

function main() {
  console.log("╔══════════════════════════════════════════════╗");
  console.log("║             Y O T S   T R U S T            ║");
  console.log("╚══════════════════════════════════════════════╝");

  const graph = loadGraph();
  const allowed = new Set(graph?.trust_policy?.allowed_placeholder_dates || []);
  const files = walk(root);
  const docs = files.filter((file) => file.endsWith(".md") || file.endsWith(".html"));
  report.stats.markdownFiles = docs.filter((file) => file.endsWith(".md")).length;
  report.stats.htmlFiles = docs.filter((file) => file.endsWith(".html")).length;

  for (const file of docs) {
    checkLinks(file);
    if (file.endsWith(".md")) checkPlaceholders(file, allowed);
  }

  checkGraph(graph);
  checkTransmissionCount();
  checkObservatoryData(graph);

  if (jsonOut) fs.writeFileSync(path.join(root, jsonOut), `${JSON.stringify(report, null, 2)}\n`);

  console.log("");
  console.log(`> MARKDOWN FILES: ${report.stats.markdownFiles}`);
  console.log(`> HTML FILES:     ${report.stats.htmlFiles}`);
  console.log(`> LINKS CHECKED:  ${report.stats.linksChecked}`);
  console.log(`> SOURCES:        ${report.stats.sources}`);
  console.log(`> CLAIMS:         ${report.stats.claims}`);
  console.log(`> ERRORS:         ${report.errors.length}`);
  console.log(`> WARNINGS:       ${report.warnings.length}`);

  if (report.errors.length) {
    console.log("> TRUST STATUS:   DEGRADED");
    process.exit(1);
  }
  console.log("> TRUST STATUS:   NOMINAL");
}

main();
