"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CalendarClock, Loader2, X } from "lucide-react";
import { setNextAction } from "@/app/actions";

export function FollowUpForm({
  leadId,
  date,
  note,
}: {
  leadId: number;
  date: string | null;
  note: string;
}) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const submit = (formData: FormData) =>
    startTransition(async () => {
      await setNextAction(leadId, formData);
      toast.success(formData.get("date") ? "Follow-up scheduled" : "Follow-up cleared");
      router.refresh();
    });

  const clear = () =>
    startTransition(async () => {
      await setNextAction(leadId, new FormData());
      toast.success("Follow-up cleared");
      router.refresh();
    });

  return (
    <form action={submit}>
      <input
        type="date"
        name="date"
        defaultValue={date ? date.slice(0, 10) : ""}
        className="w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-brand/60 [color-scheme:dark]"
      />
      <input
        type="text"
        name="note"
        defaultValue={note}
        placeholder="What's the next move?"
        className="mt-2 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-brand/60"
      />
      <div className="mt-2.5 flex gap-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-3 via-brand to-brand-2 px-3 py-2 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
        >
          {pending ? <Loader2 className="size-4 animate-spin" /> : <CalendarClock className="size-4" />}
          Save
        </button>
        {date && (
          <button
            type="button"
            disabled={pending}
            onClick={clear}
            title="Clear follow-up"
            className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-destructive/40 hover:text-red-300 disabled:opacity-60"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    </form>
  );
}
