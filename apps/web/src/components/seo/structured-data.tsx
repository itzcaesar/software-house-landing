import { siteConfig } from "@/lib/site";

/** JSON-LD structured data for rich results (Organization, Website, Service, FAQ). */
export function StructuredData() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      logo: `${siteConfig.url}/icon`,
      email: siteConfig.email,
      ...(siteConfig.whatsapp && { telephone: `+${siteConfig.whatsapp}` }),
      sameAs: Object.values(siteConfig.socials).filter(Boolean),
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "sales",
        availableLanguage: ["id", "en"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "id",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: siteConfig.legalName,
      image: `${siteConfig.url}/opengraph-image`,
      url: siteConfig.url,
      description: siteConfig.description,
      areaServed: "Indonesia",
      provider: { "@id": `${siteConfig.url}/#organization` },
    },
  ];

  const json = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // Structured data is static & trusted (built from site config).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

/**
 * Page-scoped FAQPage schema — render only on pages whose visible content
 * includes these Q&As (Google's rich-result requirement).
 */
export function FaqJsonLd({
  id,
  items,
}: {
  id: string;
  items: readonly { q: string; a: string }[];
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#${id}`,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
