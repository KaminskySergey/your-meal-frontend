import { useAppSelector } from "../../hooks/redux"

export const useCategories = () => useAppSelector(state => state.categories.items)
export const useCategoriesLoading = () => useAppSelector(state => state.categories.isLoading)
export const useCategoriesError = () => useAppSelector(state => state.categories.error)