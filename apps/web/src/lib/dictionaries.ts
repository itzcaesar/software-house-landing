/**
 * Locale dictionaries. English is the source of truth for the shape (`Dict`);
 * Indonesian mirrors it. Indonesian copy is written to read natural and
 * professional — not a literal machine translation.
 */

export const en = {
  nav: {
    services: "Services",
    work: "Work",
    process: "Process",
    about: "About",
    pricing: "Pricing",
    faq: "FAQ",
    startProject: "Start a project",
  },
  hero: {
    badgeNew: "New",
    badgeText: "AI product engineering, end-to-end",
    leadingText: "We design & build digital products that feel",
    highlight: "inevitable",
    trailingText: ".",
    subtitle:
      "Callum C is a product studio for teams who refuse to ship average. From MVP to enterprise scale — beautifully designed, expertly engineered, and shipped fast.",
    primaryCta: "Start a project",
    secondaryCta: "See our work",
    ratingSuffix: "from 40+ teams",
    stackLabel: "Built with a modern stack",
  },
  trusted: {
    label: "Trusted by ambitious startups and enterprises worldwide",
  },
  services: {
    eyebrow: "What we do",
    titleLine1: "Everything you need to ship,",
    titleLine2: "under one roof",
    description:
      "Strategy, design, and engineering as a single accountable team — so nothing gets lost in the handoff.",
    items: [
      {
        title: "Web Development",
        description:
          "Blazing-fast, SEO-ready websites and web apps built on Next.js, React, and modern edge infrastructure.",
      },
      {
        title: "Mobile Apps",
        description:
          "Native-feeling iOS & Android apps from a single codebase, with delightful motion and offline support.",
      },
      {
        title: "UI/UX Design",
        description:
          "Research-driven product design that turns complex flows into interfaces people love to use.",
      },
      {
        title: "Branding",
        description:
          "Identity systems — logo, type, color, and voice — that make your product feel unmistakably yours.",
      },
      {
        title: "SaaS Development",
        description:
          "Multi-tenant platforms with billing, auth, dashboards, and analytics — architected to scale from day one.",
      },
      {
        title: "AI Integration",
        description:
          "Ship AI features that matter — assistants, search, and automation powered by the latest models.",
      },
      {
        title: "MVP Development",
        description:
          "Go from idea to a fundable, production-grade MVP in weeks — validated fast, built to grow.",
      },
    ],
    ctaTitle: "Have something else in mind?",
    ctaDesc:
      "Tell us about your product — we'll shape the right scope, team, and timeline for it.",
    ctaButton: "Let's talk",
  },
  why: {
    eyebrow: "Why Callum C",
    title: "The upside of a senior team that actually cares",
    description:
      "We optimize for your outcomes, not our hours. Here's what that means for you.",
    statLabels: ["Products shipped", "Client rating", "Countries served", "Client retention"],
    benefits: [
      {
        title: "Ship in weeks, not quarters",
        description:
          "A lean senior team and a battle-tested toolkit mean you launch faster — without cutting corners on quality.",
      },
      {
        title: "Design-led engineering",
        description:
          "Designers and engineers work as one. Every pixel is intentional and every interaction feels effortless.",
      },
      {
        title: "One team, end-to-end",
        description:
          "Strategy, design, and code under one roof. No handoffs, no finger-pointing — just accountable delivery.",
      },
      {
        title: "Built to scale",
        description:
          "Clean architecture, strong typing, and tested code you can hand to your in-house team without regret.",
      },
      {
        title: "Radically transparent",
        description:
          "Live previews, weekly demos, and a shared board. You always know exactly where your product stands.",
      },
      {
        title: "Partners, not vendors",
        description:
          "We think in outcomes, not tickets. Most clients stay with us long after launch — 98% and counting.",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "A proven path from idea to launch",
    description:
      "A transparent, six-step roadmap that keeps you in the loop and momentum high — every single week.",
    stepLabel: "Step",
    steps: [
      {
        title: "Discovery",
        description:
          "We align on goals, users, and scope — then turn ambiguity into a clear, prioritized roadmap.",
      },
      {
        title: "Design",
        description:
          "Wireframes to polished, interactive prototypes. You see and feel the product before we build it.",
      },
      {
        title: "Development",
        description:
          "Clean, typed, well-tested code shipped in weekly increments you can review at every step.",
      },
      {
        title: "Testing",
        description:
          "Automated and manual QA across devices, plus performance and accessibility audits before launch.",
      },
      {
        title: "Launch",
        description:
          "Zero-downtime deploys on modern edge infra, with monitoring and analytics wired in from day one.",
      },
      {
        title: "Support",
        description:
          "Ongoing iteration, maintenance, and a partner on call — we grow the product alongside you.",
      },
    ],
  },
  portfolio: {
    eyebrow: "Selected work",
    title: "Products we're proud of",
    description:
      "A glimpse of what we've shipped with founders and teams across the globe.",
    cta: "Start yours",
    projects: [
      {
        category: "Fintech · SaaS",
        description:
          "A personal-finance platform with real-time insights and open-banking sync.",
        metric: "+180% activation",
        challenge:
          "Users signed up curious and left confused — finances lived in five apps, and onboarding lost most of them before their first insight.",
        solution:
          "We rebuilt the journey around one real-time dashboard: open-banking sync on first login, spending insights within seconds, and Stripe-powered plans that grow with usage.",
        outcome:
          "Activation jumped 180% in the first quarter after relaunch, and week-one retention followed. The insight feed became the product's most-visited screen.",
      },
      {
        category: "Mobile · Travel",
        description: "An all-in-one travel companion with offline maps and smart itineraries.",
        metric: "4.9★ App Store",
        challenge:
          "Travelers juggle maps, notes, and bookings across apps — and everything breaks the moment the connection drops.",
        solution:
          "A React Native app with fully offline maps, an AI itinerary builder that plans around opening hours and distance, and one-tap sharing for groups.",
        outcome:
          "4.9★ on the App Store with reviews that mention 'offline' more than any other word. Session length doubled once itineraries went AI-assisted.",
      },
      {
        category: "Healthcare · Web",
        description:
          "A patient portal that cut booking time from days to minutes for 40k users.",
        metric: "−72% booking time",
        challenge:
          "Booking a visit meant phone queues and paper forms; staff spent hours a day re-typing the same data while patients waited days for a slot.",
        solution:
          "A patient portal with live schedules, smart intake forms, and reminders — built on a HIPAA-conscious design system the clinic's team can extend.",
        outcome:
          "Booking time dropped 72% and no-shows fell with it. 40,000 patients onboarded in the first six months without a single support-desk hire.",
      },
      {
        category: "AI · SaaS",
        description: "An AI writing assistant with RAG search over private company knowledge.",
        metric: "12k+ teams",
        challenge:
          "Company knowledge was buried in wikis and threads — every document written started from a blank page and stale information.",
        solution:
          "An assistant with retrieval-augmented search across private docs: grounded answers with citations, drafts in the company's voice, and admin controls IT actually approved.",
        outcome:
          "Adopted by 12,000+ teams. Drafting time fell by half in customer studies, and 'source cited' became the feature users trusted most.",
      },
      {
        category: "E-commerce · Web",
        description:
          "A headless storefront that loads in under a second and converts like crazy.",
        metric: "+34% revenue",
        challenge:
          "A legacy monolith took four seconds to paint on mobile — and every added campaign made it slower. Conversion bled at every step of checkout.",
        solution:
          "A headless storefront on edge infrastructure: sub-second loads worldwide, instant search, and a checkout rebuilt to remove every optional step.",
        outcome:
          "Revenue rose 34% quarter-over-quarter after launch. Mobile bounce rate fell by a third, and campaign pages now ship in hours, not sprints.",
      },
      {
        category: "Branding · Web",
        description: "A full rebrand and marketing site for a fast-growing design agency.",
        metric: "2× inbound leads",
        challenge:
          "The agency's work was world-class; its own brand wasn't. Prospects couldn't tell them apart from cheaper shops — and pricing conversations showed it.",
        solution:
          "A full identity system — logo, type, motion language — and a marketing site with case studies that sell the thinking, all editable through a lightweight CMS.",
        outcome:
          "Inbound leads doubled within two months, and the average deal size grew as the brand finally matched the caliber of the work.",
      },
    ],
  },
  caseStudy: {
    eyebrow: "Case study",
    backToWork: "All work",
    challengeLabel: "The challenge",
    solutionLabel: "What we built",
    outcomeLabel: "The outcome",
    stackLabel: "Stack",
    timelineLabel: "Timeline",
    yearLabel: "Year",
    resultLabel: "Key result",
    nextProject: "Next project",
    prevProject: "Previous project",
    ctaTitle: "Want results like these?",
    ctaDesc:
      "Tell us what you're building — we'll shape the scope, team, and timeline to ship it.",
    ctaButton: "Start a project",
  },
  testimonials: {
    eyebrow: "Loved by clients",
    title: "Don't just take our word for it",
    description: "Founders and product leaders on what it's like to build with Callum C.",
    items: [
      {
        role: "Founder & CEO",
        quote:
          "Callum C shipped our MVP in six weeks and it looked like a product from a company 10× our size. We closed our seed round a month later.",
      },
      {
        role: "Head of Product",
        quote:
          "The design quality is genuinely on another level. Every detail was considered. Our users constantly tell us how good the app feels.",
      },
      {
        role: "COO",
        quote:
          "They think like founders, not contractors. They pushed back on the right things and made the product measurably better.",
      },
      {
        role: "CTO",
        quote:
          "Clean, well-tested code that our engineers picked up without missing a beat. The handoff was the smoothest we've ever had.",
      },
      {
        role: "VP Engineering",
        quote:
          "Weekly demos meant zero surprises. We always knew what we were paying for and could see progress in real time.",
      },
      {
        role: "Managing Director",
        quote:
          "Our new brand and site doubled inbound leads within two months. Best money we've spent as a young company.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    notePrefix: "Prices shown in",
    noteTail: "Switch anytime — your choice is remembered.",
    custom: "Custom",
    footerText: "Need something custom or have a tighter budget?",
    footerLink: "Let's find a fit",
    // Dedicated /pricing page
    pageTitle: "Pricing that fits what you're building",
    pageDescription:
      "Web or mobile — clear starting points for every stage. After a short call, we'll tailor a quote to your exact scope.",
    webTab: "Web Development",
    appTab: "App Development",
    web: {
      label: "Web Development",
      tagline: "Marketing sites, web apps, dashboards, and SaaS platforms.",
      plans: [
        {
          name: "Starter",
          description: "For landing pages, marketing sites, and small MVPs.",
          badge: "",
          priceSuffix: "starting",
          cta: "Start a project",
          features: [
            "Up to 6 pages",
            "Custom design in Figma",
            "Responsive & SEO-ready build",
            "Basic CMS integration",
            "2 rounds of revisions",
            "2–3 week delivery",
          ],
        },
        {
          name: "Professional",
          description: "For full web apps and fundable SaaS MVPs.",
          badge: "Most popular",
          priceSuffix: "starting",
          cta: "Book a discovery call",
          features: [
            "Everything in Starter",
            "Full web app build",
            "Design system & component library",
            "Auth & user accounts",
            "Payments, AI & analytics as add-ons",
            "4–8 week delivery",
            "30 days post-launch support",
          ],
        },
        {
          name: "Enterprise",
          description: "For complex platforms and long-term partnerships.",
          badge: "",
          priceSuffix: "",
          cta: "Talk to us",
          features: [
            "Everything in Professional",
            "Payments, AI & analytics included",
            "Dedicated senior product team",
            "Multi-platform & scalable architecture",
            "Security & compliance reviews",
            "SLA & priority support",
            "Ongoing roadmap & iteration",
            "Flexible monthly retainer",
          ],
        },
      ],
      compareRows: [
        { label: "Custom design in Figma", values: [true, true, true] },
        { label: "Pages", values: ["6", "15", "Unlimited"] },
        { label: "Responsive & SEO-ready", values: [true, true, true] },
        { label: "CMS integration", values: ["Basic", "Full", "Full + workflows"] },
        { label: "Design system & components", values: [false, true, true] },
        { label: "Auth & user accounts", values: [false, true, true] },
        { label: "Payments & dashboards", values: ["Add-on", "Add-on", true] },
        { label: "AI feature integration", values: ["Add-on", "Add-on", true] },
        { label: "Analytics & performance tuning", values: ["Add-on", "Add-on", true] },
        { label: "Multi-platform architecture", values: [false, false, true] },
        { label: "Security & compliance review", values: [false, false, true] },
        { label: "Revisions", values: ["2 rounds", "4 rounds", "Unlimited"] },
        { label: "Delivery", values: ["2–3 weeks", "4–8 weeks", "Custom"] },
        { label: "Post-launch support", values: ["14 days", "30 days", "SLA + retainer"] },
      ],
      addons: [
        { name: "Payments & dashboards", description: "Checkout, subscriptions, and an admin dashboard." },
        { name: "AI feature integration", description: "LLM, search, or automation features where they truly fit." },
        { name: "Analytics & performance tuning", description: "Event tracking, dashboards, and speed optimization." },
        { name: "Extra page", description: "Additional designed & built page, on-brand." },
        { name: "SEO starter pack", description: "Technical SEO, sitemap, schema, and Search Console setup." },
        { name: "CMS training", description: "1:1 session so your team can edit content confidently." },
        { name: "Copywriting", description: "Conversion-focused copy for up to 6 pages." },
        { name: "Care plan", description: "Hosting, updates, backups, and small monthly tweaks." },
        { name: "Rush delivery", description: "Priority scheduling to launch on a tighter timeline." },
      ],
    },
    app: {
      label: "App Development",
      tagline: "Native & cross-platform mobile apps for iOS and Android.",
      plans: [
        {
          name: "Starter",
          description: "For focused single-platform apps and mobile MVPs.",
          badge: "",
          priceSuffix: "starting",
          cta: "Start a project",
          features: [
            "iOS or Android (single platform)",
            "Up to 8 core screens",
            "Custom UI design in Figma",
            "API integration & auth",
            "2 rounds of revisions",
            "4–6 week delivery",
          ],
        },
        {
          name: "Professional",
          description: "For cross-platform apps ready for the App Store & Play Store.",
          badge: "Most popular",
          priceSuffix: "starting",
          cta: "Book a discovery call",
          features: [
            "Everything in Starter",
            "iOS + Android (React Native)",
            "Design system & component library",
            "Payments, push & offline sync",
            "AI & analytics as add-ons",
            "Store submission & release",
            "8–12 week delivery",
            "30 days post-launch support",
          ],
        },
        {
          name: "Enterprise",
          description: "For complex, high-scale mobile platforms.",
          badge: "",
          priceSuffix: "",
          cta: "Talk to us",
          features: [
            "Everything in Professional",
            "AI & analytics included",
            "Dedicated senior mobile team",
            "Native modules & deep integrations",
            "Security & compliance reviews",
            "SLA & priority support",
            "Ongoing releases & iteration",
            "Flexible monthly retainer",
          ],
        },
      ],
      compareRows: [
        { label: "Custom UI design in Figma", values: [true, true, true] },
        { label: "Platforms", values: ["iOS or Android", "iOS + Android", "iOS + Android + web"] },
        { label: "Core screens", values: ["8", "20", "Unlimited"] },
        { label: "API integration & auth", values: [true, true, true] },
        { label: "Design system & components", values: [false, true, true] },
        { label: "Payments & in-app purchase", values: [false, true, true] },
        { label: "Push notifications", values: [false, true, true] },
        { label: "Offline sync", values: [false, true, true] },
        { label: "AI feature integration", values: ["Add-on", "Add-on", true] },
        { label: "Native modules & deep integrations", values: [false, false, true] },
        { label: "Store submission & release", values: [false, true, true] },
        { label: "Security & compliance review", values: [false, false, true] },
        { label: "Revisions", values: ["2 rounds", "4 rounds", "Unlimited"] },
        { label: "Delivery", values: ["4–6 weeks", "8–12 weeks", "Custom"] },
        { label: "Post-launch support", values: ["14 days", "30 days", "SLA + retainer"] },
      ],
      addons: [
        { name: "Extra platform", description: "Add web or the second mobile OS to your build." },
        { name: "Custom backend & API", description: "Dedicated backend, database, and admin panel." },
        { name: "AI feature integration", description: "On-device or cloud AI features where they add value." },
        { name: "Push & CRM setup", description: "Notification service and lifecycle campaign tooling." },
        { name: "Product analytics", description: "Event tracking, funnels, and live dashboards." },
        { name: "Real-time & chat", description: "In-app messaging, presence, and live data sync." },
        { name: "App localization", description: "Multi-language support with localized content and formats." },
        { name: "Care plan", description: "Store updates, monitoring, and monthly bug fixes." },
        { name: "Rush delivery", description: "Priority scheduling to launch on a tighter timeline." },
      ],
    },
    // Shared across both scopes
    compareTitle: "Compare plans in detail",
    featureLabel: "Feature",
    addonsTitle: "Add-ons & extras",
    addonsSubtitle: "Bolt on exactly what you need — priced upfront, no surprises.",
    addonsFrom: "from",
    addonsDisclaimer:
      "AI feature integration is scoped case by case — it only fits products where it genuinely adds value, which we confirm together during discovery.",
    perMonth: "/mo",
    pricingFaqTitle: "Pricing questions",
    pricingFaq: [
      {
        q: "How does payment work?",
        a: "Projects run on a simple milestone schedule: 50% to start, 30% at the build midpoint, and 20% before launch. Monthly retainers are billed at the start of each cycle.",
      },
      {
        q: "Who owns the code and design files?",
        a: "You do — fully. On final payment you receive all source code, design files, and assets, with no lock-in and no license fees.",
      },
      {
        q: "What counts as a revision?",
        a: "A revision is a round of consolidated feedback on a delivered milestone. Starter includes 2 rounds, Professional 4, and Enterprise is unlimited within the sprint scope.",
      },
      {
        q: "Are the prices fixed?",
        a: "The tier prices are starting points for a defined scope. After a short discovery call we send a fixed quote — the number you approve is the number you pay.",
      },
      {
        q: "Do prices include tax?",
        a: "IDR prices exclude 11% VAT (PPN); USD prices are net. Any applicable tax is shown clearly on your invoice.",
      },
      {
        q: "What happens after launch?",
        a: "Every plan includes a support window. After that you can continue on a monthly Care plan for hosting, updates, monitoring, and new features.",
      },
    ],
    engageEyebrow: "How it works",
    engageTitle: "From first call to launch",
    engageSteps: [
      { title: "Discovery call", description: "A free 30-minute call to understand your goals, scope, and timeline." },
      { title: "Proposal & quote", description: "A fixed-scope proposal with a clear price, timeline, and deliverables." },
      { title: "Design & build", description: "We work in weekly sprints so you see real progress the whole way." },
      { title: "Launch & support", description: "We ship, hand over full ownership, and support you post-launch." },
    ],
    guarantees: [
      { title: "On-time delivery", description: "We commit to your timeline in writing — and hit it." },
      { title: "Full source ownership", description: "All code and design files are yours on final payment." },
      { title: "Post-launch support", description: "Every plan includes a support window after you go live." },
    ],
    // Home-page teaser
    teaser: {
      eyebrow: "Pricing",
      title: "Simple pricing for web & app builds",
      description:
        "Transparent starting points for both web and mobile products. Explore the full plans and find the tier that fits.",
      webLabel: "Web development",
      appLabel: "App development",
      fromLabel: "from",
      cta: "View full pricing",
    },
  },
  estimator: {
    eyebrow: "Estimator",
    title: "Estimate your build in 30 seconds",
    description:
      "Drag, tick, and watch the number move. Honest ballpark — the final quote always comes from a real conversation.",
    sizeLabel: { web: "Pages", app: "Core screens" },
    addonsLabel: "Add-ons",
    timelineLabel: "Timeline",
    timelineStandard: "Standard",
    timelineRush: "Rush",
    estimateLabel: "Estimated investment",
    startingSuffix: "starting",
    baseLine: "Base build",
    addonsLine: "Add-ons",
    rushLine: "Rush delivery",
    monthlyLine: "Care plan (monthly)",
    disclaimer:
      "Indicative estimate, not a quote. We confirm scope together on a free discovery call.",
    ctaCall: "Book a discovery call",
    ctaContact: "Send project details",
  },
  faq: {
    eyebrow: "FAQ",
    titleLine1: "Questions,",
    titleLine2: "answered",
    subPrefix: "Can't find what you're looking for?",
    subLink: "Reach out",
    subSuffix: "and we'll get back to you within one business day.",
    items: [
      {
        q: "How long does a typical project take?",
        a: "Most MVPs ship in 4–8 weeks. Larger platforms run 3–4 months, delivered in weekly increments so you see progress the whole way through. We'll give you a concrete timeline after discovery.",
      },
      {
        q: "How do you price your work?",
        a: "We offer fixed-scope project pricing and monthly retainers. Our plans below are starting points — after a short call we'll tailor a quote to your exact scope and budget.",
      },
      {
        q: "Do you work with early-stage startups?",
        a: "Absolutely. A large part of our work is taking founders from idea to a fundable, production-grade MVP — fast, and without cutting corners on quality.",
      },
      {
        q: "Who owns the code and designs?",
        a: "You do. On final payment, you receive full ownership of all source code, design files, and assets. No lock-in, no surprises.",
      },
      {
        q: "What tech stack do you use?",
        a: "We favor Next.js, React, TypeScript, Go, Rust, Laravel, React Native, and modern cloud infrastructure (PostgreSQL, Redis, Docker, Kubernetes, AWS, Google Cloud, Vercel) — chosen so your in-house team can maintain and scale everything with ease.",
      },
      {
        q: "Can you work with our existing team?",
        a: "Yes. We can embed with your designers and engineers, augment specific gaps, or run the whole build — whatever gets you to the outcome fastest.",
      },
      {
        q: "What happens after launch?",
        a: "We offer ongoing support and iteration plans for maintenance, new features, and performance. Many clients keep us on as a long-term product partner.",
      },
      {
        q: "How do we get started?",
        a: "Send us a message through the contact form below. We'll reply within one business day and set up a free 30-minute discovery call.",
      },
    ],
  },
  contact: {
    badge: "Let's build",
    title: "Tell us about your project",
    subtitle:
      "Book a free 30-minute discovery call. We'll reply within one business day with clear next steps — no pressure, no jargon.",
    detailEmail: "Email",
    detailPhone: "Phone",
    detailLocation: "Location",
    chipReply: "Reply within 1 business day",
    chipPrivate: "Your details stay private",
    name: "Name",
    namePlaceholder: "Jane Doe",
    email: "Email",
    emailPlaceholder: "jane@company.com",
    company: "Company",
    companyPlaceholder: "Acme Inc.",
    budget: "Budget",
    budgetPlaceholder: "Select a range",
    message: "Project details",
    messagePlaceholder: "What are you building, and what would success look like?",
    optional: "Optional",
    submit: "Send message",
    submitting: "Sending…",
    consent: "By submitting, you agree to be contacted about your enquiry.",
    nameRequired: "Please enter your name.",
    emailRequired: "Please enter your email.",
    emailInvalid: "Please enter a valid email.",
    messageRequired: "Tell us a little about your project.",
    messageMin: "Tell us a little more (10+ characters).",
    success: "Message sent! We'll reply within one business day.",
    error: "Something went wrong — please try again, or email us directly.",
    bookTitle: "Prefer to talk it through?",
    bookDesc: "Grab a free 30-minute discovery slot that fits your calendar.",
    bookCta: "Book a call",
  },
  notFound: {
    quip: "$ craft resolve /this-page — Error: route not found",
    title: "Lost in the build",
    description:
      "This page doesn't exist — or it shipped somewhere else. Let's get you back to solid ground.",
    ctaHome: "Back to home",
    ctaContact: "Contact us",
  },
  legal: {
    eyebrow: "Legal",
    updatedLabel: "Last updated",
    updatedDate: "July 27, 2026",
    contactLine: "Questions about this policy? Reach us at",
    backHome: "Back to home",
    privacy: {
      title: "Privacy Policy",
      intro:
        "This policy explains what we collect when you use this site or contact us, why we collect it, and the choices you have. Short version: we collect the minimum, we never sell it.",
      sections: [
        {
          h: "What we collect",
          body: "When you submit the contact form we receive the details you type: your name, email, company, budget range, and message. The site also stores your language and currency preference in your own browser's local storage — that data never leaves your device.",
        },
        {
          h: "How we use it",
          body: "Contact details are used solely to respond to your enquiry and to run any project we agree on together. We do not sell, rent, or share your personal data with third parties for marketing.",
        },
        {
          h: "Legal basis",
          body: "We process your data on the basis of your consent (submitting the form) and, where a project follows, the performance of a contract with you.",
        },
        {
          h: "Retention",
          body: "Enquiry data is kept for as long as needed to handle your request and for a reasonable period afterwards for business records. You can ask us to delete it at any time.",
        },
        {
          h: "Your rights",
          body: "You may request access to, correction of, or deletion of your personal data, and you may withdraw consent at any time by emailing us. We respond within one business day.",
        },
        {
          h: "Changes",
          body: "If this policy changes, the new version is published on this page with an updated date above. Material changes are highlighted in plain language.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      intro:
        "These terms govern the use of this website and, at a high level, how our engagements work. Project-specific terms always live in the proposal you approve.",
      sections: [
        {
          h: "Use of this site",
          body: "The content on this site is provided for general information about our services. You may not scrape, reproduce, or misrepresent it as your own.",
        },
        {
          h: "Quotes & proposals",
          body: "Prices shown on this site are starting points, not binding offers. A binding scope, price, and timeline are only established in a written proposal you approve.",
        },
        {
          h: "Payments",
          body: "Projects run on a milestone schedule — typically 50% to start, 30% at the build midpoint, and 20% before launch — unless the proposal states otherwise.",
        },
        {
          h: "Intellectual property",
          body: "Upon final payment, you own the source code, design files, and assets delivered for your project. We retain the right to reference the work in our portfolio unless agreed otherwise.",
        },
        {
          h: "Liability",
          body: "We deliver with professional care, but the site and its estimates are provided as-is. Our total liability for any engagement is limited to the fees paid for that engagement.",
        },
        {
          h: "Governing law",
          body: "These terms are governed by the laws of the Republic of Indonesia. Disputes are first resolved in good faith; we prefer conversations to courtrooms.",
        },
      ],
    },
    cookies: {
      title: "Cookie Policy",
      intro:
        "The short version: this site runs without tracking cookies. Here is exactly what is stored in your browser and why.",
      sections: [
        {
          h: "What we store",
          body: "Two small values in your browser's local storage: your language choice (English or Indonesian) and your currency choice (USD or IDR). Plus your theme preference, handled by your browser.",
        },
        {
          h: "What we don't do",
          body: "No advertising cookies, no cross-site trackers, no fingerprinting, and no third-party analytics scripts that follow you around the web.",
        },
        {
          h: "Managing storage",
          body: "You can clear these values at any time via your browser's site-data settings. The site keeps working — it simply forgets your preferences.",
        },
        {
          h: "Future changes",
          body: "If we ever add analytics, we'll pick a privacy-respecting option, disclose it here first, and keep the data anonymous.",
        },
      ],
    },
  },
  about: {
    eyebrow: "About Callum C",
    heroLead: "A young studio with an old-school obsession:",
    heroHighlight: "craft",
    heroTrail: ".",
    heroSubtitle:
      "We're at the beginning of our story. No inflated numbers, no borrowed logos — just a senior team, a sharp point of view, and work we're proud to sign.",
    marquee: [
      "Never ship average",
      "Weeks, not quarters",
      "Design-led engineering",
      "Founder-level attention",
      "Radical transparency",
    ],
    storyLabels: ["The itch", "The build", "The bet"],
    storyEyebrow: "Our story",
    storyTitle: "Why Callum C exists",
    storyParagraphs: [
      "Callum C started in 2026 with a simple frustration: great products kept dying in handoffs between strategy decks, design agencies, and dev shops. We'd seen it from the inside — and knew a small, senior, end-to-end team could do better.",
      "So we built the studio we always wanted to hire. Designers and engineers in one room, weekly demos instead of status reports, and a rule we refuse to break: never ship average.",
      "We're intentionally small and intentionally early. That means every project gets founder-level attention — and every client helps shape what this studio becomes.",
    ],
    missionTitle: "Mission",
    missionText:
      "Make world-class product design and engineering accessible to ambitious teams of any size — from first-time founders to enterprises.",
    visionTitle: "Vision",
    visionText:
      "Become Southeast Asia's most trusted product studio — known globally for shipping digital products that feel inevitable.",
    valuesEyebrow: "What we stand for",
    valuesTitle: "Values we actually practice",
    valuesDescription:
      "Not poster slogans — these are the rules we make trade-offs by, every week.",
    values: [
      {
        title: "Craft over volume",
        description:
          "We take on few projects and go deep. Quality compounds; volume dilutes.",
      },
      {
        title: "Speed with intent",
        description:
          "Ship in weeks, not quarters — but never by borrowing from quality or accruing silent debt.",
      },
      {
        title: "Radical transparency",
        description:
          "Live previews, weekly demos, honest estimates. You always know exactly where things stand.",
      },
      {
        title: "Own the outcome",
        description:
          "We think like founders, not vendors. If it doesn't move your product forward, we say so.",
      },
    ],
    roadmapEyebrow: "Where we're headed",
    roadmapTitle: "The road ahead",
    roadmapDescription:
      "We'd rather show you a real plan than invented traction. This is what we're building toward.",
    roadmap: [
      {
        status: "Now",
        period: "2026",
        title: "Studio launch",
        description:
          "Founding team assembled, brand live, and the first client builds underway.",
      },
      {
        status: "Next",
        period: "2026 · Q4",
        title: "First ten launches",
        description:
          "Ship ten products end-to-end and publish an honest case study for every single one.",
      },
      {
        status: "Later",
        period: "2027",
        title: "Product lab",
        description:
          "Reinvest studio profits into our own SaaS experiments — built with the same craft we sell.",
      },
      {
        status: "Later",
        period: "2028",
        title: "Regional senior team",
        description:
          "A distributed senior team across Southeast Asia, serving clients worldwide.",
      },
    ],
    teamEyebrow: "The team",
    teamTitle: "Small on purpose, senior by design",
    teamDescription:
      "The people who answer your emails are the people who design and build your product.",
    team: [
      {
        name: "Muhammad Caesar Rifqi",
        role: "Founder & CTO",
        bio: "Engineer at heart — owns architecture, code quality, and delivery. Believes reliability is a design decision, not an afterthought.",
        tags: ["Front End", "Backend", "Infrastructure"],
      },
      {
        name: "Gerrard Setiawan",
        role: "Co-Founder & Creative Director",
        bio: "Leads brand, interface, and motion. Believes the smallest details are what make a product feel inevitable.",
        tags: ["Brand", "UI/UX", "Motion", "Design systems"],
      },
    ],
    ctaTitle: "Build the first chapter with us",
    ctaDesc:
      "Whether you're a founder with an idea or an investor who believes in the region's product talent — we'd love to talk.",
    ctaButton: "Say hello",
  },
  footer: {
    description:
      "Callum C is a product studio that designs and builds fast, beautiful web apps, mobile apps, and SaaS platforms for startups and enterprises — from MVP to scale.",
    colCompany: "Company",
    colResources: "Resources",
    colLegal: "Legal",
    linkWhy: "Why us",
    linkTestimonials: "Testimonials",
    linkContact: "Contact",
    linkPrivacy: "Privacy",
    linkTerms: "Terms",
    linkCookies: "Cookies",
    rights: "All rights reserved.",
    cta: "Start a project",
  },
};

export type Dict = typeof en;

export const id: Dict = {
  nav: {
    services: "Layanan",
    work: "Karya",
    process: "Proses",
    about: "Tentang",
    pricing: "Harga",
    faq: "FAQ",
    startProject: "Mulai proyek",
  },
  hero: {
    badgeNew: "Baru",
    badgeText: "Rekayasa produk AI, dari hulu ke hilir",
    leadingText: "Kami merancang & membangun produk digital yang terasa",
    highlight: "tak tergantikan",
    trailingText: ".",
    subtitle:
      "Callum C adalah studio produk untuk tim yang enggan berpuas diri dengan hasil biasa saja. Dari MVP hingga skala enterprise — dirancang indah, direkayasa matang, dan dirilis cepat.",
    primaryCta: "Mulai proyek",
    secondaryCta: "Lihat karya kami",
    ratingSuffix: "dari 40+ tim",
    stackLabel: "Dibangun dengan stack modern",
  },
  trusted: {
    label: "Dipercaya startup dan perusahaan ambisius di berbagai negara",
  },
  services: {
    eyebrow: "Yang kami kerjakan",
    titleLine1: "Semua yang Anda butuhkan untuk merilis,",
    titleLine2: "dalam satu atap",
    description:
      "Strategi, desain, dan rekayasa dalam satu tim yang bertanggung jawab penuh — sehingga tidak ada yang terlewat saat serah terima.",
    items: [
      {
        title: "Pengembangan Web",
        description:
          "Situs dan aplikasi web super cepat dan siap SEO, dibangun di atas Next.js, React, serta infrastruktur edge modern.",
      },
      {
        title: "Aplikasi Mobile",
        description:
          "Aplikasi iOS & Android yang terasa native dari satu basis kode, dengan animasi mulus dan dukungan offline.",
      },
      {
        title: "Desain UI/UX",
        description:
          "Desain produk berbasis riset yang mengubah alur rumit menjadi antarmuka yang nyaman digunakan.",
      },
      {
        title: "Branding",
        description:
          "Sistem identitas — logo, tipografi, warna, dan gaya bahasa — yang membuat produk Anda terasa benar-benar khas.",
      },
      {
        title: "Pengembangan SaaS",
        description:
          "Platform multi-tenant dengan penagihan, autentikasi, dasbor, dan analitik — dirancang untuk tumbuh sejak hari pertama.",
      },
      {
        title: "Integrasi AI",
        description:
          "Hadirkan fitur AI yang benar-benar berguna — asisten, pencarian, dan otomasi bertenaga model terbaru.",
      },
      {
        title: "Pengembangan MVP",
        description:
          "Dari ide menjadi MVP tingkat produksi yang layak didanai dalam hitungan minggu — cepat tervalidasi, siap berkembang.",
      },
    ],
    ctaTitle: "Punya kebutuhan lain?",
    ctaDesc:
      "Ceritakan produk Anda — kami akan menyusun lingkup, tim, dan jadwal yang paling pas.",
    ctaButton: "Mari bicara",
  },
  why: {
    eyebrow: "Kenapa Callum C",
    title: "Nilai lebih dari tim senior yang benar-benar peduli",
    description:
      "Kami mengutamakan hasil Anda, bukan jam kerja kami. Inilah artinya bagi Anda.",
    statLabels: ["Produk dirilis", "Rating klien", "Negara terlayani", "Retensi klien"],
    benefits: [
      {
        title: "Rilis dalam hitungan minggu, bukan kuartal",
        description:
          "Tim senior yang ramping dan perangkat yang teruji membuat Anda meluncur lebih cepat — tanpa mengorbankan kualitas.",
      },
      {
        title: "Rekayasa yang dipandu desain",
        description:
          "Desainer dan engineer bekerja sebagai satu tim. Setiap piksel disengaja dan setiap interaksi terasa mulus.",
      },
      {
        title: "Satu tim, dari awal sampai akhir",
        description:
          "Strategi, desain, dan kode dalam satu atap. Tanpa serah terima berbelit, tanpa saling lempar tanggung jawab — hanya hasil yang bisa diandalkan.",
      },
      {
        title: "Dibangun untuk tumbuh",
        description:
          "Arsitektur rapi, tipe data yang kuat, dan kode teruji yang bisa Anda serahkan ke tim internal tanpa was-was.",
      },
      {
        title: "Transparan sepenuhnya",
        description:
          "Pratinjau langsung, demo mingguan, dan papan kerja bersama. Anda selalu tahu persis posisi produk Anda.",
      },
      {
        title: "Mitra, bukan sekadar vendor",
        description:
          "Kami berpikir soal hasil, bukan sekadar daftar tugas. Sebagian besar klien bertahan bersama kami jauh setelah peluncuran — 98% dan terus bertambah.",
      },
    ],
  },
  process: {
    eyebrow: "Cara kami bekerja",
    title: "Jalur teruji dari ide hingga peluncuran",
    description:
      "Peta jalan enam langkah yang transparan, membuat Anda selalu terlibat dan momentum tetap tinggi — setiap minggunya.",
    stepLabel: "Langkah",
    steps: [
      {
        title: "Penjajakan",
        description:
          "Kami menyelaraskan tujuan, pengguna, dan lingkup — lalu mengubah hal yang masih samar menjadi peta jalan yang jelas dan terprioritaskan.",
      },
      {
        title: "Desain",
        description:
          "Dari wireframe hingga prototipe interaktif yang matang. Anda melihat dan merasakan produk sebelum kami membangunnya.",
      },
      {
        title: "Pengembangan",
        description:
          "Kode yang rapi, bertipe, dan teruji, dirilis bertahap tiap minggu dan bisa Anda tinjau di setiap langkah.",
      },
      {
        title: "Pengujian",
        description:
          "QA otomatis dan manual di berbagai perangkat, plus audit performa dan aksesibilitas sebelum peluncuran.",
      },
      {
        title: "Peluncuran",
        description:
          "Deploy tanpa downtime di infrastruktur edge modern, dengan monitoring dan analitik terpasang sejak hari pertama.",
      },
      {
        title: "Dukungan",
        description:
          "Iterasi berkelanjutan, pemeliharaan, dan mitra yang selalu siap — kami menumbuhkan produk bersama Anda.",
      },
    ],
  },
  portfolio: {
    eyebrow: "Karya pilihan",
    title: "Produk yang kami banggakan",
    description:
      "Sekilas hasil yang kami rilis bersama para founder dan tim di berbagai belahan dunia.",
    cta: "Mulai proyek Anda",
    projects: [
      {
        category: "Fintech · SaaS",
        description:
          "Platform keuangan personal dengan wawasan real-time dan sinkronisasi open banking.",
        metric: "+180% aktivasi",
        challenge:
          "Pengguna mendaftar dengan penasaran lalu pergi dengan bingung — keuangan mereka tersebar di lima aplikasi, dan onboarding kehilangan sebagian besar dari mereka sebelum wawasan pertama muncul.",
        solution:
          "Kami membangun ulang alurnya di sekitar satu dasbor real-time: sinkronisasi open banking sejak login pertama, wawasan pengeluaran dalam hitungan detik, dan paket berbasis Stripe yang tumbuh mengikuti pemakaian.",
        outcome:
          "Aktivasi melonjak 180% pada kuartal pertama setelah rilis ulang, diikuti retensi minggu pertama. Feed wawasan menjadi layar yang paling sering dikunjungi.",
      },
      {
        category: "Mobile · Travel",
        description: "Teman perjalanan serba bisa dengan peta offline dan itinerary cerdas.",
        metric: "4.9★ App Store",
        challenge:
          "Pelancong berpindah-pindah antara peta, catatan, dan pemesanan — dan semuanya berhenti bekerja begitu koneksi hilang.",
        solution:
          "Aplikasi React Native dengan peta sepenuhnya offline, penyusun itinerary AI yang merencanakan berdasarkan jam buka dan jarak, serta berbagi satu ketukan untuk rombongan.",
        outcome:
          "4.9★ di App Store dengan ulasan yang menyebut 'offline' lebih sering dari kata lainnya. Durasi sesi berlipat dua setelah itinerary dibantu AI.",
      },
      {
        category: "Kesehatan · Web",
        description:
          "Portal pasien yang memangkas waktu pemesanan dari hari menjadi menit untuk 40 ribu pengguna.",
        metric: "−72% waktu pemesanan",
        challenge:
          "Memesan kunjungan berarti antre telepon dan formulir kertas; staf menghabiskan berjam-jam sehari mengetik ulang data yang sama sementara pasien menunggu berhari-hari.",
        solution:
          "Portal pasien dengan jadwal langsung, formulir intake cerdas, dan pengingat — dibangun di atas design system yang sadar-HIPAA dan bisa dikembangkan tim klinik sendiri.",
        outcome:
          "Waktu pemesanan turun 72% dan angka mangkir ikut menurun. 40.000 pasien bergabung dalam enam bulan pertama tanpa menambah satu pun staf dukungan.",
      },
      {
        category: "AI · SaaS",
        description: "Asisten menulis AI dengan pencarian RAG atas basis pengetahuan internal perusahaan.",
        metric: "12k+ tim",
        challenge:
          "Pengetahuan perusahaan terkubur di wiki dan utas percakapan — setiap dokumen dimulai dari halaman kosong dan informasi usang.",
        solution:
          "Asisten dengan pencarian retrieval-augmented atas dokumen internal: jawaban berlandasan sumber dengan sitasi, draf dengan gaya bahasa perusahaan, dan kontrol admin yang disetujui tim IT.",
        outcome:
          "Diadopsi 12.000+ tim. Waktu menyusun draf terpangkas setengah dalam studi pelanggan, dan 'sumber tercantum' menjadi fitur yang paling dipercaya pengguna.",
      },
      {
        category: "E-commerce · Web",
        description:
          "Etalase headless yang termuat di bawah satu detik dan berkonversi luar biasa.",
        metric: "+34% pendapatan",
        challenge:
          "Monolit lama butuh empat detik untuk tampil di ponsel — dan tiap kampanye baru membuatnya makin lambat. Konversi bocor di setiap langkah checkout.",
        solution:
          "Etalase headless di infrastruktur edge: termuat di bawah satu detik di seluruh dunia, pencarian instan, dan checkout yang dibangun ulang tanpa satu pun langkah opsional.",
        outcome:
          "Pendapatan naik 34% kuartal-ke-kuartal setelah peluncuran. Bounce rate mobile turun sepertiga, dan halaman kampanye kini rilis dalam hitungan jam, bukan sprint.",
      },
      {
        category: "Branding · Web",
        description: "Rebranding menyeluruh dan situs marketing untuk agensi desain yang berkembang pesat.",
        metric: "2× prospek masuk",
        challenge:
          "Karya agensi ini kelas dunia; brand-nya sendiri tidak. Calon klien tak bisa membedakan mereka dari studio yang lebih murah — dan negosiasi harga menunjukkannya.",
        solution:
          "Sistem identitas menyeluruh — logo, tipografi, bahasa gerak — plus situs marketing dengan studi kasus yang menjual cara berpikirnya, semuanya bisa disunting lewat CMS ringan.",
        outcome:
          "Prospek masuk berlipat dua dalam dua bulan, dan nilai rata-rata proyek ikut naik karena brand akhirnya setara dengan kualitas karyanya.",
      },
    ],
  },
  caseStudy: {
    eyebrow: "Studi kasus",
    backToWork: "Semua karya",
    challengeLabel: "Tantangannya",
    solutionLabel: "Yang kami bangun",
    outcomeLabel: "Hasilnya",
    stackLabel: "Stack",
    timelineLabel: "Durasi",
    yearLabel: "Tahun",
    resultLabel: "Hasil utama",
    nextProject: "Proyek berikutnya",
    prevProject: "Proyek sebelumnya",
    ctaTitle: "Ingin hasil seperti ini?",
    ctaDesc:
      "Ceritakan apa yang Anda bangun — kami susun lingkup, tim, dan jadwal untuk merilisnya.",
    ctaButton: "Mulai proyek",
  },
  testimonials: {
    eyebrow: "Disukai klien",
    title: "Jangan hanya percaya kata kami",
    description: "Para founder dan pemimpin produk bercerita soal pengalaman membangun bersama Callum C.",
    items: [
      {
        role: "Founder & CEO",
        quote:
          "Callum C merilis MVP kami dalam enam minggu dan hasilnya seperti produk dari perusahaan 10× lebih besar. Sebulan kemudian kami menutup pendanaan seed.",
      },
      {
        role: "Head of Product",
        quote:
          "Kualitas desainnya benar-benar selevel di atas. Setiap detail dipikirkan matang. Pengguna kami terus memuji betapa nyamannya aplikasi ini.",
      },
      {
        role: "COO",
        quote:
          "Mereka berpikir layaknya founder, bukan kontraktor. Mereka berani menantang hal yang tepat dan membuat produk jauh lebih baik secara terukur.",
      },
      {
        role: "CTO",
        quote:
          "Kode yang rapi dan teruji, langsung bisa dilanjutkan engineer kami tanpa hambatan. Serah terima termulus yang pernah kami alami.",
      },
      {
        role: "VP Engineering",
        quote:
          "Demo mingguan berarti tanpa kejutan. Kami selalu tahu untuk apa kami membayar dan bisa melihat progres secara real-time.",
      },
      {
        role: "Managing Director",
        quote:
          "Brand dan situs baru kami menggandakan prospek masuk dalam dua bulan. Pengeluaran terbaik bagi kami sebagai perusahaan muda.",
      },
    ],
  },
  pricing: {
    eyebrow: "Harga",
    notePrefix: "Harga ditampilkan dalam",
    noteTail: "Ganti kapan saja — pilihan Anda kami ingat.",
    custom: "Custom",
    footerText: "Butuh yang khusus atau punya anggaran lebih terbatas?",
    footerLink: "Cari solusi yang pas",
    pageTitle: "Harga yang menyesuaikan produk Anda",
    pageDescription:
      "Web atau mobile — titik awal yang jelas untuk setiap tahap. Setelah obrolan singkat, kami menyusun penawaran sesuai lingkup Anda.",
    webTab: "Pengembangan Web",
    appTab: "Pengembangan Aplikasi",
    web: {
      label: "Pengembangan Web",
      tagline: "Situs marketing, aplikasi web, dasbor, dan platform SaaS.",
      plans: [
        {
          name: "Starter",
          description: "Untuk landing page, situs marketing, dan MVP kecil.",
          badge: "",
          priceSuffix: "mulai dari",
          cta: "Mulai proyek",
          features: [
            "Hingga 6 halaman",
            "Desain kustom di Figma",
            "Build responsif & siap SEO",
            "Integrasi CMS dasar",
            "2 putaran revisi",
            "Pengerjaan 2–3 minggu",
          ],
        },
        {
          name: "Professional",
          description: "Untuk aplikasi web lengkap dan MVP SaaS yang layak didanai.",
          badge: "Paling populer",
          priceSuffix: "mulai dari",
          cta: "Jadwalkan sesi discovery",
          features: [
            "Semua di paket Starter",
            "Build aplikasi web penuh",
            "Design system & pustaka komponen",
            "Autentikasi & akun pengguna",
            "Pembayaran, AI & analitik sebagai add-on",
            "Pengerjaan 4–8 minggu",
            "Dukungan 30 hari pascapeluncuran",
          ],
        },
        {
          name: "Enterprise",
          description: "Untuk platform kompleks dan kemitraan jangka panjang.",
          badge: "",
          priceSuffix: "",
          cta: "Hubungi kami",
          features: [
            "Semua di paket Professional",
            "Pembayaran, AI & analitik sudah termasuk",
            "Tim produk senior khusus",
            "Arsitektur multi-platform & skalabel",
            "Tinjauan keamanan & kepatuhan",
            "SLA & dukungan prioritas",
            "Peta jalan & iterasi berkelanjutan",
            "Retainer bulanan yang fleksibel",
          ],
        },
      ],
      compareRows: [
        { label: "Desain kustom di Figma", values: [true, true, true] },
        { label: "Halaman", values: ["6", "15", "Tanpa batas"] },
        { label: "Responsif & siap SEO", values: [true, true, true] },
        { label: "Integrasi CMS", values: ["Dasar", "Penuh", "Penuh + workflow"] },
        { label: "Design system & komponen", values: [false, true, true] },
        { label: "Autentikasi & akun pengguna", values: [false, true, true] },
        { label: "Pembayaran & dasbor", values: ["Add-on", "Add-on", true] },
        { label: "Integrasi fitur AI", values: ["Add-on", "Add-on", true] },
        { label: "Analitik & optimasi performa", values: ["Add-on", "Add-on", true] },
        { label: "Arsitektur multi-platform", values: [false, false, true] },
        { label: "Tinjauan keamanan & kepatuhan", values: [false, false, true] },
        { label: "Revisi", values: ["2 putaran", "4 putaran", "Tanpa batas"] },
        { label: "Pengerjaan", values: ["2–3 minggu", "4–8 minggu", "Custom"] },
        { label: "Dukungan pascapeluncuran", values: ["14 hari", "30 hari", "SLA + retainer"] },
      ],
      addons: [
        { name: "Pembayaran & dasbor", description: "Checkout, langganan, dan dasbor admin." },
        { name: "Integrasi fitur AI", description: "Fitur LLM, pencarian, atau otomasi yang benar-benar pas." },
        { name: "Analitik & optimasi performa", description: "Pelacakan event, dasbor, dan optimasi kecepatan." },
        { name: "Halaman tambahan", description: "Satu halaman tambahan, dirancang & dibangun sesuai brand." },
        { name: "Paket SEO awal", description: "SEO teknis, sitemap, schema, dan setup Search Console." },
        { name: "Pelatihan CMS", description: "Sesi 1:1 agar tim Anda percaya diri mengelola konten." },
        { name: "Copywriting", description: "Naskah berorientasi konversi untuk hingga 6 halaman." },
        { name: "Paket perawatan", description: "Hosting, pembaruan, backup, dan penyesuaian kecil bulanan." },
        { name: "Pengerjaan kilat", description: "Penjadwalan prioritas untuk peluncuran lebih cepat." },
      ],
    },
    app: {
      label: "Pengembangan Aplikasi",
      tagline: "Aplikasi mobile native & cross-platform untuk iOS dan Android.",
      plans: [
        {
          name: "Starter",
          description: "Untuk aplikasi satu platform dan MVP mobile.",
          badge: "",
          priceSuffix: "mulai dari",
          cta: "Mulai proyek",
          features: [
            "iOS atau Android (satu platform)",
            "Hingga 8 layar inti",
            "Desain UI kustom di Figma",
            "Integrasi API & autentikasi",
            "2 putaran revisi",
            "Pengerjaan 4–6 minggu",
          ],
        },
        {
          name: "Professional",
          description: "Untuk aplikasi cross-platform siap rilis di App Store & Play Store.",
          badge: "Paling populer",
          priceSuffix: "mulai dari",
          cta: "Jadwalkan sesi discovery",
          features: [
            "Semua di paket Starter",
            "iOS + Android (React Native)",
            "Design system & pustaka komponen",
            "Pembayaran, push & sinkronisasi offline",
            "AI & analitik sebagai add-on",
            "Submit & rilis ke store",
            "Pengerjaan 8–12 minggu",
            "Dukungan 30 hari pascapeluncuran",
          ],
        },
        {
          name: "Enterprise",
          description: "Untuk platform mobile kompleks berskala besar.",
          badge: "",
          priceSuffix: "",
          cta: "Hubungi kami",
          features: [
            "Semua di paket Professional",
            "AI & analitik sudah termasuk",
            "Tim mobile senior khusus",
            "Modul native & integrasi mendalam",
            "Tinjauan keamanan & kepatuhan",
            "SLA & dukungan prioritas",
            "Rilis & iterasi berkelanjutan",
            "Retainer bulanan yang fleksibel",
          ],
        },
      ],
      compareRows: [
        { label: "Desain UI kustom di Figma", values: [true, true, true] },
        { label: "Platform", values: ["iOS atau Android", "iOS + Android", "iOS + Android + web"] },
        { label: "Layar inti", values: ["8", "20", "Tanpa batas"] },
        { label: "Integrasi API & autentikasi", values: [true, true, true] },
        { label: "Design system & komponen", values: [false, true, true] },
        { label: "Pembayaran & in-app purchase", values: [false, true, true] },
        { label: "Notifikasi push", values: [false, true, true] },
        { label: "Sinkronisasi offline", values: [false, true, true] },
        { label: "Integrasi fitur AI", values: ["Add-on", "Add-on", true] },
        { label: "Modul native & integrasi mendalam", values: [false, false, true] },
        { label: "Submit & rilis ke store", values: [false, true, true] },
        { label: "Tinjauan keamanan & kepatuhan", values: [false, false, true] },
        { label: "Revisi", values: ["2 putaran", "4 putaran", "Tanpa batas"] },
        { label: "Pengerjaan", values: ["4–6 minggu", "8–12 minggu", "Custom"] },
        { label: "Dukungan pascapeluncuran", values: ["14 hari", "30 hari", "SLA + retainer"] },
      ],
      addons: [
        { name: "Platform tambahan", description: "Tambahkan web atau OS mobile kedua ke proyek Anda." },
        { name: "Backend & API khusus", description: "Backend, database, dan panel admin tersendiri." },
        { name: "Integrasi fitur AI", description: "Fitur AI on-device atau cloud yang benar-benar bermanfaat." },
        { name: "Setup push & CRM", description: "Layanan notifikasi dan tooling kampanye lifecycle." },
        { name: "Analitik produk", description: "Pelacakan event, funnel, dan dasbor langsung." },
        { name: "Real-time & chat", description: "Pesan dalam aplikasi, presence, dan sinkronisasi data langsung." },
        { name: "Lokalisasi aplikasi", description: "Dukungan multi-bahasa dengan konten dan format terlokalisasi." },
        { name: "Paket perawatan", description: "Pembaruan store, pemantauan, dan perbaikan bug bulanan." },
        { name: "Pengerjaan kilat", description: "Penjadwalan prioritas untuk peluncuran lebih cepat." },
      ],
    },
    compareTitle: "Bandingkan paket secara detail",
    featureLabel: "Fitur",
    addonsTitle: "Add-on & ekstra",
    addonsSubtitle: "Tambahkan persis yang Anda butuhkan — harga di depan, tanpa kejutan.",
    addonsFrom: "mulai",
    addonsDisclaimer:
      "Integrasi fitur AI ditentukan per kasus — hanya cocok untuk produk yang benar-benar terbantu, dan kami konfirmasi bersama saat sesi discovery.",
    perMonth: "/bln",
    pricingFaqTitle: "Pertanyaan seputar harga",
    pricingFaq: [
      {
        q: "Bagaimana skema pembayarannya?",
        a: "Proyek berjalan dengan skema termin sederhana: 50% di awal, 30% di tengah pengerjaan, dan 20% sebelum peluncuran. Retainer bulanan ditagih di awal tiap siklus.",
      },
      {
        q: "Siapa pemilik kode dan file desain?",
        a: "Anda — sepenuhnya. Pada pelunasan, Anda menerima seluruh source code, file desain, dan aset, tanpa lock-in dan tanpa biaya lisensi.",
      },
      {
        q: "Apa yang dihitung sebagai revisi?",
        a: "Revisi adalah satu putaran masukan terkonsolidasi atas milestone yang telah diserahkan. Starter mencakup 2 putaran, Professional 4, dan Enterprise tanpa batas dalam lingkup sprint.",
      },
      {
        q: "Apakah harganya tetap?",
        a: "Harga tier adalah titik awal untuk lingkup tertentu. Setelah sesi discovery singkat, kami kirim penawaran tetap — angka yang Anda setujui adalah angka yang Anda bayar.",
      },
      {
        q: "Apakah harga sudah termasuk pajak?",
        a: "Harga IDR belum termasuk PPN 11%; harga USD bersifat net. Pajak yang berlaku ditampilkan jelas pada faktur Anda.",
      },
      {
        q: "Bagaimana setelah peluncuran?",
        a: "Setiap paket mencakup masa dukungan. Setelahnya, Anda bisa melanjutkan dengan paket perawatan bulanan untuk hosting, pembaruan, pemantauan, dan fitur baru.",
      },
    ],
    engageEyebrow: "Cara kerja",
    engageTitle: "Dari obrolan pertama sampai peluncuran",
    engageSteps: [
      { title: "Obrolan discovery", description: "Obrolan gratis 30 menit untuk memahami tujuan, lingkup, dan jadwal Anda." },
      { title: "Proposal & penawaran", description: "Proposal lingkup tetap dengan harga, jadwal, dan deliverable yang jelas." },
      { title: "Desain & build", description: "Kami bekerja dalam sprint mingguan agar Anda melihat progres nyata sepanjang jalan." },
      { title: "Peluncuran & dukungan", description: "Kami rilis, serahkan kepemilikan penuh, dan mendukung Anda pascapeluncuran." },
    ],
    guarantees: [
      { title: "Pengerjaan tepat waktu", description: "Kami menyanggupi jadwal Anda secara tertulis — dan menepatinya." },
      { title: "Kepemilikan source penuh", description: "Seluruh kode dan file desain milik Anda saat pelunasan." },
      { title: "Dukungan pascapeluncuran", description: "Setiap paket mencakup masa dukungan setelah Anda live." },
    ],
    teaser: {
      eyebrow: "Harga",
      title: "Harga sederhana untuk web & aplikasi",
      description:
        "Titik awal yang transparan untuk produk web dan mobile. Jelajahi paket lengkap dan temukan tier yang pas.",
      webLabel: "Pengembangan web",
      appLabel: "Pengembangan aplikasi",
      fromLabel: "mulai",
      cta: "Lihat harga lengkap",
    },
  },
  estimator: {
    eyebrow: "Estimator",
    title: "Perkirakan biaya proyek dalam 30 detik",
    description:
      "Geser, centang, dan lihat angkanya bergerak. Perkiraan jujur — penawaran final selalu lahir dari percakapan nyata.",
    sizeLabel: { web: "Halaman", app: "Layar inti" },
    addonsLabel: "Add-on",
    timelineLabel: "Jadwal",
    timelineStandard: "Standar",
    timelineRush: "Kilat",
    estimateLabel: "Perkiraan investasi",
    startingSuffix: "mulai dari",
    baseLine: "Build dasar",
    addonsLine: "Add-on",
    rushLine: "Pengerjaan kilat",
    monthlyLine: "Paket perawatan (bulanan)",
    disclaimer:
      "Perkiraan indikatif, bukan penawaran. Lingkup kami pastikan bersama dalam sesi discovery gratis.",
    ctaCall: "Jadwalkan sesi discovery",
    ctaContact: "Kirim detail proyek",
  },
  faq: {
    eyebrow: "FAQ",
    titleLine1: "Pertanyaan,",
    titleLine2: "terjawab",
    subPrefix: "Belum menemukan yang Anda cari?",
    subLink: "Hubungi kami",
    subSuffix: "dan kami akan membalas dalam satu hari kerja.",
    items: [
      {
        q: "Berapa lama umumnya sebuah proyek berjalan?",
        a: "Sebagian besar MVP selesai dalam 4–8 minggu. Platform yang lebih besar memakan 3–4 bulan, dikerjakan bertahap tiap minggu sehingga Anda melihat progres sepanjang jalan. Kami akan memberi jadwal konkret setelah tahap penjajakan.",
      },
      {
        q: "Bagaimana Anda menentukan harga?",
        a: "Kami menawarkan harga proyek dengan lingkup tetap maupun retainer bulanan. Paket di bawah ini hanya titik awal — setelah obrolan singkat, kami menyusun penawaran sesuai lingkup dan anggaran Anda.",
      },
      {
        q: "Apakah Anda menangani startup tahap awal?",
        a: "Tentu. Sebagian besar pekerjaan kami adalah membawa founder dari ide menjadi MVP tingkat produksi yang layak didanai — cepat, tanpa mengorbankan kualitas.",
      },
      {
        q: "Siapa pemilik kode dan desainnya?",
        a: "Anda. Setelah pelunasan, Anda memperoleh kepemilikan penuh atas seluruh kode sumber, berkas desain, dan aset. Tanpa lock-in, tanpa kejutan.",
      },
      {
        q: "Teknologi apa yang Anda gunakan?",
        a: "Kami mengandalkan Next.js, React, TypeScript, Go, Rust, Laravel, React Native, dan infrastruktur cloud modern (PostgreSQL, Redis, Docker, Kubernetes, AWS, Google Cloud, Vercel) — dipilih agar tim internal Anda mudah memelihara dan mengembangkannya.",
      },
      {
        q: "Bisakah Anda berkolaborasi dengan tim kami yang sudah ada?",
        a: "Bisa. Kami dapat menyatu dengan desainer dan engineer Anda, mengisi kekurangan tertentu, atau menjalankan seluruh pembangunan — apa pun yang paling cepat membawa Anda ke hasil.",
      },
      {
        q: "Apa yang terjadi setelah peluncuran?",
        a: "Kami menyediakan paket dukungan dan iterasi berkelanjutan untuk pemeliharaan, fitur baru, dan performa. Banyak klien mempertahankan kami sebagai mitra produk jangka panjang.",
      },
      {
        q: "Bagaimana cara memulai?",
        a: "Kirimkan pesan melalui formulir kontak di bawah. Kami akan membalas dalam satu hari kerja dan menjadwalkan sesi discovery gratis selama 30 menit.",
      },
    ],
  },
  contact: {
    badge: "Mari membangun",
    title: "Ceritakan proyek Anda",
    subtitle:
      "Jadwalkan sesi discovery gratis selama 30 menit. Kami membalas dalam satu hari kerja dengan langkah lanjutan yang jelas — tanpa paksaan, tanpa jargon.",
    detailEmail: "Email",
    detailPhone: "Telepon",
    detailLocation: "Lokasi",
    chipReply: "Dibalas dalam 1 hari kerja",
    chipPrivate: "Data Anda tetap privat",
    name: "Nama",
    namePlaceholder: "Nama Anda",
    email: "Email",
    emailPlaceholder: "nama@perusahaan.com",
    company: "Perusahaan",
    companyPlaceholder: "PT Contoh",
    budget: "Anggaran",
    budgetPlaceholder: "Pilih rentang",
    message: "Detail proyek",
    messagePlaceholder: "Apa yang ingin Anda bangun, dan seperti apa keberhasilannya?",
    optional: "Opsional",
    submit: "Kirim pesan",
    submitting: "Mengirim…",
    consent: "Dengan mengirim, Anda setuju untuk dihubungi terkait pertanyaan Anda.",
    nameRequired: "Mohon masukkan nama Anda.",
    emailRequired: "Mohon masukkan email Anda.",
    emailInvalid: "Mohon masukkan email yang valid.",
    messageRequired: "Ceritakan sedikit tentang proyek Anda.",
    messageMin: "Ceritakan sedikit lebih detail (min. 10 karakter).",
    success: "Pesan terkirim! Kami akan membalas dalam satu hari kerja.",
    error: "Terjadi kesalahan — silakan coba lagi, atau email kami langsung.",
    bookTitle: "Lebih suka langsung berbincang?",
    bookDesc: "Pilih slot discovery gratis 30 menit yang pas dengan kalender Anda.",
    bookCta: "Jadwalkan panggilan",
  },
  notFound: {
    quip: "$ craft resolve /halaman-ini — Error: route not found",
    title: "Tersesat di tengah build",
    description:
      "Halaman ini tidak ada — atau sudah dirilis ke tempat lain. Mari kembali ke pijakan yang aman.",
    ctaHome: "Kembali ke beranda",
    ctaContact: "Hubungi kami",
  },
  legal: {
    eyebrow: "Legal",
    updatedLabel: "Terakhir diperbarui",
    updatedDate: "27 Juli 2026",
    contactLine: "Ada pertanyaan tentang kebijakan ini? Hubungi kami di",
    backHome: "Kembali ke beranda",
    privacy: {
      title: "Kebijakan Privasi",
      intro:
        "Kebijakan ini menjelaskan apa yang kami kumpulkan saat Anda menggunakan situs ini atau menghubungi kami, alasannya, dan pilihan yang Anda miliki. Versi singkat: kami mengumpulkan seminimal mungkin dan tidak pernah menjualnya.",
      sections: [
        {
          h: "Apa yang kami kumpulkan",
          body: "Saat Anda mengirim formulir kontak, kami menerima data yang Anda ketik: nama, email, perusahaan, rentang anggaran, dan pesan. Situs ini juga menyimpan preferensi bahasa dan mata uang di local storage peramban Anda sendiri — data itu tidak pernah meninggalkan perangkat Anda.",
        },
        {
          h: "Bagaimana kami menggunakannya",
          body: "Data kontak hanya dipakai untuk membalas pertanyaan Anda dan menjalankan proyek yang kita sepakati bersama. Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk pemasaran.",
        },
        {
          h: "Dasar hukum",
          body: "Kami memproses data Anda atas dasar persetujuan (pengiriman formulir) dan, bila berlanjut ke proyek, atas dasar pelaksanaan kontrak dengan Anda.",
        },
        {
          h: "Penyimpanan",
          body: "Data pertanyaan disimpan selama diperlukan untuk menangani permintaan Anda dan untuk periode wajar setelahnya sebagai arsip bisnis. Anda dapat meminta penghapusannya kapan saja.",
        },
        {
          h: "Hak Anda",
          body: "Anda berhak meminta akses, koreksi, atau penghapusan data pribadi Anda, serta menarik persetujuan kapan pun melalui email. Kami membalas dalam satu hari kerja.",
        },
        {
          h: "Perubahan",
          body: "Jika kebijakan ini berubah, versi baru dipublikasikan di halaman ini dengan tanggal terbaru di atas. Perubahan penting dijelaskan dengan bahasa yang sederhana.",
        },
      ],
    },
    terms: {
      title: "Ketentuan Layanan",
      intro:
        "Ketentuan ini mengatur penggunaan situs ini dan, secara garis besar, cara kerja sama kami berjalan. Ketentuan spesifik proyek selalu tercantum dalam proposal yang Anda setujui.",
      sections: [
        {
          h: "Penggunaan situs",
          body: "Konten di situs ini disediakan sebagai informasi umum tentang layanan kami. Anda tidak diperkenankan menyalin, mengambil secara otomatis, atau mengakuinya sebagai milik Anda.",
        },
        {
          h: "Penawaran & proposal",
          body: "Harga di situs ini adalah titik awal, bukan penawaran mengikat. Lingkup, harga, dan jadwal yang mengikat hanya ditetapkan dalam proposal tertulis yang Anda setujui.",
        },
        {
          h: "Pembayaran",
          body: "Proyek berjalan dengan skema termin — umumnya 50% di awal, 30% di tengah pengerjaan, dan 20% sebelum peluncuran — kecuali proposal menyatakan lain.",
        },
        {
          h: "Kekayaan intelektual",
          body: "Setelah pelunasan, Anda memiliki source code, file desain, dan aset yang diserahkan untuk proyek Anda. Kami tetap berhak menampilkan karya tersebut di portofolio kecuali disepakati lain.",
        },
        {
          h: "Tanggung jawab",
          body: "Kami bekerja dengan kehati-hatian profesional, tetapi situs ini beserta estimasinya disediakan apa adanya. Total tanggung jawab kami untuk setiap kerja sama terbatas pada biaya yang dibayarkan untuk kerja sama tersebut.",
        },
        {
          h: "Hukum yang berlaku",
          body: "Ketentuan ini tunduk pada hukum Republik Indonesia. Perselisihan diselesaikan lebih dulu dengan itikad baik; kami lebih memilih percakapan daripada ruang sidang.",
        },
      ],
    },
    cookies: {
      title: "Kebijakan Cookie",
      intro:
        "Versi singkat: situs ini berjalan tanpa cookie pelacak. Berikut persis apa yang disimpan di peramban Anda dan alasannya.",
      sections: [
        {
          h: "Apa yang kami simpan",
          body: "Dua nilai kecil di local storage peramban Anda: pilihan bahasa (Inggris atau Indonesia) dan pilihan mata uang (USD atau IDR). Ditambah preferensi tema, yang ditangani peramban Anda.",
        },
        {
          h: "Yang tidak kami lakukan",
          body: "Tanpa cookie iklan, tanpa pelacak lintas situs, tanpa fingerprinting, dan tanpa skrip analitik pihak ketiga yang mengikuti Anda di internet.",
        },
        {
          h: "Mengelola penyimpanan",
          body: "Anda dapat menghapus nilai-nilai ini kapan saja lewat pengaturan data situs di peramban. Situs tetap berfungsi — hanya lupa preferensi Anda.",
        },
        {
          h: "Perubahan di masa depan",
          body: "Jika suatu saat kami menambahkan analitik, kami akan memilih opsi yang menghormati privasi, mengumumkannya di sini lebih dulu, dan menjaga datanya tetap anonim.",
        },
      ],
    },
  },
  about: {
    eyebrow: "Tentang Callum C",
    heroLead: "Studio muda dengan obsesi gaya lama:",
    heroHighlight: "kualitas karya",
    heroTrail: ".",
    heroSubtitle:
      "Kami baru memulai cerita kami. Tanpa angka yang dilebih-lebihkan, tanpa logo pinjaman — hanya tim senior, sudut pandang yang tajam, dan karya yang bangga kami tanda tangani.",
    marquee: [
      "Pantang merilis yang biasa saja",
      "Hitungan minggu, bukan kuartal",
      "Rekayasa yang dipandu desain",
      "Perhatian setingkat founder",
      "Transparan sepenuhnya",
    ],
    storyLabels: ["Kegelisahan", "Pembangunan", "Taruhan"],
    storyEyebrow: "Cerita kami",
    storyTitle: "Kenapa Callum C ada",
    storyParagraphs: [
      "Callum C lahir pada 2026 dari satu kegelisahan sederhana: produk-produk hebat terlalu sering mati di tengah serah terima antara deck strategi, agensi desain, dan vendor pengembang. Kami melihatnya dari dalam — dan yakin tim kecil, senior, dan menyeluruh bisa melakukannya lebih baik.",
      "Maka kami membangun studio yang selama ini ingin kami sewa sendiri. Desainer dan engineer dalam satu ruangan, demo mingguan alih-alih laporan status, dan satu aturan yang pantang kami langgar: jangan pernah merilis yang biasa-biasa saja.",
      "Kami sengaja kecil dan sengaja memulai dari awal. Artinya, setiap proyek mendapat perhatian setingkat founder — dan setiap klien ikut membentuk masa depan studio ini.",
    ],
    missionTitle: "Misi",
    missionText:
      "Menghadirkan desain dan rekayasa produk kelas dunia yang terjangkau bagi tim ambisius dari skala apa pun — dari founder pemula hingga enterprise.",
    visionTitle: "Visi",
    visionText:
      "Menjadi studio produk paling tepercaya di Asia Tenggara — dikenal dunia lewat produk digital yang terasa tak tergantikan.",
    valuesEyebrow: "Pegangan kami",
    valuesTitle: "Nilai yang benar-benar kami jalankan",
    valuesDescription:
      "Bukan slogan di poster — inilah aturan yang jadi dasar setiap keputusan kami, setiap minggunya.",
    values: [
      {
        title: "Kualitas di atas kuantitas",
        description:
          "Kami mengambil sedikit proyek dan menggarapnya dalam-dalam. Kualitas itu menular; volume justru mengencerkan.",
      },
      {
        title: "Cepat dengan arah",
        description:
          "Rilis dalam hitungan minggu, bukan kuartal — tanpa mengorbankan kualitas atau menumpuk utang teknis diam-diam.",
      },
      {
        title: "Transparan sepenuhnya",
        description:
          "Pratinjau langsung, demo mingguan, estimasi yang jujur. Anda selalu tahu persis posisi pekerjaan.",
      },
      {
        title: "Memiliki hasilnya",
        description:
          "Kami berpikir seperti founder, bukan vendor. Jika sesuatu tidak memajukan produk Anda, kami katakan terus terang.",
      },
    ],
    roadmapEyebrow: "Arah kami",
    roadmapTitle: "Jalan di depan",
    roadmapDescription:
      "Kami lebih memilih menunjukkan rencana nyata daripada traksi karangan. Inilah yang sedang kami bangun.",
    roadmap: [
      {
        status: "Sekarang",
        period: "2026",
        title: "Peluncuran studio",
        description:
          "Tim pendiri terbentuk, brand mengudara, dan proyek klien pertama mulai berjalan.",
      },
      {
        status: "Berikutnya",
        period: "2026 · Q4",
        title: "Sepuluh peluncuran pertama",
        description:
          "Merilis sepuluh produk dari awal sampai akhir dan menerbitkan studi kasus yang jujur untuk setiap produknya.",
      },
      {
        status: "Nanti",
        period: "2027",
        title: "Lab produk",
        description:
          "Menginvestasikan kembali keuntungan studio ke eksperimen SaaS kami sendiri — dibangun dengan kualitas yang sama seperti yang kami jual.",
      },
      {
        status: "Nanti",
        period: "2028",
        title: "Tim senior regional",
        description:
          "Tim senior terdistribusi di Asia Tenggara, melayani klien dari seluruh dunia.",
      },
    ],
    teamEyebrow: "Tim kami",
    teamTitle: "Sengaja kecil, senior sejak awal",
    teamDescription:
      "Orang yang membalas email Anda adalah orang yang sama yang merancang dan membangun produk Anda.",
    team: [
      {
        name: "Muhammad Caesar Rifqi",
        role: "Founder & CTO",
        bio: "Engineer sejati — memegang arsitektur, kualitas kode, dan pengiriman. Percaya keandalan adalah keputusan desain, bukan pikiran belakangan.",
        tags: ["Front End", "Backend", "Infrastruktur"],
      },
      {
        name: "Gerrard Setiawan",
        role: "Co-Founder & Creative Director",
        bio: "Memimpin brand, antarmuka, dan motion. Percaya detail terkecil-lah yang membuat produk terasa tak tergantikan.",
        tags: ["Brand", "UI/UX", "Motion", "Design system"],
      },
    ],
    ctaTitle: "Tulis bab pertama bersama kami",
    ctaDesc:
      "Baik Anda founder dengan sebuah ide maupun investor yang percaya pada talenta produk di kawasan ini — kami ingin berbincang.",
    ctaButton: "Sapa kami",
  },
  footer: {
    description:
      "Callum C adalah studio produk yang merancang dan membangun aplikasi web, aplikasi mobile, dan platform SaaS yang cepat dan indah untuk startup maupun perusahaan — dari MVP hingga skala besar.",
    colCompany: "Perusahaan",
    colResources: "Sumber Daya",
    colLegal: "Legal",
    linkWhy: "Kenapa kami",
    linkTestimonials: "Testimoni",
    linkContact: "Kontak",
    linkPrivacy: "Privasi",
    linkTerms: "Ketentuan",
    linkCookies: "Cookie",
    rights: "Seluruh hak cipta dilindungi.",
    cta: "Mulai proyek",
  },
};

export const dictionaries = { en, id };
export type Locale = keyof typeof dictionaries;
