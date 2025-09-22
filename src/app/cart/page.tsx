"use client"
import React, { useContext } from 'react';
import { CartContext } from '@/context/cartcontext';

import { ProductCart } from '../../types/cartType';
import Image from 'next/image';
import Loading from '../loading';
import { Product } from './../../types/product.type';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Link from 'next/link';
import { getMyToken } from '@/utilites/token';



const Cart = () => {

  const { isloading, products, totalCartPrice, removeCartItem, updateCArt, clearCart } = useContext(CartContext)

  async function removeItem(id: string) {
    const data = await removeCartItem(id)
    if (data.status === "success") {
      toast.success("success to remove", {
        duration: 1000,
        position: "top-center"
      })
    }
    else {
      toast.error("fail remove", {
        duration: 1000,
        position: "top-center"
      })


    }

  }

  async function updateCartItem(id: string, count: number) {
    const data = await updateCArt(id, count)
    if (data.status === "success") {
      toast.success("success to remove", {
        duration: 1000,
        position: "top-center"
      })
    }
    else {
      toast.error("fail remove", {
        duration: 1000,
        position: "top-center"
      })


    }

  }
  if (isloading) {
    return <Loading />

  }
//  if (products.length === 0) {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <h1 className="font-bold text-orange-700 text-2xl md:text-3xl bg-orange-50 px-4 py-2 rounded">
//         You don't have items in your cart
//       </h1>
//     </div>
//   );
// }
  if (products.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50 text-center">
      {/* أيقونة سلة فاضية */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 text-orange-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h18l-1.5 9H4.5L3 3zM3 3l1.5 9h15L21 3M9 14v4m6-4v4"
        />
      </svg>

      <h1 className="text-2xl font-bold text-orange-700">
        Your cart is empty
      </h1>
      <p className="text-gray-500 mt-2">
        Browse products and add items to your cart.
      </p>
    </div>
  );
}

  // const tkn = await getMyToken()
  // console.log(tkn);



  return (
    <div className="w-full md:w-[80%] mx-auto my-10 bg-slate-100 gap-2  ">
      <div className='p-5'>
        <h1 className="font-bold">Shop Cart</h1>
        <p className='text-emerald-500 my-2'>Total Price : {totalCartPrice}</p>
        <Button onClick={clearCart} className="mb-2">Clear Cart</Button>
        <div>
          <Button className='mb-2'>
          <Link href={"/payment"}>Payment</Link>
        </Button>
        </div>

        <div className='allproducts'>
          {products.map(function (product: ProductCart, idx: number) {
            console.log(product); // 👈 هنا تقدر تشوف كل بيانات المنتج
            console.log(product.product.imageCover); // 👈 هنا تشوف رابط الصورة
            return <div key={idx} className='flex items-center justify-between py-3 border-b-[1px] border-green-700'>

              <div className=' flex items-center  gap-5'>
                <div>
                  <Image alt="" src={product.product.imageCover} height={200} width={200} />

                </div>
                <div>
                  <h1>{product.product.title}</h1>
                  <p className='my-3 text-green-600'>{product.price} EGP</p>
                  <Button onClick={() => removeItem(product.product.id)} className=''>Remove</Button>
                </div>

              </div>

              <div className='flex items-center  gap-3'>
                <Button onClick={() => updateCartItem(product.product.id, product.count + 1)}>+</Button>
                <p>{product.count}</p>
                <Button onClick={() => updateCartItem(product.product.id, product.count - 1)}>-</Button>
              </div>


            </div>
          })}
        </div>

      </div>


    </div>);

};
export default Cart;

