// Real, verified content only. Nothing in this file is invented — see PRODUCT.md
// "Evidence on Hand" for provenance. Do not add testimonials, metrics, or claims
// that are not backed by a real artifact (a repo, a live demo, a paper, a credential).

export const site = {
  name: "Raghav Upadhyay",
  role: "AI / ML Engineer",
  affiliation: "University of Arizona",
  title: "Raghav Upadhyay | AI Engineer – LLMs, RAG & Production ML",
  description:
    "Raghav Upadhyay – AI/ML engineer and researcher working on LLM evaluation and reliability: hallucination detection, LLM-as-a-judge methodology, and vision-only robot navigation. M.S. Data Science, University of Arizona (2026). Research Collaborator, University of Arizona.",
  url: "https://raghavupadhyay.org",
  email: "raghav0408upadhyay@gmail.com",
  location: { locality: "West Lafayette", region: "IN", country: "US" },
  revision: "v7",
  lastRevised: "2026-09",
} as const;

export const social = {
  email: `mailto:${site.email}`,
  linkedin: "https://www.linkedin.com/in/raghavupadhya04/",
  linkedinHandle: "raghavupadhya04",
  github: "https://github.com/raghav-upadhyay2002",
  githubHandle: "raghav-upadhyay2002",
  huggingface: "https://huggingface.co/raghavupadhyay",
  huggingfaceHandle: "raghavupadhyay",
  arxiv: "https://arxiv.org/a/upadhyay_r_1",
  repo: "https://github.com/raghav-upadhyay2002/Portfolio",
} as const;

// Hero thesis / abstract -----------------------------------------------------

export const availability = "Open to full-time AI / ML Engineer roles · US";

export const thesis =
  "I build retrieval systems that cite their sources. A CI gate blocks the deploy when they stop.";

export const abstract = [
  "I'm Raghav Upadhyay. Most people can get an LLM to answer a question. My interest is the part after that: proving the answer was grounded, and catching it automatically when it isn't.",
  "That's what AskMyDocs is. It splits retrieval 60/40 between a vector index and BM25, reranks with a cross-encoder, and grades every answer with an LLM judge in CI: faithfulness below 0.70 or citation rate below 0.80 and the pipeline fails. It's deployed and public on Hugging Face Spaces. The same instinct produced my study of LLM-generated social networks, now under review at NeurIPS 2026: 192 generated networks across four cultures, four languages and three model tiers, measured rather than eyeballed.",
  "That extended into vision-driven robotics: an e-puck robot solving a Webots maze from camera pixels alone, where the useful result was a negative one: the detector keyed on absolute brightness broke under dimming, and the ones keyed on relative structure didn't. That finding is now the seed for my work as a Research Collaborator at the University of Arizona, under Prof. Eungjoo Lee, asking whether a vision-only robot can tell when its own visual evidence has stopped being trustworthy.",
  "I completed my M.S. in Data Science at the University of Arizona in May 2026 and I'm looking for AI / ML engineering and research roles in the US.",
] as const;

// Footnoted figures shown beside the abstract (NOT stat cards — see craft-floor ban
// on the hero-metric template). Each cites the figure/section that backs it.
export const headlineFigures = [
  { value: "7+", label: "AI / ML projects", cite: "fig-projects" },
  { value: "192", label: "networks generated", cite: "fig-publication" },
  { value: "1", label: "live LLM application", cite: "fig-askmydocs" },
  { value: "1", label: "first-author paper", cite: "fig-publication" },
] as const;

export const buildLogTicker = [
  "LLMs", "RAG", "PyTorch", "TensorFlow", "Hugging Face", "ChromaDB",
  "Cross-Encoder Reranking", "LLM-as-a-Judge", "BM25", "Hybrid Retrieval",
  "GitHub Actions", "Uncertainty Quantification", "OpenCV", "Computer Vision",
] as const;

export const tags = {
  location: "West Lafayette, IN",
  degree: "MS Data Science · UArizona",
  status: "Available now",
} as const;

// Method (formerly "pillars") -------------------------------------------------

export const method = [
  {
    n: "1",
    title: "Retrieve",
    body: "Hybrid vector + BM25 search with cross-encoder reranking, tuned on a fixed eval set rather than by feel.",
  },
  {
    n: "2",
    title: "Evaluate",
    body: "LLM-as-a-judge scoring for faithfulness and citation coverage, versioned alongside the prompts it grades.",
  },
  {
    n: "3",
    title: "Ship",
    body: "GitHub Actions gates on those scores, so a regression blocks the merge. The demo is live, not a screenshot.",
  },
] as const;

