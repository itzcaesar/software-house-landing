"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";
import { Loader2, Plus, X } from "lucide-react";
import { LEAD_STATUSES } from "@craftbyte/db";
import { STATUS_META } from "@/lib/status";
import { BUDGET_OPTIONS } from "@/lib/budget";
import { createManualLead } from "@/app/actions";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand/60 focus:ring-2 focus:ring-brand/30";

/** "Add lead" button + modal — for referrals/walk-ins that never touch the form. */
export function AddLeadButton() {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const formAction = (formData: FormData) =>
    startTransition(async () => {
      const result = await createManualLead(null, formData);
      if (result?.error) {
        toast.error(result.error);
        return;
      }
      toast.success("Lead added");
      setOpen(false);
      router.refresh();
    });

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-3 via-brand to-brand-2 px-3.5 py-2 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98]"
      >
        <Plus className="size-4" />
        Add lead
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Add lead"
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-elevated"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Add lead</h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>

              <form action={formAction} className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  Name *
                  <input name="name" required minLength={2} placeholder="Jane Doe" className={inputClass} />
                </label>
                <label className="block text-sm font-medium">
                  Email
                  <input name="email" type="email" placeholder="jane@company.com" className={inputClass} />
                </label>
                <label className="block text-sm font-medium">
                  Company
                  <input name="company" placeholder="Acme Inc." className={inputClass} />
                </label>
                <label className="block text-sm font-medium">
                  Budget
                  <select name="budget" defaultValue="" className={inputClass}>
                    <option value="">Unknown</option>
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-medium sm:col-span-2">
                  Notes / context
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Where did this lead come from, what do they need?"
                    className={`${inputClass} resize-y`}
                  />
                </label>
                <label className="block text-sm font-medium">
                  Status
                  <select name="status" defaultValue="new" className={inputClass}>
                    {LEAD_STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {STATUS_META[s].label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex items-end gap-2 pb-2.5 text-sm">
                  <input type="checkbox" name="assignToMe" className="size-4 accent-[var(--brand)]" />
                  Assign to me
                </label>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={pending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-3 via-brand to-brand-2 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
                  >
                    {pending && <Loader2 className="size-4 animate-spin" />}
                    Add lead
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
