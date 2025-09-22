"use server"

import { getMyToken } from "@/utilites/token"
import axios from "axios"
import { jwtDecode } from "jwt-decode"


export async function getuserorder() {
    const token = await getMyToken()
    const { id } = jwtDecode(token)
    if (!token) {
        throw new Error("not found")
    }
    const data = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
    return data
}