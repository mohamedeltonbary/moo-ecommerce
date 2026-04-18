"use server"
import { Card, CardContent } from '@/components/ui/card'
import { Product } from '@/types/product.type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddBtnCart from '../AddBtnCart/AddBtnCart'

const HomeCard = ({ product }: { product: Product }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-3">
            <div className="inner h-full">
                <Card className="group h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border-none flex flex-col">
                    
                    {/* الجزء العلوي: الصورة */}
                    <Link href={`/productdetails/${product._id}`} className="relative block overflow-hidden aspect-[4/5]">
                        <Image
                            src={product.imageCover}
                            alt={product.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Badge اختيارية لو المنتج عليه خصم أو Best Seller */}
                        {product.sold > 500 && (
                            <div className="absolute top-2 left-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">
                                BEST SELLER
                            </div>
                        )}
                    </Link>

                    {/* محتوى الكارد */}
                    <CardContent className="p-4 flex flex-col flex-grow">
                        {/* التصنيف والبراند */}
                        <div className="flex justify-between items-center mb-2">
                            <p className="font-bold text-emerald-600 text-[11px] uppercase tracking-wider">
                                {product.category.name}
                            </p>
                            <span className="text-[10px] text-gray-400 font-medium">
                                {product.brand?.name}
                            </span>
                        </div>

                        {/* عنوان المنتج */}
                        <Link href={`/productdetails/${product._id}`}>
                            <h3 className="line-clamp-2 text-gray-800 font-semibold text-sm mb-3 h-10 group-hover:text-emerald-600 transition-colors">
                                {product.title}
                            </h3>
                        </Link>

                        {/* السعر والتقييم - في سطر واحد */}
                        <div className="flex justify-between items-center mb-4 mt-auto">
                            <div className="flex flex-col">
                                <span className="text-slate-900 font-bold text-lg">
                                    {product.price} 
                                    <span className="text-[10px] ml-1 font-medium text-gray-500">EGP</span>
                                </span>
                            </div>
                            
                            <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
                                <span className="text-yellow-500 font-bold text-xs">{product.ratingsAverage}</span>
                                <i className="fa-solid fa-star text-[10px] text-yellow-500 ml-1"></i>
                            </div>
                        </div>

                        {/* زرار الإضافة للعربة - تحتهم بعرض كامل */}
                        <div className="w-full pt-2 border-t border-gray-50">
                            <AddBtnCart id={product._id} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default HomeCard