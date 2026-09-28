import type { Content } from './types';

export const en: Content = {
  lang: 'en',
  routes: { home: '/en/', approach: '/en/approach/', about: '/en/team/', contact: '/en/team/#contact' },
  ui: {
    skip: 'Skip to content',
    navLabel: 'Main menu',
    nav: { home: 'Home', approach: 'How we work', about: 'About', contact: 'Contact' },
    book: 'Book a free discovery call',
    footer: '© 2026 Enlightened Bits · Josafatinkatu 9, 00510 Helsinki',
    footerNote: 'AI on your own terms',
  },

  home: {
    title: 'Enlightened Bits – AI on your own terms',
    description:
      'AI consulting for companies, non-profits and the public sector. We help you decide where AI is worth using, then build it so your data and your decisions stay with you.',
    heroLines: ['AI on', '<em>your own terms.</em>'],
    caption: 'Your goals first.\nThen the AI.',
    lede:
      'We help organisations decide where AI is worth using and where it is not. Then we build it so that your data and your decisions stay with you.',
    secondaryAction: 'How we work',
    bandLeft: 'AI consulting for companies and communities',
    beliefsEyebrow: 'What we believe',
    beliefsTitle: 'AI serves <em>people</em>, not the other way round.',
    beliefs: [
      {
        title: 'Time to think',
        text: 'AI handles routine work faster. The time it frees up is best spent on what a machine can’t do for us: thinking, meeting people and making better decisions.',
      },
      {
        title: 'Fear needs to be understood',
        text: 'AI also raises fears about work, fairness and losing control. We don’t brush them aside. We listen, because fear often carries real wisdom.',
      },
      {
        title: 'A better society for everyone',
        text: 'The benefits of AI must not stay with a few. When companies, non-profits and the public sector adopt it on their own values, it can help build a society that works better for everyone.',
      },
    ],
    principlesTitle: 'Why us',
    principlesLead: 'AI is a <em>tool</em>. You set the direction.',
    principles: [
      {
        title: 'Why first, then with what',
        text: 'We start from values and goals. Sometimes our best advice is to leave AI out.',
      },
      {
        title: 'We advise and we build',
        text: 'We don’t leave you with a slide deck. We deliver what we agree on.',
      },
      {
        title: 'On your own server',
        text: 'Where needed, open models on infrastructure you control. Your data isn’t sent to a foreign cloud service.',
      },
    ],
    questionsEyebrow: 'Sound familiar?',
    questionsTitle: 'AI is already part of your work. The plan is still missing.',
    questions: [
      'Some of your people use AI on their own, and others are afraid to touch it.',
      'The board is asking for an AI plan, and nobody knows where to start.',
      'You ran a pilot, but the answers stayed generic because the machine doesn’t know you.',
      'Sensitive data can’t go to a foreign cloud, so the whole thing feels impossible.',
    ],
    questionsNote:
      'You are not alone. According to <a href="https://stat.fi/en/publication/cm1hnps701dbm07w59uo0jw6u" rel="noopener">Statistics Finland</a>, 38% of Finnish companies with ten or more employees used AI in 2025, but only 15% had written down shared practices for it. In a <a href="https://tieke.fi/kartoitimme-tekoalyn-vastuullinen-kayttoonotto-ja-somen-murros-pohdituttavat-jarjestoissa-arki-on-tasapainoilua-digitalisaation-kanssa/" rel="noopener">survey by TIEKE</a>, 37% of non-profits were not using AI at all.',
    processTitle: 'Four steps. We start from where you are now.',
    processLink: 'See the services in detail',
    audienceTitle: 'Who we work with',
    audienceLead: 'For organisations whose <em>values</em> are not decoration.',
    audience: [
      { title: 'Companies', text: 'When AI has to deliver results without eating away at why you exist.' },
      { title: 'Non-profits and foundations', text: 'When resources are tight and values are central.' },
      { title: 'Municipalities and public bodies', text: 'When trust, privacy and equal treatment are non-negotiable.' },
      { title: 'Schools and universities', text: 'When AI changes both teaching and learning.' },
    ],
    whyTitle: 'We know the technology, so we can talk about it honestly.',
    whyText: [
      'We have built AI agents and machine learning systems. We know what today’s models can and cannot do.',
      'So we don’t sell hype. We advise and build ourselves, we work transparently, and sometimes our best advice is to leave AI out.',
    ],
    ctaTitle: 'Let’s start with a free discovery call. Tell us what matters to you, and we’ll work out together where to begin.',
  },

  offer: {
    until: '2026-10-31',
    eyebrow: 'Autumn offer for non-profits',
    title: 'Mapping at <em>half price</em> for non-profits.',
    text: 'Non-profits, foundations and other public-benefit organisations get 50% off our Mapping service when they book it by 31 October 2026. Together we look at where your time really goes, where AI could free it up for what matters more, and where it has no place.',
    note: 'Start with a free discovery call. The work itself can take place in November or later.',
  },

  process: [
    {
      eyebrow: 'Step 01',
      title: 'Direction',
      short: 'A workshop where your organisation articulates its own values and goals for AI.',
      body: 'We bring together leadership, staff and, where relevant, members or volunteers. We cover what AI is and what it isn’t, then talk about what you value, what you are aiming for, and what you don’t want to hand over to a machine. We also make room for the worries and fears AI raises.',
      outcome: 'Your organisation’s own AI principles and your first three use cases: short, plain-spoken and made together.',
      product: 'Direction workshop',
      price: '€1,500 + VAT',
    },
    {
      eyebrow: 'Step 02',
      title: 'Mapping',
      short: 'A look at everyday work: where the real benefits are and where the limits lie.',
      body: 'We look at where your time actually goes. We identify the tasks where AI could free up time for what matters more, and the ones where it has no place. Along the way we assess privacy, risks and costs.',
      offer: '−50% for non-profits until 31 Oct',
      outcome: 'A prioritised list of use cases, the terms for each, and an honest estimate of the benefits.',
    },
    {
      eyebrow: 'Step 03',
      title: 'Pilot',
      short: 'One or two small pilots in real work, with real people.',
      body: 'We build pilots so that your data and decisions stay with you, using open-source models on your own infrastructure where needed. We measure what we agreed mattered in the direction step.',
      outcome: 'A working pilot, feedback from users, and a basis for deciding whether to continue, change course or stop.',
    },
    {
      eyebrow: 'Step 04',
      title: 'Adoption',
      short: 'Skills, practices and follow-up, so the change lasts.',
      body: 'We train people to use the tools with judgement and write down shared ground rules. We also agree how the principles will be revisited as the technology and your needs change.',
      outcome: 'A capable team, agreed practices, and a light way to keep checking direction.',
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
    fit: 'Can be done as part of mapping and piloting, or as a service of its own.',
    homeLink: 'Read more about organisational context',
    anchor: 'context',
  },

  approach: {
    title: 'How we work – Enlightened Bits',
    description:
      'Four steps from values to practice: direction, mapping, pilot and adoption. You can start at any step.',
    heroLines: ['From values to practice,', '<em>at your own pace.</em>'],
    lede:
      'Some organisations are still finding their direction, others have already run pilots and want to bring AI into everyday work. So you can start at any step, and each one leaves you with something of your own, even if you carry on by yourselves. Most start with a free discovery call and the direction workshop.',
    outcomeLabel: 'Outcome',
    faqTitle: 'Frequently asked',
    faq: [
      {
        q: 'What does it cost?',
        a: 'The first discovery call is free. The direction workshop is €1,500 + VAT. Other services are priced to your needs after the discovery call.',
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
        a: 'Yes. Many start with the direction workshop alone (€1,500 + VAT) and then decide whether to continue together or on their own.',
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
    address: ['Enlightened Bits', 'Josafatinkatu 9 1h 64', '00510 Helsinki', 'Finland'],
    mapLabel: 'Show on a map',
    reachLabel: 'Email and phone',
    visitNote: 'Our office is in Helsinki. Please arrange a visit by email in advance.',
  },
};
