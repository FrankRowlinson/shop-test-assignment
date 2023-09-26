'use client';

import { useProduct } from '@/entities/products/model/hooks';
import { Loader } from '@/shared/ui/feedback';
import { ProductView } from '@/entities/products';

type Props = {
  params: Params;
};

type Params = {
  id: number;
};

export default function ProductPage({ params: { id } }: Props) {
  const { data, isLoading } = useProduct(id);

  if (isLoading || !data) {
    return <Loader />;
  }

  return <ProductView product={data} />;
}
