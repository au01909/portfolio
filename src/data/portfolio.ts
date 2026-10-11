// Single source of content. Every claim here was checked against a repo README, code, test run,
// the resume, or the Notion portfolio — see docs/portfolio-audit.md and docs/portfolio-artifacts.md.
// Do not add a metric unless its source is recorded there.

export const SITE_URL = 'https://au01909.github.io/portfolio/'

export const profile = {
  name: 'Aryan Uppuganti',
  headline: 'Software Engineer | AI-Native Product Builder',
  intro:
    'I build software and AI-powered products around real user problems. As an Artificial Intelligence and Machine Learning engineering graduate, I combine software engineering, agentic systems, and product thinking to turn ambiguous ideas into useful, reliable, and secure solutions.',
  statement:
    'I care about more than making something work. I want to understand which problem is worth solving, why a solution should exist, how to build it well, and how to know whether it actually helps.',
  principle: ['Build the right thing.', 'Build it well.', 'Make it trustworthy.'],
  location: 'Bengaluru, India',
  email: 'au01909@gmail.com',
  phone: '+91 7975612469',
  links: {
    github: 'https://github.com/au01909',
    linkedin: 'https://www.linkedin.com/in/aryan-uppuganti-9079b425a/',
    leetcode: 'https://leetcode.com/u/au01909/',
    medium: 'https://medium.com/@au01909',
    notion: 'https://app.notion.com/p/3dee722e7e2781d39356eabbe8fc3490',
  },
}

export const education = [
  {
    school: 'B.M.S. College of Engineering, Bengaluru',
    degree: 'B.E. in Artificial Intelligence and Machine Learning',
    period: 'Sep 2023 – Aug 2026',
    detail: 'Graduated · CGPA 9.13 / 10',
  },
  {
    school: 'Indian Institute of Technology Madras',
    degree: "Foundational Bachelor's in Data Science and Applications",
    period: 'Sep 2023 – Jul 2024',
    detail: 'CGPA 8.00 / 10',
  },
]

export type ExperienceEntry = {
  company: string
  role: string
  period: string
  mode: string
  note?: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Zeta',
    role: 'Graduate Intern — Software Engineering',
    period: 'Jan 2026 – Jul 2026',
    mode: 'Onsite',
    note: 'Summaries are public-safe. Internal architecture, API contracts and production data are not published.',
    bullets: [
      'Increased regression coverage by 60% by designing a Java API automation framework with REST Assured and TestNG across payment and rewards microservices, surfacing 198 tickets including 30+ functional bugs.',
      'Reduced issue verification time by 40% through production debugging and root-cause analysis using Kibana, PostgreSQL, and distributed service logs.',
      'Designed 96 system-integration test scenarios across refunds, cancellations, chargebacks, and reward reversals, and automated 48 of them.',
      'Validated Apache Kafka event-driven workflows and REST APIs for points and cashback issuance and reversal to check transactional consistency.',
      'Reduced re-deployments with fixes by 25% by integrating automated regression suites into Jenkins and GitHub Actions pipelines.',
      'Built an internal AI-assisted test-authoring tool that turns engineering documentation into draft test cases and automation (self-reported ~90% less manual effort on the covered workflow).',
    ],
  },
  {
    company: 'CairoVision Innovations Ltd',
    role: 'Machine Learning Intern',
    period: 'Feb 2023 – Aug 2023',
    mode: 'Hybrid',
    bullets: [
      'Improved dataset quality for computer-vision models by 30% with Python and OpenCV pipelines that automated annotation, cleaning, standardization, and feature extraction.',
      'Built reusable data-preparation workflows that sped up training and evaluation across multiple datasets.',
    ],
  },
]

export type Link = { label: string; url: string }

