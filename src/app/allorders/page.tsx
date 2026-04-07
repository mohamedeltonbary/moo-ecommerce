import { getuserorder } from "@/apis/getuserorders";
import { CartItem, Order, Orders } from "@/types/order.type";
import Image from "next/image";
import React from "react";

const AllOrder = async () => {
  // نفترض أن getuserorder راجع كائن فيه data من نوع Orders
  const response: { data: Orders } = await getuserorder();
  const orders: Orders = response.data;

  console.log("orders array:", orders);

  return (
    <div className="md:w-[80%] mx-auto p-5">
      <h1
        className="text-3xl mb-6 text-center  pb-2"
        style={{
          color: "rgb(79, 167, 79)",
          fontFamily: "Segoe UI Semibold, sans-serif",
          fontWeight: 600, // Semibold
        }}
      >
        All Orders
      </h1>
      <div className="space-y-8">
        {orders.map((order: Order, idx: number) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order #{idx + 1}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 border-b pb-4">
              {order.cartItems.map((item: CartItem, i: number) => (
                <div key={i} className="text-center">
                  <div className="w-full aspect-square overflow-hidden rounded-xl border">
                    <Image
                      src={item.product.imageCover}
                      alt={item.product.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="mt-2 text-sm font-medium text-gray-700 line-clamp-1">
                    {item.product.title}
                  </h3>
                </div>
              ))}
            </div>
            <div className="mt-4 text-gray-700">
              <p>
                <span className="font-semibold">Payment Method:</span>{" "}
                {order.paymentMethodType}
              </p>
              <p>
                <span className="font-semibold">Total Price:</span>{" "}
                {order.totalOrderPrice} EGP
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrder;
