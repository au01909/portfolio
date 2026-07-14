// All content here is sourced directly from Aryan's resumes and case study.
// No invented projects, metrics, or claims.

export const profile = {
  name: 'Aryan Uppuganti',
  role: 'Software Engineer — AI Systems & Test Automation',
  location: 'Bengaluru, India',
  phone: '+91 7975612469',
  email: 'au01909@gmail.com',
  links: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    leetcode: 'https://leetcode.com',
  },
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Backend Engineering',
    'Distributed Systems',
    'Quality Engineering',
    'Networking',
    'Automation',
    'Computer Vision',
    'Developer Tools',
  ],
}

export const education = [
  {
    school: 'B.M.S College of Engineering, Bangalore',
    degree: 'B.E. in Artificial Intelligence and Machine Learning',
    period: 'Sep 2023 – Aug 2026',
    detail: 'GPA 9.13 / 10',
  },
  {
    school: 'Indian Institute of Technology Madras',
    degree: "Foundational Bachelor's in Data Science and Applications",
    period: 'Sep 2023 – Jul 2024',
    detail: 'GPA 8.00 / 10',
  },
]

export type ExperienceEntry = {
  company: string
  role: string
  period: string
  mode: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Zeta',
    role: 'Graduate Intern — Software Test Engineering',
    period: 'Jan 2026 – Jul 2026',
    mode: 'Onsite',
    bullets: [
      'Reduced manual QA effort by ~90% by building an AI-powered RAG assistant that turns API contracts and product documentation into standardized manual test cases and REST Assured/TestNG automation scripts.',
      'Increased regression coverage by 60% by designing a Java-based API automation framework with REST Assured and TestNG across payment and rewards microservices, surfacing 198 tickets including 30+ functional bugs.',
      'Designed 96 system integration test scenarios spanning refunds, cancellations, chargebacks, and reward reversals — automating 48 of them to replicate real-world transaction flows.',
      'Validated Apache Kafka event-driven workflows and REST APIs for points and cashback issuance/reversal to ensure transactional consistency across high-volume distributed payment systems.',
      'Reduced issue verification time by 40% through production debugging and root-cause analysis using Kibana, PostgreSQL, and distributed service logs.',
      'Reduced re-deployments with fixes by 25% by integrating automated regression suites into Jenkins and GitHub Actions CI/CD pipelines.',
    ],
  },
  {
    company: 'CairoVision Innovations Ltd',
    role: 'Machine Learning Intern',
    period: 'Feb 2023 – Aug 2023',
    mode: 'Hybrid',
    bullets: [
      'Improved dataset quality for computer vision models by 30% by developing Python and OpenCV preprocessing pipelines that automated image annotation, cleaning, standardization, and feature extraction.',
      'Accelerated model training and evaluation across multiple datasets by architecting scalable, reusable data-preparation workflows for deep-learning experiments.',
    ],
  },
]

export type Project = {
  slug: string
  title: string
  tagline: string
  period: string
  tech: string[]
  bullets: string[]
  featured: boolean
  detail?: {
    overview: string
    sections: { heading: string; body: string }[]
    stack?: { layer: string; tech: string }[]
    stat?: { value: string; label: string }[]
  }
}

