"use client";

import { Check, Minus, Clock, Code2, LifeBuoy, Info } from "lucide-react";
import { Eyebrow } from "@/components/common/section";
import { Reveal, Stagger, StaggerItem } from "@/components/common/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type CompareRow = { label: string; values: (string | boolean)[] };

/** Sentinel string used in compare rows for capabilities sold as add-ons. */
const addonMarker = "Add-on";

/** Feature-by-feature comparison matrix for the active scope. */
export function PricingCompare({
  title,
  featureLabel,
  columns,
  rows,
  highlightIndex,
}: {
  title: string;
  featureLabel: string;
  columns: string[];
  rows: CompareRow[];
  highlightIndex: number;
}) {
  return (
    <div className="mt-24">
      <Reveal>
        <h3 className="text-center text-2xl font-semibold sm:text-3xl">{title}</h3>
      </Reveal>
      <Reveal delay={0.05} className="relative mt-8">
        <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-soft">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-5 text-left font-medium text-muted-foreground">
                {featureLabel}
              </th>
              {columns.map((col, i) => (
                <th
                  key={col}
                  className={cn(
                    "px-6 py-5 text-center font-semibold",
                    i === highlightIndex && "bg-brand/[0.05] text-brand",
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-border/60 last:border-0">
                <td className="px-6 py-4 text-left text-foreground/90">{row.label}</td>
                {row.values.map((v, i) => (
                  <td
                    key={i}
                    className={cn(
                      "px-6 py-4 text-center",
                      i === highlightIndex && "bg-brand/[0.04]",
                    )}
                  >
                    {typeof v === "boolean" ? (
                      v ? (
                        <Check className="mx-auto size-4 text-brand" strokeWidth={2.5} />
                      ) : (
                        <Minus className="mx-auto size-4 text-muted-foreground/40" />
                      )
                    ) : v === addonMarker ? (
                      <span className="inline-flex rounded-full border border-brand/30 bg-brand/5 px-2 py-0.5 text-xs font-medium text-brand">
                        {v}
                      </span>
                    ) : (
                      <span className="text-foreground/80">{v}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        {/* Right-edge fade hints horizontal scroll on small screens. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-12 rounded-r-3xl bg-gradient-to-l from-card to-transparent sm:hidden"
        />
      </Reveal>
    </div>
  );
}

/** A-la-carte add-ons for the active scope. */
export function PricingAddons({
  title,
  subtitle,
  items,
  disclaimer,
}: {
  title: string;
  subtitle: string;
  items: { name: string; description: string; price: string }[];
  disclaimer?: string;
}) {
  return (
    <div className="mt-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h3 className="text-2xl font-semibold sm:text-3xl">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground text-pretty">{subtitle}</p>
      </Reveal>
      <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((addon, i) => (
          <StaggerItem key={i}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/25">
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-medium">{addon.name}</h4>
                <span className="shrink-0 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand tabular-nums">
                  {addon.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">{addon.description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      {disclaimer && (
        <Reveal className="mx-auto mt-6 flex max-w-2xl items-start justify-center gap-2 text-center">
          <Info className="mt-0.5 size-3.5 shrink-0 text-muted-foreground/70" />
          <p className="text-xs text-muted-foreground text-pretty">{disclaimer}</p>
        </Reveal>
      )}
    </div>
  );
}

/** Shared pricing FAQ (scope-independent). */
export function PricingFaq({
  title,
  items,
}: {
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <div className="mt-24">
      <Reveal>
        <h3 className="text-center text-2xl font-semibold sm:text-3xl">{title}</h3>
      </Reveal>
      <Reveal delay={0.05} className="mx-auto mt-8 max-w-3xl">
        <Accordion multiple={false} className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`price-faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  );
}

const GUARANTEE_ICONS = [Clock, Code2, LifeBuoy];

/** Shared engagement steps + guarantee strip (scope-independent). */
export function PricingEngage({
  eyebrow,
  title,
  steps,
  guarantees,
}: {
  eyebrow: string;
  title: string;
  steps: { title: string; description: string }[];
  guarantees: { title: string; description: string }[];
}) {
  return (
    <div className="mt-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h3>
      </Reveal>

      <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <StaggerItem key={i}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
              <span className="grid size-10 place-items-center rounded-full bg-gradient-to-r from-brand-3 via-brand to-brand-2 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <h4 className="mt-4 font-semibold">{step.title}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground text-pretty">{step.description}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-8 grid grid-cols-1 gap-6 rounded-3xl border border-border bg-secondary/30 p-6 sm:grid-cols-3 sm:gap-4">
        {guarantees.map((g, i) => {
          const Icon = GUARANTEE_ICONS[i] ?? Check;
          return (
            <div key={g.title} className="flex items-start gap-3">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                <Icon className="size-4.5" />
              </span>
              <div>
                <p className="text-sm font-semibold">{g.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground text-pretty">{g.description}</p>
              </div>
            </div>
          );
        })}
      </Reveal>
    </div>
  );
}
