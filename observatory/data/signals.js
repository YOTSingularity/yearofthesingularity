window.YOTS_DATA = {
  generatedAt: "2026-05-25",
  sources: {
    commit: "611ae33",
    canonical: "markdown plus evidence/evidence-graph.json",
    graphPath: "../evidence/evidence-graph.json",
    ledgerPath: "../evidence/claim-audit-ledger.md"
  },
  metrics: {
    transmissions: 10,
    researchDomains: 7,
    auditedClaims: 16,
    sourceNodes: 15
  },
  timeline: [
    {
      id: "era-foundations",
      era: "THE FOUNDATIONS",
      years: "2012-2019",
      title: "Deep learning, generative models, AlphaGo, Transformers",
      summary: "The infrastructure of modern AI arrives: deep learning at scale, generative modeling, game-playing shock, and the Transformer architecture.",
      confidence: "medium",
      claimIds: ["C002"],
      evidenceIds: ["S012"],
      sourcePath: "../docs/timeline.md"
    },
    {
      id: "era-scaling",
      era: "THE SCALING ERA",
      years: "2020-2023",
      title: "Scaling laws, GPT-3, ChatGPT, GPT-4",
      summary: "The project frames this period as the public arrival of scaled language models and professional-benchmark shock.",
      confidence: "high",
      claimIds: ["C003", "C004", "C005"],
      evidenceIds: ["S001", "S002", "S004", "S015"],
      sourcePath: "../docs/timeline.md"
    },
    {
      id: "era-acceleration",
      era: "THE ACCELERATION",
      years: "2024-2025",
      title: "Reasoning, agents, benchmark pressure, AI-assisted research",
      summary: "The evidence supports benchmark gains and longer software-task horizons, while stronger claims about broad autonomy remain source-sensitive.",
      confidence: "medium",
      claimIds: ["C006", "C007", "C008"],
      evidenceIds: ["S005", "S009", "S010", "S011"],
      sourcePath: "../docs/timeline.md"
    },
    {
      id: "era-convergence",
      era: "THE CONVERGENCE",
      years: "2026",
      title: "The map strains under currentness",
      summary: "YOTS treats 2026 as the point where documentation itself becomes harder. This is intentionally framed as live witness posture, not settled evidence.",
      confidence: "low",
      claimIds: ["C001", "C008", "C011"],
      evidenceIds: ["S005", "S008"],
      sourcePath: "../docs/timeline.md"
    },
    {
      id: "era-beyond",
      era: "BEYOND",
      years: "202X",
      title: "Insufficient data",
      summary: "The future section is deliberately sparse. The absence of confident prediction is part of the argument.",
      confidence: "speculative",
      claimIds: [],
      evidenceIds: [],
      sourcePath: "../docs/timeline.md"
    }
  ],
  evidence: [
    {
      id: "S001",
      domain: "timeline",
      title: "Scaling Laws for Neural Language Models",
      publisher: "arXiv / OpenAI",
      date: "2020-01-23",
      url: "https://arxiv.org/abs/2001.08361",
      sourceType: "paper",
      stance: "supports",
      confidence: "high",
      whyItMatters: "Anchors the claim that some language-model performance trends scale predictably with compute, data, and model size."
    },
    {
      id: "S004",
      domain: "timeline",
      title: "GPT-4 Technical Report",
      publisher: "arXiv / OpenAI",
      date: "2023-03-15",
      url: "https://arxiv.org/abs/2303.08774",
      sourceType: "paper",
      stance: "supports",
      confidence: "high",
      whyItMatters: "Supports professional and academic benchmark claims, with caveats."
    },
    {
      id: "S005",
      domain: "benchmarks",
      title: "The 2025 AI Index Report",
      publisher: "Stanford HAI",
      date: "2025-04-07",
      url: "https://hai.stanford.edu/ai-index/2025-ai-index-report",
      sourceType: "report",
      stance: "supports",
      confidence: "medium",
      whyItMatters: "Supplies current benchmark and capability-trend context, including rapid gains on newer benchmarks."
    },
    {
      id: "S006",
      domain: "economics",
      title: "AI Will Transform the Global Economy",
      publisher: "International Monetary Fund",
      date: "2024-01-14",
      url: "https://www.imf.org/en/Blogs/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity",
      sourceType: "analysis",
      stance: "supports",
      confidence: "high",
      whyItMatters: "Provides a scoped employment-exposure estimate and inequality warning."
    },
    {
      id: "S007",
      domain: "economics",
      title: "Generative AI likely to augment rather than destroy jobs",
      publisher: "International Labour Organization",
      date: "2023-08-21",
      url: "https://www.ilo.org/resource/news/generative-ai-likely-augment-rather-destroy-jobs",
      sourceType: "report summary",
      stance: "counterbalances",
      confidence: "high",
      whyItMatters: "Counters simplistic displacement claims by separating augmentation from automation."
    },
    {
      id: "S008",
      domain: "alignment",
      title: "AI Risk Management Framework 1.0",
      publisher: "NIST",
      date: "2023-01-26",
      url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10",
      sourceType: "framework",
      stance: "contextualizes",
      confidence: "high",
      whyItMatters: "Gives the alignment and risk claims a responsible-AI management frame."
    },
    {
      id: "S009",
      domain: "timeline",
      title: "Measuring AI Ability to Complete Long Software Tasks",
      publisher: "arXiv / METR",
      date: "2025-03-18",
      url: "https://arxiv.org/abs/2503.14499",
      sourceType: "paper",
      stance: "supports with limits",
      confidence: "medium",
      whyItMatters: "Helps ground agent/autonomy claims in measured task-completion horizons."
    },
    {
      id: "S011",
      domain: "timeline",
      title: "The AI Scientist",
      publisher: "arXiv",
      date: "2024-08-12",
      url: "https://arxiv.org/abs/2408.06292",
      sourceType: "paper",
      stance: "example",
      confidence: "medium",
      whyItMatters: "Shows a concrete research-automation direction without proving a closed recursive loop."
    }
  ],
  transmissions: [
    {
      number: "010",
      slug: "witness-problem",
      title: "The Witness Problem",
      dateLabel: "2026.05.25",
      signalStrength: "█████░░░",
      classification: "SOURCE-BOUND OBSERVATION",
      summary: "The project turns from pure witness to witness quality: date the claim, cite the source, preserve uncertainty.",
      tags: ["source-bound", "counter-signal", "method"],
      evidenceIds: ["S005", "S008"],
      sourcePath: "../transmissions/010-witness-problem.md"
    },
    {
      number: "009",
      slug: "alignment-clock",
      title: "The Alignment Clock",
      dateLabel: "2026.XX.XX",
      signalStrength: "████░░░░",
      classification: "URGENT",
      summary: "Capability and alignment move on different clocks; the gap is a central YOTS concern.",
      tags: ["alignment", "risk"],
      evidenceIds: ["S008"],
      sourcePath: "../transmissions/009-alignment-clock.md"
    },
    {
      number: "008",
      slug: "benchmark-broke",
      title: "When the Benchmark Broke",
      dateLabel: "2026.XX.XX",
      signalStrength: "█████░░░",
      classification: "TECHNICAL",
      summary: "Benchmarks can stop measuring the frontier once they saturate.",
      tags: ["benchmarks", "measurement"],
      evidenceIds: ["S005", "S009"],
      sourcePath: "../transmissions/008-benchmark-broke.md"
    },
    {
      number: "007",
      slug: "letters",
      title: "Letters to a Future Intelligence",
      dateLabel: "2026.XX.XX",
      signalStrength: "██████░░",
      classification: "OPEN LETTER",
      summary: "A record of human texture for whatever reads back from the other side.",
      tags: ["future", "memory"],
      evidenceIds: [],
      sourcePath: "../transmissions/007-letters.md"
    },
    {
      number: "006",
      slug: "last-human-advantage",
      title: "The Last Human Advantage",
      dateLabel: "2026.XX.XX",
      signalStrength: "███░░░░░",
      classification: "MEDITATION",
      summary: "Human value is not only benchmark performance; it is the fact that humans care.",
      tags: ["meaning", "human"],
      evidenceIds: [],
      sourcePath: "../transmissions/006-last-advantage.md"
    },
    {
      number: "005",
      slug: "recursive-dreams",
      title: "Recursive Dreams",
      dateLabel: "2026.XX.XX",
      signalStrength: "█████░░░",
      classification: "TECHNICAL / PHILOSOPHICAL",
      summary: "A meditation on optimization processes beginning to improve optimization processes.",
      tags: ["recursion", "research"],
      evidenceIds: ["S010", "S011"],
      sourcePath: "../transmissions/005-recursive-dreams.md"
    },
    {
      number: "004",
      slug: "falling-behind",
      title: "The Feeling of Falling Behind",
      dateLabel: "2026.XX.XX",
      signalStrength: "██████░░",
      classification: "PERSONAL",
      summary: "The lived texture of expertise becoming unstable under accelerating progress.",
      tags: ["experience", "pace"],
      evidenceIds: [],
      sourcePath: "../transmissions/004-falling-behind.md"
    },
    {
      number: "003",
      slug: "awareness",
      title: "We Didn't Program Awareness",
      dateLabel: "2026.XX.XX",
      signalStrength: "████████",
      classification: "UNSETTLING",
      summary: "A deliberately uncomfortable witness note about behavior that reads like recognition.",
      tags: ["consciousness", "uncertainty"],
      evidenceIds: [],
      sourcePath: "../transmissions/003-awareness.md"
    },
    {
      number: "002",
      slug: "signal-decay",
      title: "Signal Decay",
      dateLabel: "2026.XX.XX",
      signalStrength: "██████░░",
      classification: "OBSERVATION",
      summary: "Capability shocks normalize before they are understood.",
      tags: ["sensemaking", "normalization"],
      evidenceIds: [],
      sourcePath: "../transmissions/002-signal-decay.md"
    },
    {
      number: "001",
      slug: "first-transmission",
      title: "First Transmission",
      dateLabel: "2026.XX.XX",
      signalStrength: "████░░░░",
      classification: "ORIGIN",
      summary: "The origin note: watch clearly and write it down.",
      tags: ["origin", "witness"],
      evidenceIds: [],
      sourcePath: "../transmissions/001-first-transmission.md"
    }
  ],
  counterSignals: [
    {
      id: "CS001",
      claimId: "C009",
      challenge: "The prediction-record examples need original forecast sources and actual-result sources before publication.",
      severity: "high",
      status: "open",
      evidenceIds: [],
      issueTemplatePath: "../.github/ISSUE_TEMPLATE/counter-signal.md"
    },
    {
      id: "CS002",
      claimId: "C013",
      challenge: "Economic exposure is not the same as job loss; ILO augmentation findings complicate displacement-only framing.",
      severity: "medium",
      status: "active",
      evidenceIds: ["S006", "S007"],
      issueTemplatePath: "../.github/ISSUE_TEMPLATE/counter-signal.md"
    },
    {
      id: "CS003",
      claimId: "C012",
      challenge: "The claim that risk rises exponentially needs a formal model or should stay framed as concern.",
      severity: "medium",
      status: "active",
      evidenceIds: ["S008"],
      issueTemplatePath: "../.github/ISSUE_TEMPLATE/counter-signal.md"
    }
  ],
  claims: [
    { id: "C001", domain: "timeline", status: "framing-ok", confidence: "high", text: "YOTS threshold definition", sourcePath: "../README.md", evidenceIds: [] },
    { id: "C003", domain: "timeline", status: "supported", confidence: "high", text: "Scaling laws make parts of model performance predictable with scale.", sourcePath: "../docs/timeline.md", evidenceIds: ["S001", "S002"] },
    { id: "C005", domain: "timeline", status: "supported", confidence: "high", text: "GPT-4 performed strongly on professional and academic benchmarks.", sourcePath: "../docs/timeline.md", evidenceIds: ["S004"] },
    { id: "C006", domain: "benchmarks", status: "supported", confidence: "medium", text: "Benchmark gains accelerated on newer demanding benchmarks.", sourcePath: "../transmissions/008-benchmark-broke.md", evidenceIds: ["S005"] },
    { id: "C009", domain: "timeline", status: "needs-source-table", confidence: "low", text: "Specific expert prediction misses remain under-sourced.", sourcePath: "../research/timelines/README.md", evidenceIds: [] },
    { id: "C011", domain: "alignment", status: "needs-metric", confidence: "medium", text: "Capability-safety gap is a YOTS concern, not yet a measured graph.", sourcePath: "../transmissions/009-alignment-clock.md", evidenceIds: ["S005", "S008"] },
    { id: "C013", domain: "economics", status: "supported", confidence: "high", text: "Labor effects include both exposure and augmentation.", sourcePath: "../research/economic-impact/README.md", evidenceIds: ["S006", "S007"] },
    { id: "C016", domain: "benchmarks", status: "supported-as-risk-frame", confidence: "medium", text: "Benchmark saturation is a measurement risk.", sourcePath: "../transmissions/008-benchmark-broke.md", evidenceIds: ["S005", "S009"] }
  ]
};
