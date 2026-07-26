import { requireUser } from "@/lib/auth";
import { ProfileForm, PasswordForm } from "@/components/settings-forms";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const user = await requireUser();

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="mt-1 text-sm text-muted-foreground">Manage your account.</p>
      <div className="mt-6 flex flex-col gap-4">
        <ProfileForm user={{ name: user.name, email: user.email }} />
        <PasswordForm />
      </div>
    </div>
  );
}
