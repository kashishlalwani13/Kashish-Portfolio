import Image from "next/image";

const roleFocus = [
  "Applied ML & AI",
  "Retrieval & RAG Systems",
  "Product Analytics",
  "Experimentation Infrastructure",
  "Finance & Decision Intelligence",
  "Evaluation-Driven ML",
];

const skills = {
  Languages: ["Python", "SQL", "R", "C/C++"],
  "ML / AI": [
    "Machine Learning",
    "Model Evaluation",
    "Statistical Testing",
    "Feature Engineering",
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
  ],
  "GenAI / Retrieval": [
    "RAG",
    "Embeddings",
    "FAISS",
    "Vector Search",
    "LangChain",
    "GPT APIs",
    "Semantic Retrieval",
  ],
  "Data / Analytics": [
    "A/B Testing",
    "KPI Design",
    "Root-Cause Analysis",
    "Dashboarding",
    "Decision Intelligence",
    "ETL / ELT",
  ],
  "Systems / Infra": [
    "FastAPI",
    "Airflow",
    "Docker",
    "AWS",
    "BigQuery",
    "Git",
    "Experimentation Infrastructure",
  ],
  "Visualization / BI": ["Tableau", "Power BI", "Looker", "Excel"],
};

const professionalStrengths = [
  "Analytical Thinking",
  "Problem Solving",
  "Research Communication",
  "Stakeholder Collaboration",
  "Experiment Design",
  "Technical Storytelling",
  "Product Thinking",
  "Leadership",
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
    role: "Research Assistant",
    company: "Stony Brook University",
    location: "USA",
    period: "Aug 2025 – Dec 2025",
    type: "Python | SQL | Retrieval Systems | Statistical Evaluation",
    bullets: [
      "Engineered deterministic ML evaluation frameworks processing 1M+ records and 100K+ queries to benchmark robustness across multi-engine retrieval systems.",
      "Designed reproducible cross-engine pipelines with cached artifacts and validation logic, eliminating metric inconsistencies and strengthening KPI credibility for system comparison.",
      "Implemented True-PIR-based robustness evaluation and statistical bias diagnostics, enabling systematic detection of semantic drift and ranking instability under query perturbations.",
      "Automated audit and reporting workflows improving visibility into system behavior and reducing manual evaluation overhead.",
      "Profiled latency, throughput, and scaling constraints to identify bottlenecks and guide retrieval optimization under large-scale inference loads.",
    ],
  },
  {
    role: "Founding AI Engineer",
    company: "Versaunt (Aayats), Inc.",
    location: "USA",
    period: "May 2025 – Aug 2025",
    type: "ML Systems | Product Analytics | Experimentation",
    bullets: [
      "Designed and productionized experimentation infrastructure processing 50K+ daily events to monitor model behavior across 10K+ users and 500K+ monthly queries.",
      "Built behavioral feature pipelines over 1M+ interaction records, improving signal quality, evaluation robustness, and real-world performance consistency.",
      "Owned KPI dashboards and evaluation pipelines influencing roadmap prioritization and release validation decisions.",
      "Implemented A/B experimentation workflows reducing experiment turnaround by 30% and accelerating validated model releases.",
      "Integrated API-based inference pipelines with automated monitoring, detecting degradation patterns and strengthening production stability.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Saroj Group of Companies",
    location: "India",
    period: "Jan 2024 – Jul 2024",
    type: "Operational Analytics | Predictive Modeling",
    bullets: [
      "Reduced defect rate by 40% using statistical modeling on 100K+ records, generating $50K in annual savings through root-cause-driven process optimization.",
      "Improved profit margin by 12% by identifying cost leakage and operational inefficiencies through structured SQL and Python analysis.",
      "Automated reporting pipelines eliminating 25+ manual hours per month and improving data reliability for operational planning.",
    ],
  },
];

