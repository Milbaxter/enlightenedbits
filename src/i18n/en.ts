import type { Content } from './types';

export const en: Content = {
  lang: 'en',
  routes: { home: '/en/', approach: '/en/approach/', about: '/en/team/', contact: '/en/team/#contact' },
  ui: {
    skip: 'Skip to content',
    navLabel: 'Main menu',
    nav: { home: 'Home', approach: 'How we work', about: 'About', contact: 'Contact' },
    book: 'Call us',
    bookHref: 'tel:+358504941660',
    footer: '© 2026 Enlightened Bits · Josafatinkatu 9, 00510 Helsinki',
    footerNote: 'AI on your own terms',
  },

  home: {
    title: 'Enlightened Bits – AI on your own terms',
    description:
      'AI consulting for companies, non-profits and the public sector. We help organisations use AI more skilfully: define the problem, give the AI good context, and measure real results.',
    heroLines: ['The highest-leverage tool humanity has ever created.', '<em>Do you know how to use it?</em>'],
    caption: 'Your goals first.\nThen the AI.',
    lede:
      'We help organisations use AI with skill: clear goals, good context, and results you can measure in your business.',
    secondaryAction: 'How we work',
    beliefsEyebrow: 'What we believe',
    beliefsTitle: 'Define the problem well. Then <em>AI</em> can do the work.',
    beliefs: [
      {
        title: 'The real skill is to define the problem',
        text: 'A well-defined problem has a clear goal and a test for success. With this test, AI can run a loop: idea, do, test, repeat. One agent or 10,000 agents can run this loop. You only add more compute. Compute gets cheaper and smarter every year, so this method has no upper limit. If you cannot define the problem, a person must stay in the loop. Then that person is the bottleneck.',
      },
      {
        title: 'Context is the new advantage',
        text: 'Good company context gives AI more leverage. Soon every organisation has frontier AI. Then the difference is better context about your specific work.',
      },
      {
        title: 'Measure business results, not demos',
        text: 'The best test is a real improvement in your business. We also use well-known benchmarks.',
      },
      {
        title: 'Think before you build',
        text: 'Talk to customers and understand the problem first. Most human work belongs at the start, where you decide what to do, and at the end, where you test if the result is what you wanted. AI does the work in between, fast.',
      },
      {
        title: 'The agent harness is the highest-leverage tool humanity has ever made',
        text: 'The tools and loops around a model, for example Claude Code, can give more improvement than a better model. Thus the skill of the person who uses them matters a lot. When you learn these tools well, you can go from 1x to 10x to 1000x.',
      },
    ],
    principlesTitle: 'How we help',
    principlesLead: 'We help your organisation get <em>real results</em> from AI.',
    principles: [
      {
        title: 'Define the problem',
        text: 'Together we write clear goals and tests for success. Then AI can do the work, and you can see if it works.',
      },
      {
        title: 'Build your context',
        text: 'We put your company knowledge into a form that AI can use. You own it, and it works with any model.',
      },
      {
        title: 'Build and measure',
        text: 'We build the agents and tools. We measure the results in your business, not in a demo.',
      },
      {
        title: 'Train your people',
        text: 'We teach your team to use the new tools well. A skilled user gets much more from the same AI.',
      },
    ],
    processTitle: 'Three ways to work with us. Start where you are now.',
    processLink: 'See the services in detail',
    audienceTitle: '',
    audienceLead: '',
    audience: [],
    whyTitle: 'Our strength: we build with these tools every day.',
    whyText: [
      'We build AI agents, harnesses and machine learning systems. We know what today’s models can do and what they cannot do.',
      'We do not sell hype. We advise, we build and we measure. When necessary, we use open models on servers that you control. Sometimes our best advice is not to use AI.',
    ],
    ctaTitle: 'Call or email us. The first conversation is free: tell us what matters to you, and we’ll work out together where to begin.',
  },

  offer: {
    until: '2026-10-31',
    eyebrow: 'Autumn offer for non-profits',
    title: 'Mapping at <em>half price</em> for non-profits.',
    text: 'We care about good impact. That is why non-profits, foundations and other public-benefit organisations get 50% off our Mapping service when they book it by 31 October 2026. Together we find where AI can free your time for your mission, and where AI has no place.',
    note: 'Start with a free discovery call. The work itself can take place in November or later.',
  },

  process: [
    {
      eyebrow: 'Offer 01',
      title: 'Workshop',
      short: 'A facilitated workshop. Learn the latest AI tools and decide together how your organisation wants to use AI.',
      body: 'We bring together leadership and staff. We show the latest AI tools in practice, and you try them yourselves. Then we talk about how your organisation wants to use AI, what you want to keep in human hands, and what worries you.',
      outcome: 'A shared understanding of what AI can do today, your own principles for AI, and your first ideas for where to use it.',
    },
    {
      eyebrow: 'Offer 02',
      title: 'Mapping',
      short: 'We map your organisation and find the lowest-hanging fruit for AI.',
      body: 'We look at where your time and money actually go. We find the tasks where AI gives the most value for the least effort, and the tasks where AI has no place. For each task, we define a clear goal and a test for success. We also check privacy, risks and costs.',
      offer: '−50% for non-profits until 31 Oct',
      outcome: 'A prioritised list of AI opportunities, each with a goal, a test for success and an honest estimate of the value.',
    },
    {
      eyebrow: 'Offer 03',
      title: 'Build',
      short: 'From prototype to full-stack production. We build it and we deploy it.',
      body: 'We start with a fast prototype and test it with real people and real data. When it works, we build it into a full-stack system and deploy it to production. When necessary, we run open models on servers that you control. We measure results in your business, not in a demo.',
      outcome: 'A working system in production, measured against the goals we agreed, and a team that knows how to use it.',
    },
  ],

  context: {
    eyebrow: 'Organisational context',
    title: 'The machine doesn’t know <em>you</em>. Yet.',
    lede: 'AI doesn’t know what your organisation is aiming for, why, or what good work looks like on your terms. We map it with you and turn it into a form that lets the machine work towards the outcome you want.',
    bridgeTitle: 'The bridge between goals and technology',
    bridge: [
      { label: 'What', title: 'What you want to achieve', text: 'The tasks, workflows and outcomes that genuinely matter to you.' },
      { label: 'Why', title: 'Why it matters', text: 'Your goals, your values and how you recognise success.' },
      { label: 'Context', title: 'How the machine understands it', text: 'Tacit knowledge written down: instructions, sources, examples and limits a machine can use.' },
      { label: 'Outcome', title: 'The machine works in your direction', text: 'Results are judged by your measures, and the context is refined on that basis.' },
    ],
    includesTitle: 'What the context contains',
    includes: [
      { title: 'Goals and measures', text: 'What you are aiming for and how you recognise success.' },
      { title: 'Values and limits', text: 'What is off-limits, what always needs a human, and whose voice must be heard.' },
      { title: 'Knowledge and sources', text: 'Which material the machine may rely on, and which it may not.' },
      { title: 'Workflows', text: 'How the work actually moves and who does what.' },
      { title: 'Examples', text: 'What a good outcome looks like, in your language and your voice.' },
      { title: 'Evaluation', text: 'How results are checked and how the context improves over time.' },
    ],
    outcomeLabel: 'Outcome',
    outcome: 'Your organisation’s context: a plain-language body of work that you own, and that works with any AI model, including one on your own server.',
    closer: 'Models change. The <em>context</em> stays with you.',
    fit: 'Can be done as part of mapping and building, or as a service of its own.',
    homeLink: 'Read more about organisational context',
    anchor: 'context',
  },

  approach: {
    title: 'How we work – Enlightened Bits',
    description:
      'Three offers: a workshop, a mapping of your organisation, and building from prototype to production. You can start with any of them.',
    heroLines: ['From values to practice,', '<em>at your own pace.</em>'],
    lede:
      'Some organisations are just starting with AI. Others already have a pilot and want to take it to production. So you can start with any offer, and each one gives you something of your own, even if you continue by yourselves. Most start with a free call and the workshop.',
    outcomeLabel: 'Outcome',
    faqTitle: 'Frequently asked',
    faq: [
      {
        q: 'What does it cost?',
        a: 'The first discovery call is free. We price each project to your needs after that call.',
      },
      {
        q: 'Do we need to be using AI already?',
        a: 'No. Many start where some people use tools on their own and others not at all. That is exactly when a shared conversation is most valuable.',
      },
      {
        q: 'Surely you always recommend AI?',
        a: 'We don’t. The aim is to find the right relationship with AI for you. Sometimes the best outcome is a reasoned decision to keep something in human hands.',
      },
      {
        q: 'Do you sell any company’s products or licences?',
        a: 'No. We are independent and take no referral fees. We favour open source, but we recommend what fits your needs.',
      },
      {
        q: 'What does AI on your own infrastructure mean?',
        a: 'The AI model runs on a server you own or control, so your data isn’t sent to a foreign cloud service for processing. That matters when you handle sensitive information.',
      },
      {
        q: 'Can we buy just part of it?',
        a: 'Yes. Many start with the workshop alone and then decide whether to continue together or on their own.',
      },
    ],
  },

  about: {
    title: 'About – Enlightened Bits, Helsinki',
    description: 'Enlightened Bits is an AI consultancy based in Helsinki. We help companies and communities use AI on their own terms.',
    eyebrow: 'About',
    heroTitle: 'The people behind Enlightened Bits.',
    lede:
      'We are an AI consultancy based in Helsinki, with roots at Aalto University. We believe the benefits of AI belong to everyone, as long as each organisation gets to decide for itself on what terms it uses it.',
    photoAlt: 'Maximilian and Juhani running the Helsinki Marathon in the rain.',
    people: [
      {
        name: 'Maximilian',
        fullName: 'Maximilian Rehn',
        role: 'Co-founder',
        degree: 'M.Sc. Information Networks, Aalto University',
        bio: '',
        email: 'maximilian@enlightenedbits.com',
        phone: '+358 50 494 1660',
      },
      {
        name: 'Juhani',
        fullName: 'Juhani Lindh',
        role: 'Co-founder',
        degree: 'M.Sc. Complex Systems, Aalto University',
        bio: '',
        email: 'juhani@enlightenedbits.com',
        phone: '+358 45 189 4225',
      },
    ],
    storyTitle: 'How we got here',
    story: [
      'We kept coming back to the same idea: Finland has world-class talent and everything it needs to use AI wisely.',
      'We started out building local AI on organisations’ own servers. Along the way we noticed that the hardest question is rarely technical. The hardest part is deciding together what you want AI for, and what you don’t.',
      'So today we start from values and goals. The technology follows, and that part we do well.',
    ],
    storyAction: 'Work with us',
    contactTitle: 'Contact',
    visitLabel: 'Visiting address',
    address: ['Enlightened Bits', 'Josafatinkatu 9 LH 64', '00510 Helsinki', 'Finland'],
    mapLabel: 'Show on a map',
    reachLabel: 'Email and phone',
    visitNote: 'Our office is in Helsinki. Please arrange a visit by email in advance.',
  },
};
