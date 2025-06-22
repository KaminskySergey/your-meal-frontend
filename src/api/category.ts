import { ICategory } from "../types/category";
import api from "./axios";

export const getCategory = async (): Promise<ICategory[]> => {
  const response = await api.get("/category");
  return response.data;
};
