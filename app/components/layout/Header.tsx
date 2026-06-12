"use client";

import Image from "next/image";
import { useLanguage } from "../providers/LanguageProvider";
import { useTheme } from "../providers/ThemeProvider";

function Header() {
  const { t, toggleLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="brand">
        <Image
          src="/images/SCSA_Logo_Icon2.png"
          alt="CSPA"
          width={54}
          height={54}
        />
        <span>CSPA</span>
      </div>

      <nav>
        <a href="#hero">{t.nav.home}</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#pillars">{t.nav.pillars}</a>
        <a href="#programs">{t.nav.programs}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>

      <div className="navbarActions">
        <button
          type="button"
          className="themeBtn"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 8.5 8.5 0 1 0 21 14.5z" />
            </svg>
          )}
        </button>
        <button type="button" className="joinBtn" onClick={toggleLocale}>
          {t.nav.lang}
        </button>
      </div>
    </header>
  );
}

export default Header;