// Figures (projects) ----------------------------------------------------------

export type Metric = { value: string; label: string };
export type Link = { label: string; href: string };

export type Figure = {
  id: string;
  n: number;
  category: string;
  title: string;
  body: string;
  metrics?: Metric[];
  tech: string;
  links: Link[];
  featured?: boolean;
  minor?: boolean;
  followUp?: { text: string; href: string; linkText: string };
};

export const figures: Figure[] = [
  {
    id: "fig-askmydocs",
    n: 1,
    category: "Production RAG",
    title: "AskMyDocs: Production-Grade RAG with CI-Gated Evaluation",
    body: "Ask questions of your own PDFs and get answers with inline citations. Retrieval is hybrid (60% ChromaDB vector similarity, 40% BM25) with the top 10 candidates re-scored to the top 3 by an ms-marco-MiniLM-L-6-v2 cross-encoder. Any answer that comes back without citations is flagged as a hallucination, and prompt templates are versioned (default / strict / concise) and selectable per query. Every release is graded by an LLM judge in GitHub Actions: faithfulness under 0.70, relevance under 0.70 or citation rate under 0.80 fails the build and the version never ships. The whole pipeline is built as swappable modules (loader, chunker, embedder, vectorstore, reranker, LLM, prompts) so any stage can be ablated on its own. Live and public on Hugging Face Spaces.",
    metrics: [
      { value: "60/40", label: "vector / BM25" },
      { value: "≥0.70", label: "faithfulness gate" },
      { value: "≥0.70", label: "relevance gate" },
      { value: "≥0.80", label: "citation rate" },
    ],
    tech: "LLaMA (Groq) · ChromaDB · BM25 · Cross-Encoder · GitHub Actions · Gradio",
    links: [
      { label: "Live demo", href: "https://huggingface.co/spaces/raghavupadhyay/askmydocs" },
      { label: "Source", href: "https://github.com/raghav-upadhyay2002/AskMyDocs" },
    ],
    featured: true,
  },
  {
    id: "fig-maze",
    n: 2,
    category: "Computer Vision · Robotics",
    title: "Vision-Based Virtual Maze Navigator",
    body: "An e-puck robot solves an unmapped Webots maze from camera pixels only: no odometry, no map, no distance sensors in the control loop. The finding was counter-intuitive: wall proximity registers as edge density collapsing toward zero rather than spiking, and the detector built on that survived a blur test unmodified. Per-frame CSV telemetry surfaced six failure modes; five are fixed on main, and the last traced to the one detector keyed on absolute intensity rather than relative structure, with a relative-brightness fix specified that holds through a 50% illumination drop.",
    tech: "OpenCV · Webots (e-puck) · Canny Edges · HSV Detection · Reactive Control · NumPy",
    links: [
      { label: "Demo video", href: "https://drive.google.com/file/d/1d2R76Qy9Kmbr4RCgXTRKCL5U3j1-cjew/view?usp=sharing" },
      { label: "Write-up", href: "https://github.com/raghav-upadhyay2002/Vision-Based-Virtual-Maze-Navigator/blob/main/RESULTS.md" },
      { label: "Source", href: "https://github.com/raghav-upadhyay2002/Vision-Based-Virtual-Maze-Navigator" },
    ],
    followUp: {
      text: "Now the seed project for faculty-advised research targeting IEEE RA-L.",
      href: "#experience",
      linkText: "See revision history",
    },
  },
  {
    id: "fig-publication",
    n: 3,
    category: "LLM Research · Publication",
    title: "LLM-Generated Social Networks: Cross-Cultural Study (Capstone)",
    body: "Replicated and extended an ICWSM 2025 paper on whether LLMs generate structurally realistic social networks. Built a full generation-analysis-benchmark pipeline across a 4×4×4×3 matrix (prompting × cultures × languages × GPT-4.1 tiers, two seeds per condition) producing 192 verified directed networks from 50 demographically grounded personas. Political affiliation dominates tie formation under three of four methods, but the global method substitutes age, which means homophily results reported under a single prompting scheme may be design artifacts. First-author paper, under review at NeurIPS 2026.",
    tech: "GPT-4.1 · NetworkX · pandas · Experiment Design",
    links: [{ label: "arXiv:2605.12898", href: "https://arxiv.org/abs/2605.12898" }],
  },
  {
    id: "fig-rul",
    n: 4,
    category: "Deep Learning",
    title: "RUL Prediction with LSTM: Uncertainty-Aware Predictive Maintenance",
    body: "Benchmarked four recurrent architectures (Vanilla LSTM, Stacked BiLSTM, LSTM-Attention, CNN-LSTM) on NASA C-MAPSS for turbofan Remaining Useful Life. Monte Carlo Dropout and deep ensembles supply the uncertainty, and maintenance decisions are taken on a mean − 2σ lower bound rather than a point estimate. Gradient-based attribution and temporal attention heatmaps give per-prediction explanations that can be audited, and zero-shot transfer was evaluated across C-MAPSS subsets.",
    tech: "PyTorch · TensorFlow · Uncertainty · XAI",
    links: [{ label: "Source", href: "https://github.com/raghav-upadhyay2002/RUL-prediction-using-LSTM-for-Aircraft-Engine" }],
  },
  {
    id: "fig-commonsense",
    n: 5,
    category: "NLP",
    title: "Commonsense Reasoning with Pre-trained Language Models",
    body: "Benchmarked RoBERTa-MNLI and OPT-1.3B on PIQA and related commonsense tasks, zero-shot vs. fine-tuned, with Hugging Face Transformers.",
    tech: "RoBERTa · OPT-1.3B · PyTorch · Hugging Face",
    links: [{ label: "Source", href: "https://github.com/raghav-upadhyay2002/-Evaluation-of-Commonsense-Reasoning-Using-Pre-trained-Language-Models" }],
    minor: true,
  },
  {
    id: "fig-hatespeech",
    n: 6,
    category: "NLP",
    title: "Hate Speech Detection",
    body: "Text classification pipeline with Logistic Regression and Random Forest, reaching 92% accuracy on a Kaggle-sourced dataset for content-moderation use cases.",
    tech: "Python · NLP · scikit-learn",
    links: [{ label: "Source", href: "https://github.com/raghav-upadhyay2002/Text-Classification" }],
    minor: true,
  },
  {
    id: "fig-summarizer",
    n: 7,
    category: "NLP · Tools",
    title: "Abstractive Text Summarizer",
    body: "Streamlit app condensing long articles with a distilBART (sshleifer/distilbart-cnn-12-6) seq2seq model, summarizer logic factored out for reuse.",
    tech: "Hugging Face · distilBART · Streamlit",
    links: [{ label: "Source", href: "https://github.com/raghav-upadhyay2002/text-summarizer" }],
    minor: true,
  },
];

