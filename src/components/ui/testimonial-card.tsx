import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialAuthor {
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

/**
 * Adapted from 21st.dev (serafimcloud/testimonials-with-marquee).
 * Uses initials avatars instead of external photos (perf + CSP friendly).
 */
export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const Card = href ? "a" : "div";

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex w-[19rem] shrink-0 flex-col rounded-2xl border border-border/70 border-t-border",
        "bg-gradient-to-b from-card to-secondary/30 p-6 text-start shadow-soft",
        "transition-colors duration-300 hover:border-brand/30 sm:w-[22rem]",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-brand-3 via-brand to-brand-2 text-sm font-semibold text-white">
            {author.initials}
          </span>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold leading-none">{author.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {author.role} · {author.company}
            </p>
          </div>
        </div>
        <div className="flex" aria-label="Rated 5 out of 5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" aria-hidden />
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">{text}</p>
    </Card>
  );
}
