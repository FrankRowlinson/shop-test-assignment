import { api } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => api.products.getProduct(id),
  });
};
