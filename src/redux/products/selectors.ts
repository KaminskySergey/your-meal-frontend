import { useAppSelector } from "../../hooks/redux";

export const useProducts = () => useAppSelector(state => state.products.items)
export const useProductsLoading = () => useAppSelector(state => state.products.isLoading)
export const useProductsError = () => useAppSelector(state => state.products.error)