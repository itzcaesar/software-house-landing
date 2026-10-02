/**
 * Central site configuration — brand, contact, socials.
 * Swap these values to rebrand the whole site from one file.
 */

export const siteConfig = {
  name: "Callum C",
  legalName: "Callum C",
  /** Other spellings people search for; used as schema.org alternateName (Google site name). */
  alternateNames: ["CallumC", "callumc", "callumc.id"],
  tagline: "Jasa Website & Software Kustom untuk Bisnis",
  description:
    "Jasa pembuatan website dan software kustom untuk bisnis, mulai Rp 15 juta. Template siap pakai per niche segera hadir. Konsultasi gratis via WhatsApp.",
  // Override in production with NEXT_PUBLIC_SITE_URL
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://callumc.id",
  ogImage: "/opengraph-image",
  locale: "id_ID",
  email: "callumc@callumc.id",
  /** WhatsApp number, digits only with country code (e.g. 62812…). Empty = CTAs fall back to the contact form. */
  whatsapp: "" as string, // [ISI: nomor WhatsApp asli]
  /** Discovery-call scheduling link (cal.com / calendly). Empty = booking card hidden. */
  bookingUrl: "", // [ISI: link booking asli]
  location: "Jakarta, Indonesia",
  /** Empty = icon hidden. [ISI: akun sosial asli] */
  socials: {
    x: "",
    github: "",
    linkedin: "",
    dribbble: "",
    instagram: "",
  } as Record<"x" | "github" | "linkedin" | "dribbble" | "instagram", string>,
} as const;

/** WhatsApp click-to-chat link with a prefilled message; the contact form until a number is set. */
export function waLink(text: string): string {
  return siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`
    : "/#contact";
}
