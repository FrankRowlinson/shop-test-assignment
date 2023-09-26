import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/api";
import { keys } from "../query-keys";

export const useDeleteProduct = (id: number) => {
  return useMutation({
    mutationKey: keys.DELETE_PRODUCT(id),
    mutationFn: () => api.products.deleteProduct(id),
  });
};