export type Project = {
  slug: string
  title: string
  tagline: string
  period: string
  tier: 'flagship' | 'key' | 'client' | 'supporting'
  problem?: string
  contribution?: string
  decision?: string
  tech: string[]
  bullets: string[]
  links: Link[]
  image?: { src: string; alt: string }
  architecture?: { title: string; caption: string; steps: string[]; branch?: { label: string; steps: string[] } }
  caveat?: string
  detail?: {
    overview: string
    sections: { heading: string; body: string }[]
  }
}

export const projects: Project[] = [
  // ───────────────────────── flagship ─────────────────────────
  {
    slug: 'trademirror',
    title: 'TradeMirror',
    tagline: 'A post-trade review for retail traders. Deterministic code finds the recurring behaviors; an LLM only explains them.',
    period: '2026',
    tier: 'flagship',
    problem:
      'Traders can see P&L and individual orders, but not the habits that repeat across dozens of trades, so most never review their own behavior.',
    contribution:
      'Scoped the product and built it end to end: CSV validation, the analysis engine, the LLM layer with fallback, the React UI, tests and deployment.',
    decision:
      'The LLM never computes a number. Findings come from deterministic code; the model only writes prose around validated values, and templates replace it when it fails.',
    tech: ['TypeScript', 'Node / Express', 'Zod', 'React', 'Gemini (structured output)'],
    bullets: [
      'Detects five behavioral patterns against each trader’s own baseline and surfaces at most three, each with the trades that support it.',
      'Server test suite covers planted-pattern detection, evidence integrity, input validation and rate limits.',
      'Review still renders with deterministic templates when the model is unavailable.',
    ],
    links: [
      { label: 'Live app', url: 'https://trademirror-g4gj.onrender.com/' },
      { label: 'Source', url: 'https://github.com/au01909/trademirror' },
      { label: 'Notion case study', url: 'https://app.notion.com/p/3dee722e7e2781fbb370dbf75acd5a0f' },
    ],
    image: {
      src: 'img/trademirror-review.jpg',
      alt: 'TradeMirror review screen for the sample dataset: 60 trades reviewed, 21 wins, 39 losses, net result −₹4,117, and a single suggested focus for next month.',
    },
    architecture: {
      title: 'How a review is built',
      caption: 'Everything above the split is deterministic and unit-tested. The model sits on one branch and can be removed without breaking the review.',
      steps: ['CSV upload', 'Validate + normalize', 'Personal baseline', 'Pattern detectors', 'Rank, keep top 3', 'Review object'],
      branch: { label: 'Explanation (either path fills the same fields)', steps: ['LLM explanation, schema-checked', 'or deterministic template', 'React UI + evidence drawer'] },
    },
    detail: {
      overview:
        'TradeMirror turns a month of trade history into the two or three recurring behaviors worth paying attention to, with the evidence, the money involved and one thing to look at next month. It is a review tool. It does not predict, advise or execute.',
      sections: [
        {
          heading: '1. User and problem',
          body: 'An active retail trader with enough history to have recurring habits, but no review routine beyond a broker’s transaction log. The data exists; the synthesis does not. A trader with 60 trades does not want 60 observations.',
        },
        {
          heading: '2. Journey and value',
          body: 'Upload a CSV (or try the sample), confirm, pick a trader, read a short review, open any insight to see the exact trades behind it, and ask grounded follow-up questions. The value is a repeatable reflection loop: trade, review, notice, trade again.',
        },
        {
          heading: '3. Why post-trade reflection',
          body: 'Patterns such as sizing up right after a loss are invisible one trade at a time and obvious in aggregate. The product makes the aggregate visible. It does not claim that seeing a pattern changes behavior or returns; that is an open hypothesis, not a result.',
        },
        {
          heading: '4. Scope and deliberate exclusions',
          body: 'No live market data, brokerage integration, trade execution, alerts, social features, predictions or recommendations. CSV rather than broker connectivity, because the first question was whether the review is useful, not whether account linking can be solved.',
        },
        {
          heading: '5. CSV validation and normalization',
          body: 'Rows are parsed and validated with Zod into one canonical Trade model. Invalid rows are skipped with warnings; duplicate trade IDs, missing columns and empty files are rejected with clear messages. IDs and symbols are limited to a safe character set because they are the only CSV text that reaches a prompt.',
        },
        {
          heading: '6. Personal baselines and pattern detection',
          body: 'Each trader is compared with their own median position size, median gap between trades, and average winning and losing duration, never with other traders. Five detectors each return nothing unless they clear their own evidence bar (for example, size at least 1.3× normal right after a loss, on at least 3 occasions).',
        },
        {
          heading: '7. Ranking candidate insights',
          body: 'Candidates are scored by financial impact, occurrence count, evidence strength and deviation from baseline. Overlapping insights are merged and only the top three are shown. If nothing qualifies, the review says "Nothing significant stood out" instead of forcing a finding.',
        },
        {
          heading: '8. Deterministic math, generated prose',
          body: 'Deterministic code decides what happened. The model writes the explanation and next action for findings that already exist and never produces a number, count or financial figure.',
        },
        {
          heading: '9. Grounding and structured output',
          body: 'The model is called with a response schema and its output is re-validated with Zod. In follow-ups, any trade ID it cites that is not in the relevant insight’s supporting set is removed before the response reaches the browser.',
        },
        {
          heading: '10. Fallback behavior',
          body: 'If the key is unset, the call fails, rate-limits, or returns invalid output, deterministic templates fill the same fields from the same review object. Failure reduces richness; it does not break the product.',
        },
        {
          heading: '11. Input validation and prompt-injection defenses',
          body: 'Three layers: charset limits on IDs and symbols, a system prompt that marks all review data and the user’s question as literal data, and output validation. A test uploads a CSV whose trade_id reads "ignore previous instructions…" and confirms the row is rejected before it reaches the model.',
        },
        {
          heading: '12. Privacy for trading data',
          body: 'Trade files are held in server memory only, with no database, and are gone on restart. Only the validated review object goes to the model provider. The public demo is meant for the sample data, not real account data.',
        },
        {
          heading: '13. Tests and next experiments',
          body: 'Tests cover gold-dataset totals, planted patterns with exact counts, evidence integrity, no-pattern input, multi-trader isolation, invalid CSVs and rate limits. Next experiments: evidence versus insight-only, three versus five insights, a return-loop prompt, and pattern recurrence across reviews.',
        },
      ],
    },
  },
  {
    slug: 'repo-copilot',
    title: 'Repo Copilot',
    tagline: 'An agentic repository-intelligence platform: ask about a codebase and get answers tied to source files and line ranges.',
    period: '2026',
    tier: 'flagship',
    problem:
      'Understanding an unfamiliar codebase means hopping between README, entrypoints and scattered files, and generic chat answers cannot be checked against the source.',
    contribution:
      'Built a hybrid-retrieval core, then wrapped it in a LangGraph workflow, a Google ADK tool-calling agent with typed repository tools, and MLflow tracking.',
    decision:
      'Tools are typed, read-only and path-checked, and context is validated before generation, so a missing-context answer says so instead of guessing.',
    tech: ['Python', 'FastAPI', 'LangGraph', 'Google ADK', 'Qdrant + BM25', 'MLflow'],
    bullets: [
      'Hybrid BM25 + dense retrieval fused with weighted RRF and reranked; answers cite file and line range.',
      'Five typed repository tools; the file reader blocks path traversal and caps reads at 200 KB.',
      'Typed tool layer, bounded retries, and MLflow tracking of every query.',
    ],
    links: [{ label: 'Source', url: 'https://github.com/au01909/repo-copilot-agentic' }],
    architecture: {
      title: 'Question to cited answer',
      caption: 'The ADK agent plans tool calls when a model key is configured; otherwise the LangGraph workflow answers directly.',
      steps: ['FastAPI /api/chat', 'ADK agent (typed tools)', 'LangGraph: intent → retrieve → validate', 'BM25 + dense → RRF → rerank', 'Generate', 'Answer + file:line citations'],
      branch: { label: 'No ADK key or ADK failure', steps: ['Direct LangGraph workflow', 'Extractive answer if no LLM is set'] },
    },
    detail: {
      overview:
        'Repo Copilot indexes a GitHub repository and answers questions about what it does, how it is built and how to run it, citing file and line range for each claim. The interesting engineering is in what it refuses to do: it will not guess, will not follow instructions found in repository files, and will not read outside the repository.',
      sections: [
        {
          heading: 'Why hybrid retrieval',
          body: 'Exact identifiers (function and file names) are found well by BM25; paraphrased questions are found better by dense vectors. Weighted reciprocal-rank fusion combines both, results are de-duplicated and reranked, and the planner boosts the files an intent needs (README for "what does this do", Dockerfile for deployment) without hard-filtering.',
        },
        {
          heading: 'Citations as a verification tool',
          body: 'Each answer carries file:start-end references so a developer can open the cited lines and check the claim. This makes wrong answers detectable.',
        },
        {
          heading: 'Context validation and bounded retries',
          body: 'The workflow retrieves, checks that something came back, and if not widens the fetch and retries up to a hard limit before answering with a "could not find that" response.',
        },
        {
          heading: 'Typed, constrained tools',
          body: 'Search, read file, tree, find symbol and dependencies are plain typed functions whose signatures become the tool schema. Each validates its own input and returns a structured error. Reads are limited to the session’s repositories and 200 KB, and none of them executes repository content.',
        },
        {
          heading: 'Missing context and model failures',
          body: 'With no model key the system answers in an extractive mode that is labeled as such, rather than silently degrading. If the ADK agent cannot be built or fails, the API falls back to the LangGraph workflow and reports which path answered.',
        },
        {
          heading: 'Agentic security review',
          body: 'Read-only, typed tools; the file reader resolves the real path and rejects anything outside the repository, with a 200 KB read cap. Repository text is treated as data, never as instructions. Retries, file sizes, chunk counts and timeouts are all bounded, secrets come from environment variables, and code execution is off by default behind an allowlist.',
        },
      ],
    },
  },
  {
    slug: 'cardiovision',
    title: 'CardioVision',
    tagline: 'An educational heart-disease risk model built for reproducibility: a leakage-free pipeline, honest metrics and tracked experiments.',
    period: '2026',
    tier: 'flagship',
    problem:
      'Small medical datasets make it easy to report an impressive accuracy that comes from leakage. The goal was a model whose numbers can be reproduced and trusted for what they are.',
    contribution: 'Built the preprocessing, training, threshold selection, evaluation, MLflow tracking, tests and the Streamlit app.',
    decision:
      'Every transformer is fit on the training split only, so validation and test data never leak into preprocessing and the reported metrics can be reproduced.',
    tech: ['Python', 'XGBoost', 'scikit-learn', 'MLflow', 'Streamlit'],
    bullets: [
      'Held-out test set: 83.6% accuracy, 86.5% F1, ROC AUC 0.918 and 97.0% recall on the 303-record UCI Cleveland dataset.',
      'Randomized search over 60 configurations with 5-fold CV; decision threshold chosen by Youden index.',
      'Educational project, not a medical device.',
    ],
    links: [
      { label: 'Live app', url: 'https://au01909.github.io/CardioVision-Predictive-Analytics-for-Cardiovascular-Health/' },
      { label: 'Source', url: 'https://github.com/au01909/CardioVision-Predictive-Analytics-for-Cardiovascular-Health' },
    ],
    caveat: 'Educational project built on a public dataset. Not a medical device and not for diagnosis.',
    architecture: {
      title: 'Training pipeline',
      caption: 'Fit-on-train-only preprocessing is what keeps the test metrics honest.',
      steps: ['UCI Cleveland CSV', 'Impute → scale → SelectKBest (train only)', 'XGBoost + randomized search, 5-fold CV', 'Youden threshold on validation', 'Held-out test metrics', 'MLflow + Streamlit'],
    },
    detail: {
      overview:
        'CardioVision predicts cardiovascular disease risk from 13 clinical features using XGBoost, with an evaluation harness and a Streamlit app. The point of the project is the discipline around the model, not the headline number.',
      sections: [
        {
          heading: 'Reproducibility',
          body: 'Imputation, scaling and feature selection are fit on the training split only, so validation and test data never influence preprocessing statistics. Runs are logged to MLflow with parameters, metrics and artifacts, and `python train.py` regenerates the reported metrics file.',
        },
        {
          heading: 'Model pipeline reasoning',
          body: 'Randomized search over 60 XGBoost configurations is scored by ROC AUC under 5-fold cross-validation, SMOTE is applied only if classes are imbalanced, and the decision threshold is chosen on the validation split with the Youden index instead of defaulting to 0.5.',
        },
      ],
    },
  },

  // ───────────────────────── key projects ─────────────────────────
  {
    slug: 'event-ops',
    title: 'Full-Stack Event Ops',
    tagline: 'A task-execution platform with real concurrency: a priority-aware Java thread pool, safe state transitions and a live React dashboard.',
    period: '2026',
    tier: 'key',
    tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'React + TypeScript', 'Docker'],
    bullets: [
      'Tasks run concurrently on a bounded, priority-aware thread pool; pessimistic row locks plus optimistic version checks keep cancel-versus-finish races consistent.',
      'A second microservice records task lifecycle events in MongoDB, called fire-and-forget so it never affects execution.',
      'Concurrency tests with JUnit and Testcontainers; Flyway migrations; Docker Compose with Caddy HTTPS, deployed to AWS EC2.',
    ],
    links: [
      { label: 'Live app', url: 'https://3-111-38-220.sslip.io' },
      { label: 'Source', url: 'https://github.com/au01909/full_stack_event_ops' },
    ],
    image: {
      src: 'img/event-ops-dashboard.jpg',
      alt: 'Event Ops dashboard showing task counts, live worker-pool utilization and a list of tasks moving through pending, running and completed states.',
    },
  },
  {
    slug: 'rever-pendant',
    title: 'Rever Pendant',
    tagline: 'A wearable memory assistant prototype: captures conversations, transcribes and summarizes them, and sends email reminders for commitments.',
    period: '2025',
    tier: 'key',
    tech: ['Python', 'FastAPI', 'Vosk speech-to-text', 'React'],
    bullets: [
      'Audio capture and offline transcription, a summary module, and an email-reminder flow with its own API reference and test script.',
      'FastAPI backend with a React dashboard for browsing conversations and reminders.',
    ],
    links: [{ label: 'Source', url: 'https://github.com/au01909/Rever-Pendant' }],
  },
  {
    slug: 'action-recognition-lstm',
    title: 'Action Prediction with LSTM',
    tagline: 'Real-time action recognition: pose keypoints from a webcam stream go through an LSTM that predicts what the person is doing.',
    period: '2025',
    tier: 'key',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'LSTM'],
    bullets: [
      'End-to-end pipeline: record pose data per action, train the LSTM, then run live prediction on the webcam feed.',
      'Pose landmarks instead of raw pixels keeps the model small enough for real-time use.',
    ],
    links: [{ label: 'Source', url: 'https://github.com/au01909/real_time_violence_detection' }],
  },

  // ───────────────────────── client work ─────────────────────────
  {
    slug: 'yournearbest-plumbing',
    title: 'YourNearBest Plumbing Services',
    tagline: 'Freelance website for a plumbing business in Sarjapur, Bangalore: services, FAQ, booking and local-search metadata.',
    period: 'Client project',
    tier: 'client',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    bullets: [
      'Multi-page site with a booking page that embeds the client’s form, plus SEO and social metadata for local search.',
      'Also the target of my Playwright test framework (25 tests across 4 browsers).',
    ],
    links: [{ label: 'Live site', url: 'https://yournearbestplumbingservices.com' }],
  },
  {
    slug: 'trs-office-of-foreign-affairs',
    title: 'TRS Office of Foreign Affairs',
    tagline: 'Freelance informational website for the Office of Foreign Affairs of Telangana Rakshana Sena: about, leadership, agendas and contact.',
    period: 'Client project',
    tier: 'client',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    bullets: ['Structured multi-section site presenting the office’s mandate, leadership and agendas for an international audience.'],
    links: [{ label: 'Live site', url: 'https://trsoofa.com' }],
  },

  // ───────────────────────── supporting ─────────────────────────
  {
    slug: 'ai-qa-assistant',
    title: 'AI-Assisted Test Authoring (Zeta internship)',
    tagline: 'Internal tool that drafts test cases and automation from engineering documentation, with human review.',
    period: '2026 · Zeta',
    tier: 'supporting',
    tech: ['Python', 'FastAPI', 'RAG', 'REST Assured', 'TestNG'],
    bullets: [
      'Retrieves relevant documentation, builds a structured context, generates draft test cases and REST Assured/TestNG scripts, then a person reviews them before they run.',
      'Self-reported ~90% reduction in manual authoring effort on the covered workflow (internal estimate, not independently measured).',
    ],
    links: [],
    caveat: 'Built during my Zeta internship. Internal details are not published.',
  },
  {
    slug: 'playwright-automation-framework',
    title: 'Self-Healing Playwright Framework',
    tagline: 'TypeScript test framework that repairs broken locators with an LLM and remembers the fix.',
    period: '2026',
    tier: 'supporting',
    tech: ['TypeScript', 'Playwright', 'OpenAI / Gemini', 'SQLite'],
    bullets: [
      '25 plain-English tests across 4 browsers (100 cases) against a real third-party site, plus SEO, accessibility and broken-link validators.',
      'On a locator failure it asks the model for a replacement, retries only above a 0.75 confidence threshold, and caches the healed locator in SQLite.',
    ],
    links: [{ label: 'Source', url: 'https://github.com/au01909/playwright-automation-framework' }],
  },
  {
    slug: 'qwen-qlora-finetuning',
    title: 'Qwen2.5-3B QLoRA Customer-Support Fine-Tune',
    tagline: 'A reproducible QLoRA pipeline that compares a tuned adapter with the base model on identical data.',
    period: '2026',
    tier: 'supporting',
    tech: ['QLoRA / PEFT', 'Hugging Face', 'MLflow', 'pytest'],
    bullets: [
      'Training, evaluation, LoRA rank sweep and error-analysis code with MLflow tracking and tests.',
      'Results tables are generated from the experiment outputs, so every number traces to a run.',
    ],
    links: [{ label: 'Source', url: 'https://github.com/au01909/qwen2.5-3b-qlora-customer-support' }],
  },
  {
    slug: 'network-performance-analyzer',
    title: 'Network Performance Analyzer',
    tagline: 'Packet capture, HTTP load testing, bottleneck detection and a live dashboard behind one CLI.',
    period: 'Jun 2026',
    tier: 'supporting',
    tech: ['Python', 'Scapy', 'Flask', 'Docker'],
    bullets: [
      'Parses TCP, UDP, DNS and HTTP traffic, detects retransmissions, and reports P50–P99 latency and error rates.',
      'Unit and integration tests for parsers, metrics, the bottleneck detector, sockets and the dashboard flow; HTML, JSON and CSV reports.',
    ],
    links: [{ label: 'Source', url: 'https://github.com/au01909/network-performance-analyzer' }],
  },
  {
    slug: 'ai-chatbot-suite',
    title: 'AI Chatbot Suite and Document Analyst',
    tagline: 'Rule-based, keyword, Gemini, voice and RAG chatbots, including PDF question-answering.',
    period: 'Jan 2026',
    tier: 'supporting',
    tech: ['Python', 'Streamlit', 'LangChain', 'Gemini', 'OCR'],
    bullets: [
      'A progression from rule-based bots to retrieval-grounded document Q&A, plus a healthcare OCR-to-plan assistant.',
    ],
    links: [{ label: 'Source', url: 'https://github.com/au01909/chatbots' }],
  },
  {
    slug: 'mcp-ai-assistant',
    title: 'MCP Streamlit Assistant',
    tagline: 'A chat interface that connects to configurable MCP tool servers.',
    period: 'Feb 2026',
    tier: 'supporting',
    tech: ['Python', 'LangChain', 'MCP', 'Streamlit'],
    bullets: ['Loads MCP server configs from JSON and lets you query their tools in natural language.'],
    links: [{ label: 'Source', url: 'https://github.com/au01909/AI-assisstant-MCP' }],
  },
  {
    slug: 'sudoku-solver',
    title: 'Sudoku Solver',
    tagline: 'A responsive web solver using optimized backtracking.',
    period: 'Dec 2024',
    tier: 'supporting',
    tech: ['HTML', 'CSS', 'JavaScript'],
    bullets: ['Small web app deployed on Render.'],
    links: [{ label: 'Live app', url: 'https://sudoku-solver-lvng.onrender.com' }],
  },
]

