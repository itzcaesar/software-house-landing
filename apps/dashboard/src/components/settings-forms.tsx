"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import type { User } from "@craftbyte/db";
import { updateProfile, changePassword } from "@/app/actions";

const inputClass =
  "mt-2 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand/60 focus:ring-2 focus:ring-brand/30";
const buttonClass =
  "mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-3 via-brand to-brand-2 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60";

type FormState = { error?: string; ok?: boolean } | null;

function useFormToasts(state: FormState, successMessage: string) {
  useEffect(() => {
    if (state?.ok) toast.success(successMessage);
    if (state?.error) toast.error(state.error);
  }, [state, successMessage]);
}

export function ProfileForm({ user }: { user: Pick<User, "name" | "email"> }) {
  const [state, formAction, pending] = useActionState(updateProfile, null);
  useFormToasts(state, "Profile updated");

  return (
    <form action={formAction} className="rounded-2xl border border-border bg-card p-6">
      <h2 className="font-semibold">Profile</h2>
      <p className="mt-1 text-sm text-muted-foreground">Your name and login email.</p>
      <label htmlFor="settings-name" className="mt-5 block text-sm font-medium">
        Name
      </label>
      <input
        id="settings-name"
        name="name"
        defaultValue={user.name}
        required
        className={inputClass}
      />
      <label htmlFor="settings-email" className="mt-4 block text-sm font-medium">
        Email
      </label>
      <input
        id="settings-email"
        name="email"
        type="email"
        defaultValue={user.email}
        required
        className={inputClass}
      />
      <button type="submit" disabled={pending} className={buttonClass}>
        {pending && <Loader2 className="size-4 animate-spin" />}
        Save profile
      </button>
    </form>
  );
}

export function PasswordForm() {
  const [state, formAction, pending] = useActionState(changePassword, null);
  useFormToasts(state, "Password changed");

  return (
    <form action={formAction} className="rounded-2xl border border-border bg-card p-6">
      <h2 className="font-semibold">Password</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Minimum 10 characters. Changing it does not log out existing sessions.
      </p>
      <label htmlFor="settings-current" className="mt-5 block text-sm font-medium">
        Current password
      </label>
      <input
        id="settings-current"
        name="current"
        type="password"
        autoComplete="current-password"
        required
        className={inputClass}
      />
      <label htmlFor="settings-next" className="mt-4 block text-sm font-medium">
        New password
      </label>
      <input
        id="settings-next"
        name="next"
        type="password"
        autoComplete="new-password"
        required
        minLength={10}
        className={inputClass}
      />
      <button type="submit" disabled={pending} className={buttonClass}>
        {pending && <Loader2 className="size-4 animate-spin" />}
        Change password
      </button>
    </form>
  );
}
