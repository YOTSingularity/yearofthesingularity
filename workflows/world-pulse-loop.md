# `YOTS WORLD PULSE LOOP`

```
> LOOP: YOTS-WORLD-PULSE
> CREATED: 2026-05-25
> OWNER: CLAY / CODEX
> DEFAULT MODE: READ-ONLY SCOUT, PATCH ONLY ON REQUEST
```

This is the recurring current-world loop for keeping YOTS close to reality. It exists because the project is about a moving threshold, and a moving threshold needs dated evidence, not only atmosphere.

## Governance Gate

- **Decision:** add.
- **Container:** repo-local workflow plus Codex automation.
- **Need:** recurring source freshness, claim drift detection, and public-claim restraint.
- **Overlap:** builds on `docs/source-pack/full-blast-lanes.md`; does not replace global full-blast, source-grounded research, or Lumi hygiene skills.
- **Security:** public sources only by default; no secrets, private files, social posting, commits, pushes, or deployments in scheduled runs.
- **Canaries:** source freshness check passes; new claims have source ids; public-facing numeric claims carry dates; counter-signal is preserved; Lumi state is reported.
- **Lifecycle:** review monthly after three runs; remove if it produces stale noise or duplicates another automation.

## Cadence

Default scout cadence is weekly. A publication-grade report should be promoted only when a scout finds meaningful source drift or Clay asks for a full pulse.

## Source Surface

Start with:

- Stanford HAI AI Index and public data.
- Epoch AI model datasets and changelogs.
- METR time horizons, agent evaluations, and risk reports.
- Pew Research Center AI sentiment reports.
- IMF, ILO, OECD, BLS, or equivalent institutional labor/economy sources when labor claims move.
- NIST, AI Safety Institute, or comparable governance/evaluation sources when alignment claims move.

## Scout Output

Each scheduled scout should produce:

1. New or changed sources, with URL, publisher, date, and last checked date.
2. Candidate claim updates, labeled by domain and confidence.
3. Counter-signal that weakens or complicates the YOTS thesis.
4. Whether a repo patch is warranted.
5. Lumi status: local, committed, pushed, deployed/live.

## Promotion Criteria

Promote a scout into a report/transmission patch only when at least one of these is true:

- A new source changes a claim's confidence, wording, or domain.
- A current source adds a dated metric worth tracking.
- A previously unsupported YOTS claim can be upgraded.
- A counter-signal should be visible in the Observatory.
- A public-facing transmission would become misleading without the update.

## Local Verification

Before landing a pulse patch, run:

```bash
node scripts/trust-check.mjs --ci
node scripts/trust-check.mjs --ci --freshness
git diff --check
```

For Observatory data changes, also render `observatory/index.html` in a browser or headless check and confirm metrics, filters, evidence cards, transmissions, and counter-signal render without console errors or horizontal overflow.

## Scheduled Prompt

```text
Run the YOTS World Pulse scout for the local repo. Start from workflows/world-pulse-loop.md, reports/2026-05-world-pulse.md, evidence/evidence-graph.json, evidence/claim-audit-ledger.md, and observatory/data/signals.js. Check current public source anchors for meaningful changes in capability, agency, alignment, labor/economics, benchmarks, and public sentiment. Return new or changed sources, candidate claim updates, counter-signal, whether a repo patch is warranted, suggested verification commands, and Lumi hygiene. Do not edit files, stage, commit, push, deploy, post to social media, inspect secrets, or claim live/deployed status.
```
