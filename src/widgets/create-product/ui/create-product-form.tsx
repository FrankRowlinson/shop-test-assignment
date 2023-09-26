'use client';

import { usePostProduct } from '@/entities/products/model/hooks';
import { ProductEditor } from '@/features/product-editor';
import { cache } from '@/features/product-editor/lib/react-query/cache';
import { PostProductRequest } from '@/shared/api';
import { useRouter } from 'next/navigation';

export function CreateProductForm() {
  const { mutate, isLoading } = usePostProduct();
  const router = useRouter();

  const sendFormData = (data: PostProductRequest) => {
    mutate(data, {
      onSuccess: (product) => {
        cache.addToCache(product.id, product);
        router.push(`/products/${product.id}`);
      },

      onError: () => {},
    });
  };

  return (
    <>
      <ProductEditor sendFormData={sendFormData} isLoading={isLoading} />
    </>
  );
}
