'use client';

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
} from '@chakra-ui/react';
import { Product } from '@/shared/api';
import { DeleteProductButton } from '@/features/delete-product/ui/delete-product-button';
import { useAuthStore } from '@/entities/user/model/store';
import { UpdateProductButton } from '@/features/update-product';

type Props = {
  product: Product;
};

export function ProductView({ product }: Props) {
  const { isAuth } = useAuthStore();
  return (
    <Card alignSelf="flex-start">
      <CardBody>
        <Flex justify="space-between" mb="4" gap={2}>
          <Heading as="h1" fontSize="2xl">
            {product?.title}
          </Heading>
          {isAuth && (
            <ButtonGroup>
              <UpdateProductButton product={product} />
              <DeleteProductButton id={product.id} />
            </ButtonGroup>
          )}
        </Flex>
        <SimpleGrid
          templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}
          spacing={6}
          justifyItems="center"
        >
          <Image maxW="300" objectFit="contain" src={product?.image} alt="" />
          <Flex flexDir="column">
            <Stack flexGrow={1} spacing={4}>
              <Text fontSize="sm">{product?.description}</Text>
              <Text fontSize="2xl" color="blue.400">
                ${product?.price}
              </Text>
            </Stack>
            <Stack spacing={4}>
              <Divider />
              <ButtonGroup>
                <Button colorScheme="blue">Купить сейчас</Button>
                <Button colorScheme="blue" variant="outline">
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
