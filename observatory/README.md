# `SINGULARITY OBSERVATORY`

```
> SURFACE: STATIC SITE
> ENTRY: index.html
> DATA: data/signals.js
```

Open `index.html` directly or serve the repository root with any static server. The observatory has no build step and no runtime dependency.

Views:

- Timeline: chronology with confidence labels and source ids.
- Evidence: source graph cards filtered by domain.
- Transmissions: signal log, including `TRANSMISSION 011`.
- Counter-Signal: open challenges that would change the map.
- World Pulse: current-source updates from [reports/2026-05-world-pulse.md](../reports/2026-05-world-pulse.md).

Local verification:

```bash
node scripts/trust-check.mjs --ci
node scripts/trust-check.mjs --ci --freshness
```
