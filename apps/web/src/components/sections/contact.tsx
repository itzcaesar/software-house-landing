"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Mail, Phone, MapPin, ArrowRight, Loader2, CalendarCheck, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useDict } from "@/lib/i18n";
import { readAttribution } from "@/components/common/attribution";
import { Reveal } from "@/components/common/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  /** Honeypot — hidden from humans, bots fill it. */
  website: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const budgets = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k+"];

export function Contact() {
  const t = useDict();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { name: "", email: "", company: "", budget: "", message: "", website: "" },
  });

  const contactDetails = [
    { icon: Mail, label: t.contact.detailEmail, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: t.contact.detailPhone, value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: t.contact.detailLocation, value: siteConfig.location, href: undefined as string | undefined },
  ];

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, ...readAttribution() }),
      });
      if (!res.ok) throw new Error(`lead submit failed: ${res.status}`);
      toast.success(t.contact.success);
      reset();
    } catch {
      toast.error(t.contact.error);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
          <div className="grid lg:grid-cols-2">
            {/* left — pitch + details */}
            <div className="relative overflow-hidden bg-gradient-to-br from-brand via-brand to-brand-2 p-8 text-white sm:p-10 lg:p-12">
              <div aria-hidden className="absolute inset-0 bg-dots opacity-20 mix-blend-overlay" />
              <div className="relative">
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase">
                    <span className="size-1.5 rounded-full bg-white" aria-hidden />
                    {t.contact.badge}
                  </span>
                  <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                    {t.contact.title}
                  </h2>
                  <p className="mt-4 max-w-md text-white/85 text-pretty">{t.contact.subtitle}</p>
                </Reveal>

                <Reveal delay={0.1} className="mt-10 space-y-4">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => {
                    const content = (
                      <>
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/15">
                          <Icon className="size-5" />
                        </span>
                        <span>
                          <span className="block text-xs text-white/70">{label}</span>
                          <span className="block text-sm font-medium">{value}</span>
                        </span>
                      </>
                    );
                    return href ? (
                      <a key={label} href={href} className="flex items-center gap-4 transition-opacity hover:opacity-90">
                        {content}
                      </a>
                    ) : (
                      <div key={label} className="flex items-center gap-4">
                        {content}
                      </div>
                    );
                  })}
                </Reveal>

                {/* discovery-call booking card */}
                <Reveal delay={0.15} className="mt-8">
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15"
                  >
                    <span className="flex items-center gap-3.5">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-brand">
                        <CalendarCheck className="size-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{t.contact.bookTitle}</span>
                        <span className="block text-xs text-white/75">{t.contact.bookDesc}</span>
                      </span>
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium">
                      {t.contact.bookCta}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </Reveal>

                <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
                  <span className="inline-flex items-center gap-2">
                    <CalendarCheck className="size-4" /> {t.contact.chipReply}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="size-4" /> {t.contact.chipPrivate}
                  </span>
                </Reveal>
              </div>
            </div>

            {/* right — form */}
            <div className="p-8 sm:p-10 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  {...register("website")}
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t.contact.name} error={errors.name?.message} htmlFor="name">
                    <Input
                      id="name"
                      placeholder={t.contact.namePlaceholder}
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      {...register("name", {
                        required: t.contact.nameRequired,
                        minLength: { value: 2, message: t.contact.nameRequired },
                      })}
                    />
                  </Field>
                  <Field label={t.contact.email} error={errors.email?.message} htmlFor="email">
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      {...register("email", {
                        required: t.contact.emailRequired,
                        pattern: { value: EMAIL_RE, message: t.contact.emailInvalid },
                      })}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t.contact.company} htmlFor="company" optionalLabel={t.contact.optional}>
                    <Input id="company" placeholder={t.contact.companyPlaceholder} autoComplete="organization" {...register("company")} />
                  </Field>
                  <Field label={t.contact.budget} htmlFor="budget" optionalLabel={t.contact.optional}>
                    <select
                      id="budget"
                      defaultValue=""
                      {...register("budget")}
                      className={cn(
                        "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow]",
                        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
                        "[&>option]:bg-popover [&>option]:text-popover-foreground",
                      )}
                    >
                      <option value="">{t.contact.budgetPlaceholder}</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label={t.contact.message} error={errors.message?.message} htmlFor="message">
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder={t.contact.messagePlaceholder}
                    aria-invalid={!!errors.message}
                    {...register("message", {
                      required: t.contact.messageRequired,
                      minLength: { value: 10, message: t.contact.messageMin },
                    })}
                  />
                </Field>

                <CtaButton type="submit" size="md" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      {t.contact.submitting}
                    </>
                  ) : (
                    <>
                      {t.contact.submit}
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </CtaButton>
                <p className="text-center text-xs text-muted-foreground">{t.contact.consent}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optionalLabel,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optionalLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={htmlFor}>{label}</Label>
        {optionalLabel && <span className="text-xs text-muted-foreground">{optionalLabel}</span>}
      </div>
      {children}
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