export const otherWork = {
  text: "Plus smaller ML and annotation work: spam detection, sentiment annotation, submarine life simulation, classic-algorithm notebooks.",
  href: "https://github.com/raghav-upadhyay2002?tab=repositories",
  linkText: "Browse all repositories",
};

// Revision history (experience) ------------------------------------------------

export type Revision = {
  version: string;
  role: string;
  org: string;
  location?: string;
  dates: string;
  current?: boolean;
  subline?: string;
  changes: string[];
  tags: string[];
  link?: Link;
};

export const revisions: Revision[] = [
  {
    version: "v2",
    role: "Research Collaborator",
    org: "University of Arizona",
    dates: "Aug 2026 – Present",
    current: true,
    subline: "Advisor: Prof. Eungjoo Lee, School of Electrical, Computing & Software Engineering · Target venue: IEEE RA-L",
    changes: [
      "Investigating whether a vision-only mobile robot can recognize when its visual evidence is unreliable for navigation and adapt its behavior before an unsafe or incorrect decision, generalizing a failure mode found in the Vision-Based Virtual Maze Navigator.",
      "Built a multi-environment Webots evaluation benchmark spanning 16 maze layouts (11 training, 5 held-out test) under 8 visual corruption types (low illumination, motion blur, defocus blur, occlusion, noise, brightness/contrast, reduced field of view, plus clean) at 5 severity levels each, informed by the RobustNav (ICCV 2021) evaluation protocol.",
      "Built an automated data-logging pipeline capturing per-frame camera imagery, perception outputs, actions, pose and collision/success outcomes, with simulator ground truth reserved for training labels and evaluation rather than exposed to the navigation policy at test time.",
      "Ran the baseline Canny/HSV controller across 792 trials and uncovered a structural wall-following loop-trap masked by single-maze testing, plus sharply differential corruption sensitivity (4–8% collision under blur vs. 60–84% under illumination, brightness/contrast, occlusion and noise) that's now driving a controller redesign and a relative-threshold baseline comparison.",
    ],
    tags: ["Webots", "OpenCV", "Robustness Benchmarking", "RobustNav Protocol"],
    link: { label: "Code", href: "https://github.com/raghav-upadhyay2002/visual-reliability-nav" },
  },
  {
    version: "v1",
    role: "Data Analyst Intern",
    org: "Sudhir Mehrotra & Associates, Chartered Accountants",
    location: "Bareilly, India (Hybrid)",
    dates: "Jan 2025 – Aug 2025",
    changes: [
      "First hands-on exposure to production data pipelines: the itch that led into the ML/LLM research and engineering work featured throughout this site.",
      "Built Python ETL pipelines that automated financial workflows, cutting manual processing effort by 30%.",
      "Developed a time-series cash-flow forecasting module that improved estimation accuracy by 15% over baseline.",
      "Automated recurring Excel reporting with Python and VBA, eliminating multi-hour weekly manual tasks for the audit team.",
      "Designed structured data-reporting systems for audit and compliance teams, improving traceability across reviews.",
    ],
    tags: ["Python", "ETL", "Time-Series Forecasting", "Excel / VBA"],
  },
];

