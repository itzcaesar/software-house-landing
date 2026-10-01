import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Data apa yang kami kumpulkan, untuk apa, dan pilihan yang Anda miliki.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage page="privacy" />;
}
