/**
 * Central site configuration — brand, contact, navigation, socials.
 * Swap these placeholder values to rebrand the whole site from one file.
 */

export const siteConfig = {
  name: "Craftbyte",
  legalName: "Craftbyte Studio",
  tagline: "We design & engineer premium digital products.",
  description:
    "Craftbyte is a product studio that designs and builds fast, beautiful web apps, mobile apps, and SaaS platforms for startups and enterprises — from MVP to scale.",
  // Override in production with NEXT_PUBLIC_SITE_URL
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://craftbyte.studio",
  ogImage: "/opengraph-image",
  locale: "en_US",
  email: "hello@craftbyte.studio",
  phone: "+62 812 3456 7890",
  /** Discovery-call scheduling link (cal.com / calendly). */
  bookingUrl: "https://cal.com/craftbyte/discovery",
  location: "Jakarta, Indonesia · Remote worldwide",
  foundedYear: 2024,
  socials: {
    x: "https://x.com/craftbyte",
    github: "https://github.com/craftbyte",
    linkedin: "https://www.linkedin.com/company/craftbyte",
    dribbble: "https://dribbble.com/craftbyte",
    instagram: "https://instagram.com/craftbyte",
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
