"use client";

import { useActionState } from "react";
import { motion } from "motion/react";
import { Code2, Loader2, LogIn } from "lucide-react";
import { login } from "@/app/actions";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, null);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--brand)_18%,transparent)_0%,transparent_70%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-20 bg-dots opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-sm"
      >
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-3 via-brand to-brand-2 text-white shadow-elevated">
            <Code2 className="size-6" />
          </span>
          <div>
            <h1 className="text-xl font-semibold">Craftbyte HQ</h1>
            <p className="mt-1 text-sm text-muted-foreground">Founders only. Sign in to continue.</p>
          </div>
        </div>

        <form
          action={formAction}
          className="rounded-2xl border border-border bg-card p-6 shadow-elevated"
        >
          <label className="block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand/60 focus:ring-2 focus:ring-brand/30"
            placeholder="you@craftbyte.studio"
          />

          <label className="mt-4 block text-sm font-medium" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="mt-2 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand/60 focus:ring-2 focus:ring-brand/30"
            placeholder="••••••••••"
          />

          {state?.error && (
            <p role="alert" className="mt-4 rounded-lg bg-destructive/10 px-3.5 py-2.5 text-sm text-red-300">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-3 via-brand to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
          >
            {pending ? <Loader2 className="size-4 animate-spin" /> : <LogIn className="size-4" />}
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Internal tool — accounts are seeded, passwords change in Settings.
        </p>
      </motion.div>
    </main>
  );
}
