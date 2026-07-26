import type { Metadata } from "next";
import { PricingBoard } from "@/components/sections/pricing-board";
import { FaqJsonLd } from "@/components/seo/structured-data";
import { en } from "@/lib/dictionaries";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for web and app development — from marketing sites and SaaS platforms to native iOS and Android apps. Clear starting points, tailored to your scope.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Web & App Development",
    description:
      "Transparent starting points for web and mobile builds. Switch between web and app development plans, in IDR or USD.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <FaqJsonLd id="pricing-faq" items={en.pricing.pricingFaq} />
      <PricingBoard />
    </>
  );
}
