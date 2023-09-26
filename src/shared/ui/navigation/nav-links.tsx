"use client";

import { useAuthStore } from "@/entities/user/model/store";
import { Link } from "@chakra-ui/next-js";

export function NavLinks() {
  const { isAuth } = useAuthStore();

  return (
    <>
      <Link href='/'>Главная</Link>
      {isAuth && <Link href='/add-product'>Добавить товар</Link>}
    </>
  );
}
