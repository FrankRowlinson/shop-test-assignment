import { api } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import { keys } from "../query-keys";

export const useProducts = () => {
  return useQuery({
    queryKey: keys.GET_PRODUCTS(),
    queryFn: () => api.products.getProducts(),
  });
};
