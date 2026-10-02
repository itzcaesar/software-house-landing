"use client";

import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { serviceMeta } from "@/lib/content";
import { useDict } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { Eyebrow, Section, SectionHeading } from "@/components/common/section";
import { Reveal, Stagger, StaggerItem } from "@/components/common/reveal";
import { GridBackdrop } from "@/components/common/backgrounds";
import { CtaButton } from "@/components/ui/cta-button";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

// Icons borrowed from the service catalogue (web, SaaS, SaaS, SaaS, mobile, AI), one per `builds` item.
const BUILD_ICONS = [0, 4, 4, 4, 1, 5].map((i) => serviceMeta[i].icon);

/** /jasa-pembuatan-website: the one live offer (custom projects), written for search. */
export function CustomPage() {
  const t = useDict();
  const p = t.customPage;

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-6 sm:pt-40">
        <GridBackdrop />
        <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center lg:px-8">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{p.title}</h1>
          <p className="mt-5 text-base text-muted-foreground text-pretty sm:text-lg">{p.subtitle}</p>
          <p className="mt-6 flex items-baseline gap-2">
            <span className="text-xs tracking-wide text-muted-foreground uppercase">{p.priceLabel}</span>
            <span className="text-3xl font-semibold tracking-tight">{p.price}</span>
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <CtaButton size="lg" href={waLink(t.wa.consult)} data-track="wa_click">
              <MessageCircle className="size-4" />
              {p.cta}
            </CtaButton>
            <Link
              href="/services"
              className="inline-flex h-12 items-center gap-1.5 rounded-full border border-border px-6 text-[0.95rem] font-medium transition-colors hover:bg-secondary"
            >
              {p.secondaryCta}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <Section id="build" className="pt-16 sm:pt-20 lg:pt-24">
        <SectionHeading eyebrow={p.buildEyebrow} title={p.buildTitle} />
        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.builds.map((b, i) => {
            const Icon = BUILD_ICONS[i];
            return (
              <StaggerItem key={b.title} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="inline-grid size-10 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/15">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">{b.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Section id="value" className="pt-0 sm:pt-0 lg:pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <Eyebrow>{p.getEyebrow}</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold">{p.getTitle}</h2>
            <ul className="mt-6 space-y-3">
              {p.gets.map((g) => (
                <li key={g} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {g}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-brand/30 bg-card p-8 shadow-elevated">
            <Eyebrow>{p.costEyebrow}</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold">{p.costTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">{p.costIntro}</p>
            <ul className="mt-4 space-y-2.5">
              {p.costFactors.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Process />
      <Faq items={p.faq} />
      <Contact />
    </>
  );
}
