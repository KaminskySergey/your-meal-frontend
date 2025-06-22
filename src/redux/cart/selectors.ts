import { useAppSelector } from "../../hooks/redux";

export const useCart = () => useAppSelector(state => state.cart.cart)