import type { Metadata } from "next";
import { ServiceCatalog } from "@/components/sections/service-catalog";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Pengembangan web, aplikasi mobile, desain UI/UX, branding, SaaS, integrasi AI, dan MVP, beserta teknologi yang kami gunakan.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServiceCatalog />;
}
