"use client";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import GitHubIcon from "@mui/icons-material/GitHub";

type Project = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  github?: string;
  image?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Lumera — Dream Interpretation",
    description:
      "Live iOS app on the App Store. Full product ownership from architecture to release, shipping a polished production app in 4 months with AI-assisted workflows.",
    stack: ["SwiftUI", "SwiftData", "Supabase", "openRouter"],
    href: "https://apps.apple.com/cr/app/lumera-dream-interpretation/id6759537468?l=en-GB",
    image: "/lumera-dream.jpeg",
  },
  {
    title: "Web3 Coffee Support Demo",
    description:
      "High-performance analytics dashboard for FrankCrum's workforce management platform — real-time data, complex filter states, and fully accessible UI components across distributed Agile teams.",
    stack: [
      "React",
      "TypeScript",
      "Tailwindcss",
      "Wagmi",
      "Viem",
      "RainbowKit",
    ],
    href: "https://web3buycoffee.laitanop.dev/",
    github: "https://github.com/laitanop/web3-buy-coffee",
    image: "/buy-coffeWeb3.svg",
  },
  {
    title: "ROSCA dApp",
    description:
      "Decentralized rotating savings dApp built at ETHOnline 2025 — wallet onboarding, on-chain group savings, and a Foundry-tested contract layer in a Turborepo monorepo.",
    stack: ["Next.js", "Wagmi", "RainbowKit", "Foundry"],
    href: "https://ethglobal.com/showcase/rosca-dapp-sm9ky",
    image: "/rosca-dapp.png",
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
            return (
              <div
                key={p.title}
                className={`project-card${isLink ? " is-link" : ""}`}
                onClick={
                  isLink
                    ? () => window.open(p.href, "_blank", "noreferrer")
                    : undefined
                }
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
                  <div className="project-card__footer">
                    <div className="project-card__tags">
                      {p.stack.map((tech) => (
                        <span key={tech} className="project-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {p.github && (
                      <a
                        className="project-card__github"
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View source on GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GitHubIcon sx={{ fontSize: 18 }} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
