import { ProductList } from "@/entities/products";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex maxW='5xl' minH='80dvh' align='center' justify='center' p={2}>
      <ProductList />
    </Flex>
  );
}
