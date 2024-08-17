import axiosInstance from "../api/axiosIntanse"
import { ContactInterface } from "../interfaces/Contact"

export async function SendEmail(
    data: ContactInterface
) {
  try {
    const response = await axiosInstance.post("/contact", data)
    return response
  } catch (error) {
    throw error
  }
}
