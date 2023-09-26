import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { ProductCard } from "./product-card";
import { Products } from "@/shared/api";

type Props = {
  products: Products;
};

export function ProductList({ products }: Props) {
  return (
    <Box alignSelf='flex-start' justifySelf='flex-start' w='100%'>
      <Heading mb={2}>Список товаров</Heading>
      <Grid
        gap={4}
        templateColumns={[
          "1fr",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
      >
        {products.map((product) => (
          <GridItem key={product.id}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
