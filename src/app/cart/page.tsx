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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Shopping Cart
              </h1>
              <p className="text-gray-500 text-sm">
                You have {products.length} items
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                Total Price
              </p>
              <p className="text-2xl font-black text-emerald-600">
                {totalCartPrice} EGP
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="p-4 bg-gray-50/50 flex justify-between gap-4">
            <Button
              onClick={clearCart}
              variant="ghost"
              className="text-red-500 hover:text-red-600 hover:bg-red-50 cursor-pointer"
            >
              Clear Cart
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 px-8">
              <Link href="/payment">
              Checkout Now</Link>
            </Button>
          </div>

          {/* Product List */}
          <div className="divide-y divide-gray-100">
            {products.map((product: ProductCart, idx: number) => (
              <div
                key={idx}
                className="p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-gray-50/50 transition-colors"
              >
                {/* Image */}
                <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-100">
                  <Image
                    alt={product.product.title}
                    src={product.product.imageCover}
                    height={100}
                    width={100}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-semibold text-gray-800 line-clamp-1">
                    {product.product.title}
                  </h3>
                  <p className="text-emerald-600 font-bold mt-1">
                    {product.price} EGP
                  </p>
                  <button
                    onClick={() => removeItem(product.product.id)}
                    className=" mt-2 text-sm text-red-400 hover:text-red-600 font-medium flex items-center gap-1 transition-all cursor-pointer"
                  >
                    <i className="fa-regular fa-trash-can text-xs"></i>
                    Remove
                  </button>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200 ">
                  <Button
                    variant="ghost"
                    className="w-8 h-8 rounded-full p-0 hover:bg-white shadow-none cursor-pointer"
                    onClick={() =>
                      updateCartItem(product.product.id, product.count - 1)
                    }
                  >
                    -
                  </Button>
                  <span className="w-10 text-center font-bold text-sm">
                    {product.count}
                  </span>
                  <Button
                    variant="ghost"
                    className="w-8 h-8 rounded-full p-0 hover:bg-white shadow-none cursor-pointer"
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
    </div>
  );
};

export default Cart;
