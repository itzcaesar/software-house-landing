"use client";

import { testimonialMeta } from "@/lib/content";
import { useDict } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/common/section";
import { TestimonialCard } from "@/components/ui/testimonial-card";

type Card = { author: { name: string; role: string; company: string; initials: string }; text: string };

function MarqueeRow({
  items,
  reverse = false,
  duration = "46s",
}: {
  items: Card[];
  reverse?: boolean;
  duration?: string;
}) {
  // Duplicated set so the -50% translate loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex w-max shrink-0 gap-4 animate-marquee pr-4 group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: duration,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((c, i) => (
          <TestimonialCard key={`${reverse ? "b" : "a"}-${i}`} {...c} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const t = useDict();

  const cards: Card[] = testimonialMeta.map((m, i) => ({
    author: {
      name: m.name,
      role: t.testimonials.items[i].role,
      company: m.company,
      initials: m.initials,
    },
    text: t.testimonials.items[i].quote,
  }));

  return (
    <Section id="testimonials" bleed className="overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />
      </div>

      <div className="group relative mt-14 flex flex-col gap-4">
        <MarqueeRow items={cards} duration="46s" />
        <MarqueeRow items={cards} reverse duration="56s" />

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent sm:w-40" />
      </div>
    </Section>
  );
}
