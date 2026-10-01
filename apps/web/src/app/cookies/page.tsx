import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal";

export const metadata: Metadata = {
  title: "Kebijakan Cookie",
  description: "Apa saja yang disimpan situs ini di browser Anda, dan alasannya.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return <LegalPage page="cookies" />;
}
