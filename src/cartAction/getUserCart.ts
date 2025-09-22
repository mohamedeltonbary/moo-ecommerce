"use server"

import { getMyToken } from "@/utilites/token"


export async function getUserCartAction() {
    const token = await getMyToken()
    if (!token) {
        throw new Error("no token found")
    }
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
        // method: "GET",
        headers: {
            token: token as string,
        },
        // cache: "no-store"
    })
    const data = await response.json()
    return data
}