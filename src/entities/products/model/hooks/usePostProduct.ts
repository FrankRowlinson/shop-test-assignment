import { useMutation } from "@tanstack/react-query";
import { api, PostProductRequest } from "@/shared/api";

export const usePostProduct = () => {
  return useMutation({
    mutationKey: ["product", "create"],
    mutationFn: (data: PostProductRequest) => api.products.postProduct(data),
  });
};
