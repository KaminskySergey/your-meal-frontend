import { createSlice } from "@reduxjs/toolkit";
import { initCategories } from "./init-categories";
import { fetchCategories } from "./operations";

export const categorySlice = createSlice({
  name: "categories",
  initialState: initCategories,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchCategories.pending, (state, _) => {
        // handlePending();
        state.isLoading = true;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        // handleRejected();
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        
        state.items = [...action.payload];
      }),
});
