import { asc, isNull } from "drizzle-orm";
import { getDb, users } from "@craftbyte/db";
import { requireUser } from "@/lib/auth";
import { ProfileForm, PasswordForm, TeamSection } from "@/components/settings-forms";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const user = await requireUser();
  const members = await getDb()
    .select({ id: users.id, name: users.name, email: users.email, createdAt: users.createdAt })
    .from(users)
    .where(isNull(users.disabledAt))
    .orderBy(asc(users.createdAt));

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="mt-1 text-sm text-muted-foreground">Your account and the team.</p>
      <div className="mt-6 flex flex-col gap-4">
        <ProfileForm user={{ name: user.name, email: user.email }} />
        <PasswordForm />
        <TeamSection members={members} currentUserId={user.id} />
      </div>
    </div>
  );
}
