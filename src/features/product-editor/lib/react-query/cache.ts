import { queryClient } from '@/shared/lib/react-query';
import { keys } from '@/entities/products/model/query-keys';
import { Product, Products } from '@/shared/api';

export const cache = {
  deleteFromCache: (id: number) => {
    queryClient.setQueryData(
      keys.GET_PRODUCTS(),
      (oldData: Products | undefined): Products | undefined => {
        return oldData?.filter((product) => product.id !== id);
      },
    );
  },

  updateInCache: (id: number, newProduct: Product) => {
    queryClient.setQueryData(
      keys.GET_PRODUCTS(),
      (oldData: Products | undefined): Products | undefined => {
        return oldData?.map((product) =>
          product.id === id ? newProduct : product,
        );
      },
    );
    queryClient.setQueryData(keys.GET_PRODUCT(id), () => newProduct);
  },

  addToCache: (id: number, newProduct: Product) => {
    queryClient.setQueryData(
      keys.GET_PRODUCTS(),
      (oldData: Products | undefined): Products | undefined => {
        return [newProduct].concat(oldData || []);
      },
    );

    queryClient.setQueryData(keys.GET_PRODUCT(id), () => {
      return newProduct;
    });
  },
};
