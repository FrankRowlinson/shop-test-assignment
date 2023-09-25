import { AuthForm } from "@/features/auth";
import { Flex } from "@chakra-ui/react";

export default function AuthPage() {
  return (
    <Flex h='100dvh' justify='center' align='center'>
      <AuthForm />
    </Flex>
  );
}
