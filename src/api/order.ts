import { IOrderPayload } from "../redux/order/operations"
import api from "./axios"

export const createOrder = async (order: IOrderPayload) => {
  const response = await api.post(`/order`, order)
  return response.data
}