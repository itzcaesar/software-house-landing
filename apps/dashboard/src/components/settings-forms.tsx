"use client";

import { useActionState, useEffect, useRef, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, UserMinus, UserPlus } from "lucide-react";
import type { User } from "@callumc/db";
import { updateProfile, changePassword, addTeamMember, removeTeamMember } from "@/app/actions";
import { initials } from "@/lib/format";

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

type Member = Pick<User, "id" | "name" | "email" | "createdAt">;

/** Team list + add form. Removing a member blocks their login and unassigns their leads; history stays. */
export function TeamSection({ members, currentUserId }: { members: Member[]; currentUserId: number }) {
  const [state, formAction, pending] = useActionState(addTeamMember, null);
  const [removing, startRemove] = useTransition();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  useFormToasts(state, "Member added");
  useEffect(() => {
    if (state?.ok) formRef.current?.reset();
  }, [state]);

  const remove = (member: Member) => {
    if (!window.confirm(`Remove ${member.name} from the team? They lose access immediately and their leads become unassigned.`)) return;
    startRemove(async () => {
      const result = await removeTeamMember(member.id);
      if (result.error) toast.error(result.error);
      else toast.success(`${member.name} removed`);
      router.refresh();
    });
  };

  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <h2 className="font-semibold">Team</h2>
      <p className="mt-1 text-sm text-muted-foreground">Everyone here can sign in to the dashboard.</p>

      <ul className="mt-5 divide-y divide-border rounded-xl border border-border">
        {members.map((m) => (
          <li key={m.id} className="flex items-center gap-3 px-4 py-3">
            <span
              aria-hidden
              className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-3 to-brand-2 text-xs font-semibold text-white"
            >
              {initials(m.name)}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium">
                {m.name}
                {m.id === currentUserId && <span className="text-muted-foreground"> (you)</span>}
              </span>
              <span className="block truncate text-xs text-muted-foreground">{m.email}</span>
            </span>
            {m.id !== currentUserId && (
              <button
                type="button"
                disabled={removing}
                onClick={() => remove(m)}
                title={`Remove ${m.name}`}
                className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-red-300 disabled:opacity-60"
              >
                <UserMinus className="size-4" />
              </button>
            )}
          </li>
        ))}
      </ul>

      <form ref={formRef} action={formAction} className="mt-5 grid gap-3 sm:grid-cols-3">
        <input name="name" required minLength={2} placeholder="Name" aria-label="Name" className={inputClass} />
        <input name="email" type="email" required placeholder="Email" aria-label="Email" className={inputClass} />
        <input
          name="password"
          type="password"
          required
          minLength={10}
          autoComplete="new-password"
          placeholder="Initial password (10+)"
          aria-label="Initial password"
          className={inputClass}
        />
        <button type="submit" disabled={pending} className={`${buttonClass} w-fit sm:col-span-3`}>
          {pending ? <Loader2 className="size-4 animate-spin" /> : <UserPlus className="size-4" />}
          Add member
        </button>
      </form>
    </section>
  );
}
