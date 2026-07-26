import { type LucideIcon } from "lucide-react";
import { techColor } from "@/lib/content";
import { TiltCard } from "@/components/common/tilt-card";
import { cn } from "@/lib/utils";

export interface BentoItem {
  icon: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  meta?: string;
  /** Span two columns on md+ screens. */
  colSpan?: 1 | 2;
  /** Keep the hover treatment always on (for a featured tile). */
  featured?: boolean;
}

/**
 * Adapted from 21st.dev (kokonutd/bento-grid) — retuned to the design tokens
 * and the cobalt brand accent, driven by typed data.
 */
export function BentoGrid({ items, className }: { items: BentoItem[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-3", className)}>
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <TiltCard
            key={i}
            className={item.colSpan === 2 ? "md:col-span-2" : "col-span-1"}
          >
            <div
              className={cn(
                "group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300",
                "hover:border-brand/40 hover:shadow-elevated",
                item.featured && "shadow-soft",
              )}
            >
            {/* hover dot field */}
            <div
              aria-hidden
              className={cn(
                "absolute inset-0 bg-dots transition-opacity duration-300",
                item.featured ? "opacity-40" : "opacity-0 group-hover:opacity-40",
              )}
            />
            {/* hover gradient border sheen */}
            <div
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/[0.07] via-transparent to-transparent transition-opacity duration-300",
                item.featured ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              )}
            />

            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between">
                <span className="inline-grid size-11 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/15 transition-colors group-hover:bg-brand/15">
                  <Icon className="size-5" />
                </span>
                {item.meta ? (
                  <span className="text-xs font-medium text-muted-foreground">{item.meta}</span>
                ) : null}
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.description}
              </p>

              {item.tags && item.tags.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="size-1.5 shrink-0 rounded-full"
                        style={{ background: techColor(tag) }}
                      />
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            </div>
          </TiltCard>
        );
      })}
    </div>
  );
}
