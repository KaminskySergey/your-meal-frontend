import { createSlice } from "@reduxjs/toolkit";
import { initCart } from "./init-cart";

import { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/product";

// type QuantityPayload = {
//   productId: string;
//   operation: "increment" | "decrement";
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState: initCart,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        return;
      }

      state.cart.push({ ...action.payload, quantity: 1 });
    },
    updateCartQuantity(
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      const item = state.cart.find((i) => i.id === productId);

      if (item) {
        if (quantity <= 0) {
          state.cart = state.cart.filter((i) => i.id !== productId);
        } else {
          item.quantity = quantity;
        }
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, updateCartQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
