import { ICategory } from "../../types/category";

export interface CategoriesState {
    items: ICategory[]
    isLoading: boolean
    error: string | null | unknown
  }

export const initCategories: CategoriesState = {
  items: [],
  isLoading: false,
  error: null as string | null,
};
