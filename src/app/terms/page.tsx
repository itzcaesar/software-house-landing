import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "How this site and our engagements work.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage page="terms" />;
}
