"use client";
// import React, { useContext } from "react";
import logo2 from "./../../../../public/slider/images (2).jpeg";
import logo3 from "./../../../../public/freshcart-logo.svg";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
// import { CartContext } from "@/context/cartcontext";
// import { usePathname } from 'next/navigation'

import React, { useState } from "react";
import { useCartContext } from "@/context/cartcontext";
import { useActivePath } from "../ActiveLink/useActivePath";
const Navbar = () => {
  // const { numOfCartItems } = useContext(CartContext);
  const { numOfCartItems } = useCartContext();
  // const pathname = usePathname()
  //  const x = useSession()
  //     console.log(x);
  // const { status } = useSession();
  const { data: session, status } = useSession();

  const { checkActive } = useActivePath();

  // حالة useState لظهور الـ logout
  const [showLogout, setShowLogout] = useState(false);

  if (status === "loading") return null;
  return (
    // <div >
    <div className="bg-blue-100 py-4 sticky top-0 z-50 shadow-md ">
      {/* right nav */}
      <div className=" w-full md:w-[80%] mx-auto flex justify-between  flex-col md:flex-row gap-4 text-center items-center ">
        <ul className="flex flex-col md:flex-row gap-4 text-center  items-center">
          {status === "authenticated" && (
            <>
              <li>
                <Link href="/">
                  {/* <img src={logo} alt="photo"/> */}
                  <Image src={logo3} alt="photo" />
                </Link>
              </li>
              {/* home */}
              <li className="group relative px-2 py-0.5">
                <Link
                  href="/"
                  className={`transition-colors duration-300 ${checkActive("/") ? "text-blue-600" : "text-black hover:text-blue-500"}`}
                >
                  <h1>Home</h1>
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 origin-left
                    ${checkActive("/") ? "w-full scale-x-100" : "w-0 group-hover:w-full"}`}
                ></span>
              </li>
              {/* cart */}
              {/* <li className="group relative px-2 py-0.5">
                <Link
                  href="/cart"
                  className={`flex items-center gap-1 transition-colors duration-300 ${
                    checkActive("/cart")
                      ? "text-blue-600"
                      : "text-black hover:text-blue-500"
                  }`}
                >
                  Cart
                  {numOfCartItems > 0 && (
                    <span className="bg-red-500 text-white text-xs px-1.5 rounded-full absolute -top-2 -right-2">
                      {numOfCartItems}
                    </span>
                  )}
                </Link>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 origin-left
                 ${
                   checkActive("/cart")
                     ? "w-full scale-x-100"
                     : "w-0 group-hover:w-full"
                 }`}
                ></span>
              </li> */}

              <li className="group relative px-2 py-0.5 ">
                <Link
                  href="/products"
                  className={`transition-colors duration-300
                         ${
                           checkActive("/products")
                             ? "text-blue-600"
                             : "text-black hover:text-blue-500"
                         }`}
                >
                  {/* <h1 className="relative">Products</h1> */}
                  Products
                </Link>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 origin-left
                    ${checkActive("/products") ? "w-full scale-x-100" : "w-0 group-hover:w-full"}
                    `}
                ></span>
              </li>
              {/* alloredrs */}
              <li className="group relative px-2 py-0.5">
                <Link
                  href="/allorders"
                  className={`transition-colors duration-300
                         ${
                           checkActive("/allorders")
                             ? "text-blue-600"
                             : "text-black hover:text-blue-500"
                         }`}
                >
                  <h1>All Orders</h1>
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 origin-left
                    ${checkActive("/allorders") ? "w-full scale-x-100" : "w-0 group-hover:w-full"}
                    `}
                ></span>
                {/* Categories */}
              </li>
              <li className="group relative px-2 py-0.5">
                <Link
                  href="/categories"
                  className={`transition-colors duration-300
                         ${
                           checkActive("/categories")
                             ? "text-blue-600"
                             : "text-black hover:text-blue-500"
                         }`}
                >
                  <h1>Categories</h1>
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 origin-left
                    ${checkActive("/categories") ? "w-full scale-x-100" : "w-0 group-hover:w-full"}
                    `}
                ></span>
              </li>
              {/* brands */}
              <li className="group relative px-2 py-0.5">
                <Link
                  href="/brands"
                  className={`transition-colors duration-300
                         ${
                           checkActive("/brands")
                             ? "text-blue-600"
                             : "text-black hover:text-blue-500"
                         }`}
                >
                  <h1>Brands</h1>
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 origin-left
                    ${checkActive("/brands") ? "w-full scale-x-100" : "w-0 group-hover:w-full"}
                    `}
                ></span>
              </li>
            </>
          )}
        </ul>

        {status === "unauthenticated" && (
          <>
            <Image
              src={logo2}
              width={50}
              height={50}
              alt="photo"
              className="rounded-full"
            />
          </>
        )}

        {/* {status === "loading" && <>Loading...</>} */}

        {/* lift nav */}
        {/* left nav */}
        <div className="flex flex-col md:flex-row gap-4 text-center items-center">
          {status === "unauthenticated" && (
            <div className="flex gap-3">
              <Link href="/login">
                <button className="px-3 py-1 rounded-md border border-green-400 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer">
                  Login
                </button>
              </Link>

              <Link href="/register">
                <button className="px-3 py-1 rounded-md border border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer">
                  Register
                </button>
              </Link>
            </div>
          )}

          {status === "authenticated" && (
            <div className="flex items-center gap-5">
              <Link
                href="/cart"
                className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                  checkActive("/cart")
                    ? "border-emerald-500 bg-emerald-50 text-emerald-600"
                    : "border-gray-200 text-gray-700 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-500"
                }`}
              >
                <i className="fa-solid fa-cart-shopping text-[18px]"></i>

                {numOfCartItems > 0 && (
                  <span className="bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] px-1 rounded-full absolute -top-1 -right-1 flex items-center justify-center">
                    {numOfCartItems}
                  </span>
                )}
              </Link>

              <div className="relative group">
                <button
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
                  onClick={() => setShowLogout(!showLogout)} // تغيير حالة ظهور الـ Logout عند النقر
                >
                  <span className="flex items-center justify-center w-7 h-7 bg-emerald-500 text-white rounded-full text-lg font-bold">
                    {session?.user?.name?.charAt(0).toUpperCase()}
                  </span>

                  <span className="ml-2 text-sm text-gray-700 ">
                    {session?.user?.name.toUpperCase()}
                  </span>

                  {/* تحسين شكل السهم */}
                  <i
                    className={`fa-solid fa-chevron-down text-[12px] transform transition-transform duration-200 ${showLogout ? "rotate-180" : ""}`}
                  ></i>
                </button>

                {/* Dropdown -  */}
                {showLogout && (
                  <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-gray-100 bg-white shadow-lg opacity-100 visible translate-y-0 transition-all duration-200 z-50">
                    <button
                      className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 rounded-xl cursor-pointer"
                      onClick={() => {
                        signOut({ callbackUrl: "/login" });
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
