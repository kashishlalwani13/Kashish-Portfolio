"use client";

import Image from "next/image";

const focusAreas = [
  "Applied AI & Machine Learning",
  "Product Analytics & Experimentation",
  "Retrieval & RAG Systems",
  "Data Pipelines & Backend Execution",
  "Decision Intelligence",
  "Fintech & Real-Time Systems",
];

const education = [
  {
    school: "Stony Brook University",
    degree: "Master of Science in Data Science",
    location: "Stony Brook, New York, USA",
    period: "Expected May 2026",
    note: "",
  },
  {
    school: "Shivaji University",
    degree: "B.Tech in Computer Science (AI & ML)",
    location: "Maharashtra, India",
    period: "Aug 2020 – May 2024",
    note: "Honors: Best Outgoing Student — University Distinction",
  },
];

const experiences = [
  {
    role: "Data Scientist",
    company: "Stony Brook University",
    location: "USA",
    period: "Aug 2025 – Dec 2025",
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
    period: "May 2025 – Aug 2025",
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
    period: "Jan 2024 – Jul 2024",
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
    period: "Jul 2023 – Dec 2023",
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
    title: "Search Perturbation Robustness & Bias (PIR / PB)",
    tag: "Research · Featured",
    status: "Public",
    tech: "Python, Retrieval Evaluation, Statistical Diagnostics, Google CSE, DuckDuckGo",
    description:
      "Designed a reproducible evaluation system to measure ranking robustness under semantic-preserving query perturbations. Built deterministic pipelines, cached artifacts, True-PIR metrics, and bias diagnostics to systematically analyze retrieval stability.",
    impact:
      "Benchmarked cross-engine robustness at scale and surfaced measurable ranking instability, enabling deeper analysis of semantic drift and bias in retrieval systems.",
    github: "https://github.com/kashishlalwani13/pirpb",
    article:
      "https://medium.com/@kaashishlalwani/same-question-different-words-do-search-rankings-stay-stable-2bf28c07cf20",
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
    article:
      "https://medium.com/@kaashishlalwani/scaling-retrieval-systems-why-smarter-memory-might-beat-bigger-ai-models-f7f78c3db267",
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
    note: "",
  },
  {
    title: "Clinical Phenotype Extraction Pipeline",
    tech: "Python, NLP, spaCy, negspacy, HPO, Streamlit",
    description:
      "Developing a modular NLP pipeline that converts unstructured clinical notes into structured phenotype outputs for clinical analytics and rare disease workflows.",
    impact:
      "Focuses on context-aware extraction, ontology mapping, and evaluation-first design for decision-useful clinical data.",
    github: "",
    note: "In progress · Harvard HackRare project",
  },
];

const toolkit = [
  {
    title: "Languages & Data",
    icon: "💻",
    items: ["Python", "SQL", "R", "Java", "PostgreSQL", "MySQL", "BigQuery"],
  },
  {
    title: "ML, AI & Retrieval",
    icon: "🧠",
    items: [
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "Transformers",
      "spaCy",
      "FAISS",
      "LangChain",
      "RAG",
      "Embeddings",
      "Model Evaluation",
    ],
  },
  {
    title: "Systems & Backend",
    icon: "⚙️",
    items: [
      "FastAPI",
      "REST APIs",
      "ETL Pipelines",
      "Data Modeling",
      "Docker",
      "Airflow",
      "CI/CD",
      "AWS",
    ],
  },
  {
    title: "Analytics & Decisioning",
    icon: "📊",
    items: [
      "Experimentation",
      "A/B Testing",
      "KPI Design",
      "Forecasting",
      "Root-Cause Analysis",
      "Excel",
      "Tableau",
      "Power BI",
      "Data Storytelling",
    ],
  },
];

const writing = [
  {
    title: "Same Question, Different Words — Do Search Rankings Stay Stable?",
    type: "Medium Article",
    description:
      "A systems-level look at ranking robustness, semantic perturbations, and why evaluation matters in retrieval.",
    link: "https://medium.com/@kaashishlalwani/same-question-different-words-do-search-rankings-stay-stable-2bf28c07cf20",
  },
  {
    title: "Scaling Retrieval Systems: Why Smarter Memory Might Beat Bigger AI Models",
    type: "Medium Article",
    description:
      "Covers indexing strategy, latency bottlenecks, and retrieval optimization from a system design perspective.",
    link: "https://medium.com/@kaashishlalwani/scaling-retrieval-systems-why-smarter-memory-might-beat-bigger-ai-models-f7f78c3db267",
  },
];

