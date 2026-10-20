# Kashish Lalwani · Portfolio

My personal portfolio site, built with Next.js and Tailwind CSS.

**Live:** [kashishlalwani-portfolio.vercel.app](https://kashishlalwani-portfolio.vercel.app)

## About me

I'm a data analyst who turns messy data into clear decisions. My focus is analytics, data quality and reporting, with applied AI as an extra strength. I'm interested in finance and healthcare, where good data leads to better decisions.

- MS in Data Science, Stony Brook University (2026)
- Hands-on work in finance reporting, manufacturing analytics, research data and an AI startup
- Based in Texas, USA

## What's on the site

| Section | What you'll find |
|---|---|
| Experience | Roles at Stony Brook, Versaunt, Saroj Group and Kamala Plastics |
| Projects | Case studies in Problem, What I did, Tools, Result, What I learned format, filterable by Analytics, Finance, Healthcare and AI |
| How I work | The habits I keep: check the data first, reconcile totals, document, explain plainly, flag risk early |
| Toolkit | Analytics and BI, Data Engineering, AI and ML |
| Writing | My articles on Medium |
| Wins and certifications | Leadership, awards and selected certifications |

## Featured projects

- **[Aegis: Cost-Aware Fraud Detection](https://github.com/kashishlalwani13/aegis-fraud-detection)**: picks the fraud threshold by what each mistake costs. F1 0.9942 on test data, with about $19.4M in modeled exposure reduction.
- **[AI Portfolio Risk and Forecasting](https://github.com/kashishlalwani13/AI-Portfolio-Management)**: CVaR-based optimization. Sharpe ratio up 15%, downside risk down 28%.
- **[Search Ranking Stability (PIR / PB)](https://github.com/kashishlalwani13/pirpb)**: measures how much search rankings move when a question is reworded.
- **[Clinical Notes to Structured Data](https://github.com/kashishlalwani13/Structured-Clinical-Data-Pipeline-)**: NLP pipeline for rare disease notes. Harvard HackRare 2026 finalist.
- **[Formula 1 Performance Analytics](https://github.com/kashishlalwani13/Formula1-Performance-Analytics)**: 150K+ telemetry records turned into 20+ KPIs.

## Tech stack

- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Cormorant Garamond, Manrope and JetBrains Mono, via `next/font`
- **Hosting:** Vercel

## Project structure

```
Kashish-Portfolio/
├── frontend/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx        # all page content and sections live here
│   ├── public/
│   │   ├── images/
│   │   │   └── profile.jpg
│   │   └── Kashish_Resume.pdf
│   ├── globals.css
│   └── next.config.ts
└── README.md
```

## Run it locally

```bash
cd frontend
npm install
npm run dev
```

Then open http://localhost:3000.

## Updating content

All content (experience, projects, certifications, writing) lives in plain arrays at the top of `frontend/app/page.tsx`. To add a project or role, add an entry to the matching array. The layout picks it up automatically.

## Contact

- Email: work.kashishlalwani@gmail.com
- LinkedIn: [linkedin.com/in/kashishlalwani13](https://linkedin.com/in/kashishlalwani13)
- Medium: [medium.com/@kaashishlalwani](https://medium.com/@kaashishlalwani)

