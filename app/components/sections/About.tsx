"use client";

import { useLanguage } from "../providers/LanguageProvider";
import withScrollAnimation from "../ui/withScrollAnimation";

function About() {
  const { t } = useLanguage();

  return (
    <div>
      <section id="about" className="about">
        <div>
          <span className="sectionLabel">{t.about.label}</span>
          <h2>{t.about.title}</h2>
        </div>

        <p>{t.about.description}</p>
      </section>
    </div>
  );
}

export default withScrollAnimation(About);
