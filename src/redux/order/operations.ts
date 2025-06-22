import { createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder } from "../../api/order";

export interface IOrderPayload {
    name: string;
    phone: string;
    address: string;
    items: { productId: string; quantity: number }[];
  }

export const fetchOrder = createAsyncThunk(
  "order/createOrder",
  async (credentials: IOrderPayload, thunkAPI) => {
    try {
      const data = await createOrder(credentials);
      return data;
    } catch (error: unknown) {
      const err = error as Error;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
