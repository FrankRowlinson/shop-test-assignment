import { STORE_API_URL } from "../constants";
import { httpClient } from "../http-client";
import {
  DeleteProductResponse,
  GetProductResponse,
  GetProductsResponse,
  PostProductRequest,
  PostProductResponse,
  UpdateProductRequest,
  UpdateProductResponse,
} from "../types/products.types";

export const products = {
  getProducts: async (): Promise<GetProductsResponse> => {
    const response = await httpClient({
      baseURL: STORE_API_URL,
      method: "GET",
      url: "products",
    });

    return response.data;
  },

  getProduct: async (id: number): Promise<GetProductResponse> => {
    const response = await httpClient({
      baseURL: STORE_API_URL,
      method: "GET",
      url: `products/${id}`,
    });

    return response.data;
  },

  postProduct: async (
    data: PostProductRequest
  ): Promise<PostProductResponse> => {
    const response = await httpClient({
      baseURL: STORE_API_URL,
      method: "POST",
      url: "products",
      data: JSON.stringify(data),
    });

    return response.data;
  },

  putProduct: async (
    id: number,
    data: UpdateProductRequest
  ): Promise<UpdateProductResponse> => {
    const response = await httpClient({
      baseURL: STORE_API_URL,
      method: "PUT",
      url: `products/${id}`,
      data: JSON.stringify(data),
    });

    return response.data;
  },

  deleteProduct: async (id: number): Promise<DeleteProductResponse> => {
    const response = await httpClient({
      baseURL: STORE_API_URL,
      method: "DELETE",
      url: `products/${id}`,
    });

    return response.data;
  },
};
