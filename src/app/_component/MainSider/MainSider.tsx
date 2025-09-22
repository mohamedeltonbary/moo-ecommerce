
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


const MainSider = () => {
    return (
        <div>
            <div className='flex pb-8 -m-4'>
                {/* الجزء اللى ع اليمين */}
                <div className='w-1/3 '>
                    <Image src={imgslider} alt='sider' className='w-full   object-fit h-[200px]' />
                    <Image src={imgslider3} alt='sider' className='w-full  object-fit h-[200px]' />

                </div>
                {/* الجزء اللى ع الشمال */}
                <div className='w-2/3 '>
                    <Swiper 
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        loop={true}
                    >
                            <SwiperSlide>
                                <Image src={imgslider4} alt='sider' className='w-full h-[400px] object-fit' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={imgslider2} alt='sider' className='w-full h-[400px] object-fit' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={imgslider6} alt='sider' className='w-full h-[400px] object-fit' />
                            </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default MainSider
