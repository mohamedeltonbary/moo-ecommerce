"use client"
import { useSession } from "next-auth/react"
import { SessionProvider } from "next-auth/react"
import React from 'react'
import CartContextProvider from "@/context/cartcontext"

  const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <SessionProvider>
                <CartContextProvider> 
                {children}
                </CartContextProvider> 
            </SessionProvider>
        </div>
    )
}

export default Providers 
