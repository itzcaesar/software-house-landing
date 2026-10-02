import {
  Code2,
  PenTool,
  Sparkles,
  LayoutDashboard,
  BrainCircuit,
  Scissors,
  ShoppingBag,
  GraduationCap,
  Building2,
  Rocket,
  Handshake,
  Layers,
  Wallet,
  Palette,
  Users,
  MessagesSquare,
  ListChecks,
  LifeBuoy,
  Smartphone,
  CalendarCheck,
  Store,
  Bot,
  Calculator,
  Server,
  type LucideIcon,
} from "lucide-react";

/**
 * Structural (non-translatable) content: icons, gradients, tech tags, brand
 * names, numeric values. All human copy lives in the locale dictionaries and
 * is zipped with these arrays by index. See `@/lib/dictionaries`.
 */

export const trustedLogos: string[] = [
  "Northwind",
  "Lumen",
  "Vertex",
  "Cobalt",
  "Meridian",
  "Halcyon",
  "Everest",
  "Arclight",
];

/** /services catalogue, zipped with `servicePage.items` by index. */
export const serviceMeta: { icon: LucideIcon; tags: string[] }[] = [
  { icon: Code2, tags: ["Next.js", "React", "Vue", "Vite", "TypeScript", "Tailwind CSS", "Laravel", "Blade", "PHP", "Node.js", "Go", "Rust", "GraphQL"] },
  { icon: Smartphone, tags: ["React Native", "Flutter", "Expo", "Swift", "Kotlin", "Firebase"] },
  { icon: PenTool, tags: ["Figma", "Prototyping", "Design systems"] },
  { icon: Sparkles, tags: ["Identity", "Guidelines", "Motion"] },
  { icon: LayoutDashboard, tags: ["Go", "Rust", "PostgreSQL", "Redis", "Stripe", "Docker", "Kubernetes", "AWS"] },
  { icon: BrainCircuit, tags: ["LLMs", "RAG", "Agents", "Python", "Go", "Rust"] },
  { icon: Rocket, tags: ["0→1", "Rapid build", "Validation", "Supabase", "Firebase", "Vercel"] },
];

/** Tech stack marquee on /services. */
export const techStack: string[] = [
  "Next.js", "React", "TypeScript", "Laravel", "Go", "Rust", "Node.js", "Python", "GraphQL",
  "React Native", "Flutter", "Tailwind CSS", "PostgreSQL", "MongoDB", "Redis", "Supabase",
  "Firebase", "Docker", "Kubernetes", "Terraform", "Vercel", "AWS", "Google Cloud",
];

/** Audience cards ("Siapa yang cocok"), zipped with `services.items` by index. */
export const audienceMeta: { icon: LucideIcon; live: boolean }[] = [
  { icon: Scissors, live: false },
  { icon: ShoppingBag, live: false },
  { icon: GraduationCap, live: false },
  { icon: Building2, live: false },
  { icon: Rocket, live: true },
  { icon: Handshake, live: false },
];

export const benefitMeta: { icon: LucideIcon }[] = [
  { icon: Layers },
  { icon: Wallet },
  { icon: Palette },
  { icon: Users },
];

export const processMeta: { icon: LucideIcon; step: string }[] = [
  { icon: MessagesSquare, step: "01" },
  { icon: ListChecks, step: "02" },
  { icon: Rocket, step: "03" },
  { icon: LifeBuoy, step: "04" },
];

/** Niche families, zipped with `niches.families` by index. All coming soon until the owner says otherwise. */
export type NichePreview = "hero" | "grid" | "calendar" | "list" | "chat";

export const nicheMeta: { icon: LucideIcon; preview: NichePreview }[] = [
  { icon: Building2, preview: "hero" },
  { icon: ShoppingBag, preview: "grid" },
  { icon: Smartphone, preview: "grid" },
  { icon: CalendarCheck, preview: "calendar" },
  { icon: GraduationCap, preview: "list" },
  { icon: Store, preview: "grid" },
  { icon: Bot, preview: "chat" },
  { icon: Calculator, preview: "list" },
  { icon: Server, preview: "list" },
];