export const projects: Project[] = [
  {
    slug: 'ai-powered-qa-assistant',
    title: 'AI-Powered QA Assistant',
    tagline:
      'A RAG-powered engineering copilot that turns API contracts and documentation into production-ready QA test cases and automation scripts.',
    period: '2026 · Zeta',
    tech: ['Python', 'FastAPI', 'LangChain', 'RAG', 'MCP', 'ChromaDB', 'Gemini / OpenAI', 'REST Assured', 'TestNG'],
    bullets: [
      'Reduced manual QA effort by ~90% by automating the path from engineering documentation to manual test cases and automation scripts.',
      'Integrated the Model Context Protocol (MCP) so the assistant could read live API contracts, feature docs, and repositories directly, with no manual uploads.',
      'Built a retrieval pipeline (chunking, embeddings, ChromaDB semantic search) so generated tests stayed grounded in current product behavior, not stale docs.',
      'Designed the system as four independent stages — retrieval, context construction, generation, and review — so each could evolve without a redesign.',
    ],
    featured: true,
    detail: {
      overview:
        "During my internship at Zeta, I noticed QA engineers were spending more time re-reading API contracts, feature specs, and product docs than actually testing. So I built an AI assistant that treats engineering documentation as a knowledge base: it retrieves the relevant context for a feature, then generates standardized manual test cases and REST Assured/TestNG automation scripts from it. It's built as an engineering copilot, not a chatbot — the output is a QA deliverable, not a conversation.",
      sections: [
        {
          heading: 'The problem',
          body: 'For every new feature, engineers manually pieced together information scattered across API contracts, product requirement docs, feature specs, internal engineering docs, and configuration files — then wrote manual test cases and automation scripts by hand. It was repetitive, inconsistent across engineers, and slow to keep current as APIs changed.',
        },
        {
          heading: 'How it works',
          body: 'On a request like "generate automation for the reward reversal API," the assistant first identifies the relevant engineering resources through MCP — API contract, business rules, config, and docs — then chunks and embeds them into ChromaDB for semantic search. The most relevant context is assembled into a structured prompt (endpoints, validation rules, error scenarios) that grounds the LLM before it generates positive, negative, and edge-case test scenarios plus REST Assured/TestNG scripts.',
        },
        {
          heading: 'Why RAG instead of fine-tuning',
          body: 'API contracts and docs change often. Fine-tuning a model every time they changed would add operational overhead for no real benefit — RAG lets the assistant pull the latest documentation at query time, so outputs stay aligned with current product behavior.',
        },
        {
          heading: 'Why MCP',
          body: 'The engineering knowledge already lived across repos and internal docs. MCP gave the assistant direct, unified access to those sources instead of requiring engineers to re-upload documentation by hand every time something changed.',
        },
        {
          heading: 'Impact',
          body: 'Manual QA effort on the covered workflow dropped by roughly 90%, regression planning got faster, generated test cases became more consistent across engineers, and the team could spend more time on exploratory testing instead of authoring boilerplate test cases.',
        },
      ],
      stack: [
        { layer: 'Language', tech: 'Python' },
        { layer: 'Backend', tech: 'FastAPI' },
        { layer: 'AI framework', tech: 'LangChain' },
        { layer: 'Retrieval', tech: 'Retrieval-Augmented Generation (RAG)' },
        { layer: 'Repository access', tech: 'Model Context Protocol (MCP)' },
        { layer: 'Vector database', tech: 'ChromaDB' },
        { layer: 'LLM', tech: 'Gemini / OpenAI' },
        { layer: 'Automation output', tech: 'REST Assured, TestNG' },
      ],
      stat: [
        { value: '~90%', label: 'Reduction in manual QA effort' },
        { value: '4', label: 'Stage retrieval-to-generation pipeline' },
        { value: '1', label: 'Unified interface via MCP for live docs' },
      ],
    },
  },
  {
    slug: 'cardiovision',
    title: 'CardioVision — Cardiovascular Disease Risk Prediction & Evaluation System',
    tagline: 'An XGBoost clinical risk model with a full evaluation harness and a live Streamlit dashboard.',
    period: '2026',
    tech: ['Python', 'XGBoost', 'MLflow', 'Streamlit', 'Scikit-learn'],
    bullets: [
      'Achieved 98% accuracy predicting heart disease risk after preprocessing the UCI Heart Disease dataset — missing-value imputation, feature selection, and scaling.',
      'Built an evaluation harness (AUC-ROC curves, confusion matrices, classification reports) to validate discrimination between at-risk and healthy patients and set acceptance thresholds.',
      'Logged hyperparameters, metrics, and model artifacts with MLflow for reproducible, cross-run experimentation.',
      'Delivered real-time risk assessment through an interactive Streamlit dashboard that outputs probability scores for new patient data.',
    ],
    featured: true,
    detail: {
      overview:
        'CardioVision predicts cardiovascular disease risk from patient data using a trained XGBoost classifier, with an evaluation harness built to justify where the model can and can\u2019t be trusted, and a Streamlit front end for real-time scoring.',
      sections: [
        {
          heading: 'Data & modeling',
          body: 'The UCI Heart Disease dataset was preprocessed with missing-value imputation, feature selection, and scaling, then split into train/validation/test sets to train an XGBoost classifier.',
        },
        {
          heading: 'Evaluation',
          body: 'Rather than reporting a single accuracy number, the project includes a full evaluation harness — AUC-ROC curves, confusion matrices, and classification reports — used to define acceptance thresholds for separating at-risk from healthy patients, and to track experiments reproducibly through MLflow.',
        },
        {
          heading: 'Delivery',
          body: 'An interactive Streamlit dashboard exposes the model for real-time inference, returning probability scores for new patient inputs rather than a bare classification.',
        },
      ],
    },
  },
  {
    slug: 'action-recognition-lstm',
    title: 'Real-Time Human Action Recognition using LSTM',
    tagline: 'A webcam-based pipeline that classifies human actions in real time from pose keypoints.',
    period: '2026',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'LSTM'],
    bullets: [
      'Achieved 96% accuracy with sub-100ms inference latency by feeding temporal pose-keypoint sequences into an LSTM network.',
      'Improved generalization across 4 action classes by tuning sequence length, hidden-layer size, and dropout, validated via confusion-matrix analysis on held-out video.',
      'Built a live webcam pipeline that buffers frame sequences and streams predictions in real time.',
    ],
    featured: true,
    detail: {
      overview:
        'This project classifies human actions from live video by tracking pose keypoints and feeding their motion over time into an LSTM network — built for real-time use rather than offline batch classification.',
      sections: [
        {
          heading: 'Pipeline',
          body: 'Pose keypoints are extracted per frame with OpenCV and MediaPipe, then assembled into temporal sequences that an LSTM network was trained on to classify the action being performed.',
        },
        {
          heading: 'Tuning for generalization',
          body: 'Sequence length, hidden-layer size, and dropout were tuned to improve generalization across four action classes, with performance validated using accuracy and confusion-matrix analysis on held-out video sequences.',
        },
        {
          heading: 'Real-time constraint',
          body: 'The model runs inference in under 100ms per prediction, fast enough to buffer and stream live webcam frames through the pipeline and get continuous predictions rather than a delayed batch result.',
        },
      ],
    },
  },
  {
    slug: 'qwen-qlora-finetuning',
    title: 'Domain-Adaptive Fine-Tuning of Qwen2.5-3B-Instruct with QLoRA',
    tagline: 'Fine-tuned a 3B instruction model on a custom dataset using memory-efficient QLoRA.',
    period: 'Jul 2026',
    tech: ['QLoRA', 'PEFT', 'Hugging Face Transformers', 'MLflow'],
    bullets: [
      'Fine-tuned Qwen2.5-3B-Instruct using QLoRA and PEFT on a custom instruction dataset via Hugging Face Transformers.',
      'Evaluated multiple training configurations to improve instruction-following performance, tracking every run with MLflow.',
    ],
    featured: true,
    detail: {
      overview:
        'A domain-adaptive fine-tune of Qwen2.5-3B-Instruct using QLoRA — a quantization-aware, parameter-efficient fine-tuning approach that adapts the model to a custom instruction dataset without the cost of full fine-tuning.',
      sections: [
        {
          heading: 'Approach',
          body: 'QLoRA and PEFT were used through Hugging Face Transformers to adapt Qwen2.5-3B-Instruct to a custom instruction dataset, keeping compute and memory costs low relative to full fine-tuning.',
        },
        {
          heading: 'Evaluation',
          body: 'Multiple training configurations were evaluated against each other to improve instruction-following quality, with every run logged and compared through MLflow.',
        },
      ],
    },
  },
  {
    slug: 'playwright-ai-automation',
    title: 'Playwright-Based AI Test Automation Framework',
    tagline: 'A TypeScript/Playwright framework that writes and heals its own browser tests.',
    period: 'Jun 2026',
    tech: ['TypeScript', 'Playwright', 'LLMs'],
    bullets: [
      'Reduced UI test development time by 60% with a framework that generates browser test scenarios directly from natural-language prompts.',
      'Self-heals broken locators using LLMs, improving automation resilience across complex, changing UI workflows.',
    ],
    featured: true,
    detail: {
      overview:
        'A TypeScript and Playwright framework aimed at the most fragile part of UI automation: locators that break the moment a front end changes. It generates test scenarios from plain-language prompts and repairs broken locators automatically using an LLM.',
      sections: [
        {
          heading: 'Generation from prompts',
          body: 'Instead of hand-writing Playwright scripts for every scenario, the framework takes a natural-language description of a browser flow and generates the corresponding test scenario.',
        },
        {
          heading: 'Self-healing locators',
          body: 'When a UI change breaks an existing locator, the framework uses an LLM to identify the updated element and repair the locator automatically, rather than failing the suite outright.',
        },
        {
          heading: 'Result',
          body: 'Together, these cut UI test development time by roughly 60% and made the automation suite noticeably more resilient across complex, frequently changing workflows.',
        },
      ],
    },
  },
  {
    slug: 'network-traffic-analysis',
    title: 'Network Traffic Analysis & HTTP Load Testing Framework',
    tagline: 'A Python framework for inspecting live traffic and stress-testing services under concurrent load.',
    period: 'Jun 2026',
    tech: ['Python', 'Scapy', 'Sockets', 'Multithreading'],
    bullets: [
      'Built a network analysis and stress-testing framework using Scapy, socket programming, and multithreading to inspect TCP/IP, HTTP, and DNS traffic and simulate concurrent workloads.',
      'Implemented packet capture and inspection, latency profiling, throughput analysis, retransmission detection, and automated bottleneck-identification reporting.',
      'Designed a lightweight monitoring dashboard to visualize latency, throughput, retransmissions, and packet statistics for faster anomaly identification.',
    ],
    featured: true,
    detail: {
      overview:
        'A Python framework for looking directly at what is happening on the wire — inspecting TCP/IP, HTTP, and DNS traffic — while also simulating concurrent load to find where a service starts to strain.',
      sections: [
        {
          heading: 'Traffic inspection',
          body: 'Built on Scapy and raw socket programming, the framework captures and inspects packets to analyze TCP/IP, HTTP, and DNS behavior directly rather than relying on higher-level abstractions.',
        },
        {
          heading: 'Load simulation',
          body: 'Multithreading is used to simulate concurrent workloads against a target service, with latency profiling, throughput analysis, and retransmission detection layered on top to automatically flag bottlenecks.',
        },
        {
          heading: 'Visualization',
          body: 'A lightweight monitoring dashboard surfaces latency, throughput, retransmissions, and packet statistics so anomalies are visible immediately instead of buried in logs.',
        },
      ],
    },
  },
  {
    slug: 'mcp-ai-assistant',
    title: 'MCP-Powered AI Assistant',
    tagline: 'A generative AI assistant that orchestrates multiple external tool servers through a single protocol.',
    period: 'Feb 2026',
    tech: ['Python', 'LangChain', 'OpenAI', 'MCP'],
    bullets: [
      'Architected a generative AI assistant using LangChain, OpenAI, and the Model Context Protocol (MCP) to orchestrate 3+ external tool servers.',
      'Reduced manual context switching by ~70% through automated validation, exception handling, and fault-tolerant execution.',
    ],
    featured: false,
  },
  {
    slug: 'ai-document-analysis-platform',
    title: 'AI Document Analysis Platform / Chatbot',
    tagline: 'A RAG document-intelligence platform for semantic search and Q&A across large document collections.',
    period: 'Jan 2026 – Feb 2026',
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Gemini API'],
    bullets: [
      'Built a Retrieval-Augmented Generation platform enabling semantic search and context-aware question answering across large document collections via scalable REST APIs.',
      'Reduced document retrieval time by serving results through a RAG pipeline instead of manual search.',
    ],
    featured: false,
  },
  {
    slug: 'ai-chatbot-suite',
    title: 'AI Chatbot Suite',
    tagline: 'Six-plus AI applications spanning document intelligence, multimodal search, and conversational analytics.',
    period: 'Jan 2026',
    tech: ['Python', 'Streamlit', 'LangChain', 'Gemini API', 'OpenCV', 'PaddleOCR', 'ChromaDB'],
    bullets: [
      'Engineered 6+ AI-powered applications integrating NLP, computer vision, OCR, and generative AI into document intelligence and conversational-analytics workflows.',
      'Reduced manual processing effort by over 80% across the covered workflows.',
    ],
    featured: false,
  },
  {
    slug: 'pytest-api-automation',
    title: 'Pytest-Based API Test Automation for Website QA',
    tagline: 'A Pytest suite validating uptime, status codes, and broken links on a live production website.',
    period: 'Jul 2026',
    tech: ['Python', 'Pytest', 'Requests'],
    bullets: [
      'Built a Python test automation suite using Pytest and the Requests library to validate uptime, HTTP status codes, and broken links across a live production website.',
      'Automated contact/quote-request form submission validation and content-based assertions to catch regressions before production.',
    ],
    featured: false,
  },
  {
    slug: 'sudoku-solver',
    title: 'Sudoku Solver Web Application',
    tagline: 'A responsive Sudoku solver built on an optimized backtracking algorithm.',
    period: 'Dec 2024',
    tech: ['HTML', 'CSS', 'JavaScript'],
    bullets: [
      'Developed a responsive Sudoku web application implementing an optimized backtracking algorithm with efficient state management for near-instant puzzle solving.',
    ],
    featured: false,
  },
]

