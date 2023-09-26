import { useMutation } from "@tanstack/react-query";
import { api, PostProductRequest } from "@/shared/api";
import { keys } from "../query-keys";

export const usePostProduct = () => {
  return useMutation({
    mutationKey: keys.POST_PRODUCT(),
    mutationFn: (data: PostProductRequest) => api.products.postProduct(data),
  });
};
