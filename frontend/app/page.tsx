"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { Cormorant_Garamond, Manrope, JetBrains_Mono } from "next/font/google";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

/* Palette (from profile photo + espresso reference)
   espresso #1c110b · roast #2a1810   dark bands (polka dots, espresso)
   rose     #f2e8d5 · petal #fbf6ec   cream bands and cards (white roses)
   sage     #aab68f · leaf  #4f5f3c   green band (rose leaves, lawn)
   tan      #c9a27a · caramel #8a5232 warm band and accent (hair)
   blush    #e8cdbd                   soft band (skin, lips)
   gold     #d9b37c                   accent on dark (earrings)
*/

const roles = ["a data analyst.", "a numbers detective.", "a dashboard builder.", "a finance nerd.", "an applied AI builder."];

const ticker = [
  ["Scrap", "−22%"], ["Returns", "−15%"], ["Defects", "−40%"], ["Margin gain", "12% supported"],
  ["Reporting time", "−35%"], ["Hours saved", "25+/mo"], ["Records reconciled", "200K+"],
  ["Records analyzed", "1M+"], ["Sharpe ratio", "+15%"], ["Downside risk", "−28%"], ["Fraud model F1", "0.9942"],
];

const education = [
  { school: "Stony Brook University", degree: "Master of Science in Data Science", period: "Aug 2024 to May 2026", note: "" },
  { school: "Shivaji University", degree: "B.Tech in Computer Science (AI and ML)", period: "Aug 2020 to May 2024", note: "Best Outgoing Student (sole recipient)" },
];

const experiences = [
  { role: "Data Analyst", company: "CUBIT Lab, Stony Brook University", location: "USA", period: "Aug 2026 to Present", type: "Research Data · Data Quality",
    bullets: ["Quality-control dashboard for health research data (actigraphy)."] },
  { role: "Data Analyst", company: "Stony Brook University", location: "USA", period: "Aug 2025 to Dec 2025", type: "Evaluation · Statistical Analysis · Monitoring",
    bullets: [
      "Built SQL and Python pipelines over 1M+ records and 100K+ queries to evaluate a retrieval system.",
      "Designed True-PIR metrics and bias checks to measure how stable search rankings stay.",
      "Used root-cause and statistical analysis to explain where and why results changed.",
      "Set up monitoring for latency and throughput, plus validation and audit checks.",
    ] },
  { role: "Founding AI Engineer", company: "Versaunt (fka. Aayats), Inc.", location: "USA", period: "May 2025 to Aug 2025", type: "Product Analytics · Experimentation · Quality",
    bullets: [
      "Owned analytics, quality and monitoring at a small AI startup.",
      "Ran A/B tests and cohort analysis across 50K+ daily events.",
      "Built dashboards to track a platform at 10K+ users and 500K+ queries.",
      "Shipped a few small features. The engineering team built the core backend.",
    ] },
  { role: "Data Analyst", company: "Saroj Group of Companies", location: "India", period: "Jan 2024 to Jul 2024", type: "Finance Reporting · Forecasting · Automation",
    bullets: [
      "Used statistical modeling on 100K+ records to help cut defect rates by 40%.",
      "Ran forecasting and cost scenario analysis that supported a 12% margin gain.",
      "Built KPI dashboards in SQL, Excel and Tableau, cutting reporting time by 35%.",
      "Automated four Python and SQL reporting pipelines, saving 25+ hours a month.",
    ] },
  { role: "Data Analyst", company: "Kamala Plastics", location: "India", period: "Jul 2023 to Dec 2023", type: "ETL · Reconciliation · Operations Analytics",
    bullets: [
      "Built ETL pipelines that brought 200K+ records from systems that named machines differently under one standard.",
      "Validated and reconciled the data so counts and totals matched across reports.",
      "Ran root-cause analysis that gave engineering the evidence to cut scrap by 22% and returns by 15%.",
    ] },
  { role: "Research Assistant", company: "Dept. of AI and ML, D.Y. Patil College of Engineering and Technology", location: "India", period: "Sep 2022 to May 2024", type: "Applied AI Research · Mentorship",
    bullets: [
      "Built a CNN-based malaria diagnostic tool that reached 92% accuracy and cut diagnostic time by 65%.",
      "Built a YOLOv4 object detection system with 95% accuracy at 30+ FPS.",
      "Developed an LSB image steganography method that improved concealment by 40%.",
      "Led the research track behind a Smart India Hackathon RAG platform for a national government client.",
      "Mentored peers as Head of R&D for the AIML Students Association.",
    ] },
];

type Project = {
  title: string; group: string; tags: string[]; headline: string;
  problem: string; did: string; tools: string; result: string; learned: string;
  github?: string; hosted?: string; article?: string; note?: string;
};

