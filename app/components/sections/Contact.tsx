"use client";

import { useLanguage } from "../providers/LanguageProvider";
import withScrollAnimation from "../ui/withScrollAnimation";

function Contact() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="cta" id="contact">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.description}</p>
        <a href={`mailto:${t.contact.email}`}>{t.contact.button}</a>
      </section>
    </div>
  );
}

export default withScrollAnimation(Contact);
