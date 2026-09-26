/**
 * Central site configuration — brand, contact, navigation, socials.
 * Swap these placeholder values to rebrand the whole site from one file.
 */

export const siteConfig = {
  name: "Callum C",
  legalName: "Callum C",
  tagline: "We design & engineer premium digital products.",
  description:
    "Callum C is a product studio that designs and builds fast, beautiful web apps, mobile apps, and SaaS platforms for startups and enterprises — from MVP to scale.",
  // Override in production with NEXT_PUBLIC_SITE_URL
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://callumc.id",
  ogImage: "/opengraph-image",
  locale: "en_US",
  email: "callumc@callumc.id",
  phone: "+62 812 3456 7890",
  /** Discovery-call scheduling link (cal.com / calendly). */
  bookingUrl: "https://cal.com/callumc/discovery",
  location: "Jakarta, Indonesia · Remote worldwide",
  foundedYear: 2024,
  socials: {
    x: "https://x.com/callumc",
    github: "https://github.com/callumc",
    linkedin: "https://www.linkedin.com/company/callumc",
    dribbble: "https://dribbble.com/callumc",
    instagram: "https://instagram.com/callumc",
  },
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Company",
    links: [
      { label: "Services", href: "#services" },
      { label: "Why us", href: "#why-us" },
      { label: "Process", href: "#process" },
      { label: "Work", href: "#portfolio" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];
