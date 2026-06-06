"use client";

import { useLanguage } from "../providers/LanguageProvider";
import withScrollAnimation from "../ui/withScrollAnimation";

function Stats() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="stats">
        <div>
          <strong>3</strong>
          <span>{t.stats.community}</span>
        </div>
        <div>
          <strong>1</strong>
          <span>{t.stats.events}</span>
        </div>
        <div>
          <strong>8</strong>
          <span>{t.stats.partnerships}</span>
        </div>
      </section>
    </div>
  );
}

export default withScrollAnimation(Stats);