const projects: Project[] = [
  { title: "AI Portfolio Risk and Forecasting Model", group: "Finance and business analytics", tags: ["Finance", "Analytics"], headline: "Sharpe +15% · downside risk −28%",
    problem: "Return alone does not show how bad the bad days can get.",
    did: "Built forecasting models and a CVaR-based optimization to balance return against downside risk.",
    tools: "Python, XGBoost, CVaR, Pandas", result: "Sharpe ratio up 15% and downside risk down 28%.",
    learned: "Planning for the worst case changes which choice looks best.",
    github: "https://github.com/kashishlalwani13/AI-Portfolio-Management" },
  { title: "Aegis: Cost-Aware Fraud Detection", group: "Finance and business analytics", tags: ["Finance", "AI"], headline: "F1 0.9942 · ~$19.4M modeled",
    problem: "Blocking too many payments hurts good customers. Blocking too few costs money. The cut-off is a business decision.",
    did: "Built a fraud pipeline on PySpark and Databricks, picked the threshold by cost, and added drift detection to catch when data changes.",
    tools: "Python, PySpark, Databricks, MLflow, XGBoost, drift detection",
    result: "F1 0.9942 and AUC 0.993 on test data. About $19.4M in reduced exposure, as a modeled estimate.",
    learned: "The best threshold depends on what each mistake costs.",
    github: "https://github.com/kashishlalwani13/aegis-fraud-detection", hosted: "https://kashishlalwani13.github.io/aegis-fraud-detection/",
    article: "https://medium.com/@kaashishlalwani/the-threshold-is-a-business-decision-not-a-statistical-one-db6ab69efa0b" },
  { title: "Formula 1 Performance Analytics", group: "Finance and business analytics", tags: ["Analytics"], headline: "150K+ records · 20+ KPIs",
    problem: "Raw race telemetry is too dense to compare drivers and races directly.",
    did: "Built a SQL analytics layer over 150K+ telemetry records and tracked 20+ KPIs in Tableau.",
    tools: "SQL, Python, Tableau", result: "A clear view of performance gaps and trends across races.",
    learned: "Picking the right KPIs is most of the work.",
    github: "https://github.com/kashishlalwani13/Formula1-Performance-Analytics" },
  { title: "Search Ranking Stability (PIR / PB)", group: "Data quality and evaluation", tags: ["Analytics"], headline: "Cross-engine stability benchmark",
    problem: "Search rankings can shift when the same question is worded differently, and there was no clean way to measure it.",
    did: "Built repeatable pipelines with cached results, designed True-PIR metrics and bias checks, and compared search engines.",
    tools: "Python, statistical testing, Google CSE, DuckDuckGo",
    result: "Measured real ranking instability across engines, with a method others can rerun and audit.",
    learned: "A metric is only useful if someone else can reproduce it.",
    github: "https://github.com/kashishlalwani13/pirpb",
    article: "https://medium.com/@kaashishlalwani/same-question-different-words-do-search-rankings-stay-stable-2bf28c07cf20" },
  { title: "Clinical Notes to Structured Data", group: "Health data", tags: ["Healthcare", "AI"], headline: "Harvard HackRare 2026 · Finalist",
    problem: "Rare disease notes mix what a patient has with what they do not. A note that says \"no seizures\" must not count as seizures.",
    did: "Built an NLP pipeline that finds negated and uncertain symptoms and maps findings to HPO and GA4GH standards.",
    tools: "Python, spaCy, negspacy, HPO, GA4GH, Streamlit", result: "Finalist at Harvard HackRare 2026.",
    learned: "In health data, what is absent matters as much as what is present.",
    github: "https://github.com/kashishlalwani13/Structured-Clinical-Data-Pipeline-",
    article: "https://medium.com/@kaashishlalwani/7-years-thats-how-long-rare-disease-patients-wait-for-a-correct-diagnosis-b15b775ca801" },
  { title: "RAG Financial Intelligence Platform", group: "Applied AI and ML", tags: ["Finance", "AI"], headline: "Latency −60% · decision efficiency +40%",
    problem: "Analysts spent too long finding answers across large sets of financial documents.",
    did: "Built a retrieval approach that finds the relevant passages and passes them to a language model to answer questions.",
    tools: "Python, LLMs, LangChain, vector search, ETL", result: "Response latency down 60% and decision efficiency up 40%.",
    learned: "Clean, well-organized source data matters more than the model.",
    note: "Confidential government client. I can share the approach only." },
  { title: "Scalable Retrieval Benchmarking", group: "Applied AI and ML", tags: ["AI"], headline: "Indexing vs. brute-force scaling",
    problem: "Retrieval systems slow down as data grows, and it was unclear where the bottleneck was.",
    did: "Built a FAISS benchmark that simulated growing workloads and measured latency, throughput and indexing efficiency.",
    tools: "Python, FAISS, vector embeddings, NumPy",
    result: "Found the bottlenecks and showed that better indexing can beat simply scaling up.",
    learned: "Measure before you scale.",
    github: "https://github.com/garima24112000/Scaling-Retrieval-System",
    article: "https://medium.com/@kaashishlalwani/scaling-retrieval-systems-why-smarter-memory-might-beat-bigger-ai-models-f7f78c3db267" },
];

