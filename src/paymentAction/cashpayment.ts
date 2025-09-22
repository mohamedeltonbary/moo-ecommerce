"use server"

import { getMyToken } from "@/utilites/token"
import axios from "axios"

export async function CashPaymentAction(id: string, value: object) {
    const token = await getMyToken()
    // console.log(token)
    if (!token) {
        throw new Error("login first")
    }
    const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${id}`, value, {
        headers: {
            token: token as string
        }
    });
    return data
}