import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Cara kerja situs ini dan kerja sama dengan kami.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage page="terms" />;
}
