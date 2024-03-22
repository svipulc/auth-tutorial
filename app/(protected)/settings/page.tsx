"use client";

import { useSession, signOut } from "next-auth/react";

export default function SettingsPage() {
  const session = useSession();
  const onClick = () => {
    signOut();
  };
  return (
    <div>
      {JSON.stringify(session)}
      <button type="submit" onClick={onClick}>
        SingOut
      </button>
    </div>
  );
}
