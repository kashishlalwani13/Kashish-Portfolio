"use client";

import { useState } from "react";
import Image from "next/image";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

/* Palette (from profile photo)
   ivory   #f8f3ea  page background (roses, dress)
   linen   #efe6d6  soft cards
   espresso#2a1a12  text and dark bands (polka dots)
   cocoa   #5b3a29  secondary text
   caramel #8a5232  accent text on light (hair)
   gold    #d4ab72  accent on dark (earrings)
*/

const focusAreas = [
  "Data Analytics",
  "Reporting and Dashboards",
  "Data Quality",
  "Finance Analytics",
  "Healthcare Data",
  "Applied AI",
];

const education = [
  {
    school: "Stony Brook University",
    degree: "Master of Science in Data Science",
    period: "Aug 2024 to May 2026",
    note: "",
  },
  {
    school: "Shivaji University",
    degree: "B.Tech in Computer Science (AI and ML)",
    period: "Aug 2020 to May 2024",
    note: "Best Outgoing Student (sole recipient)",
  },
];

const experiences = [
  {
    role: "Research Assistant",
    company: "CUBIT Lab, Stony Brook University",
    location: "USA",
    period: "Aug 2026 to Present",
    type: "Research Data · Data Quality",
    bullets: ["Quality-control dashboard for health research data (actigraphy)."],
  },
  {
    role: "Data Scientist",
    company: "Stony Brook University",
    location: "USA",
    period: "Aug 2025 to Dec 2025",
    type: "Evaluation · Statistical Analysis · Monitoring",
    bullets: [
      "Built SQL and Python pipelines over 1M+ records and 100K+ queries to evaluate a retrieval system.",
      "Designed True-PIR metrics and bias checks to measure how stable search rankings stay.",
      "Used root-cause and statistical analysis to explain where and why results changed.",
      "Set up monitoring for latency and throughput, plus validation and audit checks.",
    ],
  },
  {
    role: "Founding AI Engineer",
    company: "Versaunt (fka. Aayats), Inc.",
    location: "USA",
    period: "May 2025 to Aug 2025",
    type: "Product Analytics · Experimentation · Quality",
    bullets: [
      "Owned analytics, quality and monitoring at a small AI startup.",
      "Ran A/B tests and cohort analysis across 50K+ daily events.",
      "Built dashboards to track a platform at 10K+ users and 500K+ queries.",
      "Shipped a few small features. The engineering team built the core backend.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Saroj Group of Companies",
    location: "India",
    period: "Jan 2024 to Jul 2024",
    type: "Finance Reporting · Forecasting · Automation",
    bullets: [
      "Used statistical modeling on 100K+ records to help cut defect rates by 40%.",
      "Ran forecasting and cost scenario analysis that supported a 12% margin gain.",
      "Built KPI dashboards in SQL, Excel and Tableau, cutting reporting time by 35%.",
      "Automated four Python and SQL reporting pipelines, saving 25+ hours a month.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Kamala Plastics",
    location: "India",
    period: "Jul 2023 to Dec 2023",
    type: "ETL · Reconciliation · Operations Analytics",
    bullets: [
      "Built ETL pipelines that brought 200K+ records from systems that named machines differently under one standard.",
      "Validated and reconciled the data so counts and totals matched across reports.",
      "Ran root-cause analysis that gave engineering the evidence to cut scrap by 22% and returns by 15%.",
    ],
  },
  {
    role: "Research Assistant",
    company: "Dept. of AI and ML, D.Y. Patil College of Engineering and Technology",
    location: "India",
    period: "Sep 2022 to May 2024",
    type: "Applied AI Research · Mentorship",
    bullets: [
      "Built a CNN-based malaria diagnostic tool that reached 92% accuracy and cut diagnostic time by 65%.",
      "Built a YOLOv4 object detection system with 95% accuracy at 30+ FPS.",
      "Developed an LSB image steganography method that improved concealment by 40%.",
      "Led the research track behind a Smart India Hackathon RAG platform for a national government client.",
      "Mentored peers as Head of R&D for the AIML Students Association.",
    ],
  },
];

type Project = {
  title: string;
  group: string;
  tags: string[];
  headline: string;
  problem: string;
  did: string;
  tools: string;
  result: string;
  learned: string;
  github?: string;
  hosted?: string;
  article?: string;
  note?: string;
};

const projects: Project[] = [
  {
    title: "AI Portfolio Risk and Forecasting Model",
    group: "Finance and business analytics",
    tags: ["Finance", "Analytics"],
    headline: "Sharpe +15% · downside risk −28%",
    problem: "Return alone does not show how bad the bad days can get.",
    did: "Built forecasting models and a CVaR-based optimization to balance return against downside risk.",
    tools: "Python, XGBoost, CVaR, Pandas",
    result: "Sharpe ratio up 15% and downside risk down 28%.",
    learned: "Planning for the worst case changes which choice looks best.",
    github: "https://github.com/kashishlalwani13/AI-Portfolio-Management",
  },
  {
    title: "Aegis: Cost-Aware Fraud Detection",
    group: "Finance and business analytics",
    tags: ["Finance", "AI"],
    headline: "F1 0.9942 · ~$19.4M modeled",
    problem: "Blocking too many payments hurts good customers. Blocking too few costs money. The cut-off is a business decision.",
    did: "Built a fraud pipeline on PySpark and Databricks, picked the threshold by cost, and added drift detection to catch when data changes.",
    tools: "Python, PySpark, Databricks, MLflow, XGBoost, drift detection",
    result: "F1 0.9942 and AUC 0.993 on test data. About $19.4M in reduced exposure, as a modeled estimate.",
    learned: "The best threshold depends on what each mistake costs.",
    github: "https://github.com/kashishlalwani13/aegis-fraud-detection",
    hosted: "https://kashishlalwani13.github.io/aegis-fraud-detection/",
    article: "https://medium.com/@kaashishlalwani/the-threshold-is-a-business-decision-not-a-statistical-one-db6ab69efa0b",
  },
  {
    title: "Formula 1 Performance Analytics",
    group: "Finance and business analytics",
    tags: ["Analytics"],
    headline: "150K+ records · 20+ KPIs",
    problem: "Raw race telemetry is too dense to compare drivers and races directly.",
    did: "Built a SQL analytics layer over 150K+ telemetry records and tracked 20+ KPIs in Tableau.",
    tools: "SQL, Python, Tableau",
    result: "A clear view of performance gaps and trends across races.",
    learned: "Picking the right KPIs is most of the work.",
    github: "https://github.com/kashishlalwani13/Formula1-Performance-Analytics",
  },
  {
    title: "Search Ranking Stability (PIR / PB)",
    group: "Data quality and evaluation",
    tags: ["Analytics"],
    headline: "Cross-engine stability benchmark",
    problem: "Search rankings can shift when the same question is worded differently, and there was no clean way to measure it.",
    did: "Built repeatable pipelines with cached results, designed True-PIR metrics and bias checks, and compared search engines.",
    tools: "Python, statistical testing, Google CSE, DuckDuckGo",
    result: "Measured real ranking instability across engines, with a method others can rerun and audit.",
    learned: "A metric is only useful if someone else can reproduce it.",
    github: "https://github.com/kashishlalwani13/pirpb",
    article: "https://medium.com/@kaashishlalwani/same-question-different-words-do-search-rankings-stay-stable-2bf28c07cf20",
  },
  {
    title: "Clinical Notes to Structured Data",
    group: "Health data",
    tags: ["Healthcare", "AI"],
    headline: "Harvard HackRare 2026 · Finalist",
    problem: "Rare disease notes mix what a patient has with what they do not. A note that says \"no seizures\" must not count as seizures.",
    did: "Built an NLP pipeline that finds negated and uncertain symptoms and maps findings to HPO and GA4GH standards.",
    tools: "Python, spaCy, negspacy, HPO, GA4GH, Streamlit",
    result: "Finalist at Harvard HackRare 2026.",
    learned: "In health data, what is absent matters as much as what is present.",
    github: "https://github.com/kashishlalwani13/Structured-Clinical-Data-Pipeline-",
    article: "https://medium.com/@kaashishlalwani/7-years-thats-how-long-rare-disease-patients-wait-for-a-correct-diagnosis-b15b775ca801",
  },
  {
    title: "RAG Financial Intelligence Platform",
    group: "Applied AI and ML",
    tags: ["Finance", "AI"],
    headline: "Latency −60% · decision efficiency +40%",
    problem: "Analysts spent too long finding answers across large sets of financial documents.",
    did: "Built a retrieval approach that finds the relevant passages and passes them to a language model to answer questions.",
    tools: "Python, LLMs, LangChain, vector search, ETL",
    result: "Response latency down 60% and decision efficiency up 40%.",
    learned: "Clean, well-organized source data matters more than the model.",
    note: "Confidential government client. I can share the approach only.",
  },
  {
    title: "Scalable Retrieval Benchmarking",
    group: "Applied AI and ML",
    tags: ["AI"],
    headline: "Indexing vs. brute-force scaling",
    problem: "Retrieval systems slow down as data grows, and it was unclear where the bottleneck was.",
    did: "Built a FAISS benchmark that simulated growing workloads and measured latency, throughput and indexing efficiency.",
    tools: "Python, FAISS, vector embeddings, NumPy",
    result: "Found the bottlenecks and showed that better indexing can beat simply scaling up.",
    learned: "Measure before you scale.",
    github: "https://github.com/garima24112000/Scaling-Retrieval-System",
    article: "https://medium.com/@kaashishlalwani/scaling-retrieval-systems-why-smarter-memory-might-beat-bigger-ai-models-f7f78c3db267",
  },
];

const filters = ["All", "Analytics", "Finance", "Healthcare", "AI"];
const groups = [
  "Finance and business analytics",
  "Data quality and evaluation",
  "Health data",
  "Applied AI and ML",
];

const habits = [
  { title: "Check the data first", text: "I validate the data before anyone sees a chart." },
  { title: "Make the numbers add up", text: "I reconcile counts and totals. If two sources disagree, I find out why." },
  { title: "Write it down", text: "I document the work so others can reuse it without me." },
  { title: "Say it plainly", text: "I explain results in plain language, with the decision up front." },
  { title: "Flag risk early", text: "If something is at risk, I tell people early, while it is still easy to fix." },
];

const toolkit = [
  {
    title: "Analytics and BI",
    items: ["SQL", "Excel", "Tableau", "Power BI", "KPI design", "A/B testing", "Cohort analysis", "Forecasting", "Root-cause analysis"],
  },
  {
    title: "Data Engineering",
    items: ["Python", "Pandas", "ETL", "Data pipelines", "Data validation", "PostgreSQL", "PySpark", "Databricks"],
  },
  {
    title: "AI and ML",
    items: ["Predictive modeling", "Model evaluation", "XGBoost", "scikit-learn", "NLP (spaCy)", "Retrieval and RAG basics", "LangChain", "FAISS", "MLflow"],
  },
  {
    title: "AI-Assisted Development",
    items: ["Claude", "Claude Code", "ChatGPT", "Gemini", "GitHub Copilot"],
  },
];

const projectWriting = [
  {
    title: "The Threshold Is a Business Decision, Not a Statistical One",
    description: "Why choosing the right cut-off in fraud detection matters more than accuracy alone.",
    link: "https://medium.com/@kaashishlalwani/the-threshold-is-a-business-decision-not-a-statistical-one-db6ab69efa0b",
  },
  {
    title: "7 Years. That's How Long Rare Disease Patients Wait for a Correct Diagnosis.",
    description: "On the rare disease diagnosis gap and how structured clinical data can help.",
    link: "https://medium.com/@kaashishlalwani/7-years-thats-how-long-rare-disease-patients-wait-for-a-correct-diagnosis-b15b775ca801",
  },
  {
    title: "Same Question, Different Words: Do Search Rankings Stay Stable?",
    description: "Measuring how much rankings move when a question is reworded.",
    link: "https://medium.com/@kaashishlalwani/same-question-different-words-do-search-rankings-stay-stable-2bf28c07cf20",
  },
  {
    title: "Scaling Retrieval Systems: Why Smarter Memory Might Beat Bigger AI Models",
    description: "Indexing choices, latency bottlenecks and what to fix first.",
    link: "https://medium.com/@kaashishlalwani/scaling-retrieval-systems-why-smarter-memory-might-beat-bigger-ai-models-f7f78c3db267",
  },
];

const conceptWriting = [
  {
    title: "They Made It Hard to Leave. I Wanted to Know Why.",
    description: "A data-driven look at the retention patterns that keep users around.",
    link: "https://medium.com/@kaashishlalwani/they-made-it-hard-to-leave-i-wanted-to-know-why-38146f534b66",
  },
  {
    title: "You're Not Prompting AI. You're Controlling a Probabilistic System.",
    description: "A simple mental model for working with LLMs.",
    link: "https://medium.com/@kaashishlalwani/youre-not-prompting-ai-you-re-controlling-a-probabilistic-system-f53d06989fd3",
  },
];

const recognition = [
  { title: "Best Outgoing Student", detail: "Sole recipient", year: "2024" },
  { title: "Harvard HackRare Finalist", detail: "Clinical notes pipeline", year: "2026" },
  { title: "Smart India Hackathon Finalist", detail: "National, Ministry of Power", year: "2023" },
  { title: "Student Council Secretary", detail: "Three terms, about 4,000 students", year: "" },
  { title: "Best Emerging Rotaractor", detail: "Across 75+ clubs · District 3170 Secretary of the Year", year: "2024" },
  { title: "District Chess Champion", detail: "Two years running", year: "2023, 2024" },
];

const interests = ["Finance and Markets", "Chess", "Music", "Indian Classical Dance", "Travel", "Coffee"];

/* Shared styles */
const serif = "font-[family-name:var(--font-display)]";
const label = "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a5232]";
const h2 = `${serif} text-4xl font-semibold leading-tight text-[#2a1a12] md:text-5xl`;
const navLinkClass = "transition-colors duration-300 hover:text-[#8a5232]";
const primaryButtonClass =
  "rounded-full bg-[#2a1a12] px-6 py-3 font-medium text-[#f8f3ea] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5b3a29]";
const secondaryButtonClass =
  "rounded-full border border-[#2a1a12]/30 px-6 py-3 font-medium text-[#2a1a12] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8a5232] hover:text-[#8a5232]";
const smallLinkClass =
  "rounded-full border border-[#2a1a12]/25 px-4 py-2 text-sm font-medium text-[#2a1a12] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8a5232] hover:text-[#8a5232]";
const cardClass =
  "rounded-3xl border border-[#2a1a12]/10 bg-white/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a5232]/40 hover:shadow-[0_20px_40px_-20px_rgba(42,26,18,0.35)]";
const chipClass = "rounded-full border border-[#8a5232]/25 bg-[#efe6d6] px-4 py-2 text-sm text-[#2a1a12]";
const dots =
  "bg-[radial-gradient(circle,rgba(42,26,18,0.13)_1.6px,transparent_1.8px)] [background-size:26px_26px]";

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(projects[0].title);

  const visible = projects.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <main
      className={`${display.variable} ${body.variable} min-h-screen bg-[#f8f3ea] font-[family-name:var(--font-body)] text-[#2a1a12]`}
    >
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-[#2a1a12]/10 bg-[#f8f3ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className={`${serif} text-2xl font-semibold text-[#2a1a12] transition-opacity hover:opacity-80`}>
            Kashish <span className="italic text-[#8a5232]">Lalwani</span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-[#5b3a29] lg:flex">
            <a href="#about" className={navLinkClass}>About</a>
            <a href="#experience" className={navLinkClass}>Experience</a>
            <a href="#projects" className={navLinkClass}>Projects</a>
            <a href="#how" className={navLinkClass}>How I Work</a>
            <a href="#toolkit" className={navLinkClass}>Toolkit</a>
            <a href="#writing" className={navLinkClass}>Writing</a>
            <a href="#contact" className={navLinkClass}>Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="/Kashish_Resume.pdf" target="_blank" rel="noreferrer"
              className="hidden rounded-full border border-[#2a1a12]/25 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8a5232] hover:text-[#8a5232] sm:inline-flex">
              Resume
            </a>
            <a href="mailto:work.kashishlalwani@gmail.com"
              className="rounded-full bg-[#2a1a12] px-4 py-2 text-sm text-[#f8f3ea] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5b3a29]">
              Email Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className={`absolute inset-0 -z-10 ${dots}`} />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_40%,rgba(248,243,234,0)_0%,#f8f3ea_70%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <p className={label}>Data · Analytics · Finance · Healthcare · Applied AI</p>
            <h1 className={`${serif} mb-6 text-6xl font-semibold leading-[0.95] md:text-8xl`}>
              Kashish
              <span className="block italic text-[#8a5232]">Lalwani</span>
            </h1>
            <p className={`${serif} mb-5 max-w-2xl text-2xl leading-snug text-[#2a1a12] md:text-3xl`}>
              Data analyst turning messy data into clear decisions. Finance, healthcare and applied AI.
            </p>
            <p className="mb-6 max-w-2xl text-lg leading-8 text-[#5b3a29]">
              {"MS in Data Science from Stony Brook. I've done hands-on work in finance reporting, manufacturing analytics, research data and an AI startup. I'm most interested in finance and healthcare, where good data leads to better decisions."}
            </p>
            <p className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#5b3a29]">
              <span className="h-2 w-2 rounded-full bg-[#8a5232]" /> Texas, USA
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {focusAreas.map((item) => (
                <span key={item} className={chipClass}>{item}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/Kashish_Resume.pdf" target="_blank" rel="noreferrer" className={primaryButtonClass}>Resume</a>
              <a href="https://linkedin.com/in/kashishlalwani13" target="_blank" rel="noreferrer" className={secondaryButtonClass}>LinkedIn</a>
              <a href="https://github.com/kashishlalwani13" target="_blank" rel="noreferrer" className={secondaryButtonClass}>GitHub</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-[#8a5232]/40" />
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-[#efe6d6] shadow-[0_30px_60px_-25px_rgba(42,26,18,0.45)]">
              <Image src="/images/profile.jpg" alt="Kashish Lalwani" width={900} height={1200}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]" priority />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-y border-[#2a1a12]/10 bg-[#efe6d6]/80">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-3">
            {[
              ["200K+", "records reconciled across systems"],
              ["25+ hrs", "of manual reporting automated each month"],
              ["1M+", "records analyzed in evaluation pipelines"],
            ].map(([n, l]) => (
              <div key={n}>
                <p className={`${serif} text-4xl font-semibold tabular-nums text-[#2a1a12]`}>{n}</p>
                <p className="text-sm text-[#5b3a29]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <p className={label}>About</p>
        <h2 className={`${h2} mb-10`}>{"Hi, I'm Kashish. "}<span className="italic text-[#8a5232]">Nice to meet you.</span></h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className={cardClass}>
            <p className="mb-4 text-lg leading-8 text-[#2a1a12]">
              {"I like the part of data work most people skip: checking that the numbers are right before anyone makes a decision with them."}
            </p>
            <p className="text-lg leading-8 text-[#5b3a29]">
              {"I've reconciled factory data from systems that didn't agree, automated reports a finance team relied on, run A/B tests at a startup and measured how stable search results are. AI is part of my toolkit too. I use it where it actually helps."}
            </p>
          </div>
          <div className={cardClass}>
            <p className={label}>What I bring</p>
            <ul className="space-y-4 text-[#2a1a12]">
              {[
                "Analytics and reporting that people trust",
                "Clean, reconciled data before the dashboard",
                "Clear explanations of what the numbers mean",
                "Applied AI where it adds real value",
              ].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a5232]" />{t}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[#5b3a29]">Interested in finance and healthcare.</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-[#2a1a12]/10 bg-[#efe6d6]/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className={label}>Experience</p>
          <h2 className={`${h2} mb-12`}>Where I have <span className="italic text-[#8a5232]">done the work</span></h2>
          <div className="relative space-y-6 border-l border-[#8a5232]/30 pl-6 md:pl-10">
            {experiences.map((item) => (
              <div key={`${item.role}-${item.company}`} className={`relative ${cardClass}`}>
                <span className="absolute -left-[31px] top-10 h-3 w-3 rounded-full border-2 border-[#f8f3ea] bg-[#8a5232] md:-left-[47px]" />
                <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className={`${serif} text-3xl font-semibold`}>{item.role}</h3>
                    <p className="mt-1 text-[#5b3a29]">{item.company}, {item.location}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8a5232]">{item.type}</p>
                  </div>
                  <p className="text-sm text-[#5b3a29]">{item.period}</p>
                </div>
                <ul className="space-y-2 text-[#2a1a12]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a5232]" />{bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={label}>Selected Work</p>
            <h2 className={h2}>Projects, <span className="italic text-[#8a5232]">problem first</span></h2>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button key={f} type="button" onClick={() => setFilter(f)} aria-pressed={filter === f}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === f ? "bg-[#2a1a12] text-[#f8f3ea]" : "border border-[#2a1a12]/20 text-[#2a1a12] hover:border-[#8a5232] hover:text-[#8a5232]"
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {groups.map((g) => {
            const list = visible.filter((p) => p.group === g);
            if (!list.length) return null;
            return (
              <div key={g}>
                <p className="mb-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#5b3a29]">
                  {g}<span className="h-px flex-1 bg-[#2a1a12]/15" />
                </p>
                <div className="space-y-4">
                  {list.map((p) => {
                    const isOpen = open === p.title;
                    return (
                      <div key={p.title}
                        className={`rounded-3xl border bg-white/60 transition-all duration-300 ${isOpen ? "border-[#8a5232]/50 shadow-[0_20px_40px_-25px_rgba(42,26,18,0.4)]" : "border-[#2a1a12]/10 hover:border-[#8a5232]/40"}`}>
                        <button type="button" onClick={() => setOpen(isOpen ? null : p.title)} aria-expanded={isOpen}
                          className="flex w-full items-center gap-4 p-6 text-left md:p-8">
                          <div className="min-w-0 flex-1">
                            <div className="mb-2 flex flex-wrap gap-2">
                              {p.tags.map((t) => (
                                <span key={t} className="rounded-full bg-[#efe6d6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a5232]">{t}</span>
                              ))}
                            </div>
                            <h3 className={`${serif} text-2xl font-semibold md:text-3xl`}>{p.title}</h3>
                            <p className="mt-1 text-sm font-medium text-[#5b3a29]">{p.headline}</p>
                          </div>
                          <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#2a1a12]/20 text-xl transition-transform duration-300 ${isOpen ? "rotate-45 bg-[#2a1a12] text-[#f8f3ea]" : ""}`} aria-hidden="true">+</span>
                        </button>
                        {isOpen && (
                          <div className="border-t border-[#2a1a12]/10 px-6 pb-8 pt-6 md:px-8">
                            <dl className="grid gap-6 md:grid-cols-2">
                              {[
                                ["Problem", p.problem],
                                ["What I did", p.did],
                                ["Result", p.result],
                                ["Tools", p.tools],
                                ["What I learned", p.learned],
                              ].map(([k, v]) => (
                                <div key={k}>
                                  <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a5232]">{k}</dt>
                                  <dd className="leading-7 text-[#2a1a12]">{v}</dd>
                                </div>
                              ))}
                            </dl>
                            {p.note && <p className="mt-6 text-sm italic text-[#5b3a29]">{p.note}</p>}
                            <div className="mt-6 flex flex-wrap gap-3">
                              {p.github && <a href={p.github} target="_blank" rel="noreferrer" className={smallLinkClass}>GitHub</a>}
                              {p.hosted && <a href={p.hosted} target="_blank" rel="noreferrer" className={smallLinkClass}>Live Demo</a>}
                              {p.article && <a href={p.article} target="_blank" rel="noreferrer" className={smallLinkClass}>Article</a>}
                              {!p.github && <span className="rounded-full border border-[#2a1a12]/10 px-4 py-2 text-sm text-[#5b3a29]">Repository not public</span>}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How I work */}
      <section id="how" className="relative overflow-hidden bg-[#2a1a12] text-[#f8f3ea]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(248,243,234,0.07)_1.6px,transparent_1.8px)] [background-size:26px_26px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4ab72]">How I Work</p>
          <h2 className={`${serif} mb-12 text-4xl font-semibold md:text-5xl`}>Five habits <span className="italic text-[#d4ab72]">I keep</span></h2>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#f8f3ea]/10 bg-[#f8f3ea]/10 sm:grid-cols-2 lg:grid-cols-5">
            {habits.map((h) => (
              <div key={h.title} className="bg-[#2a1a12] p-6 transition-colors duration-300 hover:bg-[#3a2418]">
                <h3 className={`${serif} mb-2 text-2xl font-semibold text-[#d4ab72]`}>{h.title}</h3>
                <p className="text-sm leading-6 text-[#e9dcc8]">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section id="toolkit" className="mx-auto max-w-7xl px-6 py-20">
        <p className={label}>Toolkit</p>
        <h2 className={`${h2} mb-10`}>What I <span className="italic text-[#8a5232]">work with</span></h2>
        <div className="grid gap-6 md:grid-cols-2">
          {toolkit.map((category) => (
            <div key={category.title} className={cardClass}>
              <h3 className={`${serif} mb-5 text-2xl font-semibold`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className={chipClass}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-7xl px-6 pb-20">
        <p className={label}>Education</p>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div key={item.school} className={cardClass}>
              <h3 className={`${serif} text-3xl font-semibold`}>{item.school}</h3>
              <p className="mt-2 text-lg text-[#2a1a12]">{item.degree}</p>
              <p className="mt-2 text-sm text-[#5b3a29]">{item.period}</p>
              {item.note ? <p className="mt-3 text-sm font-medium text-[#8a5232]">{item.note}</p> : null}
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="border-t border-[#2a1a12]/10 bg-[#efe6d6]/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className={label}>Writing</p>
          <h2 className={`${h2} mb-10`}>On data, decisions <span className="italic text-[#8a5232]">and AI</span></h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[...projectWriting.map((w) => ({ ...w, type: "Project write-up" })), ...conceptWriting.map((w) => ({ ...w, type: "Ideas" }))].map((item) => (
              <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className={`${cardClass} group block`}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a5232]">{item.type}</p>
                <h3 className={`${serif} mb-3 text-2xl font-semibold leading-snug`}>{item.title}</h3>
                <p className="mb-5 leading-7 text-[#5b3a29]">{item.description}</p>
                <span className="text-sm font-medium text-[#2a1a12] transition-colors group-hover:text-[#8a5232]">Read on Medium →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition + interests */}
      <section id="awards" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className={label}>Leadership and Recognition</p>
            <ul className="divide-y divide-[#2a1a12]/10 border-y border-[#2a1a12]/10">
              {recognition.map((r) => (
                <li key={r.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className={`${serif} text-xl font-semibold`}>{r.title}</span>
                  <span className="text-sm text-[#5b3a29]">{r.detail}{r.year ? ` · ${r.year}` : ""}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={label}>Beyond Work</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <span key={item} className={chipClass}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-[#2a1a12] text-[#f8f3ea]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(248,243,234,0.07)_1.6px,transparent_1.8px)] [background-size:26px_26px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4ab72]">Contact</p>
          <h2 className={`${serif} mb-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl`}>
            {"Let's talk about "}<span className="italic text-[#d4ab72]">your data.</span>
          </h2>
          <p className="mb-10 max-w-3xl text-lg leading-8 text-[#e9dcc8]">
            Open to data analyst, business analyst, finance and healthcare analytics, and applied AI roles.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Location", v: "Texas, USA", href: "" },
              { k: "Email", v: "work.kashishlalwani@gmail.com", href: "mailto:work.kashishlalwani@gmail.com" },
              { k: "Phone", v: "+1 (934) 246-3035", href: "tel:+19342463035" },
              { k: "LinkedIn", v: "linkedin.com/in/kashishlalwani13", href: "https://linkedin.com/in/kashishlalwani13" },
              { k: "GitHub", v: "github.com/kashishlalwani13", href: "https://github.com/kashishlalwani13" },
            ].map((c) => (
              <div key={c.k} className="rounded-2xl border border-[#f8f3ea]/15 bg-[#f8f3ea]/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4ab72]/50">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#d4ab72]">{c.k}</p>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    className="break-words text-[#f8f3ea] transition-colors duration-300 hover:text-[#d4ab72]">{c.v}</a>
                ) : (
                  <p className="text-[#f8f3ea]">{c.v}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#2a1a12] px-6 py-8 text-center text-sm text-[#c9b8a2]">
        <div className="mx-auto max-w-7xl border-t border-[#f8f3ea]/10 pt-8">Designed and built by Kashish Lalwani.</div>
      </footer>
    </main>
  );
}
