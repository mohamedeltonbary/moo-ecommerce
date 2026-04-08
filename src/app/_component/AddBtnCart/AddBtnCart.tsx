// "use client"
// const { addProductToCart } = useContext(CartContext);
"use client";

// import React, { useContext } from "react";
import React from "react";
import { toast } from "sonner";
// import { CartContext } from "@/context/cartcontext";
import { useCartContext } from "@/context/cartcontext";

const AddBtnCart = ({ id }: { id: string }) => {
  // const { addProductToCart } = useContext(CartContext) as {
  //   addProductToCart: (id: string) => Promise<unknown>;
  // };
  const { addProductToCart } = useCartContext();
  async function handleAddToCart() {
    const data = (await addProductToCart(id)) as {
      status?: string;
      message?: string;
    };

    console.log(data);

    if (data.status === "success") {
      toast.success(data.message, {
        duration: 1000,
        position: "top-center",
        style: {
          background: "#22c55e",
          color: "#fff",
          border: "none",
        },
      });
    } else {
      toast.error("fail to add", {
        duration: 1000,
        position: "top-center",
      });
    }
  }

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddBtnCart;
