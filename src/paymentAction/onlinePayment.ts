"use server"

import { getMyToken } from "@/utilites/token"
import axios from "axios"

export async function onlinePaymentAction(id: string, value: object) {
    const token = await getMyToken()
    // console.log(token)
    if (!token) {
        throw new Error("login first")
    }
    const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`, value, {
        headers: {
            token: token as string
        }
    });
    return data
} 