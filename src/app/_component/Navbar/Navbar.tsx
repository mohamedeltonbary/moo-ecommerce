
"use client"
import React, { useContext } from 'react'
import logo from "./../../../../public/slider/download.jpeg"
import logo2 from "./../../../../public/slider/images (2).jpeg"
import logo3 from "./../../../../public/freshcart-logo.svg"
import Link from 'next/link'
import Image from 'next/image'
import { signOut, useSession } from "next-auth/react"
import { Badge } from '@/components/ui/badge'
import { CartContext } from '@/context/cartcontext'

const Navbar = () => {
    const { numOfCartItems } = useContext(CartContext);
    //  const x = useSession()
    //     console.log(x); 
    const { data: session, status } = useSession()
    return (
        <div>
            <div className='bg-blue-100 py-4'>
                {/* right nav */}
                <div className=' w-full md:w-[80%] mx-auto flex justify-between  flex-col md:flex-row gap-4 text-center items-center '>
                    <ul className='flex flex-col md:flex-row gap-4 text-center  items-center'>
                        {status === "authenticated" && <>
                            <li>
                                <Link href="/">
                                    {/* <img src={logo} alt="photo"/> */}
                                    <Image src={logo3} alt="photo" />
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="home">
                                    <h1>Home</h1>
                                </Link>
                            </li> */}
                     

                            <li >
                                <Link href="cart" className="flex flex-col items-center">
                                    <h1 className="relative">
                                        Cart
                                        <Badge className="absolute -top-4 -right-4">
                                            {numOfCartItems}
                                        </Badge>
                                    </h1>
                                </Link>
                            </li>
                            <li>
                                <Link href="products">
                                    <h1>Products</h1>
                                </Link>
                            </li>
                            <li>
                                <Link href="/allorders">
                                    <h1>All Orders</h1>
                                </Link>
                            </li>
                            <li>
                                <Link href="categories">
                                    <h1>Categories</h1>
                                </Link>
                            </li>
                            <li>
                                <Link href="brands">
                                    <h1>Brands</h1>
                                </Link>
                            </li>
                        </>}
                    </ul>

                    {status === "unauthenticated" && <>
                        <Image src={logo2} width={50} height={50} alt="photo" className='rounded-full' />

                    </>}

                    {status === "loading" && <>Loading...</>}

                    {/* lift nav */}
                    <div className='flex flex-col md:flex-row gap-3 text-center items-center '  >
                        <div>
                            <i className='fab  fa-facebook-f mx-2'></i>
                            <i className='fab  fa-youtube mx-2'></i>
                            <i className='fab  fa-twitter mx-2'></i>
                            <i className="fab fa-whatsapp mx-2"></i>
                            <i className="fab fa-instagram mx-2"></i>

                        </div>
                        {status === "unauthenticated" && <>
                            <div>
                                <Link href="/login">
                                    Login
                                </Link>
                            </div>
                            <div>
                                <Link href="/register">
                                    Register
                                </Link>
                            </div>

                        </>}

                        {status === "authenticated" && <>
                            <div>
                                <button className="cursor-pointer " onClick={() => {
                                    signOut({
                                        callbackUrl: "/login"
                                    })
                                }}>
                                    logout
                                </button>
                            </div>
                        </>}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar   
