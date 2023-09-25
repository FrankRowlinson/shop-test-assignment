"use client";

import { useAuthStore } from "@/entities/user/model/store";
import {
  Button,
  Flex,
  Heading,
  Highlight,
  Text,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export function Navbar() {
  const { isAuth } = useAuthStore();

  return (
    <Flex w='100vw' px={4} h={16} shadow='md' align='center'>
      <Heading size='md' as='p'>
        <Highlight
          query='Next Shop'
          styles={{ py: 2, px: 3, mr: 8, rounded: "full", bg: "blue.100" }}
        >
          Next Shop
        </Highlight>
      </Heading>
      <Link href='/' flexGrow={1} textAlign={"left"}>
        Главная
      </Link>
      {isAuth ? (
        <Text>Вы вошли</Text>
      ) : (
        <Button as='a' href='/auth' colorScheme='facebook'>
          Войти
        </Button>
      )}
    </Flex>
  );
}