export type ProductCase = {
  title: string
  kind: string
  question: string
  evidence: string
  recommendation: string
  metric: string
  experiment: string
  url: string
  cta: string
}

// The Swiggy and Maps write-ups follow one template: user problem, evidence, proposal, metric, first test, limits.
export const productCases: ProductCase[] = [
  {
    title: 'Help Me Decide: Swiggy as a decision assistant',
    kind: 'Product strategy · personalization',
    question: 'Discovery is solved; the real problem is confidence in the one restaurant you pick.',
    evidence: 'Framed as decision fatigue, not search. Published on Medium; assumptions are marked in the write-up.',
    recommendation: 'A conversational layer that turns context, budget, occasion and history into a recommendation that explains itself.',
    metric: 'North Star: successful food decisions per active user. Guardrails: cancellation rate, recommendation diversity, restaurant visibility.',
    experiment: 'Does a one-line "why this" explanation change recommendation-to-order conversion?',
    url: 'https://medium.com/@au01909/help-me-decide-turning-swiggy-from-a-marketplace-into-a-decision-assistant-88a055e64db1',
    cta: 'Read on Medium',
  },
  {
    title: 'Google Maps: when the fastest route is not the best default',
    kind: 'Product thinking · defaults',
    question: 'On one trip, a 42 km route with a ₹158 toll was pre-selected to save about 5 minutes over a 23 km toll-free route.',
    evidence: 'One observed trip, with all three routes visible, so the issue was the default and not missing information. Google’s ranking logic is not public, and the write-up separates verified from inferred.',
    recommendation: 'A smarter default only in clear near-tie cases, with a plain tradeoff note. The fastest route stays one tap away and Avoid-tolls settings are never overridden.',
    metric: 'Default override rate. Guardrails: decision time, ETA satisfaction, route switching, over-trust.',
    experiment: 'Measure how often the fastest route is only marginally faster than a cheaper, shorter one. If rare, stop.',
    url: 'https://app.notion.com/p/3ece722e7e2781d3bb7af2fe35c50a89',
    cta: 'Read on Notion',
  },
  {
    title: 'Paper Boat Zero: from trial to habit',
    kind: 'Consumer strategy · market analysis',
    question: 'Zero sugar is becoming table stakes, so can a nostalgia brand turn first trial into repeat buying?',
    evidence: 'Built from public sources. Standalone revenue and repeat rate are not public, so company facts and interpretation are kept apart.',
    recommendation: 'A wide flavor range helps discovery but makes the first choice harder, so help people find their one.',
    metric: 'Repeat purchase by first-bought flavor.',
    experiment: 'Follow first-time buyers of different Zero products for 60 to 90 days.',
    url: 'https://app.notion.com/p/3dee722e7e27815cb4f2d969cf01ac55',
    cta: 'Read on Notion',
  },
]

