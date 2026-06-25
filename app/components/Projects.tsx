import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

type Project = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  image?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Enterprise SaaS Dashboard",
    description:
      "High-performance analytics dashboard for FrankCrum's workforce management platform — real-time data, complex filter states, and fully accessible UI components across distributed Agile teams.",
    stack: ["React", "TypeScript", "Redux-Saga", "GraphQL"],
  },
  {
    title: "Design System Library",
    description:
      "Shared component library scaled across distributed teams at EY — comprehensive Storybook documentation, automated visual regression tests, and a custom theme system.",
    stack: ["Storybook", "React", "Turborepo", "Next.js"],
  },
  {
    title: "Lumera — Dream Interpretation",
    description:
      "Live iOS app on the App Store. Full product ownership from architecture to release, shipping a polished production app in 4 months with AI-assisted workflows.",
    stack: ["SwiftUI", "SwiftData", "Supabase"],
    href: "https://apps.apple.com/cr/app/lumera-dream-interpretation/id6759537468?l=en-GB",
  },
  {
    title: "ROSCA dApp",
    description:
      "Decentralized rotating savings dApp built at ETHOnline 2025 — wallet onboarding, on-chain group savings, and a Foundry-tested contract layer in a Turborepo monorepo.",
    stack: ["Next.js", "Wagmi", "RainbowKit", "Foundry"],
    href: "https://ethglobal.com/showcase",
  },
  {
    title: "Yearn Finance V3",
    description:
      "Open-source UI contributions to Yearn Finance V3 — refined components and interaction states across the DeFi vault interface.",
    stack: ["React", "TypeScript", "Viem"],
    href: "https://yearn.fi",
  },
  {
    title: "StablePay",
    description:
      "Crypto payment gateway and co-founded project — MakerDAO Prize winner at ETH San Francisco 2018.",
    stack: ["React", "Ethers.js", "Solidity"],
    href: "https://github.com/laitanop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <span className="projects__eyebrow">
          <span className="projects__eyebrow-line" />
          WORK
        </span>
        <h2 className="projects__title">
          Featured <span className="projects__title-accent">Projects</span>
        </h2>

        <div className="projects__grid">
          {PROJECTS.map((p) => {
            const isLink = Boolean(p.href);
            const Tag = isLink ? "a" : "div";
            return (
              <Tag
                key={p.title}
                className={`project-card${isLink ? " is-link" : ""}`}
                {...(isLink
                  ? { href: p.href, target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <div className="project-card__media">
                  {p.image ? (
                    <img src={p.image} alt={`${p.title} screenshot`} />
                  ) : (
                    <span className="project-card__placeholder">
                      [ PROJECT SCREENSHOT ]
                    </span>
                  )}
                </div>

                <div className="project-card__body">
                  <div className="project-card__head">
                    <h3 className="project-card__title">{p.title}</h3>
                    {isLink && (
                      <ArrowOutwardRoundedIcon
                        className="project-card__arrow"
                        sx={{ fontSize: 20 }}
                      />
                    )}
                  </div>
                  <p className="project-card__desc">{p.description}</p>
                  <div className="project-card__tags">
                    {p.stack.map((tech) => (
                      <span key={tech} className="project-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
