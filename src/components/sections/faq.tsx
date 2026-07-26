"use client";

import { useDict } from "@/lib/i18n";
import { Section, Eyebrow } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const t = useDict();

  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {t.faq.titleLine1}
            <br className="hidden lg:block" /> {t.faq.titleLine2}
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            {t.faq.subPrefix}{" "}
            <a href="#contact" className="font-medium text-brand hover:underline">
              {t.faq.subLink}
            </a>{" "}
            {t.faq.subSuffix}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion multiple={false} className="w-full">
            {t.faq.items.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
