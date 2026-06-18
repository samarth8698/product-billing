export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface BillingState {
  products: Product[];
}