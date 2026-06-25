import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <span className="contact__badge">
          <span className="contact__badge-dot" />
          OPEN TO WORK
        </span>

        <h2 className="contact__title">
          Let&rsquo;s build something
          <br />
          <span className="contact__title-accent">great together.</span>
        </h2>

        <p className="contact__text">
          I&rsquo;m open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Drop me a line — I reply
          within 24 hours.
        </p>

        <div className="contact__actions">
          <a
            className="contact-btn contact-btn--primary"
            href="mailto:laitanop@gmail.com"
          >
            <EmailRoundedIcon sx={{ fontSize: 17 }} />
            Email Me
          </a>
          <a
            className="contact-btn"
            href="https://linkedin.com/in/laitanop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ fontSize: 17 }} />
            LinkedIn
          </a>
          <a
            className="contact-btn"
            href="https://github.com/laitanop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ fontSize: 17 }} />
            GitHub
          </a>
          {/* <a
            className="contact-btn contact-btn--purple"
            href="https://laitanop.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LanguageRoundedIcon sx={{ fontSize: 17 }} />
            laitanop.dev
          </a> */}
        </div>
      </div>
    </section>
  );
}