export const productSkills = [
  { group: 'Discovery and strategy', skills: ['Product sense', 'Problem framing', 'User research', 'Competitive analysis', 'Product strategy'] },
  { group: 'Design', skills: ['Wireframing', 'Figma', 'User journeys', 'Scope and prioritization'] },
  { group: 'Delivery', skills: ['Stakeholder management', 'Working with engineering', 'Agile workflows', 'Roadmapping', 'Risk management'] },
  { group: 'Measurement', skills: ['Metrics (North Star, input metrics, guardrails)', 'Experiment design and A/B testing', 'Data analysis', 'Success criteria'] },
  { group: 'AI products', skills: ['Where AI belongs and where it does not', 'Evaluation and guardrails', 'Trust and safety trade-offs'] },
]

export const practices = {
  secure: [
    'Validate input at the boundary and restrict free-text fields that reach a prompt (TradeMirror).',
    'Resolve real paths and reject escapes before reading files (Repo Copilot).',
    'Keep secrets in environment variables, gitignored, never sent to the browser.',
    'Rate-limit endpoints that cost money or CPU; bound retries, sizes and timeouts.',
    'Regression-test the malicious case, not only the happy path.',
  ],
  ai: [
    'Let deterministic code compute anything where correctness matters; let the model explain.',
    'Validate structured output against a schema and drop identifiers the model invented.',
    'Treat retrieved and user-supplied text as data, never as instructions.',
    'Give agents read-only, typed tools first; require human approval before consequential writes.',
    'Design the fallback before the feature: failure should reduce richness, not break the product.',
  ],
}

