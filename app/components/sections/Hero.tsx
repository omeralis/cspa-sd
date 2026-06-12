"use client";

import Image from "next/image";
import { useLanguage } from "../providers/LanguageProvider";
import withScrollAnimation from "../ui/withScrollAnimation";

function Hero() {
  const { t } = useLanguage();

  return (
    <div>
      <section id="hero" className="hero">
        <div className="heroContent">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.description}</p>

          <div className="heroActions">
            <a href="#about">{t.hero.learnMore}</a>
          </div>
        </div>

        <div className="heroVisual">
          <Image
            src="/images/SCSA_Logo_Icon.png"
            alt={t.hero.imageAlt}
            width={420}
            height={420}
          />
        </div>
      </section>
    </div>
  );
}

export default withScrollAnimation(Hero);
