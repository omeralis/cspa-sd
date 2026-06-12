"use client";

import { useLanguage } from "../providers/LanguageProvider";
import withScrollAnimation from "../ui/withScrollAnimation";

const PROGRAM_ICONS = [
  <svg key="development" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
  </svg>,
  <svg key="awareness" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 10v4" />
    <path d="M8 6v12" />
    <path d="M8 6l9-3v18l-9-3" />
  </svg>,
  <svg key="research" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>,
  <svg key="partnerships" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51l6.83 3.98" />
    <path d="M15.41 6.51l-6.82 3.98" />
  </svg>,
];

function Programs() {
  const { t } = useLanguage();

  return (
    <div>
      <section id="programs" className="services">
        <div className="sectionHead">
          <div className="iconDot sectionHeadIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span>{t.programs.label}</span>
          <h2>{t.programs.title}</h2>
        </div>

        <div className="serviceGrid">
          {t.programs.items.map((item, index) => (
            <div className="serviceCard" key={item.title}>
              <div className="iconDot" aria-hidden="true">
                {PROGRAM_ICONS[index]}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="servicePoints">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default withScrollAnimation(Programs);
