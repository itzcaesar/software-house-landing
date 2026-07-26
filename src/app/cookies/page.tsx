import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Exactly what this site stores in your browser, and why.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return <LegalPage page="cookies" />;
}
