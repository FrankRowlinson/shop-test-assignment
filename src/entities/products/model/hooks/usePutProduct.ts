import { useMutation } from "@tanstack/react-query";
import { api, UpdateProductRequest } from "@/shared/api";
import { keys } from "../query-keys";

export const usePutProduct = (id: number) => {
  return useMutation({
    mutationKey: keys.UPDATE_PRODUCT(id),
    mutationFn: (data: UpdateProductRequest) =>
      api.products.putProduct(id, data),
  });
};
