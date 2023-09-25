import { api } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => api.products.getProducts(),
  });
};
