'use client';

import { usePostProduct } from '@/entities/products/model/hooks';
import { ProductEditor } from '@/features/product-editor';
import { cache } from '@/entities/products/lib/react-query/cache';
import { PostProductRequest } from '@/shared/api';
import { useRouter } from 'next/navigation';
import { Box } from '@chakra-ui/react';

export function CreateProductForm() {
  const { mutate, isLoading } = usePostProduct();
  const router = useRouter();

  const sendFormData = (data: PostProductRequest) => {
    mutate(data, {
      onSuccess: (product) => {
        const newId = Math.floor(Math.random() * 100000);
        product.id = newId;
        cache.addToCache(newId, product);
        router.push(`/products/${newId}`);
      },

      onError: () => {},
    });
  };

  return (
    <Box px="8" py="8" w={500} borderRadius={16} shadow="xl">
      <ProductEditor sendFormData={sendFormData} isLoading={isLoading} />
    </Box>
  );
}
