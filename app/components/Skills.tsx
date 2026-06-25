const CATEGORIES = [
  {
    label: "Core",
    tone: "accent",
    items: ["TypeScript", "JavaScript ES6+", "React", "Next.js", "Node.js", "HTML5", "CSS3"],
  },
  {
    label: "State & Data",
    tone: "purple",
    items: ["Redux / Redux-Saga", "React Query", "Context API", "REST", "GraphQL"],
  },
  {
    label: "UI & Testing",
    tone: "accent",
    items: ["Tailwind CSS", "Material UI", "Storybook", "Jest", "React Testing Library", "Cypress"],
  },
  {
    label: "Tooling & Cloud",
    tone: "purple",
    items: ["Git", "GitHub Actions", "Vercel", "Supabase", "Firebase", "Turborepo", "Vite / Webpack"],
  },
  {
    label: "iOS & Web3",
    tone: "accent",
    items: ["Swift", "SwiftUI", "SwiftData", "Wagmi", "Viem", "Ethers.js", "RainbowKit", "Foundry"],
  },
  {
    label: "AI-Assisted Dev",
    tone: "purple",
    items: ["Cursor", "Claude", "GitHub Copilot", "Prompt Engineering"],
  },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <span className="skills__eyebrow">
          <span className="skills__eyebrow-line" />
          TECHNICAL STACK
        </span>
        <h2 className="skills__title">Skills &amp; Technologies</h2>

        <div className="skills__grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className={`skill-card skill-card--${cat.tone}`}>
              <h3 className="skill-card__label">{cat.label}</h3>
              <div className="skill-card__tags">
                {cat.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
