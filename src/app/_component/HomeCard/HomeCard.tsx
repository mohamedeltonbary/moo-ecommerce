
//  "use client";
"use server" 
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Product } from '@/types/product.type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddBtnCart from '../AddBtnCart/AddBtnCart'

const HomeCard = ({ product }: { product: Product }) => {
    return (

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-3 ">

            <div className="inner">

                <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-400 bg-white">
                    <Link href={`/productdetails/${product.id}`}>
                        <CardHeader className="p-0">
                            <Image
                                src={product.imageCover}
                                alt={product.title}
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                        </CardHeader>
                        <CardContent className="p-4">
                            <p className="font-bold text-emerald-600 line-clamp-1 mb-1 text-sm uppercase tracking-wide">
                                {product.category.name}
                            </p>
                            <p className="line-clamp-1 text-gray-800 font-medium">{product.title}</p>
                        </CardContent>
                        <CardFooter className="p-4 flex justify-between items-center border-t border-gray-200">
                            <span className="text-emerald-600 font-semibold">{product.price} EGP</span>
                            <span className="flex items-center text-yellow-400 font-medium">
                                {product.ratingsAverage}
                                <i className="fa-solid fa-star ml-1"></i>
                            </span>
                        </CardFooter>
                    </Link>
                    <div className="flex justify-center -mb-4">
                        {/* <button className="w-[90%] flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
                            Add to Cart
                        </button> */}
                        <AddBtnCart id={product.id} />
                    </div>
                </Card>
            </div>

        </div >


    )
}

export default HomeCard
