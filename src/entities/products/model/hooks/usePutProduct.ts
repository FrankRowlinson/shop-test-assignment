import { useMutation } from "@tanstack/react-query";
import { api, UpdateProductRequest } from "@/shared/api";

export const usePutProduct = (id: number) => {
  return useMutation({
    mutationKey: ["product", "update"],
    mutationFn: (data: UpdateProductRequest) =>
      api.products.putProduct(id, data),
  });
};
