import type { Metadata } from "next";
import { ServiceCatalog } from "@/components/sections/service-catalog";
import { BreadcrumbJsonLd } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Layanan Pembuatan Website, Aplikasi & Software",
  description:
    "Pengembangan web, aplikasi mobile, desain UI/UX, branding, SaaS, integrasi AI, dan MVP, beserta teknologi yang kami gunakan.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Layanan" path="/services" />
      <ServiceCatalog />
    </>
  );
}
