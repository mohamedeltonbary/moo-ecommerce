"use server"

import { getMyToken } from "@/utilites/token"
import axios from "axios"
import { headers } from "next/headers"


export async function AddToCartAction(id: string) {

    const token = await getMyToken()
    console.log("Token before request:", token)
    const values = {
        productId: id,
    }
    const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", values, {
        headers: {
            token: token as string,
        }
    }
    )

    return data

}