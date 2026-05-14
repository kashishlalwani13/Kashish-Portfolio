"use client";

import Image from "next/image";

const focusAreas = [
  "Applied AI and Machine Learning",
  "Product Analytics and Experimentation",
  "Retrieval and RAG Systems",
  "Data Pipelines and Backend Execution",
  "Decision Intelligence",
  "Fintech and Real-Time Systems",
];

const education = [
  {
    school: "Stony Brook University",
    degree: "Master of Science in Data Science",
    location: "Stony Brook, New York, USA",
    period: "Aug 2024 to May 2026",
    note: "",
  },
  {
    school: "Shivaji University",
    degree: "B.Tech in Computer Science (AI and ML)",
    location: "Maharashtra, India",
    period: "Aug 2020 to May 2024",
    note: "Honors: Best Outgoing Student — University Distinction",
  },
];

const experiences = [
  {
    role: "Data Scientist",
    company: "Stony Brook University",
    location: "USA",
    period: "Aug 2025 to Dec 2025",
    type: "Retrieval Systems · ML Evaluation · Statistical Analysis",
    bullets: [
      "Built deterministic ML evaluation pipelines across 1M+ records and 100K+ queries to benchmark robustness in retrieval systems.",
      "Designed reproducible cross-engine workflows with cached artifacts, validation logic, and statistical testing to improve metric reliability.",
      "Implemented True-PIR evaluation and bias diagnostics to surface semantic drift, ranking instability, and retrieval performance risks.",
      "Automated audit and reporting workflows to reduce manual analysis overhead and improve decision confidence.",
      "Profiled latency, throughput, and scaling bottlenecks to guide system optimization under production-style workloads.",
    ],
  },
  {
    role: "Founding AI Engineer",
    company: "Versaunt (Aayats), Inc.",
    location: "USA",
    period: "May 2025 to Aug 2025",
    type: "ML Systems · Product Analytics · Experimentation Infrastructure",
    bullets: [
      "Built and productionized AI workflows supporting 10K+ users and 500K+ monthly queries across product-facing systems.",
      "Designed experimentation infrastructure processing 50K+ daily events to evaluate model behavior, releases, and user engagement.",
      "Built behavioral feature pipelines across 1M+ interaction records to strengthen evaluation quality and product insight generation.",
      "Owned KPI dashboards and analytics workflows that informed roadmap prioritization and release validation decisions.",
      "Integrated inference pipelines with monitoring to detect degradation patterns and improve production stability.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Saroj Group of Companies",
    location: "India",
    period: "Jan 2024 to Jul 2024",
    type: "Operational Analytics · Forecasting · Decision Support",
    bullets: [
      "Reduced defect rate by 40% using statistical modeling on 100K+ records, generating $50K in annual savings through process optimization.",
      "Improved profit margin by 12% by identifying cost leakage and operational inefficiencies through SQL and Python analysis.",
      "Automated reporting pipelines eliminating 25+ manual hours per month and improving data reliability for planning and operations.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Kamala Plastics",
    location: "India",
    period: "Jul 2023 to Dec 2023",
    type: "ETL · KPI Reporting · Operational Analytics",
    bullets: [
      "Built ETL workflows integrating 200K+ records to improve reporting consistency and operational visibility.",
      "Used SQL and Python analysis to identify trends that improved operational performance by 17%.",
      "Developed KPI dashboards and root-cause analyses that reduced scrap by 22% and returns by 15%.",
    ],
  },
];

const featuredProjects = [
  {
    title: "Aegis: Cost-Aware Real-Time Fraud Detection System",
    tag: "ML Systems · Featured",
    status: "Public",
    tech: "Python, PySpark, Databricks, XGBoost, Random Forest, Streaming, Drift Detection",
    description:
      "End-to-end fraud detection pipeline built on PySpark and Databricks, simulating a production-grade system with streaming ingestion, ML classification, cost-based decision logic, drift monitoring, and threshold optimization.",
    impact:
      "Achieved F1 of 0.9942 and AUC of 0.993 on highly imbalanced data (0.138% fraud rate). Cost-optimal threshold reduced financial exposure by $19.4M+ versus a naive threshold. Drift detection validated via controlled injection with PSI and KS metrics.",
    github: "https://github.com/kashishlalwani13/aegis-fraud-detection",
    article: "https://medium.com/@kaashishlalwani/the-threshold-is-a-business-decision-not-a-statistical-one-db6ab69efa0b",
    articleComingSoon: false,
    hosted: "https://kashishlalwani13.github.io/aegis-fraud-detection/",
  },
  {
    title: "Search Perturbation Robustness and Bias (PIR / PB)",
    tag: "Research · Featured",
    status: "Public",
    tech: "Python, Retrieval Evaluation, Statistical Diagnostics, Google CSE, DuckDuckGo",
    description:
      "Designed a reproducible evaluation system to measure ranking robustness under semantic-preserving query perturbations. Built deterministic pipelines, cached artifacts, True-PIR metrics, and bias diagnostics to systematically analyze retrieval stability.",
    impact:
      "Benchmarked cross-engine robustness at scale and surfaced measurable ranking instability, enabling deeper analysis of semantic drift and bias in retrieval systems.",
    github: "https://github.com/kashishlalwani13/pirpb",
    article: "https://medium.com/@kaashishlalwani/same-question-different-words-do-search-rankings-stay-stable-2bf28c07cf20",
    articleComingSoon: false,
    hosted: "",
  },
  {
    title: "Scalable Retrieval Benchmarking for RAG Systems",
    tag: "ML Systems · Featured",
    status: "Public",
    tech: "Python, FAISS, Vector Embeddings, NumPy",
    description:
      "Built a scalable retrieval benchmarking system using FAISS and dense embeddings to simulate production-scale workloads and evaluate indexing efficiency, latency distributions, and throughput under rising data load.",
    impact:
      "Identified key bottlenecks in retrieval pipelines and demonstrated how better indexing and memory strategy can outperform brute-force model scaling.",
    github: "https://github.com/garima24112000/Scaling-Retrieval-System",
    article: "https://medium.com/@kaashishlalwani/scaling-retrieval-systems-why-smarter-memory-might-beat-bigger-ai-models-f7f78c3db267",
    articleComingSoon: false,
    hosted: "",
  },
  {
    title: "AI-Enhanced Portfolio Management System",
    tag: "Finance + ML · Featured",
    status: "Public",
    tech: "Python, CVaR, Pandas, Optimization, Risk Modeling",
    description:
      "Built a risk-aware portfolio optimization engine using CVaR-based modeling and adaptive forecasting to support dynamic allocation decisions.",
    impact:
      "Improved Sharpe ratio by 15% and reduced downside risk by 28%, demonstrating practical use of ML and optimization in financial decision systems.",
    github: "https://github.com/kashishlalwani13/AI-Portfolio-Management",
    article: "",
    articleComingSoon: false,
    hosted: "",
  },
];

const selectedProjects = [
  {
    title: "RAG Financial Intelligence Platform",
    tech: "LLMs, LangChain, Retrieval, Financial Document Analysis",
    description:
      "Built an AI-powered financial intelligence platform for due diligence across 20+ document types, combining retrieval, summarization, and structured analysis workflows.",
    impact:
      "Reduced analysis time by 60% and improved decision efficiency by 40% for investment-oriented workflows.",
    github: "",
    articles: [],
    note: "Confidential project. Repository unavailable due to IP constraints.",
  },
  {
    title: "Formula 1 Performance Analytics",
    tech: "Python, XGBoost, Regression, Clustering, Statistical Testing",
    description:
      "Built predictive and clustering models on 150K+ lap records for lap time estimation, driver segmentation, and race strategy analysis.",
    impact:
      "Turned high-volume telemetry into interpretable performance insights and decision-support analytics.",
    github: "https://github.com/kashishlalwani13/Formula1-Performance-Analytics",
    articles: [],
    note: "",
  },
  {
    title: "Clinical Phenotype Extraction Pipeline",
    tech: "Python, NLP, spaCy, negspacy, HPO, Streamlit",
    description:
      "Modular NLP pipeline converting unstructured clinical notes into structured phenotype outputs for clinical analytics and rare disease workflows. Built as part of Harvard HackRare.",
    impact:
      "Focuses on context-aware extraction, ontology mapping, and evaluation-first design for decision-useful clinical data.",
    github: "https://github.com/kashishlalwani13/Structured-Clinical-Data-Pipeline-",
    articles: [
      {
        label: "Article",
        url: "https://medium.com/@kaashishlalwani/7-years-thats-how-long-rare-disease-patients-wait-for-a-correct-diagnosis-b15b775ca801",
      },
    ],
    note: "In progress · Harvard HackRare project",
  },
];

const toolkit = [
  {
    title: "Languages and Data",
    icon: "💻",
    items: ["Python", "SQL", "R", "Java", "PostgreSQL", "MySQL", "BigQuery"],
  },
  {
    title: "ML, AI and Retrieval",
    icon: "🧠",
    items: [
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "Random Forest",
      "Transformers",
      "spaCy",
      "negspacy",
      "FAISS",
      "LangChain",
      "RAG",
      "Embeddings",
      "Model Evaluation",
      "HPO",
    ],
  },
  {
    title: "Systems and Backend",
    icon: "⚙️",
    items: [
      "FastAPI",
      "REST APIs",
      "ETL Pipelines",
      "Data Modeling",
      "PySpark",
      "Databricks",
      "Docker",
      "Airflow",
      "CI/CD",
      "AWS",
      "Streaming Pipelines",
    ],
  },
  {
    title: "Analytics and Decisioning",
    icon: "📊",
    items: [
      "Experimentation",
      "A/B Testing",
      "KPI Design",
      "Forecasting",
      "Root-Cause Analysis",
      "Drift Detection",
      "Threshold Optimization",
      "Cost-Based Decision Logic",
      "Excel",
      "Tableau",
      "Power BI",
      "Data Storytelling",
    ],
  },
];

const projectWriting = [
  {
    title: "The Threshold Is a Business Decision, Not a Statistical One",
    type: "Project Article",
    description:
      "A deep dive into the Aegis fraud detection system and why choosing the right operating threshold matters more than model accuracy alone.",
    link: "https://medium.com/@kaashishlalwani/the-threshold-is-a-business-decision-not-a-statistical-one-db6ab69efa0b",
  },
  {
    title: "Scaling Retrieval Systems: Why Smarter Memory Might Beat Bigger AI Models",
    type: "Project Article",
    description:
      "Covers indexing strategy, latency bottlenecks, and retrieval optimization from a system design perspective.",
    link: "https://medium.com/@kaashishlalwani/scaling-retrieval-systems-why-smarter-memory-might-beat-bigger-ai-models-f7f78c3db267",
  },
  {
    title: "7 Years. That's How Long Rare Disease Patients Wait for a Correct Diagnosis.",
    type: "Project Article",
    description:
      "On the rare disease diagnostic gap and why structured clinical data and NLP pipelines can change outcomes for patients.",
    link: "https://medium.com/@kaashishlalwani/7-years-thats-how-long-rare-disease-patients-wait-for-a-correct-diagnosis-b15b775ca801",
  },
  {
    title: "Same Question, Different Words — Do Search Rankings Stay Stable?",
    type: "Project Article",
    description:
      "A systems-level look at ranking robustness, semantic perturbations, and why evaluation matters in retrieval.",
    link: "https://medium.com/@kaashishlalwani/same-question-different-words-do-search-rankings-stay-stable-2bf28c07cf20",
  },
];

const conceptWriting = [
  {
    title: "You're Not Prompting AI — You're Controlling a Probabilistic System",
    type: "Ideas and Concepts",
    description:
      "A mental model shift for working with LLMs: why thinking in distributions, not commands, changes everything.",
    link: "https://medium.com/@kaashishlalwani/youre-not-prompting-ai-you-re-controlling-a-probabilistic-system-f53d06989fd3",
  },
  {
    title: "They Made It Hard to Leave — I Wanted to Know Why",
    type: "Ideas and Concepts",
    description:
      "A data-driven exploration of retention mechanics and behavioral design patterns that keep users engaged.",
    link: "https://medium.com/@kaashishlalwani/they-made-it-hard-to-leave-i-wanted-to-know-why-38146f534b66",
  },
];

const awards = [
  {
    title: "Best Outgoing Student",
    org: "D. Y. Patil College of Engineering and Technology",
    year: "Feb 2024",
    description:
      "The only student awarded Best Outgoing Student in 2023-24 for 4 years of excellence across academics, research, technical work, co-curricular, sports, cultural, and leadership achievements.",
  },
  {
    title: "Smart India Hackathon Finalist — Top 3",
    org: "Smart India Hackathon 2023, Ministry of Power",
    year: "Dec 2023",
    description:
      "Finalist among Top 3 teams for Ministry of Power in SIH 2023 Senior Software Edition, representing D. Y. Patil College of Engineering and Technology.",
  },
  {
    title: "Best Emerging Rotaractor (Female)",
    org: "Rotary International District 3170",
    year: "Jul 2024",
    description:
      "Recognized among 75+ clubs of Rotary International District 3170 for leadership, initiative, and community impact.",
  },
  {
    title: "Secretary of the Year",
    org: "RI District 3170, Kolhapur Zone",
    year: "Jun 2024",
    description:
      "Best Secretary Award given among 12 clubs of Kolhapur Zone for outstanding coordination, planning, and community leadership.",
  },
  {
    title: "Chess Championships — Multiple Titles",
    org: "Shivaji University and D. Y. Patil College",
    year: "2023 and 2024",
    description:
      "Winner of Shivaji University Lead College Women's Chess Tournament (2023 and 2024). Winner of Shivaji University Zonal Women's Chess Tournament (2023). Runner-up at National level Tech Symposium Chess Competition. Winner of ARPAN Sports Women's Rapid Chess Tournament (2024). College Chess Team Captain for 3 consecutive years.",
  },
  {
    title: "Multi-Sport Achievements",
    org: "Shivaji University",
    year: "2023",
    description:
      "Winner of Shivaji University Lead College Women's Basketball Tournament (2023). Runner-up in Lead College Women's Badminton Tournament (2023). Runner-up in Artsy Poster Presentation on Industry 4.0 at DKTE National Tech Symposium (2023). 4 gold medals in skating up to district level. Best Dancer recognition across 12 years. Bharatanatyam examinations completed with distinction.",
  },
];

const leadership = [
  {
    title: "Student Secretary — 3 Consecutive Years",
    org: "Student Council, D. Y. Patil College of Engineering and Technology",
    description:
      "Youngest student leader to serve 3 consecutive terms managing 4,000+ active students. Held roles including Cultural Secretary, Corporate Relations Head (Entrepreneurship Cell), Research and Development Head (ASPIRE AIML Association), Public Relations Lead (Google Developers Student Club), Ladies Representative, and Deputy Chief of Training and Placement Cell.",
  },
  {
    title: "Secretary, Rotaract Club",
    org: "Rotaract / Rotary District 3170",
    description:
      "Led planning and coordination across nearly 75 clubs in Rotary International District 3170, strengthening communication, community impact, and club-level execution.",
  },
  {
    title: "Anchor for 100+ Major Events",
    org: "D. Y. Patil College and Community",
    description:
      "Hosted and anchored over 100 major institutional and community events across 4 years, demonstrating communication, presence, and leadership under pressure.",
  },
];

const interests = [
  "Finance and Markets",
  "Chess",
  "Music",
  "Indian Classical Dance",
  "Travel",
  "Coffee",
];

const navLinkClass = "transition-colors duration-300 hover:text-[#c6a972]";
const primaryButtonClass =
  "rounded-full bg-[#c6a972] px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90";
const secondaryButtonClass =
  "rounded-full border border-white/20 px-6 py-3 font-medium text-[#f5efe6] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c6a972] hover:text-[#c6a972]";
const smallSecondaryButtonClass =
  "rounded-full border border-white/20 px-5 py-2.5 font-medium text-[#f5efe6] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c6a972] hover:text-[#c6a972]";
const smallPrimaryButtonClass =
  "rounded-full bg-[#c6a972] px-5 py-2.5 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90";
const interactiveCardClass =
  "rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a972]/35 hover:bg-white/[0.07] hover:shadow-2xl";
const statCardClass =
  "rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a972]/30 hover:bg-white/[0.07]";
const chipClass =
  "rounded-full border border-[#c6a972]/30 bg-[#c6a972]/10 px-4 py-2 text-sm text-[#eadfcd] transition-colors duration-300 hover:border-[#c6a972]/50 hover:bg-[#c6a972]/15";
const darkChipClass =
  "rounded-full border border-white/10 bg-[#111111] px-4 py-2 text-sm text-[#d8d0c4] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c6a972]/30 hover:text-[#f5efe6]";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5efe6]">

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold tracking-wide text-[#c6a972] transition-opacity duration-300 hover:opacity-90">
            Kashish Lalwani
          </a>
          <div className="hidden items-center gap-6 text-sm text-[#d8d0c4] lg:flex">
            <a href="#about" className={navLinkClass}>About</a>
            <a href="#experience" className={navLinkClass}>Experience</a>
            <a href="#projects" className={navLinkClass}>Projects</a>
            <a href="#toolkit" className={navLinkClass}>Toolkit</a>
            <a href="#writing" className={navLinkClass}>Writing</a>
            <a href="#awards" className={navLinkClass}>Awards</a>
            <a href="#contact" className={navLinkClass}>Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="/Kashish_Lalwani_Resume.pdf" target="_blank" rel="noreferrer"
              className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-[#f5efe6] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c6a972] hover:text-[#c6a972] sm:inline-flex">
              Resume
            </a>
            <a href="mailto:work.kashishlalwani@gmail.com"
              className="rounded-full border border-[#c6a972] px-4 py-2 text-sm text-[#c6a972] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c6a972] hover:text-black">
              Email Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 overflow-hidden px-6 py-16 md:grid-cols-2">
        <div className="absolute inset-0 -z-30 bg-[#07111a]" />
        <div className="absolute left-[-8%] top-[2%] -z-20 h-72 w-72 rounded-full bg-[#72d2dd]/10 blur-3xl" />
        <div className="absolute bottom-[8%] right-[-8%] -z-20 h-[26rem] w-[26rem] rounded-full bg-[#0f3a5c]/30 blur-3xl" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(198,169,114,0.10),_transparent_42%)]" />

        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Data Scientist · Applied AI · Product Analytics · Systems
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Kashish
            <span className="block text-[#c6a972]">Lalwani</span>
          </h1>
          <p className="mb-5 max-w-2xl text-lg leading-8 text-[#d8d0c4] md:text-xl">
            I build production-grade AI and data systems that turn complex data into measurable business outcomes.
          </p>
          <p className="mb-5 max-w-2xl text-lg leading-8 text-neutral-400">
            My work sits at the intersection of machine learning, product analytics, experimentation, retrieval systems, and backend execution.
          </p>
          <p className="mb-6 max-w-2xl text-base italic leading-7 text-[#cdb792] md:text-lg">
            Focused on high-impact problems in fintech, payments, and real-time decision systems.
          </p>
          <div className="mb-8 flex flex-wrap gap-3">
            {focusAreas.map((item) => (
              <span key={item} className={chipClass}>{item}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/kashishlalwani13" target="_blank" rel="noreferrer" className={primaryButtonClass}>GitHub</a>
            <a href="https://linkedin.com/in/kashishlalwani13" target="_blank" rel="noreferrer" className={secondaryButtonClass}>LinkedIn</a>
            <a href="/Kashish_Lalwani_Resume.pdf" target="_blank" rel="noreferrer" className={secondaryButtonClass}>Resume</a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 text-sm text-[#b8afa1] md:grid-cols-3">
            <div className={statCardClass}>
              <p className="text-2xl font-semibold text-[#f5efe6]">1M+</p>
              <p>records processed in analytics and evaluation workflows</p>
            </div>
            <div className={statCardClass}>
              <p className="text-2xl font-semibold text-[#f5efe6]">100K+</p>
              <p>queries benchmarked across retrieval systems</p>
            </div>
            <div className={statCardClass}>
              <p className="text-2xl font-semibold text-[#f5efe6]">50K+</p>
              <p>daily events processed in experimentation infrastructure</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(198,169,114,0.18),_transparent_55%)]" />
          <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-[#c6a972]/30 bg-[#151515]/90 p-3 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#c6a972]/45">
            <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-[#c6a972]/10 blur-2xl" />
            <Image src="/images/profile.jpg" alt="Kashish Lalwani" width={900} height={1200}
              className="h-auto w-full rounded-[1.5rem] object-cover transition-transform duration-500 hover:scale-[1.01]" priority />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">About</p>
          <h2 className="text-3xl font-semibold md:text-4xl">One profile. Three strengths. One clear story.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className={interactiveCardClass}>
            <p className="text-lg leading-8 text-[#d8d0c4]">
              I am currently pursuing my Master's in Data Science at Stony Brook University. I build systems that connect business questions to data pipelines, analytics, machine learning, and production execution. My strongest work happens where technical depth must translate into measurable product or operational impact.
            </p>
          </div>
          <div className={interactiveCardClass}>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#c6a972]">What I optimize for</p>
            <ul className="space-y-4 text-[#d8d0c4]">
              <li>• AI and ML systems that are measurable, reliable, and decision-useful</li>
              <li>• Product analytics and experimentation tied to real business outcomes</li>
              <li>• Retrieval, RAG, and evaluation workflows that hold up under scale</li>
              <li>• Fintech and real-time decision systems where performance directly matters</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">Experience</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Building decision-ready systems across analytics, ML, and execution</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((item) => (
            <div key={`${item.role}-${item.company}`} className={interactiveCardClass}>
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#f5efe6]">{item.role}</h3>
                  <p className="mt-1 text-lg text-[#d8d0c4]">{item.company}, {item.location}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">{item.type}</p>
                </div>
                <p className="text-sm text-[#b8afa1]">{item.period}</p>
              </div>
              <ul className="space-y-3 text-[#d8d0c4]">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="leading-8">• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">Selected Work</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Projects that connect data, systems, and business value</h2>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <div key={project.title} className={interactiveCardClass}>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <p className="text-sm uppercase tracking-[0.18em] text-[#c6a972]">{project.tag}</p>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-emerald-200">
                  {project.status}
                </span>
                <span className="rounded-full border border-[#c6a972]/20 bg-[#c6a972]/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#eadfcd]">
                  Scalable · Measurable · Outcome-Driven
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-[#f5efe6]">{project.title}</h3>
              <p className="mb-4 text-sm uppercase tracking-[0.12em] text-[#b8afa1]">{project.tech}</p>
              <p className="mb-4 leading-8 text-[#d8d0c4]">{project.description}</p>
              <p className="mb-6 leading-8 text-[#f1e7d8]">
                <span className="font-semibold text-[#c6a972]">Impact:</span> {project.impact}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className={smallPrimaryButtonClass}>GitHub</a>
                {project.hosted && (
                  <a href={project.hosted} target="_blank" rel="noreferrer" className={smallSecondaryButtonClass}>Live Demo</a>
                )}
                {project.articleComingSoon ? (
                  <span className="inline-flex cursor-not-allowed items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-[#a89d8c]">
                    Article Coming Soon
                  </span>
                ) : project.article ? (
                  <a href={project.article} target="_blank" rel="noreferrer" className={smallSecondaryButtonClass}>Article</a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#c6a972]">Additional Work</p>
          <div className="grid gap-6 md:grid-cols-2">
            {selectedProjects.map((project) => (
              <div key={project.title} className={interactiveCardClass}>
                <h3 className="mb-3 text-2xl font-semibold text-[#f5efe6]">{project.title}</h3>
                <p className="mb-4 text-sm uppercase tracking-[0.12em] text-[#b8afa1]">{project.tech}</p>
                <p className="mb-4 leading-8 text-[#d8d0c4]">{project.description}</p>
                <p className="mb-4 leading-8 text-[#f1e7d8]">
                  <span className="font-semibold text-[#c6a972]">Impact:</span> {project.impact}
                </p>
                {project.note ? <p className="mb-5 text-sm text-[#a89d8c]">{project.note}</p> : null}
                <div className="flex flex-wrap gap-3">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className={smallSecondaryButtonClass}>GitHub</a>
                  ) : (
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-[#a89d8c]">
                      Repository not public
                    </span>
                  )}
                  {project.articles && project.articles.map((a) => (
                    <a key={a.url} href={a.url} target="_blank" rel="noreferrer" className={smallSecondaryButtonClass}>{a.label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section id="toolkit" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">Technical Toolkit</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Analytics, ML, systems, and decision infrastructure</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {toolkit.map((category) => (
            <div key={category.title} className={interactiveCardClass}>
              <h3 className="mb-5 text-xl font-semibold text-[#f5efe6]">{category.icon} {category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span key={item} className={chipClass}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">Education</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Academic foundation</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div key={item.school} className={interactiveCardClass}>
              <h3 className="text-2xl font-semibold text-[#f5efe6]">{item.school}</h3>
              <p className="mt-2 text-lg text-[#d8d0c4]">{item.degree}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-[#c6a972]">{item.location}</p>
              <p className="mt-2 text-sm text-[#b8afa1]">{item.period}</p>
              {item.note ? <p className="mt-4 leading-7 text-[#d8d0c4]">{item.note}</p> : null}
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">Writing</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Systems thinking, evaluation, and retrieval</h2>
        </div>

        <div className="mb-10">
          <p className="mb-6 text-sm uppercase tracking-[0.22em] text-[#c6a972]">Project Writeups</p>
          <div className="grid gap-6 md:grid-cols-2">
            {projectWriting.map((item) => (
              <div key={item.title} className={interactiveCardClass}>
                <p className="mb-3 text-sm uppercase tracking-[0.14em] text-[#c6a972]">{item.type}</p>
                <h3 className="mb-4 text-xl font-semibold text-[#f5efe6]">{item.title}</h3>
                <p className="mb-6 leading-8 text-[#d8d0c4]">{item.description}</p>
                <a href={item.link} target="_blank" rel="noreferrer" className={smallSecondaryButtonClass}>Read Article</a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.22em] text-[#c6a972]">Ideas and Concepts</p>
          <div className="grid gap-6 md:grid-cols-2">
            {conceptWriting.map((item) => (
              <div key={item.title} className={interactiveCardClass}>
                <p className="mb-3 text-sm uppercase tracking-[0.14em] text-[#c6a972]">{item.type}</p>
                <h3 className="mb-4 text-xl font-semibold text-[#f5efe6]">{item.title}</h3>
                <p className="mb-6 leading-8 text-[#d8d0c4]">{item.description}</p>
                <a href={item.link} target="_blank" rel="noreferrer" className={smallSecondaryButtonClass}>Read Article</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Leadership */}
      <section id="awards" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">Awards and Leadership</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Recognition beyond technical execution</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award) => (
            <div key={award.title} className={interactiveCardClass}>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold text-[#f5efe6]">{award.title}</h3>
                <span className="text-sm text-[#b8afa1]">{award.year}</span>
              </div>
              <p className="mb-4 text-sm uppercase tracking-[0.14em] text-[#c6a972]">{award.org}</p>
              <p className="leading-8 text-[#d8d0c4]">{award.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {leadership.map((item) => (
            <div key={item.title} className={interactiveCardClass}>
              <h3 className="mb-2 text-2xl font-semibold text-[#f5efe6]">{item.title}</h3>
              <p className="mb-4 text-sm uppercase tracking-[0.14em] text-[#c6a972]">{item.org}</p>
              <p className="leading-8 text-[#d8d0c4]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#c6a972]/30 hover:bg-white/[0.07]">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">Beyond Work</p>
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">What keeps me sharp</h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <span key={item} className={darkChipClass}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-[#c6a972]/20 bg-[#121212] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a972]/35 hover:shadow-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">Contact</p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Open to Data Scientist, ML Engineer, and Applied AI opportunities
          </h2>
          <p className="mb-8 max-w-3xl text-lg leading-8 text-[#d8d0c4]">
            I am especially interested in roles where machine learning, analytics, experimentation, and systems execution come together to shape product performance and business decisions.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a972]/30 hover:bg-white/[0.07]">
              <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">Email</p>
              <a href="mailto:work.kashishlalwani@gmail.com" className="text-[#f5efe6] transition-colors duration-300 hover:text-[#c6a972]">
                work.kashishlalwani@gmail.com
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a972]/30 hover:bg-white/[0.07]">
              <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">Phone (USA)</p>
              <a href="tel:+19342463035" className="text-[#f5efe6] transition-colors duration-300 hover:text-[#c6a972]">
                +1 (934) 246-3035
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a972]/30 hover:bg-white/[0.07]">
              <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">Phone (India)</p>
              <a href="tel:+919371444111" className="text-[#f5efe6] transition-colors duration-300 hover:text-[#c6a972]">
                +91 93714 44111
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a972]/30 hover:bg-white/[0.07]">
              <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">LinkedIn</p>
              <a href="https://linkedin.com/in/kashishlalwani13" target="_blank" rel="noreferrer" className="text-[#f5efe6] transition-colors duration-300 hover:text-[#c6a972]">
                linkedin.com/in/kashishlalwani13
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a972]/30 hover:bg-white/[0.07]">
              <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">GitHub</p>
              <a href="https://github.com/kashishlalwani13" target="_blank" rel="noreferrer" className="text-[#f5efe6] transition-colors duration-300 hover:text-[#c6a972]">
                github.com/kashishlalwani13
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-[#9e9486]">
        Designed and built by Kashish Lalwani — where analytics, AI, and systems meet execution.
      </footer>
    </main>
  );
}