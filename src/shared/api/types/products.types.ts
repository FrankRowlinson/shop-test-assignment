export type Category =
  | 'electronics'
  | 'jewelery'
  | "men's clothing"
  | "women's clothing";

export interface Product {
  id: number;
  title: string;
  price: string;
  category: Category;
  description: string;
  image: string;
}

export type Products = Product[];

// === API ===

// Requests
export type PostProductRequest = Omit<Product, 'id'>;
export type UpdateProductRequest = Product;

// Responses
export type PostProductResponse = Product;
export type UpdateProductResponse = Product;
export type DeleteProductResponse = Product;
export type GetProductsResponse = Products;
export type GetProductResponse = Product;
