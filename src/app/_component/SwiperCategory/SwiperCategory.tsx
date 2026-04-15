
"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image'
import React from 'react'

import imgslider from './../../../../public/slider/slider-image-2.jpeg'
import imgslider2 from './../../../../public/slider/grocery-banner-2.jpeg'
import imgslider3 from './../../../../public/slider/slider-2.jpeg'
import imgslider4 from './../../../../public/slider/slider-image-3.jpeg'
import imgslider5 from './../../../../public/slider/slider-image-1.jpeg' 
import imgslider6 from './../../../../public/slider/grocery-banner.png'
import { Category } from '@/types/product.type';

const SwiperCategory = ({ categories }:{categories:Category[]}) => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                
            >

                {categories.map((category, idx) => 
                    <SwiperSlide key={idx}>
                        <Image width={500} height={500} src={category.image} alt="photo" className='w-full h-[200px] object-cover'  />
                   

                        <p className='my-2 text-2xl text-center'>{category.name}</p>
                    </SwiperSlide>
                )}
                

            </Swiper>
        </div>
    )
}

export default SwiperCategory
