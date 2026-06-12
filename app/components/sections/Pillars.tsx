"use client";

import { PILLAR_ICONS } from "../icons/PillarIcons";
import { useLanguage } from "../providers/LanguageProvider";
import withScrollAnimation from "../ui/withScrollAnimation";

function Pillars() {
  const { t } = useLanguage();

  return (
    <div>
      <section id="pillars" className="pillarsSection">
        <div className="sectionHead">
          <span>{t.pillars.label}</span>
          <h2>{t.pillars.title}</h2>
        </div>

        <div className="pillarGrid">
          {t.pillars.items.map((pillar, index) => (
            <article className="pillarCard" key={pillar.title}>
              <div className="iconDot" aria-hidden="true">
                {PILLAR_ICONS[index]}
              </div>
              <h3>{pillar.title}</h3>
              <h4>{pillar.subtitle}</h4>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default withScrollAnimation(Pillars);
