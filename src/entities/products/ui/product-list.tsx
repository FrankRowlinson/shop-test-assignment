"use client";

import { Loader } from "@/shared/ui/feedback/loader";
import { useProducts } from "../model/hooks";
import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import { ProductCard } from "./product-card";

export function ProductList() {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return <Loader />;
  }

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
        {data?.map((product) => (
          <GridItem key={product.id}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