// Skills / results table -------------------------------------------------------

export const skillGroups = [
  { category: "LLMs & RAG", items: ["OpenAI API", "GPT-4.1", "LLaMA (Groq)", "RAG pipelines", "Hybrid search", "Cross-encoder rerank", "ChromaDB", "sentence-transformers", "Prompt engineering", "Citation grounding"] },
  { category: "LLM Eval & Reliability", items: ["LLM-as-a-judge", "Hallucination detection", "Faithfulness / relevance", "Citation metrics", "CI-gated thresholds", "Versioned prompts"] },
  { category: "Deep Learning", items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "HF Transformers", "LSTM", "Attention", "MC Dropout", "Deep ensembles", "Uncertainty", "XAI"] },
  { category: "Computer Vision & Robotics", items: ["OpenCV", "Canny edge detection", "HSV color detection", "Webots (e-puck)", "Reactive control policies", "Robustness benchmarking", "Visual perturbation testing"] },
  { category: "Languages", items: ["Python", "SQL", "R", "Bash", "JavaScript"] },
  { category: "Data & Viz", items: ["pandas", "NumPy", "NetworkX", "Matplotlib", "Seaborn", "Jupyter", "ipywidgets", "Gradio", "Streamlit"] },
  { category: "MLOps & Tools", items: ["Git", "GitHub Actions (CI/CD)", "AWS", "Linux", "HF Spaces", "REST APIs", "RAPIDS (GPU)", "LaTeX"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "ChromaDB (vector)"] },
] as const;

// Appendix A: education ---------------------------------------------------------

export const education = [
  {
    degree: "M.S. in Data Science",
    org: "University of Arizona",
    location: "Tucson, AZ",
    dates: "Apr 2024 – May 2026",
    detail: "GPA: 3.78 / 4.00 · Conferred May 2026.",
    courses: ["Machine Learning", "Applied Natural Language Processing", "Computational Linguistics", "Data Mining & Discovery", "Foundations of Data Science", "Data Analysis & Visualization", "Data Ethics"],
  },
  {
    degree: "B.Tech, Computer Science & Engineering (Software Engineering)",
    org: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    dates: "2020 – 2024",
    detail: "CGPA: 8.51 / 10.00.",
    courses: ["Data Structures & Algorithms", "Design & Analysis of Algorithms", "Artificial Intelligence", "Compiler Design", "Operating Systems", "Database Management Systems", "Formal Languages & Automata", "Probability & Queueing Theory", "Discrete Mathematics", "Design of Experiments", "Calculus & Linear Algebra"],
  },
] as const;

// Appendix B: certificates -------------------------------------------------------

export type Certificate = {
  title: string;
  issuer: string;
  issued: string;
  skills: string[];
  href: string;
  logo?: string;
};

