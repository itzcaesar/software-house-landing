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
    quip: "$ callumc resolve /this-page — Error: route not found",
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
    work: "Portofolio",
    process: "Proses",
    about: "Tentang Kami",
    pricing: "Harga",
    faq: "FAQ",
    startProject: "Mulai proyek",
  },
  hero: {
    badgeNew: "Baru",
    badgeText: "Kini juga melayani pengembangan produk AI",
    leadingText: "Kami desain dan bangun produk digital yang",
    highlight: "siap bersaing",
    trailingText: ".",
    subtitle:
      "Callum C adalah studio produk untuk tim yang tidak mau puas dengan hasil biasa. Mulai dari MVP sampai skala enterprise, kami desain dengan detail, bangun dengan solid, dan rilis tepat waktu.",
    primaryCta: "Mulai proyek",
    secondaryCta: "Lihat portofolio",
    ratingSuffix: "dari 40+ klien",
    stackLabel: "Teknologi yang kami gunakan",
  },
  trusted: {
    label: "Dipercaya startup dan perusahaan dari berbagai negara",
  },
  services: {
    eyebrow: "Layanan kami",
    titleLine1: "Semua kebutuhan produk digital Anda,",
    titleLine2: "ditangani satu tim",
    description:
      "Strategi, desain, dan development dikerjakan oleh tim yang sama. Tidak ada informasi yang hilang saat pekerjaan berpindah tangan.",
    items: [
      {
        title: "Pengembangan Web",
        description:
          "Website dan aplikasi web yang cepat dan SEO-friendly, dibangun dengan Next.js, React, dan infrastruktur cloud modern.",
      },
      {
        title: "Aplikasi Mobile",
        description:
          "Satu basis kode untuk iOS dan Android, dengan performa setara aplikasi native, animasi yang halus, dan tetap bisa dipakai saat offline.",
      },
      {
        title: "Desain UI/UX",
        description:
          "Desain berbasis riset pengguna. Alur yang rumit kami sederhanakan jadi tampilan yang mudah dipahami.",
      },
      {
        title: "Branding",
        description:
          "Logo, tipografi, warna, sampai gaya komunikasi. Identitas yang membuat produk Anda mudah diingat.",
      },
      {
        title: "Pengembangan SaaS",
        description:
          "Platform multi-tenant lengkap dengan billing, login, dasbor, dan analitik. Siap berkembang sejak hari pertama.",
      },
      {
        title: "Integrasi AI",
        description:
          "Fitur AI yang benar-benar terpakai, seperti asisten virtual, pencarian pintar, dan otomasi alur kerja.",
      },
      {
        title: "Pengembangan MVP",
        description:
          "Ubah ide jadi MVP yang siap pakai dalam hitungan minggu. Cepat divalidasi, siap dipresentasikan ke investor.",
      },
    ],
    ctaTitle: "Kebutuhan Anda berbeda?",
    ctaDesc:
      "Ceritakan produk yang ingin Anda bangun. Kami bantu susun lingkup, tim, dan timeline yang paling pas.",
    ctaButton: "Konsultasi sekarang",
  },
  why: {
    eyebrow: "Mengapa Callum C",
    title: "Dikerjakan tim senior yang peduli dengan hasil",
    description:
      "Yang kami kejar adalah hasil untuk bisnis Anda, bukan jumlah jam kerja. Ini yang Anda dapatkan.",
    statLabels: ["Produk dirilis", "Rating klien", "Negara", "Klien bertahan"],
    benefits: [
      {
        title: "Rilis dalam hitungan minggu",
        description:
          "Tim senior yang ramping dan proses yang sudah teruji membuat produk Anda lebih cepat sampai ke pengguna, tanpa kompromi soal kualitas.",
      },
      {
        title: "Desain dan development berjalan beriringan",
        description:
          "Desainer dan engineer bekerja dalam satu tim, jadi setiap detail tampilan dan interaksi benar-benar dipikirkan.",
      },
      {
        title: "Satu tim dari awal sampai akhir",
        description:
          "Strategi, desain, dan kode ada di satu tempat. Tidak perlu koordinasi dengan banyak vendor, dan tidak ada saling lempar tanggung jawab.",
      },
      {
        title: "Siap dikembangkan jangka panjang",
        description:
          "Arsitektur yang rapi dan kode yang teruji, sehingga mudah dilanjutkan oleh tim internal Anda nanti.",
      },
      {
        title: "Progres selalu terlihat",
        description:
          "Ada preview langsung, demo setiap minggu, dan board kerja bersama. Anda selalu tahu sejauh mana produk sudah berjalan.",
      },
      {
        title: "Partner, bukan sekadar vendor",
        description:
          "Kami ikut memikirkan hasil bisnis, bukan hanya menyelesaikan task. 98% klien tetap bekerja sama dengan kami setelah produk rilis.",
      },
    ],
  },
  process: {
    eyebrow: "Cara kerja kami",
    title: "Dari ide sampai rilis, dengan proses yang jelas",
    description:
      "Enam tahap yang transparan. Anda terlibat di setiap langkah, dan progres terus berjalan tiap minggu.",
    stepLabel: "Tahap",
    steps: [
      {
        title: "Discovery",
        description:
          "Kami samakan persepsi soal tujuan, target pengguna, dan lingkup proyek, lalu menyusunnya jadi roadmap yang jelas dan terprioritaskan.",
      },
      {
        title: "Desain",
        description:
          "Mulai dari wireframe sampai prototipe interaktif. Anda bisa mencoba alurnya sebelum development dimulai.",
      },
      {
        title: "Development",
        description:
          "Kode yang rapi dan teruji, dirilis bertahap setiap minggu supaya bisa Anda review kapan saja.",
      },
      {
        title: "Testing",
        description:
          "Pengujian otomatis dan manual di berbagai perangkat, plus pengecekan performa dan aksesibilitas sebelum rilis.",
      },
      {
        title: "Rilis",
        description:
          "Deploy tanpa downtime di infrastruktur cloud, dengan monitoring dan analitik yang aktif sejak hari pertama.",
      },
      {
        title: "Dukungan",
        description:
          "Maintenance dan pengembangan fitur berkelanjutan. Kami terus mendampingi produk Anda setelah rilis.",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portofolio",
    title: "Beberapa proyek kami",
    description:
      "Hasil kerja kami bersama founder dan tim produk dari berbagai negara.",
    cta: "Mulai proyek Anda",
    projects: [
      {
        category: "Fintech · SaaS",
        description:
          "Aplikasi keuangan pribadi dengan insight real-time dan integrasi open banking.",
        metric: "+180% aktivasi",
        challenge:
          "Data keuangan pengguna tersebar di lima aplikasi berbeda. Banyak yang mendaftar, tapi berhenti di tengah onboarding sebelum sempat merasakan manfaatnya.",
        solution:
          "Kami rombak alurnya dengan satu dasbor real-time. Rekening langsung tersinkron sejak login pertama, insight pengeluaran muncul dalam hitungan detik, dan paket berlangganan via Stripe menyesuaikan pemakaian.",
        outcome:
          "Aktivasi naik 180% di kuartal pertama setelah rilis ulang, dan retensi minggu pertama ikut meningkat. Halaman insight kini jadi fitur yang paling sering dibuka.",
      },
      {
        category: "Mobile · Travel",
        description: "Aplikasi pendamping perjalanan dengan peta offline dan itinerary otomatis.",
        metric: "4.9★ App Store",
        challenge:
          "Wisatawan harus bolak-balik antara aplikasi peta, catatan, dan tiket, dan semuanya tidak bisa dipakai saat sinyal hilang.",
        solution:
          "Aplikasi React Native dengan peta yang bisa diakses offline, itinerary berbasis AI yang menyesuaikan jam buka dan jarak, serta fitur berbagi rencana ke teman satu rombongan.",
        outcome:
          "Rating 4,9★ di App Store, dan 'offline' jadi kata yang paling sering muncul di ulasan. Durasi penggunaan naik dua kali lipat setelah fitur itinerary AI dirilis.",
      },
      {
        category: "Kesehatan · Web",
        description:
          "Portal pasien yang mempercepat booking dari berhari-hari jadi hitungan menit, dipakai 40 ribu pasien.",
        metric: "−72% waktu booking",
        challenge:
          "Pasien harus antre telepon dan mengisi formulir kertas untuk membuat janji. Staf menghabiskan berjam-jam setiap hari hanya untuk menginput ulang data yang sama.",
        solution:
          "Portal pasien dengan jadwal real-time, formulir pendaftaran online, dan pengingat otomatis. Dibangun di atas design system yang sesuai standar HIPAA, jadi tim klinik bisa mengembangkannya sendiri.",
        outcome:
          "Waktu booking turun 72% dan jumlah pasien yang tidak datang ikut berkurang. 40.000 pasien terdaftar dalam enam bulan pertama tanpa perlu menambah staf.",
      },
      {
        category: "AI · SaaS",
        description: "Asisten penulisan AI yang bisa mencari jawaban dari dokumen internal perusahaan.",
        metric: "12k+ tim",
        challenge:
          "Informasi perusahaan tersebar di wiki dan chat. Setiap kali membuat dokumen, tim harus mulai dari nol dengan data yang sering sudah tidak relevan.",
        solution:
          "Asisten AI yang mencari jawaban langsung dari dokumen internal, lengkap dengan sumber rujukannya. Draf yang dihasilkan mengikuti gaya bahasa perusahaan, dan pengaturan aksesnya sesuai kebutuhan tim IT.",
        outcome:
          "Dipakai lebih dari 12.000 tim. Waktu menyusun draf berkurang setengahnya, dan fitur rujukan sumber jadi alasan utama pengguna percaya pada hasilnya.",
      },
      {
        category: "E-commerce · Web",
        description:
          "Toko online headless yang terbuka dalam kurang dari satu detik, dengan konversi yang tinggi.",
        metric: "+34% pendapatan",
        challenge:
          "Website lama butuh empat detik untuk terbuka di HP, dan makin lambat setiap ada kampanye baru. Banyak pembeli batal di tengah proses checkout.",
        solution:
          "Toko online headless di infrastruktur edge. Halaman terbuka kurang dari satu detik dari mana saja, pencarian produk instan, dan proses checkout yang jauh lebih ringkas.",
        outcome:
          "Pendapatan naik 34% dibanding kuartal sebelumnya. Bounce rate di mobile turun sepertiga, dan halaman kampanye sekarang bisa dirilis dalam hitungan jam.",
      },
      {
        category: "Branding · Web",
        description: "Rebranding dan website baru untuk agensi desain yang sedang berkembang pesat.",
        metric: "2× leads masuk",
        challenge:
          "Kualitas karya agensi ini sudah kelas dunia, tapi brand-nya belum mencerminkan itu. Calon klien sulit membedakan mereka dari studio yang lebih murah, dan ini terasa saat negosiasi harga.",
        solution:
          "Identitas brand baru secara menyeluruh, mulai dari logo, tipografi, hingga motion. Ditambah website dengan studi kasus yang menunjukkan cara mereka berpikir, dan semuanya bisa diperbarui sendiri lewat CMS.",
        outcome:
          "Leads yang masuk naik dua kali lipat dalam dua bulan. Nilai proyek rata-rata juga meningkat karena brand kini sepadan dengan kualitas karyanya.",
      },
    ],
  },
  caseStudy: {
    eyebrow: "Studi kasus",
    backToWork: "Kembali ke portofolio",
    challengeLabel: "Tantangan",
    solutionLabel: "Solusi",
    outcomeLabel: "Hasil",
    stackLabel: "Teknologi",
    timelineLabel: "Durasi",
    yearLabel: "Tahun",
    resultLabel: "Hasil utama",
    nextProject: "Proyek berikutnya",
    prevProject: "Proyek sebelumnya",
    ctaTitle: "Ingin hasil seperti ini untuk produk Anda?",
    ctaDesc:
      "Ceritakan apa yang sedang Anda kembangkan. Kami bantu susun lingkup, tim, dan timeline-nya.",
    ctaButton: "Mulai proyek",
  },
  testimonials: {
    eyebrow: "Testimoni",
    title: "Kata mereka yang sudah bekerja sama dengan kami",
    description: "Pengalaman para founder dan product leader membangun produk bersama Callum C.",
    items: [
      {
        role: "Founder & CEO",
        quote:
          "Callum C menyelesaikan MVP kami dalam enam minggu, dan hasilnya terlihat seperti produk dari perusahaan yang jauh lebih besar. Sebulan setelahnya, kami berhasil mendapat pendanaan seed.",
      },
      {
        role: "Head of Product",
        quote:
          "Kualitas desainnya beda level. Semua detail dipikirkan dengan matang, dan pengguna kami sering memuji betapa mudahnya aplikasi ini dipakai.",
      },
      {
        role: "COO",
        quote:
          "Mereka berpikir seperti founder, bukan sekadar kontraktor. Mereka berani memberi masukan di saat yang tepat, dan produk kami jadi jauh lebih baik.",
      },
      {
        role: "CTO",
        quote:
          "Kodenya rapi dan sudah teruji, jadi tim engineer kami bisa langsung melanjutkan. Ini proses serah terima paling lancar yang pernah kami alami.",
      },
      {
        role: "VP Engineering",
        quote:
          "Karena ada demo setiap minggu, tidak pernah ada kejutan. Kami selalu tahu progresnya dan paham betul apa yang kami bayar.",
      },
      {
        role: "Managing Director",
        quote:
          "Brand dan website baru kami berhasil menggandakan jumlah leads dalam dua bulan. Ini investasi terbaik kami sejauh ini.",
      },
    ],
  },
  pricing: {
    eyebrow: "Harga",
    notePrefix: "Harga ditampilkan dalam",
    noteTail: "Bisa diganti kapan saja, dan pilihan Anda akan tersimpan.",
    custom: "Custom",
    footerText: "Butuh paket khusus atau anggaran Anda lebih terbatas?",
    footerLink: "Diskusikan dengan kami",
    pageTitle: "Harga yang menyesuaikan kebutuhan Anda",
    pageDescription:
      "Untuk web maupun mobile, setiap paket punya titik awal yang jelas. Setelah konsultasi singkat, kami kirimkan penawaran sesuai lingkup proyek Anda.",
    webTab: "Pengembangan Web",
    appTab: "Pengembangan Aplikasi",
    web: {
      label: "Pengembangan Web",
      tagline: "Website company profile, aplikasi web, dasbor, dan platform SaaS.",
      plans: [
        {
          name: "Starter",
          description: "Cocok untuk landing page, website company profile, dan MVP sederhana.",
          badge: "",
          priceSuffix: "mulai dari",
          cta: "Mulai proyek",
          features: [
            "Maksimal 6 halaman",
            "Desain custom di Figma",
            "Responsif & SEO-friendly",
            "Integrasi CMS dasar",
            "2 kali revisi",
            "Pengerjaan 2–3 minggu",
          ],
        },
        {
          name: "Professional",
          description: "Cocok untuk aplikasi web lengkap dan MVP SaaS yang siap dipresentasikan ke investor.",
          badge: "Paling populer",
          priceSuffix: "mulai dari",
          cta: "Jadwalkan konsultasi",
          features: [
            "Semua fitur Starter",
            "Aplikasi web lengkap",
            "Design system & library komponen",
            "Login & akun pengguna",
            "Pembayaran, AI & analitik (add-on)",
            "Pengerjaan 4–8 minggu",
            "Dukungan 30 hari setelah rilis",
          ],
        },
        {
          name: "Enterprise",
          description: "Untuk platform yang kompleks dan kerja sama jangka panjang.",
          badge: "",
          priceSuffix: "",
          cta: "Hubungi kami",
          features: [
            "Semua fitur Professional",
            "Sudah termasuk pembayaran, AI & analitik",
            "Tim produk senior khusus untuk Anda",
            "Arsitektur multi-platform yang scalable",
            "Review keamanan & compliance",
            "SLA & dukungan prioritas",
            "Roadmap & pengembangan berkelanjutan",
            "Retainer bulanan yang fleksibel",
          ],
        },
      ],
      compareRows: [
        { label: "Desain custom di Figma", values: [true, true, true] },
        { label: "Jumlah halaman", values: ["6", "15", "Tidak terbatas"] },
        { label: "Responsif & SEO-friendly", values: [true, true, true] },
        { label: "Integrasi CMS", values: ["Dasar", "Lengkap", "Lengkap + workflow"] },
        { label: "Design system & komponen", values: [false, true, true] },
        { label: "Login & akun pengguna", values: [false, true, true] },
        { label: "Pembayaran & dasbor", values: ["Add-on", "Add-on", true] },
        { label: "Fitur AI", values: ["Add-on", "Add-on", true] },
        { label: "Analitik & optimasi performa", values: ["Add-on", "Add-on", true] },
        { label: "Arsitektur multi-platform", values: [false, false, true] },
        { label: "Review keamanan & compliance", values: [false, false, true] },
        { label: "Revisi", values: ["2 kali", "4 kali", "Tidak terbatas"] },
        { label: "Durasi pengerjaan", values: ["2–3 minggu", "4–8 minggu", "Custom"] },
        { label: "Dukungan setelah rilis", values: ["14 hari", "30 hari", "SLA + retainer"] },
      ],
      addons: [
        { name: "Pembayaran & dasbor", description: "Checkout, sistem langganan, dan dasbor admin." },
        { name: "Fitur AI", description: "Chatbot, pencarian pintar, atau otomasi yang sesuai kebutuhan produk." },
        { name: "Analitik & optimasi performa", description: "Tracking event, dasbor, dan optimasi kecepatan website." },
        { name: "Halaman tambahan", description: "Satu halaman baru, didesain dan dibangun sesuai brand Anda." },
        { name: "Paket SEO dasar", description: "SEO teknis, sitemap, schema, dan setup Google Search Console." },
        { name: "Pelatihan CMS", description: "Sesi 1-on-1 supaya tim Anda bisa mengelola konten sendiri." },
        { name: "Copywriting", description: "Penulisan konten yang mendorong konversi, maksimal 6 halaman." },
        { name: "Paket maintenance", description: "Hosting, update, backup, dan revisi kecil setiap bulan." },
        { name: "Pengerjaan ekspres", description: "Jadwal prioritas agar produk bisa rilis lebih cepat." },
      ],
    },
    app: {
      label: "Pengembangan Aplikasi",
      tagline: "Aplikasi mobile native dan cross-platform untuk iOS dan Android.",
      plans: [
        {
          name: "Starter",
          description: "Cocok untuk aplikasi satu platform dan MVP mobile.",
          badge: "",
          priceSuffix: "mulai dari",
          cta: "Mulai proyek",
          features: [
            "iOS atau Android (satu platform)",
            "Maksimal 8 layar utama",
            "Desain UI custom di Figma",
            "Integrasi API & login",
            "2 kali revisi",
            "Pengerjaan 4–6 minggu",
          ],
        },
        {
          name: "Professional",
          description: "Cocok untuk aplikasi iOS dan Android yang siap rilis di App Store dan Play Store.",
          badge: "Paling populer",
          priceSuffix: "mulai dari",
          cta: "Jadwalkan konsultasi",
          features: [
            "Semua fitur Starter",
            "iOS + Android (React Native)",
            "Design system & library komponen",
            "Pembayaran, push notification & mode offline",
            "AI & analitik (add-on)",
            "Bantuan submit ke App Store & Play Store",
            "Pengerjaan 8–12 minggu",
            "Dukungan 30 hari setelah rilis",
          ],
        },
        {
          name: "Enterprise",
          description: "Untuk aplikasi mobile skala besar dengan kebutuhan yang kompleks.",
          badge: "",
          priceSuffix: "",
          cta: "Hubungi kami",
          features: [
            "Semua fitur Professional",
            "Sudah termasuk AI & analitik",
            "Tim mobile senior khusus untuk Anda",
            "Modul native & integrasi lanjutan",
            "Review keamanan & compliance",
            "SLA & dukungan prioritas",
            "Update & pengembangan berkelanjutan",
            "Retainer bulanan yang fleksibel",
          ],
        },
      ],
      compareRows: [
        { label: "Desain UI custom di Figma", values: [true, true, true] },
        { label: "Platform", values: ["iOS atau Android", "iOS + Android", "iOS + Android + web"] },
        { label: "Jumlah layar utama", values: ["8", "20", "Tidak terbatas"] },
        { label: "Integrasi API & login", values: [true, true, true] },
        { label: "Design system & komponen", values: [false, true, true] },
        { label: "Pembayaran & in-app purchase", values: [false, true, true] },
        { label: "Push notification", values: [false, true, true] },
        { label: "Mode offline", values: [false, true, true] },
        { label: "Fitur AI", values: ["Add-on", "Add-on", true] },
        { label: "Modul native & integrasi lanjutan", values: [false, false, true] },
        { label: "Submit ke App Store & Play Store", values: [false, true, true] },
        { label: "Review keamanan & compliance", values: [false, false, true] },
        { label: "Revisi", values: ["2 kali", "4 kali", "Tidak terbatas"] },
        { label: "Durasi pengerjaan", values: ["4–6 minggu", "8–12 minggu", "Custom"] },
        { label: "Dukungan setelah rilis", values: ["14 hari", "30 hari", "SLA + retainer"] },
      ],
      addons: [
        { name: "Platform tambahan", description: "Tambah versi web atau platform mobile kedua." },
        { name: "Backend & API custom", description: "Backend, database, dan panel admin khusus untuk aplikasi Anda." },
        { name: "Fitur AI", description: "Fitur AI di perangkat maupun cloud yang benar-benar berguna bagi pengguna." },
        { name: "Push notification & CRM", description: "Setup notifikasi dan tools untuk kampanye ke pengguna." },
        { name: "Analitik produk", description: "Tracking event, funnel, dan dasbor real-time." },
        { name: "Real-time & chat", description: "Fitur chat, status online, dan sinkronisasi data secara langsung." },
        { name: "Multi-bahasa", description: "Aplikasi dalam beberapa bahasa, dengan format tanggal dan mata uang yang menyesuaikan." },
        { name: "Paket maintenance", description: "Update di store, monitoring, dan perbaikan bug setiap bulan." },
        { name: "Pengerjaan ekspres", description: "Jadwal prioritas agar produk bisa rilis lebih cepat." },
      ],
    },
    compareTitle: "Bandingkan paket",
    featureLabel: "Fitur",
    addonsTitle: "Add-on",
    addonsSubtitle: "Tambahkan sesuai kebutuhan. Harga jelas dari awal, tanpa biaya tersembunyi.",
    addonsFrom: "mulai",
    addonsDisclaimer:
      "Fitur AI kami sesuaikan per proyek. Kami hanya menyarankannya kalau memang bermanfaat untuk produk Anda, dan akan dibahas bersama saat konsultasi.",
    perMonth: "/bln",
    pricingFaqTitle: "Pertanyaan seputar harga",
    pricingFaq: [
      {
        q: "Bagaimana sistem pembayarannya?",
        a: "Pembayaran dibagi menjadi tiga termin: 50% di awal, 30% di tengah pengerjaan, dan 20% sebelum rilis. Untuk retainer bulanan, tagihan dikirim di awal setiap bulan.",
      },
      {
        q: "Siapa yang memiliki kode dan file desainnya?",
        a: "Anda, sepenuhnya. Setelah pelunasan, seluruh source code, file desain, dan aset menjadi milik Anda. Tidak ada lock-in maupun biaya lisensi.",
      },
      {
        q: "Revisi dihitung seperti apa?",
        a: "Satu revisi adalah satu kali pengiriman masukan yang sudah dirangkum untuk setiap milestone. Paket Starter mendapat 2 kali revisi, Professional 4 kali, dan Enterprise tidak terbatas selama masih dalam lingkup sprint.",
      },
      {
        q: "Apakah harganya bisa berubah?",
        a: "Harga paket adalah titik awal untuk lingkup tertentu. Setelah konsultasi, kami kirimkan penawaran dengan harga tetap. Angka yang Anda setujui adalah angka yang Anda bayar.",
      },
      {
        q: "Apakah harga sudah termasuk pajak?",
        a: "Harga dalam Rupiah belum termasuk PPN 11%, sedangkan harga dalam USD sudah net. Rincian pajak akan tercantum jelas di invoice.",
      },
      {
        q: "Bagaimana setelah produk rilis?",
        a: "Setiap paket sudah termasuk masa dukungan. Setelah itu, Anda bisa lanjut dengan paket maintenance bulanan untuk hosting, update, monitoring, dan penambahan fitur.",
      },
    ],
    engageEyebrow: "Alur kerja sama",
    engageTitle: "Dari konsultasi pertama sampai produk rilis",
    engageSteps: [
      { title: "Konsultasi", description: "Diskusi gratis 30 menit untuk memahami tujuan, lingkup, dan target waktu Anda." },
      { title: "Proposal & penawaran", description: "Proposal lengkap berisi lingkup, harga, timeline, dan deliverable yang jelas." },
      { title: "Desain & development", description: "Kami bekerja dengan sprint mingguan, jadi Anda bisa melihat progres nyata setiap minggu." },
      { title: "Rilis & dukungan", description: "Produk dirilis, seluruh aset diserahkan ke Anda, dan kami tetap mendampingi setelahnya." },
    ],
    guarantees: [
      { title: "Tepat waktu", description: "Timeline yang disepakati di awal akan kami tepati." },
      { title: "Kode sepenuhnya milik Anda", description: "Seluruh kode dan file desain jadi milik Anda setelah pelunasan." },
      { title: "Dukungan setelah rilis", description: "Setiap paket sudah termasuk masa dukungan setelah produk live." },
    ],
    teaser: {
      eyebrow: "Harga",
      title: "Harga transparan untuk web dan aplikasi",
      description:
        "Setiap paket punya titik awal yang jelas. Lihat detailnya dan pilih yang paling sesuai dengan kebutuhan Anda.",
      webLabel: "Pengembangan web",
      appLabel: "Pengembangan aplikasi",
      fromLabel: "mulai",
      cta: "Lihat semua paket",
    },
  },
  estimator: {
    eyebrow: "Kalkulator biaya",
    title: "Hitung estimasi biaya dalam 30 detik",
    description:
      "Atur kebutuhan Anda dan lihat estimasinya langsung berubah. Harga final tetap kami tentukan setelah berdiskusi dengan Anda.",
    sizeLabel: { web: "Jumlah halaman", app: "Jumlah layar" },
    addonsLabel: "Add-on",
    timelineLabel: "Timeline",
    timelineStandard: "Standar",
    timelineRush: "Ekspres",
    estimateLabel: "Estimasi biaya",
    startingSuffix: "mulai dari",
    baseLine: "Biaya dasar",
    addonsLine: "Add-on",
    rushLine: "Pengerjaan ekspres",
    monthlyLine: "Maintenance (per bulan)",
    disclaimer:
      "Ini hanya estimasi, bukan penawaran resmi. Lingkup proyek akan kami pastikan bersama saat konsultasi gratis.",
    ctaCall: "Jadwalkan konsultasi",
    ctaContact: "Kirim detail proyek",
  },
  faq: {
    eyebrow: "FAQ",
    titleLine1: "Pertanyaan yang",
    titleLine2: "sering diajukan",
    subPrefix: "Masih ada pertanyaan lain?",
    subLink: "Hubungi kami",
    subSuffix: "dan tim kami akan membalas dalam 1 hari kerja.",
    items: [
      {
        q: "Berapa lama pengerjaan sebuah proyek?",
        a: "Umumnya MVP selesai dalam 4–8 minggu. Untuk platform yang lebih besar, butuh sekitar 3–4 bulan dengan rilis bertahap setiap minggu, jadi Anda bisa memantau progresnya. Timeline pastinya akan kami sampaikan setelah tahap discovery.",
      },
      {
        q: "Bagaimana cara menentukan harga?",
        a: "Ada dua pilihan: proyek dengan lingkup dan harga tetap, atau retainer bulanan. Paket yang tercantum adalah titik awal. Setelah konsultasi singkat, kami buatkan penawaran sesuai lingkup dan anggaran Anda.",
      },
      {
        q: "Apakah bisa untuk startup yang baru mulai?",
        a: "Tentu bisa. Sebagian besar proyek kami justru membantu founder mengubah ide menjadi MVP yang siap dipakai dan siap dipresentasikan ke investor, dengan cepat dan tetap berkualitas.",
      },
      {
        q: "Siapa yang memiliki kode dan desainnya?",
        a: "Anda. Setelah pelunasan, seluruh source code, file desain, dan aset sepenuhnya menjadi milik Anda. Tidak ada lock-in dan tidak ada biaya tersembunyi.",
      },
      {
        q: "Teknologi apa yang digunakan?",
        a: "Kami menggunakan Next.js, React, TypeScript, Go, Rust, Laravel, dan React Native, didukung infrastruktur cloud modern seperti PostgreSQL, Redis, Docker, Kubernetes, AWS, Google Cloud, dan Vercel. Semuanya dipilih agar produk mudah dirawat dan dikembangkan oleh tim Anda sendiri.",
      },
      {
        q: "Bisa bekerja sama dengan tim internal kami?",
        a: "Bisa. Kami bisa bergabung dengan desainer dan engineer Anda, mengisi peran yang masih kosong, atau mengerjakan seluruh proyek dari awal. Semua menyesuaikan cara yang paling efektif untuk tim Anda.",
      },
      {
        q: "Bagaimana setelah produk rilis?",
        a: "Kami menyediakan paket maintenance dan pengembangan lanjutan, mulai dari perbaikan, fitur baru, hingga peningkatan performa. Banyak klien memilih bekerja sama dengan kami dalam jangka panjang.",
      },
      {
        q: "Bagaimana cara memulainya?",
        a: "Cukup isi formulir kontak di bawah. Kami akan membalas dalam 1 hari kerja dan menjadwalkan konsultasi gratis selama 30 menit.",
      },
    ],
  },
  contact: {
    badge: "Mari berkolaborasi",
    title: "Ceritakan proyek Anda",
    subtitle:
      "Jadwalkan konsultasi gratis selama 30 menit. Kami akan membalas dalam 1 hari kerja dengan langkah selanjutnya yang jelas, tanpa paksaan dan tanpa istilah teknis yang membingungkan.",
    detailEmail: "Email",
    detailPhone: "Telepon",
    detailLocation: "Lokasi",
    chipReply: "Balasan dalam 1 hari kerja",
    chipPrivate: "Data Anda aman",
    name: "Nama",
    namePlaceholder: "Nama lengkap Anda",
    email: "Email",
    emailPlaceholder: "nama@perusahaan.com",
    company: "Perusahaan",
    companyPlaceholder: "Nama perusahaan",
    budget: "Anggaran",
    budgetPlaceholder: "Pilih kisaran anggaran",
    message: "Detail proyek",
    messagePlaceholder: "Ceritakan produk yang ingin Anda bangun dan target yang ingin dicapai.",
    optional: "Opsional",
    submit: "Kirim pesan",
    submitting: "Mengirim…",
    consent: "Dengan mengirim formulir ini, Anda setuju untuk kami hubungi terkait pertanyaan Anda.",
    nameRequired: "Nama wajib diisi.",
    emailRequired: "Email wajib diisi.",
    emailInvalid: "Format email tidak valid.",
    messageRequired: "Ceritakan sedikit tentang proyek Anda.",
    messageMin: "Detail proyek minimal 10 karakter.",
    success: "Pesan terkirim. Kami akan membalas dalam 1 hari kerja.",
    error: "Pesan gagal terkirim. Silakan coba lagi atau kirim email langsung ke kami.",
    bookTitle: "Ingin diskusi langsung?",
    bookDesc: "Pilih jadwal konsultasi gratis 30 menit yang sesuai dengan waktu Anda.",
    bookCta: "Pilih jadwal",
  },
  notFound: {
    quip: "$ callumc resolve /halaman-ini — Error: route not found",
    title: "Halaman tidak ditemukan",
    description: "Halaman yang Anda cari tidak ada atau sudah dipindahkan.",
    ctaHome: "Kembali ke beranda",
    ctaContact: "Hubungi kami",
  },
  legal: {
    eyebrow: "Legal",
    updatedLabel: "Terakhir diperbarui",
    updatedDate: "27 Juli 2026",
    contactLine: "Ada pertanyaan terkait kebijakan ini? Hubungi kami di",
    backHome: "Kembali ke beranda",
    privacy: {
      title: "Kebijakan Privasi",
      intro:
        "Halaman ini menjelaskan data apa saja yang kami kumpulkan saat Anda mengunjungi situs ini atau menghubungi kami, untuk apa data tersebut digunakan, dan apa saja hak Anda. Intinya, kami hanya mengumpulkan data yang benar-benar diperlukan dan tidak pernah menjualnya.",
      sections: [
        {
          h: "Data yang kami kumpulkan",
          body: "Saat Anda mengisi formulir kontak, kami menerima data yang Anda masukkan, yaitu nama, email, perusahaan, kisaran anggaran, dan pesan. Selain itu, situs ini menyimpan pilihan bahasa dan mata uang di browser Anda sendiri. Data tersebut tidak pernah dikirim ke server kami.",
        },
        {
          h: "Penggunaan data",
          body: "Data kontak hanya kami gunakan untuk membalas pertanyaan Anda dan menjalankan proyek yang sudah disepakati. Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda ke pihak lain untuk kepentingan pemasaran.",
        },
        {
          h: "Dasar pemrosesan data",
          body: "Kami memproses data Anda atas persetujuan yang Anda berikan saat mengirim formulir. Jika berlanjut ke proyek, data diproses untuk menjalankan perjanjian kerja sama dengan Anda.",
        },
        {
          h: "Penyimpanan data",
          body: "Data disimpan selama diperlukan untuk menindaklanjuti permintaan Anda, dan untuk jangka waktu yang wajar setelahnya sebagai arsip bisnis. Anda bisa meminta data tersebut dihapus kapan saja.",
        },
        {
          h: "Hak Anda",
          body: "Anda berhak meminta akses, perbaikan, atau penghapusan data pribadi Anda, serta menarik persetujuan kapan saja melalui email. Kami akan menanggapi permintaan Anda dalam 1 hari kerja.",
        },
        {
          h: "Perubahan kebijakan",
          body: "Jika ada perubahan, versi terbaru akan kami tampilkan di halaman ini beserta tanggal pembaruannya. Perubahan yang penting akan kami jelaskan dengan bahasa yang mudah dipahami.",
        },
      ],
    },
    terms: {
      title: "Syarat & Ketentuan",
      intro:
        "Syarat ini mengatur penggunaan situs ini dan gambaran umum cara kami bekerja sama dengan klien. Ketentuan detail untuk setiap proyek akan tercantum di proposal yang Anda setujui.",
      sections: [
        {
          h: "Penggunaan situs",
          body: "Konten di situs ini adalah informasi umum tentang layanan kami. Anda tidak diperbolehkan menyalin, mengambil secara otomatis (scraping), atau mengakui konten ini sebagai milik Anda.",
        },
        {
          h: "Penawaran & proposal",
          body: "Harga yang tertera di situs ini adalah harga awal, bukan penawaran yang mengikat. Lingkup, harga, dan jadwal yang berlaku hanya yang tercantum di proposal tertulis yang telah Anda setujui.",
        },
        {
          h: "Pembayaran",
          body: "Pembayaran dilakukan dalam beberapa termin, umumnya 50% di awal, 30% di tengah pengerjaan, dan 20% sebelum rilis, kecuali diatur berbeda dalam proposal.",
        },
        {
          h: "Hak kekayaan intelektual",
          body: "Setelah pelunasan, source code, file desain, dan aset proyek sepenuhnya menjadi milik Anda. Kami tetap boleh menampilkan hasil pekerjaan tersebut di portofolio kami, kecuali ada kesepakatan lain.",
        },
        {
          h: "Batasan tanggung jawab",
          body: "Kami bekerja secara profesional dan hati-hati. Meski begitu, situs ini dan estimasi di dalamnya disediakan apa adanya. Tanggung jawab kami untuk setiap kerja sama terbatas pada nilai yang dibayarkan untuk kerja sama tersebut.",
        },
        {
          h: "Hukum yang berlaku",
          body: "Syarat ini tunduk pada hukum Republik Indonesia. Jika terjadi perselisihan, kami akan mengutamakan penyelesaian secara musyawarah.",
        },
      ],
    },
    cookies: {
      title: "Kebijakan Cookie",
      intro:
        "Singkatnya, situs ini tidak memakai cookie untuk melacak Anda. Berikut data yang disimpan di browser Anda dan alasannya.",
      sections: [
        {
          h: "Data yang disimpan",
          body: "Hanya dua pengaturan kecil di browser Anda: pilihan bahasa (Inggris atau Indonesia) dan mata uang (USD atau IDR). Tema terang atau gelap diatur oleh browser Anda sendiri.",
        },
        {
          h: "Yang tidak kami lakukan",
          body: "Kami tidak menggunakan cookie iklan, pelacak lintas situs, fingerprinting, atau skrip analitik pihak ketiga yang mengikuti aktivitas Anda di internet.",
        },
        {
          h: "Mengatur data tersimpan",
          body: "Anda bisa menghapus data ini kapan saja lewat pengaturan browser. Situs tetap berfungsi normal, hanya saja pilihan bahasa dan mata uang Anda akan kembali ke pengaturan awal.",
        },
        {
          h: "Rencana ke depan",
          body: "Jika nanti kami menambahkan analitik, kami akan memilih layanan yang menjaga privasi, mengumumkannya lebih dulu di halaman ini, dan memastikan datanya tetap anonim.",
        },
      ],
    },
  },
  about: {
    eyebrow: "Tentang Callum C",
    heroLead: "Studio yang masih baru, dengan satu fokus sejak awal:",
    heroHighlight: "kualitas",
    heroTrail: ".",
    heroSubtitle:
      "Kami memang baru memulai. Tidak ada angka yang dibesar-besarkan atau logo klien yang dipinjam. Yang ada adalah tim senior, cara pandang yang tajam, dan hasil kerja yang berani kami pertanggungjawabkan.",
    marquee: [
      "Tidak puas dengan hasil biasa",
      "Rilis dalam hitungan minggu",
      "Desain dan kode berjalan beriringan",
      "Berpikir seperti founder",
      "Transparan di setiap tahap",
    ],
    storyLabels: ["Masalahnya", "Solusinya", "Komitmen kami"],
    storyEyebrow: "Cerita kami",
    storyTitle: "Awal mula Callum C",
    storyParagraphs: [
      "Callum C berdiri pada 2026 karena satu masalah yang terus kami lihat: banyak produk bagus gagal di tengah jalan karena harus berpindah tangan dari konsultan strategi ke agensi desain, lalu ke vendor development. Kami mengalaminya langsung, dan yakin tim kecil yang senior dan menangani semuanya sendiri bisa memberikan hasil yang lebih baik.",
      "Dari situ, kami membangun studio yang sebenarnya ingin kami pakai sendiri. Desainer dan engineer dalam satu tim, demo setiap minggu sebagai ganti laporan status, dan satu prinsip yang tidak pernah kami langgar: tidak merilis produk dengan kualitas seadanya.",
      "Tim kami sengaja dibuat kecil. Dengan begitu, setiap proyek mendapat perhatian penuh, dan setiap klien ikut menentukan arah perkembangan studio ini.",
    ],
    missionTitle: "Misi",
    missionText:
      "Membuat desain dan pengembangan produk berkualitas internasional bisa diakses oleh tim yang ambisius, mulai dari founder tahap awal sampai perusahaan besar.",
    visionTitle: "Visi",
    visionText:
      "Menjadi studio produk yang paling dipercaya di Asia Tenggara, dan dikenal secara global lewat produk digital yang berkualitas.",
    valuesEyebrow: "Nilai kami",
    valuesTitle: "Prinsip yang kami pegang",
    valuesDescription:
      "Bukan sekadar slogan. Prinsip inilah yang jadi dasar setiap keputusan kami.",
    values: [
      {
        title: "Kualitas lebih penting dari kuantitas",
        description:
          "Kami sengaja membatasi jumlah proyek agar setiap proyek bisa dikerjakan dengan maksimal.",
      },
      {
        title: "Cepat, tapi tetap terarah",
        description:
          "Produk rilis dalam hitungan minggu, tanpa mengorbankan kualitas dan tanpa meninggalkan masalah teknis untuk nanti.",
      },
      {
        title: "Terbuka di setiap tahap",
        description:
          "Preview langsung, demo mingguan, dan estimasi yang jujur. Anda selalu tahu kondisi proyek yang sebenarnya.",
      },
      {
        title: "Bertanggung jawab atas hasil",
        description:
          "Kami berpikir seperti founder, bukan vendor. Kalau ada yang tidak membantu produk Anda berkembang, akan kami sampaikan secara terus terang.",
      },
    ],
    roadmapEyebrow: "Rencana kami",
    roadmapTitle: "Yang sedang kami siapkan",
    roadmapDescription:
      "Kami lebih suka menunjukkan rencana yang nyata daripada klaim pencapaian yang berlebihan. Ini yang sedang kami kerjakan.",
    roadmap: [
      {
        status: "Sekarang",
        period: "2026",
        title: "Peluncuran studio",
        description:
          "Tim inti sudah terbentuk, brand resmi diluncurkan, dan proyek klien pertama sedang berjalan.",
      },
      {
        status: "Selanjutnya",
        period: "2026 · Q4",
        title: "10 proyek pertama",
        description:
          "Menyelesaikan sepuluh proyek dari awal sampai rilis, dan membagikan studi kasus yang jujur untuk masing-masing proyek.",
      },
      {
        status: "Ke depan",
        period: "2027",
        title: "Product lab",
        description:
          "Menginvestasikan kembali keuntungan studio untuk membangun produk SaaS kami sendiri, dengan standar kualitas yang sama seperti untuk klien.",
      },
      {
        status: "Ke depan",
        period: "2028",
        title: "Tim regional",
        description:
          "Tim senior yang tersebar di Asia Tenggara, melayani klien dari seluruh dunia.",
      },
    ],
    teamEyebrow: "Tim kami",
    teamTitle: "Tim kecil, semuanya senior",
    teamDescription:
      "Orang yang membalas email Anda adalah orang yang sama yang mendesain dan membangun produk Anda.",
    team: [
      {
        name: "Muhammad Caesar Rifqi",
        role: "Founder & CTO",
        bio: "Engineer yang memegang arsitektur, kualitas kode, dan proses delivery. Baginya, sistem yang andal harus dirancang sejak awal, bukan ditambal belakangan.",
        tags: ["Front End", "Backend", "Infrastruktur"],
      },
      {
        name: "Gerrard Setiawan",
        role: "Co-Founder & Creative Director",
        bio: "Memimpin brand, desain antarmuka, dan motion. Percaya bahwa detail kecillah yang membuat sebuah produk terasa istimewa.",
        tags: ["Brand", "UI/UX", "Motion", "Design system"],
      },
    ],
    ctaTitle: "Mari mulai dari sini",
    ctaDesc:
      "Anda founder dengan ide baru, atau investor yang percaya pada talenta produk di Asia Tenggara? Kami senang bisa berdiskusi dengan Anda.",
    ctaButton: "Hubungi kami",
  },
  footer: {
    description:
      "Callum C adalah studio produk yang mendesain dan membangun website, aplikasi mobile, dan platform SaaS untuk startup maupun perusahaan, dari MVP hingga skala besar.",
    colCompany: "Perusahaan",
    colResources: "Informasi",
    colLegal: "Legal",
    linkWhy: "Mengapa kami",
    linkTestimonials: "Testimoni",
    linkContact: "Kontak",
    linkPrivacy: "Privasi",
    linkTerms: "Syarat & Ketentuan",
    linkCookies: "Cookie",
    rights: "Hak cipta dilindungi.",
    cta: "Mulai proyek",
  },
};

export const dictionaries = { en, id };
export type Locale = keyof typeof dictionaries;
