import { getMyToken } from "@/utilites/token";
import axios from "axios";


export async function updateCArAction(id: string, count: number) {
    const token = await getMyToken()

    if (!token) {
        throw new Error("login first")
    }
    const values = {
        count: count
    }
    const { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, values,{
        headers: {
            token: token as string
        }
    })
    return data
}