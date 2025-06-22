import api from "./axios"

export const getProducts = async (categoryId: string) => {
  const response = await api.get(`/products/category/${categoryId}`)
  return response.data
}