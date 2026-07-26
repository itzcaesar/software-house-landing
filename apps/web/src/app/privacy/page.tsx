import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What we collect, why, and the choices you have.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage page="privacy" />;
}