const featuredProjects = [
  {
    title: "Search Perturbation Robustness & Bias (PIR / PB)",
    tag: "Research · Featured",
    status: "Public",
    tech: "Python, Retrieval Evaluation, Google CSE, DuckDuckGo, Statistical Diagnostics",
    description:
      "Built a reproducible framework to evaluate whether search rankings remain stable under meaning-preserving rewrites. Designed deterministic execution, cached artifacts, True-PIR metrics, focal-item tracking, and bias diagnostics for credible cross-engine comparison.",
    impact:
      "Measured engine robustness with Mean PIR scores of 0.625 for Google and 0.586 for DuckDuckGo, surfacing ranking instability under paraphrased queries.",
    github: "https://github.com/kashishlalwani13/pirpb",
    linkLabel: "GitHub",
    secondaryLink:
      "https://medium.com/@kaashishlalwani/same-question-different-words-do-search-rankings-stay-stable-2bf28c07cf20",
    secondaryLabel: "Article",
  },
  {
    title: "Scalable Retrieval Benchmarking for RAG Systems",
    tag: "ML Systems · Featured",
    status: "Public",
    tech: "Python, FAISS, Vector Embeddings, NumPy",
    description:
      "Built dense embedding and FAISS indexing pipelines simulating large-scale retrieval workloads from 10K to 50K chunks. Profiled indexing efficiency, p50/p95 latency, and throughput to evaluate scaling trade-offs.",
    impact:
      "Created a benchmark framework for retrieval bottleneck analysis and system optimization under realistic scaling constraints.",
    github: "https://github.com/garima24112000/Scaling-Retrieval-System",
    linkLabel: "GitHub",
  },
  {
    title: "AI-Enhanced Portfolio Management System",
    tag: "Finance + ML · Featured",
    status: "Public",
    tech: "Python, cvxpy, Pandas, Risk Modeling, CVaR",
    description:
      "Developed a risk-aware capital allocation engine using CVaR optimization and adaptive volatility forecasting for public equity portfolios.",
    impact:
      "Improved Sharpe ratio by 15% and reduced downside risk by 28% in simulated downturns, while enabling faster rebalancing decisions.",
    github: "https://github.com/kashishlalwani13/AI-Portfolio-Management",
    linkLabel: "GitHub",
  },
];

const selectedProjects = [
  {
    title: "Formula 1 Performance Analytics",
    tech: "Python, XGBoost, Regression, Clustering, Statistical Testing",
    description:
      "Built predictive and clustering models on 150K+ lap records for lap time estimation, driver segmentation, and race strategy analysis.",
    github: "https://github.com/kashishlalwani13/Formula1-Performance-Analytics",
    status: "Public",
    note: "",
  },
  {
    title: "RAG Financial Intelligence Platform",
    tech: "GPT-3.5 Turbo, LangChain, ChromaDB, Financial Document Analysis",
    description:
      "Built an AI-powered financial intelligence system for due diligence across 20+ financial document types, including earnings reports, deal memos, and pitch decks. Designed retrieval and summarization workflows that reduced analysis time by 60% and improved investment decision efficiency by 40%.",
    github: "",
    status: "Confidential",
    note: "Smart India Hackathon 2023 finalist. Repository unavailable due to confidential/IP constraints.",
  },
];

const currentWork = {
  title: "Clinical Phenotype Extraction Pipeline",
  subtitle: "In Progress · Harvard HackRare Project",
  description:
    "Developing a modular NLP pipeline that converts unstructured clinical notes into structured phenotype data for clinical analytics and biomedical research.",
  bullets: [
    "Built phenotype extraction workflows using spaCy and negspacy to detect negated findings such as 'no seizures'.",
    "Implemented ontology mapping linking extracted findings to Human Phenotype Ontology (HPO) terms using hp.obo.",
    "Designed evaluation framework using Micro-F1 and Macro-F1 metrics for gold-standard comparison.",
    "Built a Streamlit dashboard for interactive review of notes, extracted findings, and evaluation outputs.",
  ],
};

const writing = [
  {
    title: "Same Question, Different Words — Do Search Rankings Stay Stable?",
    type: "Medium Article",
    description:
      "A technical write-up of the PIR / PB framework for measuring ranking robustness under paraphrased search queries.",
    link: "https://medium.com/@kaashishlalwani/same-question-different-words-do-search-rankings-stay-stable-2bf28c07cf20",
  },
];

