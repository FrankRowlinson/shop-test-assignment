const BASE_KEY = 'products';

export const keys = {
  GET_PRODUCTS: () => [BASE_KEY, 'all'],
  GET_PRODUCT: (id: number) => [BASE_KEY, 'get', String(id)],
  DELETE_PRODUCT: (id: number) => [BASE_KEY, 'delete', String(id)],
  POST_PRODUCT: () => [BASE_KEY, 'post'],
  UPDATE_PRODUCT: (id: number) => [BASE_KEY, 'update', String(id)],
};