const filters = ["All", "Analytics", "Finance", "Healthcare", "AI"];
const groups = ["Finance and business analytics", "Data quality and evaluation", "Health data", "Applied AI and ML"];

const habits = [
  { cmd: "validate()", title: "Check the data first", text: "I validate the data before anyone sees a chart." },
  { cmd: "reconcile()", title: "Make the numbers add up", text: "I reconcile counts and totals. If two sources disagree, I find out why." },
  { cmd: "document()", title: "Write it down", text: "I document the work so others can reuse it without me." },
  { cmd: "explain()", title: "Say it plainly", text: "I explain results in plain language, with the decision up front." },
  { cmd: "flag_risk()", title: "Flag risk early", text: "If something is at risk, I tell people early, while it is still easy to fix." },
];

const toolkit = [
  { title: "Analytics and BI", items: ["SQL", "Excel", "Tableau", "Power BI", "KPI design", "A/B testing", "Cohort analysis", "Forecasting", "Root-cause analysis"] },
  { title: "Data Engineering", items: ["Python", "Pandas", "ETL", "Data pipelines", "Data validation", "PostgreSQL", "PySpark", "Databricks"] },
  { title: "AI and ML", items: ["Predictive modeling", "Model evaluation", "XGBoost", "scikit-learn", "NLP (spaCy)", "Retrieval and RAG basics", "LangChain", "FAISS", "MLflow"] },
  { title: "AI-Assisted Development", items: ["Claude", "Claude Code", "ChatGPT", "Gemini", "GitHub Copilot"] },
];

const writing = [
  { type: "Project write-up", title: "The Threshold Is a Business Decision, Not a Statistical One", description: "Why choosing the right cut-off in fraud detection matters more than accuracy alone.", link: "https://medium.com/@kaashishlalwani/the-threshold-is-a-business-decision-not-a-statistical-one-db6ab69efa0b" },
  { type: "Project write-up", title: "7 Years. That's How Long Rare Disease Patients Wait for a Correct Diagnosis.", description: "On the rare disease diagnosis gap and how structured clinical data can help.", link: "https://medium.com/@kaashishlalwani/7-years-thats-how-long-rare-disease-patients-wait-for-a-correct-diagnosis-b15b775ca801" },
  { type: "Project write-up", title: "Same Question, Different Words: Do Search Rankings Stay Stable?", description: "Measuring how much rankings move when a question is reworded.", link: "https://medium.com/@kaashishlalwani/same-question-different-words-do-search-rankings-stay-stable-2bf28c07cf20" },
  { type: "Project write-up", title: "Scaling Retrieval Systems: Why Smarter Memory Might Beat Bigger AI Models", description: "Indexing choices, latency bottlenecks and what to fix first.", link: "https://medium.com/@kaashishlalwani/scaling-retrieval-systems-why-smarter-memory-might-beat-bigger-ai-models-f7f78c3db267" },
  { type: "Ideas", title: "They Made It Hard to Leave. I Wanted to Know Why.", description: "A data-driven look at the retention patterns that keep users around.", link: "https://medium.com/@kaashishlalwani/they-made-it-hard-to-leave-i-wanted-to-know-why-38146f534b66" },
  { type: "Ideas", title: "You're Not Prompting AI. You're Controlling a Probabilistic System.", description: "A simple mental model for working with LLMs.", link: "https://medium.com/@kaashishlalwani/youre-not-prompting-ai-you-re-controlling-a-probabilistic-system-f53d06989fd3" },
];

const recognition = [
  { title: "Best Outgoing Student", detail: "Sole recipient · 2024" },
  { title: "Harvard HackRare Finalist", detail: "Clinical notes pipeline · 2026" },
  { title: "Smart India Hackathon Finalist", detail: "National, Ministry of Power · 2023" },
  { title: "Student Council Secretary", detail: "Three terms, about 4,000 students" },
  { title: "Best Emerging Rotaractor", detail: "Across 75+ clubs · District 3170 Secretary of the Year" },
  { title: "District Chess Champion", detail: "2023 and 2024" },
];

