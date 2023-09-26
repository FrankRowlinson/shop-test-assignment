"use client";

import { useAuthStore } from "@/entities/user/model/store";
import { Link } from "@chakra-ui/next-js";
import { Stack, StackProps } from "@chakra-ui/react";

interface Props extends Pick<StackProps, "direction"> {}

export function NavLinks({ direction }: Props) {
  const { isAuth } = useAuthStore();

  return (
    <Stack direction={direction} spacing='4'>
      <Link href='/'>Главная</Link>
      {isAuth && <Link href='/products/create'>Добавить товар</Link>}
    </Stack>
  );
}
