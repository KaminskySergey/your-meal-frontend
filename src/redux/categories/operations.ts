import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory } from "../../api/category";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const data  = await getCategory();
      return data;
    } catch (error: unknown) {
        const err = error as Error; 
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
