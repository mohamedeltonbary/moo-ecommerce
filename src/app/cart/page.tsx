"use client";
// import React, { useContext } from "react";
import React from "react";
// import { CartContext } from "@/context/cartcontext";
import { useCartContext } from "@/context/cartcontext";

import { ProductCart } from "../../types/cartType";
import Image from "next/image";
import Loading from "../loading";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";

const Cart = () => {
const {
  isloading,
  products,
  totalCartPrice,
  removeCartItem,
  updateCArt,
  clearCart,
} = useCartContext();

  async function removeItem(id: string) {
    const data = await removeCartItem(id);
    if (data?.status === "success") {
      toast.success("success to remove", {
        duration: 1000,
        position: "top-center",
        style: {
          background: "#f59e0b",
          color: "#fff",
        },
      });
    } else {
      toast.error("fail remove", {
        duration: 1000,
        position: "top-center",
        style: {
          background: "#ef4444",
          color: "#fff",
          border: "none",
        },
      });
    }
  }

  async function updateCartItem(id: string, count: number) {
    const data = await updateCArt(id, count);

    if ((data as { status?: string })?.status === "success") {
      if (count === 0) {
        toast.success("Item removed from cart", {
          duration: 2000,
          position: "top-center",
          style: {
            background: "#f59e0b",
            color: "#fff",
          },
        });
      } else if (count > 0) {
        toast.success("Item quantity updated", {
          duration: 2000,
          position: "top-center",
          style: {
            background: "#22c55e",
            color: "#fff",
            border: "none",
          },
        });
      }
    } else {
      toast.error("Failed to update cart", {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#ef4444",
          color: "#fff",
          border: "none",
        },
      });
    }
  }

  if (isloading) {
    return <Loading />;
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-50 text-center">
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

  return (
    <div className="w-full md:w-[80%] mx-auto my-10 bg-slate-100 gap-2">
      <div className="p-5">
        <h1 className="font-bold">Shop Cart</h1>
        <p className="text-emerald-500 my-2">Total Price : {totalCartPrice}</p>

        <div className="flex justify-between mb-4">
          <Button
            onClick={clearCart}
            className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
          >
            Clear Cart
          </Button>

          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer">
            <Link href="/payment">Payment</Link>
          </Button>
        </div>

        <div className="allproducts">
          {products.map((product: ProductCart, idx: number) => (
            <div
              key={idx}
              className="flex items-center justify-between py-3 border-b-[1px] border-green-700"
            >
              <div className="flex items-center gap-5">
                <div>
                  <Image
                    alt=""
                    src={product.product.imageCover}
                    height={200}
                    width={200}
                  />
                </div>

                <div>
                  <h1>{product.product.title}</h1>
                  <p className="my-3 text-green-600">{product.price} EGP</p>

                  <Button
                    onClick={() => removeItem(product.product.id)}
                    variant="outline"
                    className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 hover:text-red-700 cursor-pointer"
                  >
                    Remove
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="w-8 h-8 p-0 text-lg font-bold cursor-pointer"
                  onClick={() =>
                    updateCartItem(product.product.id, product.count - 1)
                  }
                >
                  -
                </Button>

                <span className="min-w-6 text-center font-medium">
                  {product.count}
                </span>

                <Button
                  variant="outline"
                  className="w-8 h-8 p-0 text-lg font-bold cursor-pointer"
                  onClick={() =>
                    updateCartItem(product.product.id, product.count + 1)
                  }
                >
                  +
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
