import type { Translations } from "./types";

export const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    pillars: "Pillars",
    programs: "Programs",
    contact: "Contact",
    lang: "العربية",
    themeDark: "Dark mode",
    themeLight: "Light mode",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    eyebrow: "Cyber Security Professional Association CSPA – Sudan",
    title: "The Architecture of Safety",
    description: "We build a secure, resilient, and sovereign digital Sudan. We bring together a community of cybersecurity professionals committed to enhancing protection, building trust, and achieving digital national resilience in facing modern challenges.",
    join: "Join the Community",
    learnMore: "Learn More",
    imageAlt: "CSPA Identity",
  },
  stats: {
    professionalMembers: "Professional Members",
    eventsWorkshops: "Events & Workshops",
    strategicPartnerships: "Strategic Partnerships",
    awarenessCampaigns: "Awareness Campaigns", 
  },
  programs: {
    label: "What We Do",
    title: "Building the National Cybersecurity Capability through Knowledge and Collaboration",
    items: [
      {
        title: "Capacity Building & Professional Development",
        description:
          "Empowering promising Sudanese talent to build globally competitive professional credentials.",
        points: [
          "Advanced technical courses in penetration testing and defense",
          "Facilitating access to recognized professional certifications",
          "Nurturing young talent through targeted development programs",
        ],
      },
      {
        title: "Community Security Awareness",
        description:
          "Raising cybersecurity literacy among individuals and institutions to prevent breaches.",
        points: [
          "National campaigns against social engineering and phishing risks",
          "Simple educational guides for everyone",
          "Public seminars for schools, universities, and startups",
        ],
      },
      {
        title: "Research & Knowledge Sharing",
        description:
          "An incubator environment for exchanging specialized studies and analyses.",
        points: [
          "Local research on cybersecurity threats within Sudan",
          "Publishing papers to update education and training curricula",
          "Periodic forums to review emerging security issues",
        ],
      },
      {
        title: "Collaboration & Strategic Partnerships",
        description:
          "An effective bridge connecting diverse expertise and building a unified front.",
        points: [
          "Supporting service and banking sectors with flexible consulting",
          "Partnership agreements with international organizations for knowledge transfer",
          "Participation in drafting and updating national cybersecurity policies",
        ],
      },
    ],
  },
  about: {
    label: "Who We Are",
    title: "We are the Cyber Security Professional Association – Sudan",
    description:
      "An independent association comprising leading professionals and experts in the field. CSPA operates as a fully independent entity, separate from any official bodies or institutions, with the aim of unifying efforts and exchanging expertise to build a safe and sustainable technical community in Sudan.",
  },
  pillars: {
    label: "Our Identity & Cyber Symbolism",
    title:
      "A specialized mandate to safeguard digital borders and build Sudan's cyber sovereignty",
    items: [
      {
        title: "The Shield",
        subtitle: "Digital Defense and Resilience",
        text: "Strengthening digital defense lines and protecting critical infrastructure and vital sectors against advanced threats and attacks.",
      },
      {
        title: "The Fingerprint",
        subtitle: "Digital Identity and Privacy",
        text: "Establishing trusted digital identity and promoting community awareness to preserve data confidentiality and privacy.",
      },
      {
        title: "The Map",
        subtitle: "Digital Jurisdiction and Sovereignty",
        text: "Supporting national digital boundaries, regulation, and secure policies in Sudan.",
      },
    ],
  },
  contact: {
    title: "Ready to strengthen the cyber ecosystem?",
    description:
      "Connect with CSPA to collaborate, participate, or contribute to a safer digital future.",
    button: "Contact Us",
    email: "info@cspa.sd",
  },
  scrollToTop: "Scroll to top",
  footer: {
    connect: "Connect",
    services: "Services",
    quickLinks: "Quick Links",
    importantLinks: "Important Links",
    location: "Sudan",
    email: "info@cspa.sd",
    tagline:
      "Cyber Security Professional Association — forging a secure, resilient, and sovereign digital Sudan through professional collaboration, knowledge, and national cyber resilience.",
    designedBy: "Designed by ",
    servicesItems: [
      { label: "Cybersecurity Awareness", href: "#programs" },
      { label: "Professional Development", href: "#programs" },
      { label: "Events", href: "#programs" },
    ],
    quickLinkItems: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Pillars", href: "#pillars" },
      { label: "Programs", href: "#programs" },
    ],
    importantLinkItems: [
      {
        label: "Sudan Cybersecurity Authority",
        href: "https://sca.gov.sd/ar",
      },
      {
        label: "Ministry of Communications and Digital Transformation",
        href: "https://mtdt.gov.sd/",
      },
    ],
  },
};
