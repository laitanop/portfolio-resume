"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

const LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <header className="navbar">
      <a className="navbar__logo" href="#top" aria-label="Laitanop.dev home">
        <Image
          src={dark ? "/dark-logo-solo.svg" : "/light-logo-solo.svg"}
          alt="Laitanop.dev"
          width={100}
          height={36}
          priority
        />
      </a>

      <nav className="navbar__nav" aria-label="Primary">
        {LINKS.map((link) => (
          <a key={link.href} className="navbar__link" href={link.href}>
            {link.label}
          </a>
        ))}

        <button
          type="button"
          role="switch"
          aria-checked={dark}
          aria-label="Toggle dark mode"
          className={`navbar__toggle${dark ? " is-on" : ""}`}
          onClick={() => setDark((v) => !v)}
        >
          <span className="navbar__toggle-thumb">
            {dark ? (
              <DarkModeRoundedIcon sx={{ fontSize: 14 }} />
            ) : (
              <LightModeRoundedIcon sx={{ fontSize: 14 }} />
            )}
          </span>
          <span className="navbar__toggle-chevron" aria-hidden="true">
            &rsaquo;
          </span>
        </button>
      </nav>
    </header>
  );
}
