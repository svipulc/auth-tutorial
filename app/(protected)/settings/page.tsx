import { auth } from "@/auth";
import { signOut } from "@/auth";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">SingOUt</button>
      </form>
    </div>
  );
}
