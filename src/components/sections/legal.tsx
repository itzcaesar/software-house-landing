"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useDict } from "@/lib/i18n";
import { Eyebrow } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import { GridBackdrop } from "@/components/common/backgrounds";

export type LegalPageId = "privacy" | "terms" | "cookies";

/** Shared layout for the privacy / terms / cookies documents. */
export function LegalPage({ page }: { page: LegalPageId }) {
  const t = useDict();
  const doc = t.legal[page];

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-28">
      <GridBackdrop />
      <div className="mx-auto w-full max-w-3xl px-6 lg:px-8">
        <Reveal>
          <Eyebrow>{t.legal.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
            {t.legal.updatedLabel} · {t.legal.updatedDate}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            {doc.intro}
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10">
          {doc.sections.map((section, i) => (
            <Reveal key={i} className="relative border-l-2 border-brand/25 pl-6 sm:pl-8">
              <p className="font-mono text-xs font-medium tracking-[0.18em] text-brand">
                § {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">{section.h}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                {section.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            {t.legal.contactLine}{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-brand hover:underline">
              {siteConfig.email}
            </a>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
          >
            <ArrowLeft className="size-4" />
            {t.legal.backHome}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
