"use client";
import logo3 from "./../../../../public/freshcart-logo.svg";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useCartContext } from "@/context/cartcontext";
import { useActivePath } from "../ActiveLink/useActivePath";

const Navbar = () => {
  const { numOfCartItems } = useCartContext();
  const { data: session, status } = useSession();
  const { checkActive } = useActivePath();

  // انا بعمل كدا عشان سكل الايقونه بتاعت العربه
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    if (numOfCartItems === 0) return;
    setIsBouncing(true);
    const timer = setTimeout(() => setIsBouncing(false), 500); // وقت الأنيميشن
    return () => clearTimeout(timer);
  }, [numOfCartItems]);

  // حالة useState لظهور الـ logout
  const [showLogout, setShowLogout] = useState(false);

  if (status === "loading") return null;

  return (
    <div className="bg-white/90 backdrop-blur-md py-3 sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full md:w-[80%] mx-auto flex justify-between flex-col md:flex-row gap-4 text-center items-center">
        {/* right nav */}
        <ul className="flex flex-col md:flex-row gap-6 text-center items-center">
          {status === "authenticated" && (
            <>
              <li>
                <Link href="/">
                  <Image src={logo3} alt="photo" priority />
                </Link>
              </li>

              {/* Home */}
              <li className="group relative px-2 py-1">
                <Link
                  href="/"
                  className={`text-sm font-bold transition-colors duration-300 ${
                    checkActive("/")
                      ? "text-emerald-600"
                      : "text-gray-600 hover:text-emerald-500"
                  }`}
                >
                  Home
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-emerald-500 transition-all duration-300 origin-left
                    ${checkActive("/") ? "w-full scale-x-100" : "w-0 group-hover:w-full"}`}
                ></span>
              </li>

              {/* Products */}
              <li className="group relative px-2 py-1">
                <Link
                  href="/products"
                  className={`text-sm font-bold transition-colors duration-300
                    ${checkActive("/products") ? "text-emerald-600" : "text-gray-600 hover:text-emerald-500"}`}
                >
                  Products
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-emerald-500 transition-all duration-300 origin-left
                    ${checkActive("/products") ? "w-full scale-x-100" : "w-0 group-hover:w-full"}`}
                ></span>
              </li>

              {/* All Orders */}
              <li className="group relative px-2 py-1">
                <Link
                  href="/allorders"
                  className={`text-sm font-bold transition-colors duration-300
                    ${checkActive("/allorders") ? "text-emerald-600" : "text-gray-600 hover:text-emerald-500"}`}
                >
                  All Orders
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-emerald-500 transition-all duration-300 origin-left
                    ${checkActive("/allorders") ? "w-full scale-x-100" : "w-0 group-hover:w-full"}`}
                ></span>
              </li>

              {/* Categories */}
              <li className="group relative px-2 py-1">
                <Link
                  href="/categories"
                  className={`text-sm font-bold transition-colors duration-300
                    ${checkActive("/categories") ? "text-emerald-600" : "text-gray-600 hover:text-emerald-500"}`}
                >
                  Categories
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-emerald-500 transition-all duration-300 origin-left
                    ${checkActive("/categories") ? "w-full scale-x-100" : "w-0 group-hover:w-full"}`}
                ></span>
              </li>

              {/* Brands */}
              <li className="group relative px-2 py-1">
                <Link
                  href="/brands"
                  className={`text-sm font-bold transition-colors duration-300
                    ${checkActive("/brands") ? "text-emerald-600" : "text-gray-600 hover:text-emerald-500"}`}
                >
                  Brands
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-emerald-500 transition-all duration-300 origin-left
                    ${checkActive("/brands") ? "w-full scale-x-100" : "w-0 group-hover:w-full"}`}
                ></span>
              </li>
            </>
          )}
        </ul>

        {/* left nav */}
        <div className="flex flex-col md:flex-row gap-4 text-center items-center">
          {status === "unauthenticated" && (
            <div className="flex gap-3">
              <Link href="/login">
                <button className="px-5 py-1.5 rounded-full border border-emerald-500 text-emerald-600 font-medium hover:bg-emerald-50 transition-all duration-300 cursor-pointer">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="px-5 py-1.5 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-600 shadow-md shadow-emerald-100 transition-all duration-300 cursor-pointer">
                  Register
                </button>
              </Link>
            </div>
          )}

          {status === "authenticated" && (
            <div className="flex items-center gap-6">
              {/* Cart Icon */}
              {/* <Link
                href="/cart"
                className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                  checkActive("/cart")
                    ? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500"
                    : "text-gray-600 hover:bg-gray-50 hover:text-emerald-500"
                }`}
              >
                <i className="fa-solid fa-cart-shopping text-xl"></i>
                {numOfCartItems > 0 && (
                  <span className="bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] px-1 rounded-full absolute -top-1 -right-1 flex items-center justify-center border-2 border-white font-bold">
                    {numOfCartItems}
                  </span>
                )}
              </Link> */}

              <Link
                href="/cart"
                className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 
                  ${isBouncing ? "animate-bounce" : ""} 
                  ${
                  checkActive("/cart")
                  ? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500"
                 : "text-gray-600 hover:bg-gray-50 hover:text-emerald-500"
                  }`}
              >
                <i className="fa-solid fa-cart-shopping text-xl"></i>
                {/* الرقم (Badge) */}
                {numOfCartItems > 0 && (
                  <span className="bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] px-1 rounded-full absolute -top-1 -right-1 flex items-center justify-center border-2 border-white font-bold">
                    {numOfCartItems}
                  </span>
                )}
              </Link>

              {/* User Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-2 py-1 cursor-pointer"
                  onClick={() => setShowLogout(!showLogout)}
                >
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold shadow-sm">
                    {session?.user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden md:block text-sm font-bold text-gray-700">
                    {session?.user?.name.toUpperCase()}
                  </span>
                  <i
                    className={`fa-solid fa-chevron-down text-[10px] text-gray-400 transition-transform duration-300 ${
                      showLogout ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>

                {/* Dropdown Menu */}
                {showLogout && (
                  <div className="absolute right-0 top-full mt-2 w-48 rounded-2xl border border-gray-100 bg-white shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <button
                      className="w-full text-left px-4 py-3 text-sm text-red-500 font-bold hover:bg-red-50 transition-colors cursor-pointer flex items-center gap-2"
                      onClick={() => signOut({ callbackUrl: "/login" })}
                    >
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
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
  );
};

export default Navbar;
