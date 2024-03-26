"use  client";

import { logout } from "@/actions/logout";

interface LogoutButtonProp {
  children: React.ReactNode;
}

export default function LogoutButton({ children }: LogoutButtonProp) {
  const onClick = () => {
    logout();
  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}
