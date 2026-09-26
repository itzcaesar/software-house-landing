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
    badgeText: "Pengembangan produk AI secara menyeluruh",
    leadingText: "Kami merancang dan membangun produk digital yang terasa",
    highlight: "tak tergantikan",
    trailingText: ".",
    subtitle:
      "Callum C adalah studio produk bagi tim yang menuntut standar tinggi. Dari MVP hingga skala enterprise — dirancang dengan cermat, dibangun dengan solid, dan diluncurkan tepat waktu.",
    primaryCta: "Mulai proyek",
    secondaryCta: "Lihat portofolio",
    ratingSuffix: "dari 40+ tim",
    stackLabel: "Didukung teknologi modern",
  },
  trusted: {
    label: "Dipercaya oleh startup dan perusahaan di berbagai negara",
  },
  services: {
    eyebrow: "Layanan kami",
    titleLine1: "Semua yang Anda butuhkan untuk meluncurkan produk,",
    titleLine2: "dalam satu tim",
    description:
      "Strategi, desain, dan engineering ditangani oleh satu tim yang bertanggung jawab penuh — sehingga tidak ada yang tertinggal di tengah jalan.",
    items: [
      {
        title: "Pengembangan Web",
        description:
          "Situs dan aplikasi web yang cepat dan siap SEO, dibangun dengan Next.js, React, dan infrastruktur cloud modern.",
      },
      {
        title: "Aplikasi Mobile",
        description:
          "Aplikasi iOS dan Android dengan pengalaman setara native dari satu basis kode, lengkap dengan animasi yang halus dan dukungan offline.",
      },
      {
        title: "Desain UI/UX",
        description:
          "Desain produk berbasis riset yang menyederhanakan alur kerja kompleks menjadi antarmuka yang intuitif.",
      },
      {
        title: "Branding",
        description:
          "Sistem identitas — logo, tipografi, warna, dan tone of voice — yang membuat produk Anda mudah dikenali dan berbeda dari kompetitor.",
      },
      {
        title: "Pengembangan SaaS",
        description:
          "Platform multi-tenant dengan billing, autentikasi, dasbor, dan analitik — dirancang untuk bertumbuh sejak hari pertama.",
      },
      {
        title: "Integrasi AI",
        description:
          "Fitur AI yang memberikan nilai nyata — asisten, pencarian cerdas, dan otomasi berbasis model terkini.",
      },
      {
        title: "Pengembangan MVP",
        description:
          "Wujudkan ide menjadi MVP berkualitas produksi dalam hitungan minggu — tervalidasi lebih cepat, siap untuk pendanaan dan pertumbuhan.",
      },
    ],
    ctaTitle: "Punya kebutuhan lain?",
    ctaDesc:
      "Ceritakan produk Anda — kami akan menyusun lingkup, tim, dan jadwal yang paling sesuai.",
    ctaButton: "Diskusikan proyek",
  },
  why: {
    eyebrow: "Mengapa Callum C",
    title: "Nilai lebih dari tim senior yang berkomitmen penuh",
    description:
      "Fokus kami adalah hasil bisnis Anda, bukan jumlah jam kerja. Berikut yang Anda dapatkan.",
    statLabels: ["Produk diluncurkan", "Rating klien", "Negara", "Retensi klien"],
    benefits: [
      {
        title: "Rilis dalam hitungan minggu, bukan kuartal",
        description:
          "Tim senior yang efisien dan proses yang sudah teruji membuat produk Anda meluncur lebih cepat — tanpa mengorbankan kualitas.",
      },
      {
        title: "Engineering yang berpijak pada desain",
        description:
          "Desainer dan engineer bekerja sebagai satu tim. Setiap detail dirancang dengan tujuan, setiap interaksi terasa mulus.",
      },
      {
        title: "Satu tim dari awal hingga akhir",
        description:
          "Strategi, desain, dan pengembangan dalam satu tim. Tanpa serah terima yang berbelit dan tanpa saling lempar tanggung jawab — hanya hasil yang dapat diandalkan.",
      },
      {
        title: "Siap untuk bertumbuh",
        description:
          "Arsitektur yang rapi, kode yang terstruktur dan teruji, serta mudah dilanjutkan oleh tim internal Anda.",
      },
      {
        title: "Transparansi penuh",
        description:
          "Preview langsung, demo mingguan, dan papan kerja bersama. Anda selalu mengetahui progres produk secara pasti.",
      },
      {
        title: "Mitra, bukan sekadar vendor",
        description:
          "Kami berorientasi pada hasil, bukan sekadar menyelesaikan daftar tugas. Mayoritas klien tetap bekerja sama dengan kami setelah peluncuran — tingkat retensi 98% dan terus bertambah.",
      },
    ],
  },
  process: {
    eyebrow: "Cara kami bekerja",
    title: "Proses teruji dari ide hingga peluncuran",
    description:
      "Enam tahapan yang transparan, sehingga Anda selalu terlibat dan progres tetap terjaga setiap minggunya.",
    stepLabel: "Tahap",
    steps: [
      {
        title: "Discovery",
        description:
          "Kami menyelaraskan tujuan, pengguna, dan lingkup proyek — lalu menerjemahkannya menjadi roadmap yang jelas dan terprioritaskan.",
      },
      {
        title: "Desain",
        description:
          "Mulai dari wireframe hingga prototipe interaktif. Anda dapat melihat dan mencoba produk sebelum pengembangan dimulai.",
      },
      {
        title: "Pengembangan",
        description:
          "Kode yang rapi, terstruktur, dan teruji, dirilis bertahap setiap minggu agar dapat Anda tinjau di setiap tahap.",
      },
      {
        title: "Pengujian",
        description:
          "QA otomatis dan manual di berbagai perangkat, disertai audit performa dan aksesibilitas sebelum peluncuran.",
      },
      {
        title: "Peluncuran",
        description:
          "Deployment tanpa downtime di infrastruktur cloud modern, dengan monitoring dan analitik aktif sejak hari pertama.",
      },
      {
        title: "Dukungan",
        description:
          "Iterasi berkelanjutan, pemeliharaan, dan pendampingan — kami mengembangkan produk bersama Anda.",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portofolio pilihan",
    title: "Produk yang kami bangun",
    description:
      "Sebagian hasil kerja kami bersama para founder dan tim produk dari berbagai negara.",
    cta: "Mulai proyek Anda",
    projects: [
      {
        category: "Fintech · SaaS",
        description:
          "Platform keuangan pribadi dengan insight real-time dan sinkronisasi open banking.",
        metric: "+180% aktivasi",
        challenge:
          "Banyak pengguna berhenti di tengah onboarding — data keuangan mereka tersebar di lima aplikasi, dan mereka pergi sebelum melihat insight pertama.",
        solution:
          "Kami merancang ulang alur di sekitar satu dasbor real-time: sinkronisasi open banking sejak login pertama, insight pengeluaran dalam hitungan detik, dan paket berlangganan berbasis Stripe yang menyesuaikan pemakaian.",
        outcome:
          "Aktivasi naik 180% pada kuartal pertama setelah peluncuran ulang, disertai peningkatan retensi minggu pertama. Halaman insight menjadi layar yang paling sering dikunjungi.",
      },
      {
        category: "Mobile · Travel",
        description: "Aplikasi pendamping perjalanan dengan peta offline dan itinerary cerdas.",
        metric: "4.9★ App Store",
        challenge:
          "Wisatawan harus berpindah antara aplikasi peta, catatan, dan pemesanan — dan semuanya tidak berfungsi saat koneksi terputus.",
        solution:
          "Aplikasi React Native dengan peta yang sepenuhnya offline, perencana itinerary berbasis AI yang memperhitungkan jam operasional dan jarak, serta fitur berbagi sekali ketuk untuk rombongan.",
        outcome:
          "Rating 4.9★ di App Store, dengan kata 'offline' paling sering disebut dalam ulasan. Durasi sesi meningkat dua kali lipat sejak fitur itinerary berbasis AI diluncurkan.",
      },
      {
        category: "Kesehatan · Web",
        description:
          "Portal pasien yang mempersingkat proses reservasi dari hitungan hari menjadi menit untuk 40 ribu pengguna.",
        metric: "−72% waktu reservasi",
        challenge:
          "Reservasi masih mengandalkan telepon dan formulir kertas; staf menghabiskan berjam-jam setiap hari untuk menginput ulang data yang sama, sementara pasien menunggu berhari-hari.",
        solution:
          "Portal pasien dengan jadwal real-time, formulir pendaftaran cerdas, dan pengingat otomatis — dibangun di atas design system yang memenuhi standar HIPAA dan dapat dikembangkan sendiri oleh tim klinik.",
        outcome:
          "Waktu reservasi turun 72% dan tingkat ketidakhadiran pasien ikut menurun. 40.000 pasien terdaftar dalam enam bulan pertama tanpa penambahan staf layanan.",
      },
      {
        category: "AI · SaaS",
        description: "Asisten penulisan berbasis AI dengan pencarian RAG pada basis pengetahuan internal perusahaan.",
        metric: "12k+ tim",
        challenge:
          "Pengetahuan perusahaan tersebar di wiki dan percakapan — setiap dokumen dimulai dari nol dengan informasi yang sering kali sudah usang.",
        solution:
          "Asisten dengan pencarian retrieval-augmented pada dokumen internal: jawaban yang disertai sumber dan sitasi, draf yang mengikuti gaya bahasa perusahaan, serta kontrol admin yang memenuhi persyaratan tim IT.",
        outcome:
          "Digunakan oleh lebih dari 12.000 tim. Waktu penyusunan draf berkurang separuh dalam studi pelanggan, dan fitur sitasi sumber menjadi fitur yang paling dipercaya pengguna.",
      },
      {
        category: "E-commerce · Web",
        description:
          "Toko online headless yang dimuat dalam waktu kurang dari satu detik dengan tingkat konversi tinggi.",
        metric: "+34% pendapatan",
        challenge:
          "Sistem lama membutuhkan empat detik untuk tampil di perangkat mobile — dan semakin lambat setiap ada kampanye baru. Konversi turun di setiap tahap checkout.",
        solution:
          "Toko online headless di infrastruktur edge: dimuat kurang dari satu detik di seluruh dunia, pencarian instan, dan alur checkout yang disederhanakan tanpa langkah yang tidak perlu.",
        outcome:
          "Pendapatan naik 34% dibanding kuartal sebelumnya. Bounce rate di mobile turun sepertiga, dan halaman kampanye kini dapat dirilis dalam hitungan jam, bukan satu sprint.",
      },
      {
        category: "Branding · Web",
        description: "Rebranding menyeluruh dan website marketing untuk agensi desain yang sedang berkembang pesat.",
        metric: "2× leads masuk",
        challenge:
          "Kualitas karya agensi ini sudah kelas dunia, tetapi brand-nya belum. Calon klien sulit membedakan mereka dari studio yang lebih murah — dan hal itu terlihat dalam negosiasi harga.",
        solution:
          "Sistem identitas menyeluruh — logo, tipografi, dan motion — ditambah website marketing dengan studi kasus yang menonjolkan cara berpikir mereka, seluruhnya dapat dikelola melalui CMS yang ringan.",
        outcome:
          "Leads masuk meningkat dua kali lipat dalam dua bulan, dan nilai rata-rata proyek ikut naik karena brand kini sejalan dengan kualitas karyanya.",
      },
    ],
  },
  caseStudy: {
    eyebrow: "Studi kasus",
    backToWork: "Semua portofolio",
    challengeLabel: "Tantangan",
    solutionLabel: "Solusi kami",
    outcomeLabel: "Hasil",
    stackLabel: "Teknologi",
    timelineLabel: "Durasi",
    yearLabel: "Tahun",
    resultLabel: "Hasil utama",
    nextProject: "Proyek berikutnya",
    prevProject: "Proyek sebelumnya",
    ctaTitle: "Ingin hasil serupa?",
    ctaDesc:
      "Ceritakan produk yang sedang Anda kembangkan — kami akan menyusun lingkup, tim, dan jadwal untuk mewujudkannya.",
    ctaButton: "Mulai proyek",
  },
  testimonials: {
    eyebrow: "Testimoni",
    title: "Apa kata klien kami",
    description: "Pengalaman para founder dan pemimpin produk bekerja sama dengan Callum C.",
    items: [
      {
        role: "Founder & CEO",
        quote:
          "Callum C meluncurkan MVP kami dalam enam minggu, dan hasilnya setara produk perusahaan yang sepuluh kali lebih besar. Sebulan kemudian, kami berhasil menutup pendanaan seed.",
      },
      {
        role: "Head of Product",
        quote:
          "Kualitas desainnya berada di level yang berbeda. Setiap detail dipikirkan dengan matang, dan pengguna kami terus memuji kemudahan penggunaannya.",
      },
      {
        role: "COO",
        quote:
          "Mereka berpikir layaknya founder, bukan kontraktor. Mereka berani memberi masukan di hal-hal yang tepat, dan produk kami menjadi jauh lebih baik secara terukur.",
      },
      {
        role: "CTO",
        quote:
          "Kodenya rapi dan teruji, sehingga tim engineer kami dapat langsung melanjutkannya. Proses serah terima terbaik yang pernah kami alami.",
      },
      {
        role: "VP Engineering",
        quote:
          "Dengan demo mingguan, tidak ada kejutan. Kami selalu tahu apa yang kami bayar dan dapat memantau progres secara real-time.",
      },
      {
        role: "Managing Director",
        quote:
          "Brand dan website baru kami menggandakan leads masuk dalam dua bulan. Investasi terbaik yang pernah kami lakukan sebagai perusahaan yang baru berkembang.",
      },
    ],
  },
  pricing: {
    eyebrow: "Harga",
    notePrefix: "Harga ditampilkan dalam",
    noteTail: "Dapat diganti kapan saja — pilihan Anda akan kami simpan.",
    custom: "Custom",
    footerText: "Membutuhkan solusi khusus atau memiliki anggaran terbatas?",
    footerLink: "Temukan solusi yang sesuai",
    pageTitle: "Harga yang menyesuaikan kebutuhan produk Anda",
    pageDescription:
      "Web maupun mobile — titik awal yang jelas untuk setiap tahap. Setelah sesi konsultasi singkat, kami akan menyusun penawaran sesuai lingkup proyek Anda.",
    webTab: "Pengembangan Web",
    appTab: "Pengembangan Aplikasi",
    web: {
      label: "Pengembangan Web",
      tagline: "Website marketing, aplikasi web, dasbor, dan platform SaaS.",
      plans: [
        {
          name: "Starter",
          description: "Untuk landing page, website marketing, dan MVP skala kecil.",
          badge: "",
          priceSuffix: "mulai dari",
          cta: "Mulai proyek",
          features: [
            "Hingga 6 halaman",
            "Desain custom di Figma",
            "Responsif & siap SEO",
            "Integrasi CMS dasar",
            "2 putaran revisi",
            "Pengerjaan 2–3 minggu",
          ],
        },
        {
          name: "Professional",
          description: "Untuk aplikasi web lengkap dan MVP SaaS yang siap untuk pendanaan.",
          badge: "Paling populer",
          priceSuffix: "mulai dari",
          cta: "Jadwalkan konsultasi",
          features: [
            "Semua fitur paket Starter",
            "Pengembangan aplikasi web lengkap",
            "Design system & library komponen",
            "Autentikasi & akun pengguna",
            "Pembayaran, AI & analitik sebagai add-on",
            "Pengerjaan 4–8 minggu",
            "Dukungan 30 hari setelah peluncuran",
          ],
        },
        {
          name: "Enterprise",
          description: "Untuk platform kompleks dan kemitraan jangka panjang.",
          badge: "",
          priceSuffix: "",
          cta: "Hubungi kami",
          features: [
            "Semua fitur paket Professional",
            "Termasuk pembayaran, AI & analitik",
            "Tim produk senior yang berdedikasi",
            "Arsitektur multi-platform yang skalabel",
            "Review keamanan & kepatuhan",
            "SLA & dukungan prioritas",
            "Roadmap & iterasi berkelanjutan",
            "Retainer bulanan yang fleksibel",
          ],
        },
      ],
      compareRows: [
        { label: "Desain custom di Figma", values: [true, true, true] },
        { label: "Jumlah halaman", values: ["6", "15", "Tanpa batas"] },
        { label: "Responsif & siap SEO", values: [true, true, true] },
        { label: "Integrasi CMS", values: ["Dasar", "Lengkap", "Lengkap + workflow"] },
        { label: "Design system & komponen", values: [false, true, true] },
        { label: "Autentikasi & akun pengguna", values: [false, true, true] },
        { label: "Pembayaran & dasbor", values: ["Add-on", "Add-on", true] },
        { label: "Integrasi fitur AI", values: ["Add-on", "Add-on", true] },
        { label: "Analitik & optimasi performa", values: ["Add-on", "Add-on", true] },
        { label: "Arsitektur multi-platform", values: [false, false, true] },
        { label: "Review keamanan & kepatuhan", values: [false, false, true] },
        { label: "Revisi", values: ["2 putaran", "4 putaran", "Tanpa batas"] },
        { label: "Durasi pengerjaan", values: ["2–3 minggu", "4–8 minggu", "Custom"] },
        { label: "Dukungan setelah peluncuran", values: ["14 hari", "30 hari", "SLA + retainer"] },
      ],
      addons: [
        { name: "Pembayaran & dasbor", description: "Checkout, langganan, dan dasbor admin." },
        { name: "Integrasi fitur AI", description: "Fitur LLM, pencarian, atau otomasi yang sesuai dengan kebutuhan produk." },
        { name: "Analitik & optimasi performa", description: "Event tracking, dasbor, dan optimasi kecepatan." },
        { name: "Halaman tambahan", description: "Satu halaman tambahan, didesain dan dikembangkan sesuai brand." },
        { name: "Paket SEO awal", description: "SEO teknis, sitemap, schema, dan setup Search Console." },
        { name: "Pelatihan CMS", description: "Sesi 1:1 agar tim Anda dapat mengelola konten secara mandiri." },
        { name: "Copywriting", description: "Konten berorientasi konversi untuk hingga 6 halaman." },
        { name: "Paket pemeliharaan", description: "Hosting, pembaruan, backup, dan penyesuaian kecil setiap bulan." },
        { name: "Pengerjaan ekspres", description: "Penjadwalan prioritas untuk peluncuran yang lebih cepat." },
      ],
    },
    app: {
      label: "Pengembangan Aplikasi",
      tagline: "Aplikasi mobile native dan cross-platform untuk iOS dan Android.",
      plans: [
        {
          name: "Starter",
          description: "Untuk aplikasi satu platform dan MVP mobile.",
          badge: "",
          priceSuffix: "mulai dari",
          cta: "Mulai proyek",
          features: [
            "iOS atau Android (satu platform)",
            "Hingga 8 layar utama",
            "Desain UI custom di Figma",
            "Integrasi API & autentikasi",
            "2 putaran revisi",
            "Pengerjaan 4–6 minggu",
          ],
        },
        {
          name: "Professional",
          description: "Untuk aplikasi cross-platform yang siap rilis di App Store dan Play Store.",
          badge: "Paling populer",
          priceSuffix: "mulai dari",
          cta: "Jadwalkan konsultasi",
          features: [
            "Semua fitur paket Starter",
            "iOS + Android (React Native)",
            "Design system & library komponen",
            "Pembayaran, notifikasi push & sinkronisasi offline",
            "AI & analitik sebagai add-on",
            "Submit & rilis ke store",
            "Pengerjaan 8–12 minggu",
            "Dukungan 30 hari setelah peluncuran",
          ],
        },
        {
          name: "Enterprise",
          description: "Untuk platform mobile kompleks berskala besar.",
          badge: "",
          priceSuffix: "",
          cta: "Hubungi kami",
          features: [
            "Semua fitur paket Professional",
            "Termasuk AI & analitik",
            "Tim mobile senior yang berdedikasi",
            "Modul native & integrasi mendalam",
            "Review keamanan & kepatuhan",
            "SLA & dukungan prioritas",
            "Rilis & iterasi berkelanjutan",
            "Retainer bulanan yang fleksibel",
          ],
        },
      ],
      compareRows: [
        { label: "Desain UI custom di Figma", values: [true, true, true] },
        { label: "Platform", values: ["iOS atau Android", "iOS + Android", "iOS + Android + web"] },
        { label: "Layar utama", values: ["8", "20", "Tanpa batas"] },
        { label: "Integrasi API & autentikasi", values: [true, true, true] },
        { label: "Design system & komponen", values: [false, true, true] },
        { label: "Pembayaran & in-app purchase", values: [false, true, true] },
        { label: "Notifikasi push", values: [false, true, true] },
        { label: "Sinkronisasi offline", values: [false, true, true] },
        { label: "Integrasi fitur AI", values: ["Add-on", "Add-on", true] },
        { label: "Modul native & integrasi mendalam", values: [false, false, true] },
        { label: "Submit & rilis ke store", values: [false, true, true] },
        { label: "Review keamanan & kepatuhan", values: [false, false, true] },
        { label: "Revisi", values: ["2 putaran", "4 putaran", "Tanpa batas"] },
        { label: "Durasi pengerjaan", values: ["4–6 minggu", "8–12 minggu", "Custom"] },
        { label: "Dukungan setelah peluncuran", values: ["14 hari", "30 hari", "SLA + retainer"] },
      ],
      addons: [
        { name: "Platform tambahan", description: "Tambahkan versi web atau sistem operasi mobile kedua ke proyek Anda." },
        { name: "Backend & API khusus", description: "Backend, database, dan panel admin tersendiri." },
        { name: "Integrasi fitur AI", description: "Fitur AI on-device maupun cloud yang memberikan manfaat nyata." },
        { name: "Setup notifikasi push & CRM", description: "Layanan notifikasi dan tools kampanye lifecycle." },
        { name: "Analitik produk", description: "Event tracking, funnel, dan dasbor real-time." },
        { name: "Real-time & chat", description: "Pesan dalam aplikasi, status online, dan sinkronisasi data real-time." },
        { name: "Lokalisasi aplikasi", description: "Dukungan multibahasa dengan konten dan format yang disesuaikan per wilayah." },
        { name: "Paket pemeliharaan", description: "Pembaruan di store, monitoring, dan perbaikan bug setiap bulan." },
        { name: "Pengerjaan ekspres", description: "Penjadwalan prioritas untuk peluncuran yang lebih cepat." },
      ],
    },
    compareTitle: "Perbandingan paket secara detail",
    featureLabel: "Fitur",
    addonsTitle: "Add-on & layanan tambahan",
    addonsSubtitle: "Pilih sesuai kebutuhan Anda — harga transparan sejak awal, tanpa biaya tersembunyi.",
    addonsFrom: "mulai",
    addonsDisclaimer:
      "Integrasi fitur AI ditentukan per kasus — hanya kami rekomendasikan untuk produk yang benar-benar membutuhkannya, dan akan kami konfirmasi bersama saat sesi konsultasi.",
    perMonth: "/bln",
    pricingFaqTitle: "Pertanyaan seputar harga",
    pricingFaq: [
      {
        q: "Bagaimana skema pembayarannya?",
        a: "Pembayaran proyek dilakukan secara bertahap: 50% di awal, 30% di pertengahan pengerjaan, dan 20% sebelum peluncuran. Retainer bulanan ditagihkan di awal setiap periode.",
      },
      {
        q: "Siapa pemilik kode dan file desain?",
        a: "Sepenuhnya milik Anda. Setelah pelunasan, Anda menerima seluruh source code, file desain, dan aset — tanpa lock-in dan tanpa biaya lisensi.",
      },
      {
        q: "Apa yang dimaksud dengan satu putaran revisi?",
        a: "Satu putaran revisi adalah satu kumpulan masukan yang dikonsolidasikan untuk milestone yang telah diserahkan. Paket Starter mencakup 2 putaran, Professional 4 putaran, dan Enterprise tanpa batas dalam lingkup sprint.",
      },
      {
        q: "Apakah harganya bersifat tetap?",
        a: "Harga setiap paket merupakan titik awal untuk lingkup tertentu. Setelah sesi konsultasi singkat, kami akan mengirimkan penawaran harga tetap — nilai yang Anda setujui adalah nilai yang Anda bayarkan.",
      },
      {
        q: "Apakah harga sudah termasuk pajak?",
        a: "Harga dalam IDR belum termasuk PPN 11%, sedangkan harga dalam USD bersifat net. Pajak yang berlaku akan dicantumkan secara jelas pada invoice.",
      },
      {
        q: "Bagaimana setelah produk diluncurkan?",
        a: "Setiap paket sudah mencakup masa dukungan. Setelah masa tersebut berakhir, Anda dapat melanjutkan dengan paket pemeliharaan bulanan untuk hosting, pembaruan, monitoring, dan pengembangan fitur baru.",
      },
    ],
    engageEyebrow: "Alur kerja sama",
    engageTitle: "Dari diskusi pertama hingga peluncuran",
    engageSteps: [
      { title: "Sesi konsultasi", description: "Konsultasi gratis selama 30 menit untuk memahami tujuan, lingkup, dan jadwal Anda." },
      { title: "Proposal & penawaran", description: "Proposal dengan lingkup tetap, lengkap dengan harga, jadwal, dan deliverable yang jelas." },
      { title: "Desain & pengembangan", description: "Kami bekerja dalam sprint mingguan sehingga Anda dapat melihat progres nyata di setiap tahap." },
      { title: "Peluncuran & dukungan", description: "Kami meluncurkan produk, menyerahkan kepemilikan penuh, dan tetap mendampingi Anda setelah peluncuran." },
    ],
    guarantees: [
      { title: "Tepat waktu", description: "Jadwal yang kami sepakati secara tertulis adalah komitmen yang kami tepati." },
      { title: "Kepemilikan kode penuh", description: "Seluruh kode dan file desain menjadi milik Anda setelah pelunasan." },
      { title: "Dukungan setelah peluncuran", description: "Setiap paket mencakup masa dukungan setelah produk Anda live." },
    ],
    teaser: {
      eyebrow: "Harga",
      title: "Harga yang transparan untuk web dan aplikasi",
      description:
        "Titik awal yang jelas untuk produk web dan mobile. Lihat detail setiap paket dan temukan yang paling sesuai.",
      webLabel: "Pengembangan web",
      appLabel: "Pengembangan aplikasi",
      fromLabel: "mulai",
      cta: "Lihat detail harga",
    },
  },
  estimator: {
    eyebrow: "Estimasi biaya",
    title: "Perkirakan biaya proyek dalam 30 detik",
    description:
      "Sesuaikan kebutuhan Anda dan lihat estimasinya secara langsung. Penawaran final tetap kami susun setelah diskusi bersama Anda.",
    sizeLabel: { web: "Jumlah halaman", app: "Layar utama" },
    addonsLabel: "Add-on",
    timelineLabel: "Jadwal",
    timelineStandard: "Standar",
    timelineRush: "Ekspres",
    estimateLabel: "Estimasi investasi",
    startingSuffix: "mulai dari",
    baseLine: "Pengembangan dasar",
    addonsLine: "Add-on",
    rushLine: "Pengerjaan ekspres",
    monthlyLine: "Paket pemeliharaan (bulanan)",
    disclaimer:
      "Angka ini merupakan estimasi, bukan penawaran resmi. Lingkup proyek akan kami pastikan bersama dalam sesi konsultasi gratis.",
    ctaCall: "Jadwalkan konsultasi",
    ctaContact: "Kirim detail proyek",
  },
  faq: {
    eyebrow: "FAQ",
    titleLine1: "Pertanyaan",
    titleLine2: "yang sering diajukan",
    subPrefix: "Tidak menemukan jawaban yang Anda cari?",
    subLink: "Hubungi kami",
    subSuffix: "dan tim kami akan merespons dalam satu hari kerja.",
    items: [
      {
        q: "Berapa lama durasi pengerjaan sebuah proyek?",
        a: "Sebagian besar MVP selesai dalam 4–8 minggu. Platform yang lebih besar membutuhkan 3–4 bulan, dengan rilis bertahap setiap minggu sehingga Anda dapat memantau progres. Jadwal pasti akan kami sampaikan setelah tahap discovery.",
      },
      {
        q: "Bagaimana sistem harga yang diterapkan?",
        a: "Kami menawarkan proyek dengan lingkup dan harga tetap, maupun retainer bulanan. Paket yang tercantum merupakan titik awal — setelah sesi konsultasi singkat, kami akan menyusun penawaran sesuai lingkup dan anggaran Anda.",
      },
      {
        q: "Apakah Callum C menangani startup tahap awal?",
        a: "Tentu. Sebagian besar proyek kami adalah membantu founder mewujudkan ide menjadi MVP berkualitas produksi yang siap untuk pendanaan — dengan cepat, tanpa mengorbankan kualitas.",
      },
      {
        q: "Siapa pemilik kode dan desainnya?",
        a: "Anda. Setelah pelunasan, Anda memiliki hak penuh atas seluruh source code, file desain, dan aset. Tanpa lock-in, tanpa biaya tersembunyi.",
      },
      {
        q: "Teknologi apa yang digunakan?",
        a: "Kami menggunakan Next.js, React, TypeScript, Go, Rust, Laravel, React Native, dan infrastruktur cloud modern (PostgreSQL, Redis, Docker, Kubernetes, AWS, Google Cloud, Vercel) — dipilih agar produk mudah dipelihara dan dikembangkan oleh tim internal Anda.",
      },
      {
        q: "Apakah Callum C dapat bekerja sama dengan tim internal kami?",
        a: "Bisa. Kami dapat bergabung dengan desainer dan engineer Anda, mengisi kebutuhan keahlian tertentu, atau menangani pengembangan secara menyeluruh — sesuai pendekatan yang paling efektif untuk mencapai target Anda.",
      },
      {
        q: "Bagaimana setelah produk diluncurkan?",
        a: "Kami menyediakan paket dukungan dan iterasi berkelanjutan untuk pemeliharaan, fitur baru, dan peningkatan performa. Banyak klien memilih kami sebagai mitra produk jangka panjang.",
      },
      {
        q: "Bagaimana cara memulai?",
        a: "Kirimkan pesan melalui formulir kontak di bawah. Kami akan merespons dalam satu hari kerja dan menjadwalkan sesi konsultasi gratis selama 30 menit.",
      },
    ],
  },
  contact: {
    badge: "Mari berkolaborasi",
    title: "Ceritakan proyek Anda",
    subtitle:
      "Jadwalkan sesi konsultasi gratis selama 30 menit. Kami akan merespons dalam satu hari kerja dengan langkah selanjutnya yang jelas — tanpa tekanan, tanpa istilah yang membingungkan.",
    detailEmail: "Email",
    detailPhone: "Telepon",
    detailLocation: "Lokasi",
    chipReply: "Respons dalam 1 hari kerja",
    chipPrivate: "Data Anda terjaga kerahasiaannya",
    name: "Nama",
    namePlaceholder: "Nama lengkap",
    email: "Email",
    emailPlaceholder: "nama@perusahaan.com",
    company: "Perusahaan",
    companyPlaceholder: "PT Contoh Indonesia",
    budget: "Anggaran",
    budgetPlaceholder: "Pilih rentang anggaran",
    message: "Detail proyek",
    messagePlaceholder: "Produk apa yang ingin Anda bangun, dan apa target yang ingin dicapai?",
    optional: "Opsional",
    submit: "Kirim pesan",
    submitting: "Mengirim…",
    consent: "Dengan mengirim formulir ini, Anda bersedia dihubungi terkait pertanyaan Anda.",
    nameRequired: "Mohon isi nama Anda.",
    emailRequired: "Mohon isi alamat email Anda.",
    emailInvalid: "Mohon masukkan alamat email yang valid.",
    messageRequired: "Mohon ceritakan sedikit tentang proyek Anda.",
    messageMin: "Mohon jelaskan lebih detail (minimal 10 karakter).",
    success: "Pesan berhasil terkirim. Kami akan merespons dalam satu hari kerja.",
    error: "Terjadi kendala saat mengirim pesan. Silakan coba lagi atau hubungi kami langsung melalui email.",
    bookTitle: "Ingin berdiskusi langsung?",
    bookDesc: "Pilih jadwal konsultasi gratis selama 30 menit yang sesuai dengan kalender Anda.",
    bookCta: "Jadwalkan konsultasi",
  },
  notFound: {
    quip: "$ callumc resolve /halaman-ini — Error: route not found",
    title: "Halaman tidak ditemukan",
    description:
      "Halaman yang Anda cari tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda.",
    ctaHome: "Kembali ke beranda",
    ctaContact: "Hubungi kami",
  },
  legal: {
    eyebrow: "Legal",
    updatedLabel: "Terakhir diperbarui",
    updatedDate: "27 Juli 2026",
    contactLine: "Ada pertanyaan mengenai kebijakan ini? Hubungi kami di",
    backHome: "Kembali ke beranda",
    privacy: {
      title: "Kebijakan Privasi",
      intro:
        "Kebijakan ini menjelaskan data apa saja yang kami kumpulkan saat Anda menggunakan situs ini atau menghubungi kami, tujuan penggunaannya, serta hak-hak Anda. Singkatnya: kami hanya mengumpulkan data seperlunya dan tidak pernah menjualnya.",
      sections: [
        {
          h: "Data yang kami kumpulkan",
          body: "Saat Anda mengirim formulir kontak, kami menerima data yang Anda isi: nama, email, perusahaan, rentang anggaran, dan pesan. Situs ini juga menyimpan preferensi bahasa dan mata uang di local storage browser Anda — data tersebut tidak pernah keluar dari perangkat Anda.",
        },
        {
          h: "Penggunaan data",
          body: "Data kontak hanya digunakan untuk menanggapi pertanyaan Anda dan menjalankan proyek yang telah disepakati bersama. Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk keperluan pemasaran.",
        },
        {
          h: "Dasar hukum",
          body: "Kami memproses data Anda berdasarkan persetujuan Anda (saat mengirim formulir) dan, apabila berlanjut ke proyek, berdasarkan pelaksanaan kontrak dengan Anda.",
        },
        {
          h: "Penyimpanan data",
          body: "Data pertanyaan disimpan selama diperlukan untuk menangani permintaan Anda, serta untuk jangka waktu yang wajar setelahnya sebagai arsip bisnis. Anda dapat meminta penghapusan data kapan saja.",
        },
        {
          h: "Hak Anda",
          body: "Anda berhak meminta akses, koreksi, atau penghapusan data pribadi Anda, serta menarik persetujuan kapan saja melalui email. Kami akan merespons dalam satu hari kerja.",
        },
        {
          h: "Perubahan kebijakan",
          body: "Apabila kebijakan ini berubah, versi terbaru akan dipublikasikan di halaman ini beserta tanggal pembaruannya. Perubahan penting akan dijelaskan dengan bahasa yang mudah dipahami.",
        },
      ],
    },
    terms: {
      title: "Syarat & Ketentuan",
      intro:
        "Ketentuan ini mengatur penggunaan situs ini serta gambaran umum kerja sama dengan kami. Ketentuan khusus setiap proyek selalu tercantum dalam proposal yang Anda setujui.",
      sections: [
        {
          h: "Penggunaan situs",
          body: "Konten di situs ini disediakan sebagai informasi umum mengenai layanan kami. Anda tidak diperkenankan menyalin, mengambil secara otomatis (scraping), atau mengklaim konten tersebut sebagai milik Anda.",
        },
        {
          h: "Penawaran & proposal",
          body: "Harga yang tercantum di situs ini merupakan titik awal, bukan penawaran yang mengikat. Lingkup, harga, dan jadwal yang mengikat hanya ditetapkan melalui proposal tertulis yang telah Anda setujui.",
        },
        {
          h: "Pembayaran",
          body: "Pembayaran proyek dilakukan secara bertahap — umumnya 50% di awal, 30% di pertengahan pengerjaan, dan 20% sebelum peluncuran — kecuali dinyatakan lain dalam proposal.",
        },
        {
          h: "Hak kekayaan intelektual",
          body: "Setelah pelunasan, Anda memiliki source code, file desain, dan aset yang diserahkan untuk proyek Anda. Kami tetap berhak menampilkan hasil karya tersebut dalam portofolio, kecuali disepakati lain.",
        },
        {
          h: "Batasan tanggung jawab",
          body: "Kami bekerja secara profesional dan penuh kehati-hatian, namun situs ini beserta estimasinya disediakan sebagaimana adanya. Total tanggung jawab kami atas setiap kerja sama terbatas pada biaya yang dibayarkan untuk kerja sama tersebut.",
        },
        {
          h: "Hukum yang berlaku",
          body: "Ketentuan ini tunduk pada hukum Republik Indonesia. Setiap perselisihan akan diupayakan penyelesaiannya terlebih dahulu secara musyawarah dengan itikad baik.",
        },
      ],
    },
    cookies: {
      title: "Kebijakan Cookie",
      intro:
        "Singkatnya: situs ini tidak menggunakan cookie pelacak. Berikut rincian data yang disimpan di browser Anda beserta tujuannya.",
      sections: [
        {
          h: "Data yang kami simpan",
          body: "Dua nilai kecil di local storage browser Anda: pilihan bahasa (Inggris atau Indonesia) dan pilihan mata uang (USD atau IDR), ditambah preferensi tema yang dikelola oleh browser Anda.",
        },
        {
          h: "Yang tidak kami lakukan",
          body: "Kami tidak menggunakan cookie iklan, pelacak lintas situs, fingerprinting, maupun skrip analitik pihak ketiga yang memantau aktivitas Anda di internet.",
        },
        {
          h: "Mengelola data tersimpan",
          body: "Anda dapat menghapus data ini kapan saja melalui pengaturan data situs di browser. Situs tetap berfungsi normal — hanya preferensi Anda yang akan kembali ke pengaturan awal.",
        },
        {
          h: "Perubahan di masa mendatang",
          body: "Apabila kami menambahkan analitik di kemudian hari, kami akan memilih solusi yang menghormati privasi, mengumumkannya terlebih dahulu di halaman ini, dan memastikan datanya tetap anonim.",
        },
      ],
    },
  },
  about: {
    eyebrow: "Tentang Callum C",
    heroLead: "Studio yang baru berdiri, dengan komitmen yang tak berubah:",
    heroHighlight: "kualitas karya",
    heroTrail: ".",
    heroSubtitle:
      "Perjalanan kami baru dimulai. Tanpa angka yang dilebih-lebihkan dan tanpa klaim klien yang bukan milik kami — hanya tim senior, sudut pandang yang tajam, dan hasil kerja yang kami pertanggungjawabkan.",
    marquee: [
      "Standar tinggi di setiap rilis",
      "Hitungan minggu, bukan kuartal",
      "Engineering berbasis desain",
      "Komitmen setara founder",
      "Transparansi penuh",
    ],
    storyLabels: ["Latar belakang", "Membangun", "Komitmen"],
    storyEyebrow: "Cerita kami",
    storyTitle: "Mengapa Callum C hadir",
    storyParagraphs: [
      "Callum C berdiri pada 2026 berangkat dari satu permasalahan: banyak produk hebat gagal di tengah proses serah terima antara konsultan strategi, agensi desain, dan vendor pengembang. Kami melihatnya secara langsung — dan yakin bahwa tim yang ramping, senior, dan menangani semuanya dari hulu ke hilir dapat memberikan hasil yang lebih baik.",
      "Karena itu, kami membangun studio yang sejak dulu ingin kami gunakan sendiri. Desainer dan engineer dalam satu tim, demo mingguan alih-alih laporan status, dan satu prinsip yang selalu kami pegang: tidak pernah merilis produk dengan kualitas seadanya.",
      "Kami sengaja menjaga tim tetap ramping. Dengan begitu, setiap proyek mendapat perhatian penuh setara founder — dan setiap klien turut membentuk arah perkembangan studio ini.",
    ],
    missionTitle: "Misi",
    missionText:
      "Menghadirkan desain dan engineering produk berstandar internasional yang dapat dijangkau oleh tim ambisius dari berbagai skala — dari founder tahap awal hingga enterprise.",
    visionTitle: "Visi",
    visionText:
      "Menjadi studio produk paling tepercaya di Asia Tenggara — dikenal secara global melalui produk digital yang unggul dan berdampak.",
    valuesEyebrow: "Prinsip kami",
    valuesTitle: "Nilai yang kami terapkan setiap hari",
    valuesDescription:
      "Bukan sekadar slogan — inilah prinsip yang mendasari setiap keputusan kami, setiap minggunya.",
    values: [
      {
        title: "Kualitas di atas kuantitas",
        description:
          "Kami membatasi jumlah proyek agar setiap proyek dikerjakan secara mendalam. Kualitas akan terus berkembang; volume justru mengencerkannya.",
      },
      {
        title: "Cepat dan terarah",
        description:
          "Rilis dalam hitungan minggu, bukan kuartal — tanpa mengorbankan kualitas atau menumpuk utang teknis.",
      },
      {
        title: "Transparansi penuh",
        description:
          "Preview langsung, demo mingguan, dan estimasi yang jujur. Anda selalu mengetahui progres pekerjaan secara pasti.",
      },
      {
        title: "Bertanggung jawab atas hasil",
        description:
          "Kami berpikir layaknya founder, bukan vendor. Jika sesuatu tidak mendukung kemajuan produk Anda, kami akan menyampaikannya secara terbuka.",
      },
    ],
    roadmapEyebrow: "Rencana ke depan",
    roadmapTitle: "Langkah kami selanjutnya",
    roadmapDescription:
      "Kami lebih memilih menunjukkan rencana yang nyata daripada klaim pencapaian yang dibesar-besarkan. Inilah yang sedang kami kerjakan.",
    roadmap: [
      {
        status: "Saat ini",
        period: "2026",
        title: "Peluncuran studio",
        description:
          "Tim inti terbentuk, brand resmi diluncurkan, dan proyek klien pertama mulai berjalan.",
      },
      {
        status: "Berikutnya",
        period: "2026 · Q4",
        title: "Sepuluh peluncuran pertama",
        description:
          "Meluncurkan sepuluh produk secara menyeluruh dan mempublikasikan studi kasus yang transparan untuk setiap proyek.",
      },
      {
        status: "Mendatang",
        period: "2027",
        title: "Product lab",
        description:
          "Menginvestasikan kembali keuntungan studio ke produk SaaS kami sendiri — dikembangkan dengan standar kualitas yang sama dengan yang kami tawarkan kepada klien.",
      },
      {
        status: "Mendatang",
        period: "2028",
        title: "Tim senior regional",
        description:
          "Tim senior yang tersebar di Asia Tenggara, melayani klien dari seluruh dunia.",
      },
    ],
    teamEyebrow: "Tim kami",
    teamTitle: "Tim ramping, senior sejak awal",
    teamDescription:
      "Orang yang membalas email Anda adalah orang yang sama yang merancang dan membangun produk Anda.",
    team: [
      {
        name: "Muhammad Caesar Rifqi",
        role: "Founder & CTO",
        bio: "Engineer yang memimpin arsitektur, kualitas kode, dan delivery. Meyakini bahwa keandalan adalah keputusan desain sejak awal, bukan tambahan di akhir.",
        tags: ["Front End", "Backend", "Infrastruktur"],
      },
      {
        name: "Gerrard Setiawan",
        role: "Co-Founder & Creative Director",
        bio: "Memimpin brand, antarmuka, dan motion design. Meyakini bahwa detail terkecil yang membuat sebuah produk benar-benar berkesan.",
        tags: ["Brand", "UI/UX", "Motion", "Design system"],
      },
    ],
    ctaTitle: "Mari tumbuh bersama kami",
    ctaDesc:
      "Baik Anda founder dengan ide baru maupun investor yang percaya pada talenta produk di kawasan ini — kami siap berdiskusi.",
    ctaButton: "Hubungi kami",
  },
  footer: {
    description:
      "Callum C adalah studio produk yang merancang dan membangun aplikasi web, aplikasi mobile, dan platform SaaS yang cepat dan andal untuk startup maupun perusahaan — dari MVP hingga skala besar.",
    colCompany: "Perusahaan",
    colResources: "Informasi",
    colLegal: "Legal",
    linkWhy: "Mengapa kami",
    linkTestimonials: "Testimoni",
    linkContact: "Kontak",
    linkPrivacy: "Privasi",
    linkTerms: "Syarat & Ketentuan",
    linkCookies: "Cookie",
    rights: "Hak cipta dilindungi undang-undang.",
    cta: "Mulai proyek",
  },
};

export const dictionaries = { en, id };
export type Locale = keyof typeof dictionaries;
