import {
  Code2,
  Smartphone,
  PenTool,
  Sparkles,
  LayoutDashboard,
  BrainCircuit,
  Rocket,
  Gauge,
  ShieldCheck,
  Users,
  MessagesSquare,
  Layers,
  Search,
  Palette,
  Hammer,
  FlaskConical,
  Send,
  LifeBuoy,
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

export const statMeta: { value: string }[] = [
  { value: "40+" },
  { value: "4.9/5" },
  { value: "12" },
  { value: "98%" },
];

export const serviceMeta: { icon: LucideIcon; tags: string[] }[] = [
  { icon: Code2, tags: ["Next.js", "React", "Vue", "Vite", "TypeScript", "Tailwind CSS", "Laravel", "Blade", "PHP", "Node.js", "Go", "Rust", "GraphQL"] },
  { icon: Smartphone, tags: ["React Native", "Flutter", "Expo", "Swift", "Kotlin", "Firebase"] },
  { icon: PenTool, tags: ["Figma", "Prototyping", "Design systems"] },
  { icon: Sparkles, tags: ["Identity", "Guidelines", "Motion"] },
  { icon: LayoutDashboard, tags: ["Go", "Rust", "PostgreSQL", "Redis", "Stripe", "Docker", "Kubernetes", "AWS"] },
  { icon: BrainCircuit, tags: ["LLMs", "RAG", "Agents", "Python", "Go", "Rust"] },
  { icon: Rocket, tags: ["0→1", "Rapid build", "Validation", "Supabase", "Firebase", "Vercel"] },
];

export const benefitMeta: { icon: LucideIcon }[] = [
  { icon: Gauge },
  { icon: Palette },
  { icon: Users },
  { icon: ShieldCheck },
  { icon: MessagesSquare },
  { icon: Layers },
];

export const processMeta: { icon: LucideIcon; step: string }[] = [
  { icon: Search, step: "01" },
  { icon: Palette, step: "02" },
  { icon: Hammer, step: "03" },
  { icon: FlaskConical, step: "04" },
  { icon: Send, step: "05" },
  { icon: LifeBuoy, step: "06" },
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
