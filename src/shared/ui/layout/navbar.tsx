"use client";

import { useAuthStore } from "@/entities/user/model/store";
import {
  Button,
  Flex,
  Heading,
  Highlight,
  Text,
  chakra,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export function Navbar() {
  const { isAuth } = useAuthStore();

  return (
    <Flex w='100vw' px={8} h={16} shadow='md' align='center'>
      <Heading size='md' as='a' href='/'>
        <Highlight
          query='Next Shop'
          styles={{ py: 2, px: 3, mr: 8, rounded: "full", bg: "blue.100" }}
        >
          Next Shop
        </Highlight>
      </Heading>
      <chakra.div display={["block", "none"]} flexGrow={1}></chakra.div>
      <chakra.nav display={["none", "block"]} flexGrow={1}>
        <Link href='/' textAlign={"left"}>
          Главная
        </Link>
      </chakra.nav>
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
