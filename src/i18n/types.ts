export type Lang = 'fi' | 'en';

export interface Step {
  eyebrow: string;
  title: string;
  short: string;
  body: string;
  outcome: string;
  /** Sold as its own product, e.g. "Suuntatyöpaja", with a public price. */
  product?: string;
  price?: string;
  /** Time-limited offer shown as a pill on the step. */
  offer?: string;
}

export interface Person {
  name: string;
  fullName: string;
  role: string;
  degree?: string;
  bio?: string;
  email?: string;
  phone?: string;
}

export interface Content {
  lang: Lang;
  routes: { home: string; approach: string; about: string; contact: string };
  ui: {
    skip: string;
    navLabel: string;
    nav: { home: string; approach: string; about: string; contact: string };
    book: string;
    /** Where every booking CTA points: a direct phone call. */
    bookHref: string;
    footer: string;
    footerNote: string;
  };
  home: {
    title: string;
    description: string;
    heroLines: string[];
    caption: string;
    lede: string;
    secondaryAction: string;
    beliefsEyebrow: string;
    beliefsTitle: string;
    beliefs: { title: string; text: string }[];
    principlesTitle: string;
    principlesLead: string;
    principles: { title: string; text: string }[];
    processTitle: string;
    processLink: string;
    audienceTitle: string;
    audienceLead: string;
    audience: { title: string; text: string }[];
    whyTitle: string;
    whyText: string[];
    ctaTitle: string;
  };
  /** Time-limited offer; hidden automatically after `until` (YYYY-MM-DD). */
  offer: { until: string; eyebrow: string; title: string; text: string; note: string };
  process: Step[];
  context: {
    eyebrow: string;
    title: string;
    lede: string;
    bridgeTitle: string;
    bridge: { label: string; title: string; text: string }[];
    includesTitle: string;
    includes: { title: string; text: string }[];
    outcomeLabel: string;
    outcome: string;
    closer: string;
    fit: string;
    homeLink: string;
    anchor: string;
  };
  approach: {
    title: string;
    description: string;
    heroLines: string[];
    lede: string;
    outcomeLabel: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
  };
  about: {
    title: string;
    description: string;
    eyebrow: string;
    heroTitle: string;
    lede: string;
    photoAlt: string;
    people: Person[];
    storyTitle: string;
    story: string[];
    storyAction: string;
    contactTitle: string;
    visitLabel: string;
    address: string[];
    mapLabel: string;
    reachLabel: string;
    visitNote: string;
  };
}
