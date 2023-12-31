import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Button,
  Divider,
} from '@chakra-ui/react';
import { Product } from '@/shared/api';
import { ArrowRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Card maxW="sm" h="100%">
      <CardBody>
        <Image
          src={product.image}
          alt=""
          h={200}
          w="100%"
          objectFit="contain"
          transition="all 0.2s ease"
          _hover={{ transform: 'scale(1.2)' }}
        />
        <Stack spacing="3" mt="6">
          <Heading as={Link} href={`products/${product.id}`} fontSize="md">
            {product.title}
          </Heading>
          <Text color="blue.400" fontSize="2xl">
            ${product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button as={Link} href={`products/${product.id}`} colorScheme="blue">
          Перейти к товару <ArrowRightIcon ml={2} boxSize={3} />
        </Button>
      </CardFooter>
    </Card>
  );
}
