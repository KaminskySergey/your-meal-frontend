import { IProduct } from "../../types/product";

export const initCart: CartState = {
  cart: [],
  isLoading: false,
};

export interface CartState {
  cart: ProductWithQuantity[];
  isLoading: boolean;
}

export interface ProductWithQuantity extends IProduct {
  quantity: number;
}