const certifications = [
  { title: "Claude 101", org: "Anthropic", year: "2026", link: "https://verify.skilljar.com/c/quupyvhd6au3" },
  { title: "Essentials of Prompt Engineering", org: "Amazon Web Services", year: "2026", link: "" },
  { title: "AWS Academy Data Analytics", org: "Amazon Web Services", year: "2023", link: "https://www.credly.com/badges/84190e18-bb3a-4439-871e-d0eeb65e4603" },
  { title: "Supervised ML: Regression and Classification", org: "Stanford University · Coursera", year: "2023", link: "https://www.coursera.org/account/accomplishments/records/CVP65J5KNZ53" },
  { title: "Quantitative Finance Workshop", org: "E-Cell, IIT Bombay", year: "2023", link: "" },
  { title: "Python for Data Science, AI and Development", org: "IBM · Coursera", year: "2022", link: "https://www.coursera.org/verify/RBQNUMXKHY35" },
];

const interests = ["Finance and Markets", "Chess", "Music", "Indian Classical Dance", "Travel", "Coffee"];

const socials = [
  { label: "GitHub", href: "https://github.com/kashishlalwani13",
    path: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/kashishlalwani13",
    path: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
  { label: "Medium", href: "https://medium.com/@kaashishlalwani",
    path: <><ellipse cx="7" cy="12" rx="5" ry="5.5" /><ellipse cx="16.5" cy="12" rx="2.5" ry="5.2" /><ellipse cx="21.3" cy="12" rx="0.9" ry="4.6" /></> },
  { label: "Email", href: "mailto:work.kashishlalwani@gmail.com",
    path: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
];

/* Shared styles */
const serif = "font-[family-name:var(--font-display)]";
const monoF = "font-[family-name:var(--font-mono)]";
const eyebrow = `${monoF} mb-3 text-xs tracking-[0.12em]`;
const h2 = `${serif} text-4xl font-semibold leading-[1.05] md:text-6xl`;
const wrap = "mx-auto max-w-6xl px-6";
const lightCard = "rounded-3xl border border-[#1c110b]/10 bg-[#fbf6ec] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_-24px_rgba(28,17,11,0.55)]";
const darkBtn = "rounded-full bg-[#1c110b] px-6 py-3 text-sm font-semibold text-[#f2e8d5] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a1810]";
const smallLink = "rounded-full border border-[#1c110b]/25 px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1c110b] hover:text-[#f2e8d5]";

/* Letters rise one by one, but words never break mid-word */
function wordsOf(text: string) {
  let n = 0;
  const words = text.split(" ");
  return words.map((word, wi) => (
    <span key={wi} className="inline-block whitespace-nowrap">
      {word.split("").map((ch) => {
        const i = n++;
        return <span key={i} className="rise-letter" style={{ animationDelay: `${i * 28}ms` }}>{ch}</span>;
      })}
      {wi < words.length - 1 ? " " : ""}
    </span>
  ));
}

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(projects[0].title);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  const visible = projects.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen bg-[#1c110b] font-[family-name:var(--font-body)] text-[#1c110b]`}>
      <style>{`
        @keyframes rise { from { opacity: 0; transform: translateY(0.45em) rotate(4deg); } to { opacity: 1; transform: none; } }
        @keyframes roll { to { transform: translateX(-50%); } }
        @keyframes floaty { 0%,100% { transform: translateY(0) rotate(var(--r)); } 50% { transform: translateY(-8px) rotate(var(--r)); } }
        @keyframes blink { 50% { opacity: 0; } }
        .rise-letter { display: inline-block; animation: rise .5s cubic-bezier(.2,.7,.2,1) both; }
        .ticker-track { animation: roll 46s linear infinite; }
        .ticker:hover .ticker-track { animation-play-state: paused; }
        .floaty { animation: floaty 5s ease-in-out infinite; }
        .caret { animation: blink 1s step-start infinite; }
        @keyframes glow { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-40px,30px) scale(1.12); } }
        .glow { animation: glow 14s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .rise-letter, .ticker-track, .floaty, .caret, .spin-ring, .glow { animation: none !important; }
        }
      `}</style>

      {/* Social rail */}
      <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-3 md:flex">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={s.label}
            title={s.label}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#f2e8d5]/40 bg-[#1c110b] text-[#f2e8d5] shadow-lg outline-none transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9b37c] hover:text-[#1c110b] focus-visible:ring-2 focus-visible:ring-[#e8cdbd]">
            <Icon>{s.path}</Icon>
          </a>
        ))}
        <span className="h-20 w-px bg-[#d9b37c]/60" />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-[#f2e8d5]/10 bg-[#1c110b]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className={`${serif} grid h-10 w-10 place-items-center rounded-full border border-[#d9b37c] text-lg italic text-[#d9b37c]`}>kl</span>
            <span className={`${monoF} hidden text-xs tracking-[0.2em] text-[#f2e8d5]/80 sm:inline`}>KASHISH.LALWANI</span>
          </a>
          <div className={`${monoF} hidden items-center gap-6 text-xs tracking-[0.12em] text-[#f2e8d5]/85 lg:flex`}>
            {["about", "experience", "projects", "how", "toolkit", "writing", "contact"].map((id) => (
              <a key={id} href={`#${id}`} className="transition-colors duration-300 hover:text-[#d9b37c]">
                {id === "how" ? "how_i_work" : id}
              </a>
            ))}
          </div>
          <a href="/Kashish_Resume.pdf" target="_blank" rel="noreferrer"
            className="rounded-full bg-[#d9b37c] px-5 py-2 text-sm font-semibold text-[#1c110b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f2e8d5]">
            Resume ↗
          </a>
        </div>
      </nav>

      {/* Hero — espresso */}
      <section id="top" className="relative overflow-hidden bg-[#1c110b] text-[#f2e8d5]">
        {/* soft glow */}
        <div className="glow absolute -right-32 -top-20 h-[36rem] w-[36rem] rounded-full bg-[#e8cdbd]/20 blur-[110px]" />
        <div className="glow absolute -bottom-40 left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#d9b37c]/15 blur-[110px] [animation-delay:-6s]" />

        <div className={`relative ${wrap} grid items-center gap-16 py-20 md:grid-cols-[1.3fr_1fr] md:py-28`}>
          <div>
            <p className={`${eyebrow} text-[#e8cdbd]/80`}>{"> hello_world.py"}</p>
            <p className={`${serif} text-3xl italic text-[#e8cdbd] md:text-4xl`}>{"I'm Kashish, and I'm"}</p>
            <h1 className={`${serif} mt-2 min-h-[2.1em] text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl`} aria-live="polite">
              <span key={roleIndex}>
                {wordsOf(roles[roleIndex])}
              </span>
              <span className="caret ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] bg-[#e8cdbd]" aria-hidden="true" />
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#f2e8d5]/80">
              I turn messy data into clear decisions. Finance, healthcare and applied AI. MS Data Science, Stony Brook.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#projects" className="rounded-full bg-[#f2e8d5] px-7 py-3.5 text-sm font-semibold text-[#1c110b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9b37c]">See the work</a>
              <a href="#contact" className="rounded-full border border-[#f2e8d5]/40 px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d9b37c] hover:text-[#d9b37c]">Get in touch</a>
              <span className={`${monoF} text-xs text-[#aab68f]`}>● Texas, USA</span>
            </div>
            <div className="mt-8 flex gap-3 md:hidden">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="grid h-11 w-11 place-items-center rounded-full border border-[#f2e8d5]/30">
                  <Icon>{s.path}</Icon>
                </a>
              ))}
            </div>
          </div>

          {/* Photo in an arch, with a rotating seal */}
          <div className="relative mx-auto w-full max-w-[20rem]">
            <div className="absolute -inset-3 translate-x-3 translate-y-3 rounded-t-full rounded-b-[2.5rem] border border-[#e8cdbd]/40" aria-hidden="true" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[2.5rem] border-[5px] border-[#f2e8d5] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75)]">
              <Image src="/images/profile.jpg" alt="Kashish Lalwani" fill sizes="(max-width: 768px) 80vw, 320px" className="object-cover object-[60%_30%] transition-transform duration-700 hover:scale-[1.03]" priority />
            </div>
            <div className="absolute -bottom-8 -left-10 h-32 w-32 rounded-full bg-[#e8cdbd] text-[#1c110b] shadow-xl">
              <svg viewBox="0 0 120 120" className="spin-ring h-full w-full animate-[spin_22s_linear_infinite]" aria-hidden="true">
                <defs><path id="seal" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
                <text className="fill-[#1c110b]" style={{ fontSize: 9.2, letterSpacing: 2.6, fontFamily: "var(--font-mono)" }}>
                  <textPath href="#seal">DATA · FINANCE · HEALTHCARE · AI · </textPath>
                </text>
              </svg>
              <span className={`${serif} absolute inset-0 grid place-items-center text-3xl italic`}>kl</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker — tan */}
      <div className="ticker overflow-hidden border-y border-[#1c110b]/20 bg-[#c9a27a]" aria-label="Results">
        <div className="ticker-track flex w-max">
          {[...ticker, ...ticker].map(([k, v], i) => (
            <span key={i} className={`${monoF} flex items-center gap-2 whitespace-nowrap px-6 py-3 text-sm text-[#1c110b]`} aria-hidden={i >= ticker.length}>
              <b className="font-medium">{k}</b><span className="text-[#4f5f3c]">{v}</span><span className="ml-4 text-[0.5rem] opacity-50">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* About — rose cream */}
      <section id="about" className="bg-[#f2e8d5]">
        <div className={`${wrap} grid items-center gap-12 py-24 md:grid-cols-[1.1fr_1fr]`}>
          <div>
            <p className={`${eyebrow} text-[#8a5232]`}>{"> whoami"}</p>
            <h2 className={h2}>The analyst who <span className="italic text-[#8a5232]">checks twice.</span></h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#1c110b]/85">
              {"I like the part of data work most people skip: making sure the numbers are right before anyone bets a decision on them."}
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#1c110b]/75">
              {"I've reconciled factory data from systems that didn't agree, automated reports a finance team relied on, run A/B tests at a startup and measured how stable search results are. AI is in my toolkit too. I use it where it earns its place."}
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl bg-[#1c110b] text-[#f2e8d5] shadow-[0_30px_60px_-30px_rgba(28,17,11,0.8)]">
            <div className="flex items-center gap-2 border-b border-[#f2e8d5]/10 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-[#e8cdbd]" /><span className="h-3 w-3 rounded-full bg-[#d9b37c]" /><span className="h-3 w-3 rounded-full bg-[#aab68f]" />
              <span className={`${monoF} ml-3 text-xs text-[#f2e8d5]/50`}>profile.sql</span>
            </div>
            <div className={`${monoF} space-y-1 p-6 text-sm leading-7`}>
              <p><span className="text-[#d9b37c]">SELECT</span> * <span className="text-[#d9b37c]">FROM</span> kashish;</p>
              <div className="mt-3 divide-y divide-[#f2e8d5]/10 border-y border-[#f2e8d5]/10">
                {[
                  ["role", "data analyst"],
                  ["based_in", "Texas, USA"],
                  ["degree", "MS Data Science, Stony Brook"],
                  ["into", "finance, healthcare, applied AI"],
                  ["off_duty", "chess, music, markets"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-1.5">
                    <span className="text-[#aab68f]">{k}</span><span className="text-right">{v}</span>
                  </div>
                ))}
              </div>
              <p className="pt-2 text-[#f2e8d5]/50">1 row returned · 0 errors <span className="caret">▍</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience — sage */}
      <section id="experience" className="bg-[#aab68f]">
        <div className={`${wrap} py-24`}>
          <p className={`${eyebrow} text-[#1c110b]/70`}>{"> git log --career"}</p>
          <h2 className={`${h2} mb-14`}>The commit <span className="italic">history.</span></h2>
          <div className="relative space-y-6 border-l-2 border-dashed border-[#1c110b]/30 pl-6 md:pl-10">
            {experiences.map((item) => (
              <div key={`${item.role}-${item.company}`} className={`relative ${lightCard}`}>
                <span className="absolute -left-[33px] top-9 h-4 w-4 rounded-full border-4 border-[#aab68f] bg-[#1c110b] md:-left-[49px]" />
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className={`${serif} text-3xl font-semibold`}>{item.role}</h3>
                    <p className="mt-1 text-[#1c110b]/75">{item.company}, {item.location}</p>
                  </div>
                  <span className={`${monoF} shrink-0 self-start rounded-full bg-[#1c110b] px-3 py-1 text-xs text-[#f2e8d5]`}>{item.period}</span>
                </div>
                <p className={`${monoF} mb-4 text-xs text-[#4f5f3c]`}>{item.type}</p>
                <ul className="space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7 text-[#1c110b]/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a5232]" />{bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects — espresso roast */}
      <section id="projects" className="bg-[#2a1810] text-[#f2e8d5]">
        <div className={`${wrap} py-24`}>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={`${eyebrow} text-[#aab68f]`}>{"> ls ./projects"}</p>
              <h2 className={h2}>Things I <span className="italic text-[#d9b37c]">shipped.</span></h2>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {filters.map((f) => (
                <button key={f} type="button" onClick={() => setFilter(f)} aria-pressed={filter === f}
                  className={`${monoF} rounded-full px-4 py-2 text-xs transition-all duration-300 ${
                    filter === f ? "bg-[#d9b37c] text-[#1c110b]" : "border border-[#f2e8d5]/25 hover:border-[#d9b37c] hover:text-[#d9b37c]"
                  }`}>
                  {f.toLowerCase()}
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
                  <p className={`${monoF} mb-4 flex items-center gap-4 text-xs text-[#f2e8d5]/60`}>
                    {`// ${g}`}<span className="h-px flex-1 bg-[#f2e8d5]/15" />
                  </p>
                  <div className="space-y-4">
                    {list.map((p) => {
                      const isOpen = open === p.title;
                      return (
                        <div key={p.title}
                          className={`rounded-3xl transition-all duration-300 ${isOpen ? "bg-[#f2e8d5] text-[#1c110b]" : "bg-[#1c110b] hover:bg-[#3a2418]"}`}>
                          <button type="button" onClick={() => setOpen(isOpen ? null : p.title)} aria-expanded={isOpen}
                            className="flex w-full items-center gap-4 p-6 text-left md:p-8">
                            <div className="min-w-0 flex-1">
                              <div className="mb-2 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                  <span key={t} className={`${monoF} rounded-full px-3 py-0.5 text-[0.7rem] ${isOpen ? "bg-[#aab68f] text-[#1c110b]" : "bg-[#f2e8d5]/10 text-[#d9b37c]"}`}>#{t.toLowerCase()}</span>
                                ))}
                              </div>
                              <h3 className={`${serif} text-2xl font-semibold md:text-3xl`}>{p.title}</h3>
                              <p className={`${monoF} mt-1 text-xs ${isOpen ? "text-[#8a5232]" : "text-[#aab68f]"}`}>{p.headline}</p>
                            </div>
                            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-xl transition-transform duration-300 ${isOpen ? "rotate-45 bg-[#1c110b] text-[#f2e8d5]" : "border border-[#f2e8d5]/30"}`} aria-hidden="true">+</span>
                          </button>
                          {isOpen && (
                            <div className="border-t border-[#1c110b]/10 px-6 pb-8 pt-6 md:px-8">
                              <dl className="grid gap-6 md:grid-cols-2">
                                {[["Problem", p.problem], ["What I did", p.did], ["Result", p.result], ["Tools", p.tools], ["What I learned", p.learned]].map(([k, v]) => (
                                  <div key={k}>
                                    <dt className={`${monoF} mb-1 text-xs text-[#8a5232]`}>{k.toLowerCase().replace(/ /g, "_")}</dt>
                                    <dd className="leading-7">{v}</dd>
                                  </div>
                                ))}
                              </dl>
                              {p.note && <p className="mt-6 text-sm italic text-[#1c110b]/70">{p.note}</p>}
                              <div className="mt-6 flex flex-wrap gap-3">
                                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className={smallLink}>GitHub ↗</a>}
                                {p.hosted && <a href={p.hosted} target="_blank" rel="noreferrer" className={smallLink}>Live demo ↗</a>}
                                {p.article && <a href={p.article} target="_blank" rel="noreferrer" className={smallLink}>Article ↗</a>}
                                {!p.github && <span className="rounded-full border border-[#1c110b]/15 px-4 py-2 text-sm text-[#1c110b]/60">Repository not public</span>}
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
        </div>
      </section>

      {/* How I work — blush */}
      <section id="how" className="bg-[#e8cdbd]">
        <div className={`${wrap} py-24`}>
          <p className={`${eyebrow} text-[#8a5232]`}>{"> config.defaults"}</p>
          <h2 className={`${h2} mb-12`}>How I <span className="italic text-[#8a5232]">work.</span></h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {habits.map((h) => (
              <div key={h.title} className={lightCard}>
                <p className={`${monoF} mb-4 inline-block rounded-md bg-[#1c110b] px-2 py-1 text-xs text-[#d9b37c]`}>{h.cmd}</p>
                <h3 className={`${serif} mb-2 text-2xl font-semibold leading-tight`}>{h.title}</h3>
                <p className="text-sm leading-6 text-[#1c110b]/75">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit + Education — rose cream */}
      <section id="toolkit" className="bg-[#f2e8d5]">
        <div className={`${wrap} py-24`}>
          <p className={`${eyebrow} text-[#8a5232]`}>{"> import toolkit"}</p>
          <h2 className={`${h2} mb-12`}>What I <span className="italic text-[#8a5232]">work with.</span></h2>
          <div className="grid gap-5 md:grid-cols-2">
            {toolkit.map((c) => (
              <div key={c.title} className={lightCard}>
                <h3 className={`${serif} mb-4 text-2xl font-semibold`}>{c.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {c.items.map((item) => (
                    <span key={item} className="rounded-full border border-[#8a5232]/25 bg-[#f2e8d5] px-3.5 py-1.5 text-sm transition-colors duration-300 hover:bg-[#1c110b] hover:text-[#f2e8d5]">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className={`${eyebrow} mt-20 text-[#8a5232]`}>{"> education"}</p>
          <div className="grid gap-5 md:grid-cols-2">
            {education.map((item) => (
              <div key={item.school} className={lightCard}>
                <h3 className={`${serif} text-3xl font-semibold`}>{item.school}</h3>
                <p className="mt-2 text-lg">{item.degree}</p>
                <p className={`${monoF} mt-2 text-xs text-[#1c110b]/60`}>{item.period}</p>
                {item.note ? <p className="mt-3 text-sm font-semibold text-[#8a5232]">{item.note}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing — tan */}
      <section id="writing" className="bg-[#c9a27a]">
        <div className={`${wrap} py-24`}>
          <p className={`${eyebrow} text-[#1c110b]/70`}>{"> cat ./writing"}</p>
          <h2 className={`${h2} mb-12`}>I also write <span className="italic">about it.</span></h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {writing.map((w) => (
              <a key={w.title} href={w.link} target="_blank" rel="noreferrer" className={`${lightCard} group flex flex-col`}>
                <p className={`${monoF} mb-3 text-xs text-[#8a5232]`}>{w.type}</p>
                <h3 className={`${serif} mb-3 text-2xl font-semibold leading-snug`}>{w.title}</h3>
                <p className="mb-6 leading-7 text-[#1c110b]/75">{w.description}</p>
                <span className="mt-auto text-sm font-semibold transition-colors group-hover:text-[#8a5232]">Read on Medium →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition — sage */}
      <section id="awards" className="bg-[#aab68f]">
        <div className={`${wrap} py-24`}>
          <p className={`${eyebrow} text-[#1c110b]/70`}>{"> achievements.unlocked"}</p>
          <h2 className={`${h2} mb-12`}>Wins, <span className="italic">and the receipts.</span></h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#fbf6ec] p-7">
              <p className={`${monoF} mb-4 text-xs text-[#8a5232]`}>{"// leadership_and_recognition"}</p>
              <ul className="divide-y divide-[#1c110b]/10">
                {recognition.map((r) => (
                  <li key={r.title} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className={`${serif} text-xl font-semibold`}>{r.title}</span>
                    <span className="text-sm text-[#1c110b]/70 sm:text-right">{r.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[#1c110b] p-7 text-[#f2e8d5]">
              <p className={`${monoF} mb-4 text-xs text-[#e8cdbd]`}>{"// certifications"}</p>
              <ul className="divide-y divide-[#f2e8d5]/10">
                {certifications.map((c) => (
                  <li key={c.title} className="flex items-baseline justify-between gap-4 py-3">
                    <div className="min-w-0">
                      {c.link ? (
                        <a href={c.link} target="_blank" rel="noreferrer" className={`${serif} text-xl font-semibold transition-colors hover:text-[#e8cdbd]`}>{c.title} ↗</a>
                      ) : (
                        <span className={`${serif} text-xl font-semibold`}>{c.title}</span>
                      )}
                      <p className="text-sm text-[#f2e8d5]/65">{c.org}</p>
                    </div>
                    <span className={`${monoF} shrink-0 text-xs text-[#d9b37c]`}>{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className={`${monoF} mr-2 text-xs text-[#1c110b]/70`}>{"> off_duty"}</span>
            {interests.map((i) => (
              <span key={i} className="rounded-full bg-[#f2e8d5] px-4 py-2 text-sm transition-transform duration-300 hover:-rotate-3">{i}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact — espresso */}
      <section id="contact" className="relative overflow-hidden bg-[#1c110b] text-[#f2e8d5]">
        <div className="glow absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full bg-[#e8cdbd]/15 blur-[110px]" />
        <div className="glow absolute -bottom-32 right-0 h-[26rem] w-[26rem] rounded-full bg-[#d9b37c]/15 blur-[110px] [animation-delay:-7s]" />
        <div className={`relative ${wrap} py-24`}>
          <p className={`${eyebrow} text-[#aab68f]`}>{"> ping kashish"}</p>
          <h2 className={`${serif} max-w-4xl text-5xl font-semibold leading-[1] md:text-7xl`}>
            Got messy data? <span className="italic text-[#d9b37c]">Send it my way.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f2e8d5]/80">
            Open to data analyst, business analyst, finance and healthcare analytics, and applied AI roles.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="mailto:work.kashishlalwani@gmail.com" className="rounded-full bg-[#d9b37c] px-7 py-3.5 text-sm font-semibold text-[#1c110b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f2e8d5]">work.kashishlalwani@gmail.com</a>
            <a href="tel:+19342463035" className="rounded-full border border-[#f2e8d5]/30 px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-[#d9b37c] hover:text-[#d9b37c]">+1 (934) 246-3035</a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[#f2e8d5]/20 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d9b37c] hover:text-[#d9b37c]">
                <Icon>{s.path}</Icon>{s.label}
              </a>
            ))}
            <span className={`${monoF} ml-2 text-xs text-[#aab68f]`}>● Texas, USA</span>
          </div>
        </div>
      </section>

      <footer className={`${monoF} border-t border-[#f2e8d5]/10 bg-[#1c110b] px-6 py-8 text-center text-xs text-[#f2e8d5]/55`}>
        {"// designed and built by Kashish Lalwani · © 2026"}
      </footer>
    </main>
  );
}
