import { AddToCartAction } from "@/cartAction/addtocart";
import { getUserCartAction } from "@/cartAction/getUserCart";
import { removeCArtItenAction } from "@/cartAction/removeCartItem";
import { Cart } from "@/types/cartType";

import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { updateCArAction } from "@/cartAction/updateCart";
import { clearCArtAction } from "@/cartAction/clearCart";

// export const CartContext = createContext({})
type CartContextType = {
  isloading: boolean;
  numOfCartItems: number;
  totalCartPrice: number;
  products: Cart["data"]["products"];
  cardId: string;
  addProductToCart: (id: string) => Promise<unknown>;
  removeCartItem: (id: string) => Promise<Cart | undefined>;
  updateCArt: (id: string, count: number) => Promise<unknown>;
  clearCart: () => Promise<void>;
  afterPayment: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);
export function useCartContext() {
  const context = React.useContext(CartContext);

  if (!context) {
    throw new Error("CartContext not found");
  }

  return context;
}

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isloading, setisloading] = useState(false);
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [totalCartPrice, settotalCartPrice] = useState(0);
  // const [products, setproducts] = useState([]);
  const [products, setproducts] = useState<Cart["data"]["products"]>([]);
  const [cardId, setCardId] = useState("");

  // const [products, setproducts] = useState<Cart["data"]["products"]>([]);

  async function addProductToCart(id: string) {
    //string دى انا اللى حاتطها لما لقيت فى خطا
    try {
      const data = await AddToCartAction(id);
      getUserCart();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function removeCartItem(id: string) {
    try {
      const data: Cart = await removeCArtItenAction(id);

      setNumOfCartItems(data.numOfCartItems);
      settotalCartPrice(data.data.totalCartPrice);
      setproducts(data.data.products);
      setisloading(false);
      return data;
    } catch (error) {
      throw new Error("login first");
    }
  }

  async function updateCArt(id: string, count: number) {
    try {
      const data = await updateCArAction(id, count);
      setNumOfCartItems(data.numOfCartItems);
      settotalCartPrice(data.data.totalCartPrice);
      setproducts(data.data.products);
      setisloading(false);
      return data;
    } catch (error) {
      throw new Error("login first");
    }
  }

  async function clearCart() {
    try {
      const data = await clearCArtAction();
      setNumOfCartItems(0);
      settotalCartPrice(0);
      setproducts([]);
    } catch (error) {
      throw new Error("login first");
    }
  }

  async function getUserCart() {
    setisloading(true);
    try {
      const data: Cart = await getUserCartAction();
      setNumOfCartItems(data.numOfCartItems);
      settotalCartPrice(data.data.totalCartPrice);
      setproducts(data.data.products);
      setisloading(false);
      setCardId(data.cartId);
    } catch (error) {
      console.log(error);
      setisloading(false);
    }
  }
  useEffect(() => {
    getUserCart();
  }, []);
  function afterPayment() {
    setCardId("");
    setNumOfCartItems(0);
    settotalCartPrice(0);
    setproducts([]);
  }

  return (
    <div>
      <CartContext.Provider
        value={{
          numOfCartItems,
          totalCartPrice,
          products,
          isloading,
          addProductToCart,
          removeCartItem,
          updateCArt,
          clearCart,
          afterPayment,
          cardId,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