export const skillGroups = [
  {
    name: 'Programming',
    skills: ['Python', 'Java', 'TypeScript', 'SQL'],
  },
  {
    name: 'AI & Machine Learning',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'XGBoost',
      'Computer Vision',
      'LSTM',
      'Model Evaluation (AUC-ROC, Cross-Validation)',
      'LLMs',
      'RAG',
      'LangChain',
      'LangGraph',
      'Model Context Protocol (MCP)',
      'Hugging Face Transformers',
      'QLoRA / PEFT',
      'ChromaDB',
      'Prompt Engineering',
    ],
  },
  {
    name: 'Backend & Distributed Systems',
    skills: ['FastAPI', 'REST APIs', 'Microservices', 'Apache Kafka', 'Docker', 'Jenkins', 'GitHub Actions'],
  },
  {
    name: 'Testing & QA Engineering',
    skills: [
      'Pytest',
      'REST Assured',
      'TestNG',
      'Playwright',
      'Selenium',
      'Test Framework Design',
      'Regression & Integration Testing',
    ],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    name: 'Networking',
    skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'DHCP', 'Routing & Switching', 'Socket Programming', 'Scapy'],
  },
  {
    name: 'Developer Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Kibana', 'Linux/Unix', 'Shell Scripting', 'Streamlit', 'Jira', 'Maven'],
  },
]

export const leadership = [
  'Led cross-functional teams in 5+ AI hackathons, delivering rapid prototypes under tight deadlines and securing multiple top-10 finishes.',
  'Increased community engagement by 40% as Social Media Lead through gaming tournaments and promotional campaigns.',
  'Captained the Table Tennis team to two state championship titles while competing in regional football and swimming.',
  'Earned the highest NCC and Scouts certification, demonstrating leadership, discipline, decision-making, and teamwork in high-pressure environments.',
]

export const hobbies = ['Table Tennis', 'Swimming', 'Football', 'Badminton', '8-Ball Pool', 'Hackathons', 'NCC', 'Scouts']
