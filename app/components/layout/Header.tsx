"use client";

import Image from "next/image";
import { useLanguage } from "../providers/LanguageProvider";

function Header() {
  const { t, toggleLocale } = useLanguage();

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

      <div>
        <button type="button" className="joinBtn" onClick={toggleLocale}>
          {t.nav.lang}
        </button>
      </div>
    </header>
  );
}

export default Header;
