'use client';

import { ProductList } from '@/entities/products';
import { useProducts } from '@/entities/products/model/hooks';
import { Loader } from '@/shared/ui/feedback';

export default function Home() {
  const { data, isLoading } = useProducts();

  if (isLoading || !data) {
    return <Loader />;
  }
  return <ProductList products={data} />;
}