export const certificates: Certificate[] = [
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    issued: "Jun 2026",
    skills: ["4D framework for working with AI", "Delegation & task decomposition", "Description (prompting/context/iterative refinement)", "Discernment & diligence"],
    href: "https://verify.skilljar.com/c/piqmwh97829m",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    issued: "Jun 2026",
    skills: ["Claude model family & capabilities", "Effective prompting/context management", "Projects/artifacts/extended workflows", "Practical/responsible use"],
    href: "https://verify.skilljar.com/c/ewn9cc9y5uon",
  },
  {
    title: "Fundamentals of Accelerated Data Science",
    issuer: "NVIDIA",
    issued: "Oct 2025",
    skills: ["GPU-accelerated computing (RAPIDS)", "Core data science", "Applied ML", "Accelerated ecosystem integration"],
    href: "https://learn.nvidia.com/certificates?id=wKvpir0fSmGcr57_563S-g",
    logo: "/images/nvidia.png",
  },
  {
    title: "AWS Academy Cloud Operations",
    issuer: "Amazon Web Services",
    issued: "Nov 2022",
    skills: ["Cloud infrastructure operations", "Monitoring & management on AWS", "Deployment & automation fundamentals"],
    href: "https://www.credly.com/badges/bd7fc77f-74fa-4665-9ad8-bb6521bc9f5e/print",
    logo: "/images/aws.png",
  },
];

// Publication ----------------------------------------------------------------------

export const publication = {
  title: "When Do LLMs Generate Realistic Social Networks? A Multi-Dimensional Study of Culture, Language, Scale, and Method",
  status: "Under review · NeurIPS 2026",
  authors: ["R. Upadhyay", "S. H. Kilaru", "S. T. Manikyala", "S. S. K. Ramavath", "S. Nunavathu", "D. Alharthi"],
  date: "May 2026",
  arxivId: "arXiv:2605.12898 [cs.SI]",
  abstract:
    "Building on homophily and structural balance theory, we formalize four LLM-based tie-formation mechanisms (sequential, global, local, and iterative) as distinct conditional distributions over edge sets. Using a fixed roster of 50 demographically grounded personas, we generate 192 verified directed networks across four cultural contexts, four prompt languages, three GPT-4.1 variants and four prompting architectures, with two seeds per condition.",
  findings: [
    "Cultural framing measurably shifts inbreeding homophily and largest-component connectivity.",
    "Political affiliation dominates tie formation under three of four methods, while the global method substitutes age. Prompt architecture is therefore a substantive sociological variable: homophily findings reported under a single prompting scheme may be design artifacts.",
    "Model scale produces a divergence ranking that reproduced across all three studies (GPT-4.1 ↔ mini = 0.074, ↔ nano = 0.119), with the smallest variant differing qualitatively rather than only in noise.",
  ],
  tags: ["GPT-4.1", "NetworkX", "pandas", "Experimental Design"],
  links: [
    { label: "Abstract", href: "https://arxiv.org/abs/2605.12898" },
    { label: "PDF", href: "https://arxiv.org/pdf/2605.12898" },
  ],
} as const;

// CV ---------------------------------------------------------------------------

export const cv = {
  href: "/resume/Raghav_Upadhyay_CV.pdf",
  filename: "Raghav_Upadhyay_CV.pdf",
  description: "Two pages: research experience, publications, projects with methods and numbers, and coursework.",
  lastUpdated: "August 2026",
} as const;

// Correspondence (contact) ------------------------------------------------------

export const correspondence = {
  intro:
    "I finished my M.S. in May 2026 and I'm looking for AI / ML engineering and research roles in the US, while working as a Research Collaborator at the University of Arizona. If you're hiring, or you want to talk about LLM evaluation or reliability under perturbation, email is the fastest way to reach me.",
  channels: [
    { label: "Email", value: site.email, href: social.email },
    { label: "LinkedIn", value: social.linkedinHandle, href: social.linkedin },
    { label: "GitHub", value: social.githubHandle, href: social.github },
    { label: "Hugging Face", value: social.huggingfaceHandle, href: social.huggingface },
    { label: "arXiv", value: "upadhyay_r_1", href: social.arxiv },
  ],
} as const;

// Section registry (drives running header + scrollspy) --------------------------

export const sections = [
  { id: "abstract", label: "Abstract" },
  { id: "method", label: "Method" },
  { id: "projects", label: "Figures" },
  { id: "experience", label: "Revisions" },
  { id: "skills", label: "Results" },
  { id: "appendix", label: "Appendix" },
  { id: "publication", label: "References" },
  { id: "correspondence", label: "Correspondence" },
] as const;
