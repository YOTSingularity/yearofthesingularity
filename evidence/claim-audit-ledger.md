# `CLAIM AUDIT LEDGER`

```
> LEDGER: YOTS-EVIDENCE-001
> LAST VERIFIED: 2026-05-25
> STANDARD: SOURCE BEFORE CERTAINTY
```

This ledger separates project framing, narrative pressure, empirical claims, and source-backed evidence. It is not a verdict on whether YOTS is "right." It is a map of which claims can carry public weight today and which still need stronger sources.

## Label Key

| Label | Meaning |
|---|---|
| `project_definition` | A YOTS framing or definition. Valid as internal vocabulary, not an external fact. |
| `empirically_supported` | Supported by one or more named sources in `evidence/evidence-graph.json`. |
| `reported_metric` | Reported by a credible source, but should remain attributed. |
| `plausible_inference` | Reasonable inference from available evidence; keep wording modest. |
| `argument` | Analytic frame or concern; useful, but not directly measured. |
| `needs_evidence` | Factual, numeric, superlative, or public-risk claim that needs citations. |

## Timeline Claims

| ID | Claim | Repo Location | Status | Confidence | Sources | Audit Note |
|---|---|---|---|---|---|---|
| C001 | YOTS defines the threshold as automated AI research, self-sustaining intelligence increase, and failed six-month prediction. | `README.md:149-153` | `project_definition` | High | None required | Use as YOTS vocabulary, not as a settled external definition. |
| C002 | The Transformer architecture was a foundational inflection point for modern language models. | `docs/timeline.md:27` | `empirically_supported` | High | S012 | Keep "foundation" scoped; avoid "everything" unless clearly rhetorical. |
| C003 | Scaling laws made aspects of language model performance more predictable with scale. | `docs/timeline.md:37` | `empirically_supported` | High | S001, S002 | Specify metric and source when reusing. |
| C004 | ChatGPT reached 100 million monthly active users around January 2023. | `docs/timeline.md:41` | `reported_metric` | Medium | S015 | Attribute to UBS/Reuters-style reporting; the superlative needs attribution. |
| C005 | GPT-4 performed at or near human level on multiple professional and academic benchmarks. | `docs/timeline.md:43` | `empirically_supported` | High | S004 | Preserve OpenAI's benchmark limitations and date. |
| C007 | Autonomous-agent capability is improving on longer software tasks. | `docs/timeline.md:51` | `empirically_supported` | Medium | S009 | METR measures task-completion horizon, not general autonomous labor. |
| C008 | Research cycle time is compressing and AI systems participate in AI research workflows. | `README.md:113`, `docs/timeline.md:49-51` | `plausible_inference` | Medium | S010, S011 | "Toward zero" is rhetoric until stronger quantitative evidence exists. |
| C009 | Expert AI predictions have systematically underestimated progress, including specific misses. | `research/timelines/README.md:17-25` | `needs_evidence` | Low | None yet | Requires a forecast-source table before public reuse. |

## Alignment Claims

| ID | Claim | Repo Location | Status | Confidence | Sources | Audit Note |
|---|---|---|---|---|---|---|
| C010 | Alignment includes making systems more helpful, truthful, less toxic, and closer to human intent. | `research/alignment/README.md:7-19` | `empirically_supported` | High | S003, S008 | Good external-facing anchor with NIST and RLHF/InstructGPT framing. |
| C011 | The capability-safety gap is a central YOTS concern. | `transmissions/009-alignment-clock.md:13-27` | `argument` | Medium | S005, S008 | Needs a measurable proxy before saying the gap is objectively growing. |
| C012 | Risk may rise sharply when capability increases without matching control, evaluation, or governance capacity. | `transmissions/009-alignment-clock.md:21` | `plausible_inference` | Low | S008 | Avoid "exponential" unless a model is provided. |

## Economics Claims

| ID | Claim | Repo Location | Status | Confidence | Sources | Audit Note |
|---|---|---|---|---|---|---|
| C013 | AI labor effects include job exposure/displacement risk and augmentation/productivity opportunities. | `research/economic-impact/README.md:11-23` | `empirically_supported` | High | S005, S006, S007 | Replace "the data is already clear" with scoped exposure and augmentation findings. |
| C014 | The IMF estimates almost 40% of global employment is exposed to AI. | `research/economic-impact/README.md:11-23` | `empirically_supported` | High | S006 | Exposure is not the same as automation or job loss. |
| C015 | The ILO found generative AI is more likely to augment than destroy jobs. | `research/economic-impact/README.md:15-23` | `empirically_supported` | High | S007 | Useful counter-signal against simplistic displacement framing. |

## Benchmark Claims

| ID | Claim | Repo Location | Status | Confidence | Sources | Audit Note |
|---|---|---|---|---|---|---|
| C006 | Benchmark performance on demanding 2023 benchmarks improved sharply in 2024. | `docs/timeline.md:49`, `transmissions/008-benchmark-broke.md:17-27` | `empirically_supported` | Medium | S005 | Name the benchmark, model, score, date, and saturation threshold when possible. |
| C016 | Saturated benchmarks stop distinguishing frontier progress. | `transmissions/008-benchmark-broke.md:17-27` | `plausible_inference` | Medium | S005, S009 | Strong as a measurement-risk frame; examples should be added over time. |

## Open Citation Gaps

1. The specific timeline-prediction misses in `research/timelines/README.md`.
2. Any claim that "research cycle time compresses toward zero."
3. Any claim that the capability-safety gap is growing as a measured quantity.
4. Any economic claim using "dramatically," "already clear," or "visible in salary data."
5. Any benchmark claim that does not name a benchmark, model, score, date, and source.

## Maintenance Rule

When a claim moves from `needs_evidence` to `empirically_supported`, update both this ledger and `evidence/evidence-graph.json` in the same change. If the claim is published externally, record the publication surface and date in a future `evidence/publication-log.md`.
