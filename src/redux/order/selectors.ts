import { useAppSelector } from "../../hooks/redux"

export const useOrder = () => useAppSelector(state => state.order.items)
export const useOrderLoading = () => useAppSelector(state => state.order.isLoading)
export const useOrderError = () => useAppSelector(state => state.order.error)
export const useOrderSuccess = () => useAppSelector(state => state.order.isSuccess)