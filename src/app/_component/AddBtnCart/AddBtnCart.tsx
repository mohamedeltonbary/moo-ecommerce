// "use client"


"use client"

import React, { useContext } from 'react'
// import { AddToCart } from "@/cartAction/addtocart"
import { toast } from "sonner";

import { CartContext } from '@/context/cartcontext';

const AddBtnCart = ({ id }:{id:string}) => {
    const {addProductToCart} = useContext(CartContext)
    async function handleAddToCart() {
        const data = await addProductToCart(id)
        console.log(data);
        if (data.status === "success") {
            toast.success(data.message, {
                duration: 1000,
                position: "top-center",
            })
        }
        else {
            toast.error("fail to add", {
                duration: 1000,
                position: "top-center",
            })
        }
    }
    return (
        <div>
            <button onClick={handleAddToCart} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>Add to Cart</button>

        </div>
    )
}

export default AddBtnCart