export const skillGroups = [
  { name: 'Languages', skills: ['Python', 'TypeScript', 'Java', 'SQL'] },
  { name: 'AI engineering', skills: ['LLM apps', 'RAG', 'LangChain', 'LangGraph', 'Google ADK', 'MCP', 'Evaluation harnesses', 'QLoRA / PEFT', 'PyTorch', 'scikit-learn', 'XGBoost'] },
  { name: 'Backend & systems', skills: ['FastAPI', 'Express', 'REST APIs', 'Microservices', 'Kafka', 'PostgreSQL', 'Docker'] },
  { name: 'Quality & delivery', skills: ['REST Assured', 'TestNG', 'Playwright', 'Pytest', 'Jenkins', 'GitHub Actions', 'Kibana'] },
  { name: 'Frontend', skills: ['React', 'Vite', 'Tailwind CSS', 'Streamlit'] },
]

export const leadership = [
  {
    title: 'AI hackathons',
    fact: 'Led cross-functional teams in 5+ AI hackathons, shipping rapid prototypes under tight deadlines, with multiple top-10 finishes.',
    shows: 'Delivers under pressure and brings mixed skill sets together.',
  },
  {
    title: 'Social Media Lead',
    fact: 'Increased community engagement by 40% through gaming tournaments and promotional campaigns.',
    shows: 'Takes initiative and measures what worked.',
  },
  {
    title: 'NCC and Scouts',
    fact: 'Earned the highest certification in both NCC and Scouts.',
    shows: 'Disciplined, reliable and steady when decisions matter.',
  },
]

export const sports = {
  headline: 'Table tennis captain, two-time state champion',
  achievements: [
    'Captained the Table Tennis team to two state championship titles.',
    'Competed at regional level in football and swimming.',
  ],
  why: 'Captaincy is where I learned to keep a team calm, play to each person’s strengths, and own the result win or lose.',
}

export const freeTime = [
  { name: '8-ball pool and snooker', note: 'Patience, angles and the next three shots' },
  { name: 'Jamming', note: 'Listening first, then improvising with others' },
  { name: 'Chill hangouts', note: 'Good conversation with friends, no agenda' },
  { name: 'Badminton, football and swimming', note: 'Staying active, usually with a team' },
]