const awards = [
  {
    title: "Best Outgoing Student",
    org: "D. Y. Patil College of Engineering & Technology",
    year: "2024",
    description:
      "Top graduating distinction for excellence across academics, technical work, research, leadership, and extracurricular achievement.",
  },
  {
    title: "Smart India Hackathon Finalist",
    org: "Smart India Hackathon",
    year: "2023",
    description:
      "Recognized among finalist teams for an AI-powered financial intelligence solution.",
  },
  {
    title: "Best Emerging Rotaractor (Female)",
    org: "Rotary International District 3170",
    year: "2024",
    description:
      "Recognized across 75+ clubs for leadership, initiative, and community impact.",
  },
  {
    title: "Women’s Chess Championships Winner",
    org: "Zonal, Leads, and University-Level Championships",
    year: "2024",
    description:
      "Recognition across multiple competitive levels, reflecting strategic thinking and high-performance decision making.",
  },
];

const leadership = [
  {
    title: "Council Secretary",
    org: "Student Council, Shivaji University",
    description:
      "Represented and coordinated initiatives impacting 4,000+ students across academic, institutional, and student-led activities.",
  },
  {
    title: "Secretary",
    org: "Rotaract / Rotary District 3170",
    description:
      "Led planning and coordination across initiatives connected to nearly 75 clubs, strengthening communication and community impact.",
  },
];

const interests = [
  "Finance & Markets",
  "Chess",
  "Music",
  "Indian Classical Dance",
  "Travel",
  "Coffee",
];

