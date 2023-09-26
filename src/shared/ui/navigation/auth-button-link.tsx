import { useAuthStore } from '@/entities/user/model/store';
import { Button, Text } from '@chakra-ui/react';
import Link from 'next/link';

export function AuthButtonLink() {
  const { isAuth } = useAuthStore();
  return (
    <>
      {isAuth ? (
        <Text>Вы вошли</Text>
      ) : (
        <Button as={Link} href="/auth" colorScheme="blue">
          Войти
        </Button>
      )}
    </>
  );
}
