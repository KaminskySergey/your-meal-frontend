import { createSlice } from "@reduxjs/toolkit";
import { initOrder } from "./init-order";
import { fetchOrder } from "./operations";

export const orderSlice = createSlice({
  initialState: initOrder,
  name: "order",
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchOrder.pending, (state, _) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isSuccess = true;
        
        state.name = action.payload.name;
        state.phone = action.payload.phone;
        state.address = action.payload.address;
        state.items = action.payload.items;
      }),
});
