import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/api";

export const useDeleteProduct = (id: number) => {
  return useMutation({
    mutationKey: ["product", "delete"],
    mutationFn: () => api.products.deleteProduct(id),
  });
};
