"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onCLicks = () => {
    router.push("/auth/login");
  };

  if (mode == "modal") {
    return (
      <span></span> //Todo:implement modal for modal
    );
  }

  return (
    <span className="cursor-pointer" onClick={onCLicks}>
      {children}
    </span>
  );
};
