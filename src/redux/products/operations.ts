import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/product";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (categoryId: string, thunkAPI) => {
    try {
      const data  = await getProducts(categoryId);
      return data;
    } catch (error: unknown) {
        const err = error as Error; 
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
