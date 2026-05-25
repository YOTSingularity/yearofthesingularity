# `FULL-BLAST SOURCE PACK LANES`

```
> PACK: YOTS-SOURCE-PACK-001
> LAST VERIFIED: 2026-05-25
> DEFAULT: READ-ONLY UNTIL LEDGER APPROVAL
```

Use this source pack when a future YOTS run needs source-backed research, a new transmission, an evidence update, or a claim audit. The point is not to make the project bureaucratic. The point is to keep the signal alive without letting unsupported certainty sneak into the archive.

## Operating Boundary

- Do not inspect secrets or private files.
- Do not post, publish, deploy, commit, or push unless Clay explicitly asks.
- Treat local YOTS writing as project framing until a claim is backed by `evidence/evidence-graph.json`.
- Use primary sources first, institutional reports second, and commentary only as context.
- Preserve counter-signal when evidence complicates the thesis.

## Lane 1: Source Scout

**Goal:** Build or update a source manifest for a domain, transmission, or claim cluster.

**Scope:** `docs/`, `research/`, `transmissions/`, `evidence/evidence-graph.json`, and approved public primary URLs.

**Prompt:**

```text
Read the assigned YOTS files and approved source URLs. Build a source manifest with source id, title, publisher, date, source type, reliability, supported claim ids, uncertainty, and counter-signal. Do not edit files, inspect secrets, commit, push, deploy, or treat generated summaries as sources.
```

**Output:** Candidate source rows for `evidence/evidence-graph.json`, with claim ids and source reliability.

## Lane 2: Claim Auditor

**Goal:** Compare YOTS claims against the source manifest.

**Scope:** The relevant markdown files plus `evidence/claim-audit-ledger.md`.

**Prompt:**

```text
Audit each factual, numeric, current, or superlative claim. Label it as project_definition, empirically_supported, reported_metric, plausible_inference, argument, speculative, or needs_evidence. Rewrite unsupported claims into modest source-noteable language. Do not edit files unless explicitly assigned.
```

**Output:** Ledger rows, source gaps, suggested wording changes, and blocking risks.

## Lane 3: Transmission Drafter

**Goal:** Draft a transmission in the existing YOTS voice without flattening uncertainty.

**Scope:** Existing transmissions, contribution standards, current source manifest, and approved claim ledger.

**Prompt:**

```text
Draft a YOTS transmission with a real date, terminal header, one central unease, and source notes. Separate lived texture from empirical claims. Use source-note markers lightly. No hype, no fake precision, no unsourced numeric or superlative claims.
```

**Output:** Draft markdown, source notes, and content risks.

## Lane 4: Verifier

**Goal:** Decide whether the artifact can land.

**Scope:** Draft transmission, evidence graph, claim ledger, local links, CI trust checks, and Git status.

**Prompt:**

```text
Verify header date, numbering, file naming, source notes, claim labels, link targets, and consistency with YOTS contribution standards. Run or recommend the smallest local checks. Return approve, rework, or block. Include Lumi state: local, committed, pushed, deployed/live.
```

**Output:** Approval decision, remaining risks, and exact verification evidence.

## Lane 5: World Pulse Scout

**Goal:** Keep the archive current against live public sources without turning every drift check into a publication.

**Scope:** `workflows/world-pulse-loop.md`, `reports/`, `evidence/evidence-graph.json`, `evidence/claim-audit-ledger.md`, `observatory/data/signals.js`, and approved public source anchors.

**Prompt:**

```text
Run the YOTS World Pulse scout. Check current source anchors for changes in capability, agency, alignment, labor/economics, benchmarks, and public sentiment. Return new or changed sources, candidate claim updates, counter-signal, whether a repo patch is warranted, and Lumi hygiene. Do not edit files, inspect secrets, commit, push, deploy, or publish.
```

**Output:** Source-drift report, candidate claim rows, counter-signal, and a recommendation to patch, wait, or retire a claim.

## Promotion Rule

Keep this as a repo-local source-pack pattern until it has been used repeatedly. Promote to a global skill only through skill governance if it becomes durable outside YOTS.
