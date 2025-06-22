import { IProduct } from "./product";

export interface ICategory {
  id: number;
  name: string;
  products: IProduct[];
  createdAt: string;
  updatedAt: string;
}