const awards = [
  {
    title: "Best Outgoing Student",
    org: "D. Y. Patil College of Engineering & Technology",
    year: "2024",
    description:
      "Top graduating distinction awarded for excellence across academics, research, leadership, technical work, and extracurricular achievement.",
  },
  {
    title: "Smart India Hackathon Finalist",
    org: "Smart India Hackathon",
    year: "2023",
    description:
      "Recognized among the top finalist teams in the national innovation competition for an AI-powered financial intelligence solution.",
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
      "Competitive chess recognition across multiple championship levels, reflecting strategic thinking, discipline, and high-performance decision making.",
  },
];

const leadership = [
  {
    title: "Council Secretary",
    org: "Student Council, Shivaji University",
    description:
      "Served through the last 3 years of undergraduate study until 2024, representing and coordinating initiatives impacting 4,000+ students across institutional, academic, and student-led activities.",
  },
  {
    title: "Secretary",
    org: "Rotaract Club / Rotary District 3170",
    description:
      "Led coordination, planning, and execution across initiatives connected to nearly 75 clubs, strengthening organizational leadership, stakeholder communication, and community impact.",
  },
];

const interests = [
  "Business",
  "Finance & Investments",
  "Professional Chess",
  "Music",
  "Indian Classical Dance",
  "Roller Skating",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5efe6]">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="text-lg font-semibold tracking-wide text-[#c6a972]"
          >
            Kashish Lalwani
          </a>

          <div className="hidden items-center gap-6 text-sm text-[#d8d0c4] lg:flex">
            <a href="#about" className="transition hover:text-[#c6a972]">
              About
            </a>
            <a href="#education" className="transition hover:text-[#c6a972]">
              Education
            </a>
            <a href="#experience" className="transition hover:text-[#c6a972]">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-[#c6a972]">
              Projects
            </a>
            <a href="#current-work" className="transition hover:text-[#c6a972]">
              Current Work
            </a>
            <a href="#awards" className="transition hover:text-[#c6a972]">
              Awards
            </a>
            <a href="#contact" className="transition hover:text-[#c6a972]">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Kashish_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-[#f5efe6] transition hover:border-[#c6a972] hover:text-[#c6a972] sm:inline-flex"
            >
              Resume
            </a>
            <a
              href="mailto:work.kashishlalwani@gmail.com"
              className="rounded-full border border-[#c6a972] px-4 py-2 text-sm text-[#c6a972] transition hover:bg-[#c6a972] hover:text-black"
            >
              Email Me
            </a>
          </div>
        </div>
      </nav>

      <section
        id="top"
        className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2"
      >
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Data Science • Applied ML • GenAI • Analytics
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Kashish
            <span className="block text-[#c6a972]">Lalwani</span>
          </h1>

          <p className="mb-4 max-w-2xl text-lg leading-8 text-[#d8d0c4] md:text-xl">
            Data &amp; AI Engineer building evaluation-driven ML systems,
            retrieval pipelines, experimentation infrastructure, and
            finance-oriented analytics products that turn complex data into
            measurable decision advantage.
          </p>

          <p className="mb-6 max-w-2xl text-base italic leading-7 text-[#cdb792] md:text-lg">
            Let&apos;s talk about AI, markets, or building systems that actually
            move decisions.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            {roleFocus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#c6a972]/30 bg-[#c6a972]/10 px-4 py-2 text-sm text-[#eadfcd]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/kashishlalwani13"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#c6a972] px-6 py-3 font-medium text-black transition hover:opacity-90"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/kashishlalwani13"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-[#f5efe6] transition hover:border-[#c6a972] hover:text-[#c6a972]"
            >
              LinkedIn
            </a>

            <a
              href="/Kashish_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-[#f5efe6] transition hover:border-[#c6a972] hover:text-[#c6a972]"
            >
              Resume
            </a>

            <a
              href="#projects"
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-[#f5efe6] transition hover:border-[#c6a972] hover:text-[#c6a972]"
            >
              View Work
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 text-sm text-[#b8afa1] md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-[#f5efe6]">1M+</p>
              <p>records processed in evaluation and analytics workflows</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-[#f5efe6]">100K+</p>
              <p>queries benchmarked across retrieval systems</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-[#f5efe6]">50K+</p>
              <p>daily events processed in experimentation infrastructure</p>
            </div>
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.18em] text-[#a89d8c]">
            Currently building: Clinical Phenotype Extraction Pipeline · HackRare
          </p>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(198,169,114,0.18),_transparent_55%)]" />

          <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-[#c6a972]/30 bg-[#151515] p-3 shadow-2xl">
            <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-[#c6a972]/10 blur-2xl" />
            <Image
              src="/images/profile.jpg"
              alt="Kashish Lalwani"
              width={900}
              height={1200}
              className="h-auto w-full rounded-[1.5rem] object-cover"
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
            Building reliable AI systems with analytical depth
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-lg leading-8 text-[#d8d0c4]">
              I’m a Data Science graduate student at Stony Brook University
              focused on building systems that are not only intelligent, but
              measurable, reproducible, and decision-useful. My work sits at the
              intersection of applied machine learning, retrieval systems,
              experimentation, analytics, and financial modeling.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#c6a972]">
              What I care about
            </p>
            <ul className="space-y-4 text-[#d8d0c4]">
              <li>• Evaluation-driven ML systems with real performance visibility</li>
              <li>• Retrieval and RAG pipelines that scale reliably</li>
              <li>• KPI systems, experimentation, and decision intelligence</li>
              <li>• Finance, markets, and risk-aware analytical products</li>
            </ul>
          </div>
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
            <div
              key={item.school}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-semibold text-[#f5efe6]">
                {item.school}
              </h3>
              <p className="mt-2 text-lg text-[#d8d0c4]">{item.degree}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                {item.location}
              </p>
              <p className="mt-2 text-sm text-[#b8afa1]">{item.period}</p>
              {item.note ? (
                <p className="mt-4 leading-7 text-[#d8d0c4]">{item.note}</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Experience
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Roles where I built impact at scale
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((item) => (
            <div
              key={`${item.role}-${item.company}`}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#f5efe6]">
                    {item.role}
                  </h3>
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
            Featured Projects
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Flagship work across AI, retrieval, and finance
          </h2>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-[#c6a972]/40 hover:bg-white/[0.07]"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <p className="text-sm uppercase tracking-[0.18em] text-[#c6a972]">
                  {project.tag}
                </p>
                <span
                  className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.16em] ${project.status === "Public"
                    ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                    : "border border-amber-400/20 bg-amber-400/10 text-amber-200"
                    }`}
                >
                  {project.status}
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
                  className="rounded-full bg-[#c6a972] px-5 py-2.5 font-medium text-black transition hover:opacity-90"
                >
                  {project.linkLabel}
                </a>

                {project.secondaryLink && project.secondaryLabel ? (
                  <a
                    href={project.secondaryLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-5 py-2.5 font-medium text-[#f5efe6] transition hover:border-[#c6a972] hover:text-[#c6a972]"
                  >
                    {project.secondaryLabel}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#c6a972]">
            Additional Selected Work
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {selectedProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold text-[#f5efe6]">
                    {project.title}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.16em] ${project.status === "Public"
                      ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                      : "border border-amber-400/20 bg-amber-400/10 text-amber-200"
                      }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mb-4 text-sm uppercase tracking-[0.12em] text-[#b8afa1]">
                  {project.tech}
                </p>

                <p className="mb-4 leading-8 text-[#d8d0c4]">
                  {project.description}
                </p>

                {project.note ? (
                  <p className="mb-6 text-sm text-[#a89d8c]">{project.note}</p>
                ) : null}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-5 py-2.5 font-medium text-[#f5efe6] transition hover:border-[#c6a972] hover:text-[#c6a972]"
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

      <section id="current-work" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-[#c6a972]/20 bg-[#121212] p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Current Work
          </p>
          <h2 className="mb-3 text-3xl font-semibold md:text-4xl">
            {currentWork.title}
          </h2>
          <p className="mb-6 text-sm uppercase tracking-[0.18em] text-[#b8afa1]">
            {currentWork.subtitle}
          </p>
          <p className="mb-8 max-w-3xl text-lg leading-8 text-[#d8d0c4]">
            {currentWork.description}
          </p>

          <ul className="grid gap-4 md:grid-cols-2">
            {currentWork.bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 leading-8 text-[#d8d0c4]"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Technical Toolkit
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Tools, systems, and capabilities
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="mb-5 text-xl font-semibold text-[#f5efe6]">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#c6a972]/30 bg-[#c6a972]/10 px-4 py-2 text-sm text-[#e8dcc8]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Professional Strengths
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">How I work</h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-wrap gap-3">
            {professionalStrengths.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-[#111111] px-4 py-2 text-sm text-[#d8d0c4]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Leadership
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Beyond technical execution
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-1">
          {leadership.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="mb-2 text-2xl font-semibold text-[#f5efe6]">
                {item.title}
              </h3>
              <p className="mb-4 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                {item.org}
              </p>
              <p className="leading-8 text-[#d8d0c4]">{item.description}</p>
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
            Technical writing and thought leadership
          </h2>
        </div>

        <div className="grid gap-6">
          {writing.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[#c6a972]">
                {item.type}
              </p>
              <h3 className="mb-4 text-2xl font-semibold text-[#f5efe6]">
                {item.title}
              </h3>
              <p className="mb-6 max-w-3xl leading-8 text-[#d8d0c4]">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-2.5 font-medium text-[#f5efe6] transition hover:border-[#c6a972] hover:text-[#c6a972]"
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
            Awards & Recognition
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Signals of excellence, leadership, and competitive drive
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award) => (
            <div
              key={award.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold text-[#f5efe6]">
                  {award.title}
                </h3>
                <span className="text-sm text-[#b8afa1]">{award.year}</span>
              </div>
              <p className="mb-4 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                {award.org}
              </p>
              <p className="leading-8 text-[#d8d0c4]">{award.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Interests
          </p>
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Beyond the work
          </h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-[#111111] px-4 py-2 text-sm text-[#d8d0c4]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-[#c6a972]/20 bg-[#121212] p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c6a972]">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Open to impactful roles in AI, ML, analytics, and decision systems
          </h2>
          <p className="mb-8 max-w-3xl text-lg leading-8 text-[#d8d0c4]">
            Reach out for opportunities, research conversations, product ideas,
            or simply a sharp discussion on AI, finance, and systems thinking.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                Primary Email
              </p>
              <a
                href="mailto:work.kashishlalwani@gmail.com"
                className="text-[#f5efe6] transition hover:text-[#c6a972]"
              >
                work.kashishlalwani@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                Alternate Email
              </p>
              <a
                href="mailto:kaashishlalwani@gmail.com"
                className="text-[#f5efe6] transition hover:text-[#c6a972]"
              >
                kaashishlalwani@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                USA Phone
              </p>
              <a
                href="tel:+19342463035"
                className="text-[#f5efe6] transition hover:text-[#c6a972]"
              >
                +1 934 246 3035
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="mb-2 text-sm uppercase tracking-[0.14em] text-[#c6a972]">
                India Phone
              </p>
              <a
                href="tel:+919371444111"
                className="text-[#f5efe6] transition hover:text-[#c6a972]"
              >
                +91 93714 44111
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/kashishlalwani13"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#c6a972] px-6 py-3 font-medium text-black transition hover:opacity-90"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/kashishlalwani13"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-[#f5efe6] transition hover:border-[#c6a972] hover:text-[#c6a972]"
            >
              GitHub
            </a>

            <a
              href="/Kashish_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-[#f5efe6] transition hover:border-[#c6a972] hover:text-[#c6a972]"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}