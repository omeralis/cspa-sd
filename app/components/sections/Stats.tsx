"use client";

import { useLanguage } from "../providers/LanguageProvider";
import withScrollAnimation from "../ui/withScrollAnimation";

function Stats() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="stats">
        <div>
          <strong>380+</strong>
          <span>{t.stats.professionalMembers}</span>
        </div>
        <div>
          <strong>12+</strong>
          <span>{t.stats.eventsWorkshops}</span>
        </div>
        <div>
          <strong>8+</strong>
          <span>{t.stats.strategicPartnerships}</span>
        </div>
        <div> 
          <strong>10+</strong>
          <span>{t.stats.awarenessCampaigns}</span>
        </div>
      </section>
    </div>
  );
}

export default withScrollAnimation(Stats);
