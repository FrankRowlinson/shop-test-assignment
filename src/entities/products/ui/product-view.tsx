import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Flex,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { Product } from "@/shared/api";

type Props = {
  product: Product;
};

export function ProductView({ product }: Props) {
  return (
    <Card alignSelf='flex-start'>
      <CardBody>
        <Heading as='h1' fontSize='2xl' mb='4'>
          {product?.title}
        </Heading>
        <SimpleGrid
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
          spacing={6}
          justifyItems='center'
        >
          <Image maxW='300' objectFit='contain' src={product?.image} alt='' />
          <Flex flexDir='column'>
            <Stack flexGrow={1} spacing={4}>
              <Text fontSize='sm'>{product?.description}</Text>
              <Text fontSize='2xl' color='blue.400'>
                ${product?.price}
              </Text>
            </Stack>
            <Stack spacing={4}>
              <Divider />
              <ButtonGroup>
                <Button colorScheme='blue'>Купить сейчас</Button>
                <Button colorScheme='blue' variant='outline'>
                  Добавить в корзину
                </Button>
              </ButtonGroup>
            </Stack>
          </Flex>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
}
