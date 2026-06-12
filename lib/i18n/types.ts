export type Locale = "en" | "ar";

export type ServiceItem = {
  title: string;
  description: string;
  points: string[];
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
    themeDark: string;
    themeLight: string;
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
    professionalMembers: string;
    eventsWorkshops: string;
    strategicPartnerships: string;
    awarenessCampaigns: string; 
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
  pillars: {
    label: string;
    title: string;
    items: PillarItem[];
  };
  contact: {
    title: string;
    description: string;
    button: string;
    email: string;
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
