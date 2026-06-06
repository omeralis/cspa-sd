export type Locale = "en" | "ar";

export type ServiceItem = {
  title: string;
  description: string;
};

export type PillarItem = {
  title: string;
  subtitle: string;
  text: string;
};

export type Translations = {
  nav: {
    home: string;
    about: string;
    pillars: string;
    programs: string;
    contact: string;
    lang: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    join: string;
    learnMore: string;
    imageAlt: string;
  };
  stats: {
    community: string;
    events: string;
    partnerships: string;
  };
  programs: {
    label: string;
    title: string;
    items: ServiceItem[];
  };
  about: {
    label: string;
    title: string;
    description: string;
  };
  pillars: PillarItem[];
  contact: {
    title: string;
    description: string;
    button: string;
  };
  scrollToTop: string;
  footer: {
    connect: string;
    services: string;
    quickLinks: string;
    importantLinks: string;
    location: string;
    email: string;
    tagline: string;
    designedBy: string;
    servicesItems: { label: string; href: string }[];
    quickLinkItems: { label: string; href: string }[];
    importantLinkItems: { label: string; href: string }[];
  };
};
