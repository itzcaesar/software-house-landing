import type { Metadata } from "next";
import { CustomPage } from "@/components/sections/custom-page";
import { BreadcrumbJsonLd, FaqJsonLd, JsonLd } from "@/components/seo/structured-data";
import { id } from "@/lib/dictionaries";
import { siteConfig } from "@/lib/site";

const PATH = "/jasa-pembuatan-website";
const description =
  "Jasa pembuatan website dan software kustom untuk bisnis: website perusahaan, toko online, sistem internal, dan aplikasi. Mulai Rp 15 juta, konsultasi gratis.";

export const metadata: Metadata = {
  title: { absolute: "Jasa Pembuatan Website & Software Kustom | Callum C" },
  description,
  alternates: { canonical: PATH },
  openGraph: { title: "Jasa Pembuatan Website & Software Kustom", description, url: PATH },
};

export default function CustomProjectPage() {
  return (
    <>
      <BreadcrumbJsonLd name={id.customPage.crumb} path={PATH} />
      <FaqJsonLd id="custom-faq" items={id.customPage.faq} />
      <JsonLd
        data={{
          "@type": "Service",
          name: "Jasa pembuatan website dan software kustom",
          serviceType: "Pembuatan website dan software",
          description,
          url: `${siteConfig.url}${PATH}`,
          areaServed: "Indonesia",
          provider: { "@id": `${siteConfig.url}/#organization` },
          offers: {
            "@type": "Offer",
            priceSpecification: { "@type": "PriceSpecification", minPrice: 15_000_000, priceCurrency: "IDR" },
          },
        }}
      />
      <CustomPage />
    </>
  );
}
