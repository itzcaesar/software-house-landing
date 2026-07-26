"use client";

import { useRef, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { addLeadNote } from "@/app/actions";

export function NoteForm({ leadId }: { leadId: number }) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={(formData) =>
        startTransition(async () => {
          await addLeadNote(leadId, formData);
          formRef.current?.reset();
          toast.success("Note added");
          router.refresh();
        })
      }
      className="flex items-start gap-2.5"
    >
      <textarea
        name="body"
        required
        rows={2}
        placeholder="Add a note for your co-founder…"
        className="min-h-16 flex-1 resize-y rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand/60"
      />
      <button
        type="submit"
        disabled={pending}
        title="Add note"
        className="grid size-10 shrink-0 place-items-center rounded-lg bg-gradient-to-r from-brand-3 via-brand to-brand-2 text-white transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
      >
        {pending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
      </button>
    </form>
  );
}
