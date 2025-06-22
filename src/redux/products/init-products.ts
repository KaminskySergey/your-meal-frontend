import { IProduct } from "../../types/product";

export interface ProductsState {
    items: IProduct[]
    isLoading: boolean
    error: string | null | unknown
  }

export const initProducts: ProductsState = {
  items: [],
  isLoading: false,
  error: null as string | null,
};
