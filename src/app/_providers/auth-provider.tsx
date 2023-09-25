"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/entities/user/model/store/useAuthStore";
import { useCookies } from "react-cookie";

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const { setIsAuth } = useAuthStore();
  const [cookie, ..._] = useCookies();

  useEffect(() => {
    if (cookie["auth-token"]) {
      setIsAuth(true);
    }
  }, [cookie, setIsAuth]);

  return <>{children}</>;
}
