"use client";

import { useLanguage } from "../providers/LanguageProvider";
import withScrollAnimation from "../ui/withScrollAnimation";

function Pillars() {
  const { t } = useLanguage();

  return (
    <div>
      <section id="pillars" className="pillars">
        {t.pillars.map((pillar, index) => (
          <article className="pillarCard" key={pillar.title}>
            <span>0{index + 1}</span>
            <h3>{pillar.title}</h3>
            <h4>{pillar.subtitle}</h4>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default withScrollAnimation(Pillars);
