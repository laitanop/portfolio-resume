import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <span className="about__badge">
          <span className="about__badge-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </span>

        <h1 className="about__title">
          Pamela
          <br />
          <span className="about__title-accent">Rivera</span>
          <span className="about__caret" aria-hidden="true" />
        </h1>

        <p className="about__role">
          Senior Frontend Software Engineer{" "}
          <span className="about__sep">·</span> React{" "}
          <span className="about__sep">·</span> Next.js{" "}
          <span className="about__sep">·</span> TypeScript
        </p>

        <p className="about__summary">
          5+ years building fast, accessible, production-grade web apps for
          enterprise SaaS clients. I design and scale shared design systems, turn
          Figma into pixel-perfect interfaces, and ship features end-to-end.
        </p>

        <div className="about__actions">
          <a className="btn btn--primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in Touch
          </a>
          <a className="about__site" href="https://laitanop.dev">
            <LanguageRoundedIcon sx={{ fontSize: 16 }} />
            laitanop.dev
          </a>
        </div>
      </div>

      <div className="about__visual" aria-hidden="true">
        <div className="about__rings">
          <span className="about__ring about__ring--1" />
          <span className="about__ring about__ring--2">
            <span className="about__ring-node" />
          </span>
          <span className="about__ring about__ring--3" />

          <div className="about__logo-card">
            <img className="about__fav about__fav--dark" src="/dark-favicon.svg" alt="" />
            <img className="about__fav about__fav--light" src="/favicion-light.svg" alt="" />
          </div>

          <div className="about__chip about__chip--exp">
            <span className="about__chip-value">5+</span>
            <span className="about__chip-label">Years Exp.</span>
          </div>

          <div className="about__chip about__chip--tools">
            <CodeRoundedIcon sx={{ fontSize: 16 }} />
            <span className="about__chip-stack">
              <span className="about__chip-value">20+ Tools</span>
              <span className="about__chip-label">in stack</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
