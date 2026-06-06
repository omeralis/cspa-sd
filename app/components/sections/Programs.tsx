"use client";

import { useLanguage } from "../providers/LanguageProvider";
import withScrollAnimation from "../ui/withScrollAnimation";

function Programs() {
  const { t } = useLanguage();

  return (
    <div>
      <section id="programs" className="services">
        <div className="sectionHead">
          <span>{t.programs.label}</span>
          <h2>{t.programs.title}</h2>
        </div>

        <div className="serviceGrid">
          {t.programs.items.map((item) => (
            <div className="serviceCard" key={item.title}>
              <div className="iconDot" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default withScrollAnimation(Programs);
