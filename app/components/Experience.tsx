type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

const EXPERIENCE: Job[] = [
  {
    role: "Independent Frontend Engineer — Web3 & iOS",
    company: "Self-Employed",
    location: "Remote",
    period: "Jan 2025 — Present",
    points: [
      "Designed, built, and published a live iOS app on the Apple App Store (SwiftUI + Supabase) — full product ownership from architecture to release, shipped in 4 months using AI-assisted workflows.",
      "Built the ROSCA dApp frontend at ETHOnline 2025 (Next.js, Wagmi, RainbowKit, Safe SDK, Turborepo, Foundry).",
      "Contributed UI improvements to Yearn Finance V3 (open source).",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "First Factory · client: FrankCrum",
    location: "Remote",
    period: "Mar 2023 — Dec 2025",
    points: [
      "Senior FE engineer on a cross-functional squad delivering HR/payroll SaaS in Next.js + TypeScript.",
      "Designed and rolled out a shared design system (Storybook + React-Bootstrap), eliminating duplicated UI across 4 product areas and speeding feature delivery for every squad.",
      "Drove Jest + React Testing Library adoption, raising coverage on critical flows and reducing QA-reported regressions.",
      "Optimized data fetching on key dashboards with the ASP.NET team, improving perceived load time and Core Web Vitals.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Novacomp · client: EY (Ernst & Young)",
    location: "Remote",
    period: "Aug 2020 — Dec 2022",
    points: [
      "FE engineer on a team of 18 delivering an internal global EY product used across multiple countries.",
      "Migrated a large portion of the codebase from JavaScript to TypeScript, removing a class of runtime bugs.",
      "Managed global state with Redux-Saga + React Query, cutting data-sync defects.",
      "Led i18n with react-i18next, enabling multi-language deployments worldwide.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <span className="experience__eyebrow">
          <span className="experience__eyebrow-line" />
          CAREER
        </span>
        <h2 className="experience__title">Experience</h2>

        <ol className="exp-timeline">
          {EXPERIENCE.map((job) => (
            <li key={job.role + job.period} className="exp-item">
              <span className="exp-item__dot" />
              <div className="exp-card">
                <div className="exp-card__head">
                  <div>
                    <h3 className="exp-card__role">{job.role}</h3>
                    <p className="exp-card__company">
                      {job.company}
                      <span className="exp-card__location">
                        {" "}
                        · {job.location}
                      </span>
                    </p>
                  </div>
                  <span className="exp-card__period">{job.period}</span>
                </div>

                <ul className="exp-card__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