const navLinkClass =
  "transition-colors duration-300 hover:text-[#c6a972]";

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
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="text-lg font-semibold tracking-wide text-[#c6a972] transition-opacity duration-300 hover:opacity-90"
          >
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
            <a
              href="/Kashish_Lalwani_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-[#f5efe6] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c6a972] hover:text-[#c6a972] sm:inline-flex"
            >
              Resume
            </a>
            <a
              href="mailto:work.kashishlalwani@gmail.com"
              className="rounded-full border border-[#c6a972] px-4 py-2 text-sm text-[#c6a972] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c6a972] hover:text-black"
            >
              Email Me
            </a>
          </div>
        </div>
      </nav>

      <section
        id="top"
        className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 overflow-hidden px-6 py-16 md:grid-cols-2"
      >
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
            I build production-grade AI and data systems that turn complex data
            into measurable business outcomes.
          </p>

          <p className="mb-5 max-w-2xl text-lg leading-8 text-neutral-400">
            My work sits at the intersection of machine learning, product
            analytics, experimentation, retrieval systems, and backend execution.
          </p>

          <p className="mb-6 max-w-2xl text-base italic leading-7 text-[#cdb792] md:text-lg">
            Focused on high-impact problems in fintech, payments, and real-time
            decision systems.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            {focusAreas.map((item) => (
              <span key={item} className={chipClass}>
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/kashishlalwani13"
              target="_blank"
              rel="noreferrer"
              className={primaryButtonClass}
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/kashishlalwani13"
              target="_blank"
              rel="noreferrer"
              className={secondaryButtonClass}
            >
              LinkedIn
            </a>

            <a
              href="/Kashish_Lalwani_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={secondaryButtonClass}
            >
              Resume
            </a>
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
            <Image
              src="/images/profile.jpg"
              alt="Kashish Lalwani"
              width={900}
              height={1200}
              className="h-auto w-full rounded-[1.5rem] object-cover transition-transform duration-500 hover:scale-[1.01]"
              priority
            />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            About
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            One profile. Three strengths. One clear story.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className={interactiveCardClass}>
            <p className="text-lg leading-8 text-[#d8d0c4]">
              I’m currently pursuing my Master’s in Data Science at Stony Brook
              University. I build systems that connect business questions to data
              pipelines, analytics, machine learning, and production execution.
              My strongest work happens where technical depth must translate into
              measurable product or operational impact.
            </p>
          </div>

          <div className={interactiveCardClass}>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#c6a972]">
              What I optimize for
            </p>
            <ul className="space-y-4 text-[#d8d0c4]">
              <li>• AI and ML systems that are measurable, reliable, and decision-useful</li>
              <li>• Product analytics and experimentation tied to real business outcomes</li>
              <li>• Retrieval, RAG, and evaluation workflows that hold up under scale</li>
              <li>• Fintech and real-time decision systems where performance directly matters</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Experience
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Building decision-ready systems across analytics, ML, and execution
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((item) => (
            <div key={`${item.role}-${item.company}`} className={interactiveCardClass}>
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#f5efe6]">{item.role}</h3>
                  <p className="mt-1 text-lg text-[#d8d0c4]">
                    {item.company}, {item.location}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                    {item.type}
                  </p>
                </div>
                <p className="text-sm text-[#b8afa1]">{item.period}</p>
              </div>

              <ul className="space-y-3 text-[#d8d0c4]">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="leading-8">
                    • {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Selected Work
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Projects that connect data, systems, and business value
          </h2>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <div key={project.title} className={interactiveCardClass}>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <p className="text-sm uppercase tracking-[0.18em] text-[#c6a972]">
                  {project.tag}
                </p>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-emerald-200">
                  {project.status}
                </span>
                <span className="rounded-full border border-[#c6a972]/20 bg-[#c6a972]/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#eadfcd]">
                  Scalable · Measurable · Outcome-Driven
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-[#f5efe6]">
                {project.title}
              </h3>

              <p className="mb-4 text-sm uppercase tracking-[0.12em] text-[#b8afa1]">
                {project.tech}
              </p>

              <p className="mb-4 leading-8 text-[#d8d0c4]">
                {project.description}
              </p>

              <p className="mb-6 leading-8 text-[#f1e7d8]">
                <span className="font-semibold text-[#c6a972]">Impact:</span>{" "}
                {project.impact}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={smallPrimaryButtonClass}
                >
                  GitHub
                </a>

                {project.article ? (
                  <a
                    href={project.article}
                    target="_blank"
                    rel="noreferrer"
                    className={smallSecondaryButtonClass}
                  >
                    Article
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#c6a972]">
            Additional Work
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {selectedProjects.map((project) => (
              <div key={project.title} className={interactiveCardClass}>
                <h3 className="mb-3 text-2xl font-semibold text-[#f5efe6]">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm uppercase tracking-[0.12em] text-[#b8afa1]">
                  {project.tech}
                </p>
                <p className="mb-4 leading-8 text-[#d8d0c4]">
                  {project.description}
                </p>
                <p className="mb-4 leading-8 text-[#f1e7d8]">
                  <span className="font-semibold text-[#c6a972]">Impact:</span>{" "}
                  {project.impact}
                </p>
                {project.note ? (
                  <p className="mb-6 text-sm text-[#a89d8c]">{project.note}</p>
                ) : null}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={smallSecondaryButtonClass}
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-[#a89d8c]">
                    Repository not public
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="toolkit" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Technical Toolkit
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Analytics, ML, systems, and decision infrastructure
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {toolkit.map((category) => (
            <div key={category.title} className={interactiveCardClass}>
              <h3 className="mb-5 text-xl font-semibold text-[#f5efe6]">
                {category.icon} {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span key={item} className={chipClass}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Education
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Academic foundation
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div key={item.school} className={interactiveCardClass}>
              <h3 className="text-2xl font-semibold text-[#f5efe6]">{item.school}</h3>
              <p className="mt-2 text-lg text-[#d8d0c4]">{item.degree}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                {item.location}
              </p>
              <p className="mt-2 text-sm text-[#b8afa1]">{item.period}</p>
              {item.note ? <p className="mt-4 leading-7 text-[#d8d0c4]">{item.note}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <section id="writing" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Writing
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Systems thinking, evaluation, and retrieval
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {writing.map((item) => (
            <div key={item.title} className={interactiveCardClass}>
              <p className="mb-3 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                {item.type}
              </p>
              <h3 className="mb-4 text-2xl font-semibold text-[#f5efe6]">{item.title}</h3>
              <p className="mb-6 leading-8 text-[#d8d0c4]">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={smallSecondaryButtonClass}
              >
                Read Article
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="awards" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Awards & Leadership
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Recognition beyond technical execution
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award) => (
            <div key={award.title} className={interactiveCardClass}>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold text-[#f5efe6]">{award.title}</h3>
                <span className="text-sm text-[#b8afa1]">{award.year}</span>
              </div>
              <p className="mb-4 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                {award.org}
              </p>
              <p className="leading-8 text-[#d8d0c4]">{award.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {leadership.map((item) => (
            <div key={item.title} className={interactiveCardClass}>
              <h3 className="mb-2 text-2xl font-semibold text-[#f5efe6]">{item.title}</h3>
              <p className="mb-4 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                {item.org}
              </p>
              <p className="leading-8 text-[#d8d0c4]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#c6a972]/30 hover:bg-white/[0.07]">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Beyond Work
          </p>
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            What keeps me sharp
          </h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <span key={item} className={darkChipClass}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-[#c6a972]/20 bg-[#121212] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a972]/35 hover:shadow-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Open to Data Scientist, ML Engineer, and Applied AI opportunities
          </h2>
          <p className="mb-8 max-w-3xl text-lg leading-8 text-[#d8d0c4]">
            I’m especially interested in roles where machine learning, analytics,
            experimentation, and systems execution come together to shape product
            performance and business decisions.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a972]/30 hover:bg-white/[0.07]">
              <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                Email
              </p>
              <a
                href="mailto:work.kashishlalwani@gmail.com"
                className="text-[#f5efe6] transition-colors duration-300 hover:text-[#c6a972]"
              >
                work.kashishlalwani@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a972]/30 hover:bg-white/[0.07]">
              <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                LinkedIn
              </p>
              <a
                href="https://linkedin.com/in/kashishlalwani13"
                target="_blank"
                rel="noreferrer"
                className="text-[#f5efe6] transition-colors duration-300 hover:text-[#c6a972]"
              >
                linkedin.com/in/kashishlalwani13
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a972]/30 hover:bg-white/[0.07]">
              <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                GitHub
              </p>
              <a
                href="https://github.com/kashishlalwani13"
                target="_blank"
                rel="noreferrer"
                className="text-[#f5efe6] transition-colors duration-300 hover:text-[#c6a972]"
              >
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