/** Brand colors for known tech tags — rendered as a dot inside tag chips. */
const techColors: Record<string, string> = {
  "Next.js": "#888888",
  React: "#61dafb",
  Vue: "#42b883",
  Vite: "#a656f5",
  Laravel: "#ff2d20",
  Blade: "#f05340",
  TypeScript: "#3178c6",
  PHP: "#777bb4",
  "React Native": "#61dafb",
  Flutter: "#45d1fd",
  Expo: "#888888",
  Swift: "#f05138",
  Kotlin: "#7f52ff",
  Figma: "#a259ff",
  Stripe: "#635bff",
  PostgreSQL: "#336791",
  Go: "#00add8",
  Python: "#3776ab",
  Rust: "#dea584",
  GraphQL: "#e10098",
  MongoDB: "#47a248",
  Supabase: "#3ecf8e",
  Firebase: "#ffca28",
  Kubernetes: "#326ce5",
  Terraform: "#7b42bc",
  "Google Cloud": "#4285f4",
  "Node.js": "#5fa04e",
  "Tailwind CSS": "#38bdf8",
  Redis: "#dc382d",
  Docker: "#2496ed",
  Vercel: "#888888",
  AWS: "#ff9900",
  Charts: "#22c55e",
  Maps: "#34a853",
  AI: "#a656f5",
  Headless: "#f472b6",
  Edge: "#38bdf8",
  Payments: "#635bff",
  Web: "#38bdf8",
  HIPAA: "#22c55e",
};

/** Dot color for a tag chip; unknown tags fall back to the brand accent. */
export function techColor(tag: string): string {
  return techColors[tag] ?? "var(--brand)";
}

/**
 * Portfolio + /work case studies are sample content, not real clients.
 * Keep off until real, approved projects replace projectMeta. [ISI: portofolio asli]
 */
export const SHOW_PORTFOLIO = false;

export const projectMeta: {
  slug: string;
  title: string;
  tags: string[];
  gradient: string;
  year: string;
  timeline: string;
}[] = [
  { slug: "fintrail", title: "Fintrail", tags: ["Next.js", "Stripe", "Charts"], gradient: "from-blue-600 via-blue-500 to-cyan-500", year: "2026", timeline: "8 weeks" },
  { slug: "nomad-os", title: "Nomad OS", tags: ["React Native", "Maps", "AI"], gradient: "from-sky-500 via-cyan-500 to-blue-500", year: "2026", timeline: "10 weeks" },
  { slug: "atlas-health", title: "Atlas Health", tags: ["Web", "HIPAA", "Design system"], gradient: "from-cyan-500 via-sky-500 to-blue-600", year: "2026", timeline: "12 weeks" },
  { slug: "lumen-ai", title: "Lumen AI", tags: ["LLMs", "RAG", "Agents"], gradient: "from-indigo-500 via-blue-600 to-blue-500", year: "2026", timeline: "9 weeks" },
  { slug: "cobalt-commerce", title: "Cobalt Commerce", tags: ["Headless", "Edge", "Payments"], gradient: "from-blue-600 via-indigo-500 to-blue-700", year: "2026", timeline: "7 weeks" },
  { slug: "vertex-studio", title: "Vertex Studio", tags: ["Branding", "Motion", "CMS"], gradient: "from-sky-600 via-blue-500 to-indigo-500", year: "2026", timeline: "6 weeks" },
];

export const testimonialMeta: { name: string; company: string; initials: string }[] = [
  { name: "Amara Wijaya", company: "Fintrail", initials: "AW" },
  { name: "Daniel Reyes", company: "Nomad OS", initials: "DR" },
  { name: "Sarah Chen", company: "Atlas Health", initials: "SC" },
  { name: "Marcus Bauer", company: "Lumen AI", initials: "MB" },
  { name: "Priya Nair", company: "Cobalt Commerce", initials: "PN" },
  { name: "Tom Fischer", company: "Vertex Studio", initials: "TF" },
];
