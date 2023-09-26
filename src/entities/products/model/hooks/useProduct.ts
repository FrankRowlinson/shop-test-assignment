import { api } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import { keys } from "../query-keys";

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: keys.GET_PRODUCT(id),
    queryFn: () => api.products.getProduct(id),
  });
};
