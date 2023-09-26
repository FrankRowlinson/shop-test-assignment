import { useAuthStore } from "@/entities/user/model/store";
import { Button, Text } from "@chakra-ui/react";

export function AuthButtonLink() {
  const { isAuth } = useAuthStore();
  return (
    <>
      {isAuth ? (
        <Text>Вы вошли</Text>
      ) : (
        <Button as='a' href='/auth' colorScheme='blue'>
          Войти
        </Button>
      )}
    </>
  );
}
