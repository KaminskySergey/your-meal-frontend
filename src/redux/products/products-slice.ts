import { createSlice } from "@reduxjs/toolkit";
import { initProducts } from "./init-products";

import { fetchProducts } from './operations';

export const productsSlice = createSlice({
  name: "products",
  initialState: initProducts,
  reducers: {},
  extraReducers: (builder) => 
  builder
      //========fetchAllTasks
      .addCase(fetchProducts.pending, (state, _) => {
        // handlePending();
        state.isLoading = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // handleRejected();
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.items = [...action.payload];
      })
});
