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
- Transmissions: signal log, including `TRANSMISSION 010`.
- Counter-Signal: open challenges that would change the map.

Local verification:

```bash
node scripts/trust-check.mjs --ci
```
