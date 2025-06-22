
export interface OrderItem {
  productId: number;
  quantity: number;
}

export interface OrderState {
  name: string;
  phone: string;
  address: string;
  items: OrderItem[];
  isLoading: boolean;
  isSuccess: boolean; 
  error: null | string | unknown;
}

export const initOrder: OrderState = {
  name: "",
  phone: "",
  address: "",
  items: [],
  isLoading: false,
  isSuccess: false, 
  error: null,
};
