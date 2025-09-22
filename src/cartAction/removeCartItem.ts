"use server"

import { getMyToken } from "@/utilites/token"
import axios from "axios"

 export async function removeCArtItenAction(id:string){
    const token = await getMyToken()
    if(!token){
        throw new Error("login first")
    }
    const{data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
        headers:{
            token : token as string
        }
    })
    return data
}