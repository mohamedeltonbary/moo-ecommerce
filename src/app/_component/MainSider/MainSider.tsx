
// "use client";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import Image from 'next/image'
// import React from 'react'

// import imgslider from './../../../../public/slider/slider-image-2.jpeg'
// import imgslider2 from './../../../../public/slider/grocery-banner-2.jpeg'
// import imgslider3 from './../../../../public/slider/slider-2.jpeg'
// import imgslider4 from './../../../../public/slider/slider-image-3.jpeg'
// import imgslider5 from './../../../../public/slider/slider-image-1.jpeg'
// import imgslider6 from './../../../../public/slider/grocery-banner.png'


// const MainSider = () => {
//     return (
//         <div>
//             <div className='flex pb-8 -m-4'>
//                 {/* الجزء اللى ع اليمين */}
//                 <div className='w-1/3 '>
//                     <Image src={imgslider} alt='sider' className='w-full   object-fit h-[200px]' />
//                     <Image src={imgslider3} alt='sider' className='w-full  object-fit h-[200px]' />

//                 </div>
//                 {/* الجزء اللى ع الشمال */}
//                 <div className='w-2/3 cursor-pointer '>
//                     <Swiper 
//                         spaceBetween={0}
//                         slidesPerView={1}
//                         onSlideChange={() => console.log('slide change')}
//                         onSwiper={(swiper) => console.log(swiper)}
//                         loop={true}
//                     >
//                             <SwiperSlide>
//                                 <Image src={imgslider4} alt='sider' className='w-full h-[400px] object-fit' />
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <Image src={imgslider2} alt='sider' className='w-full h-[400px] object-fit' />
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <Image src={imgslider6} alt='sider' className='w-full h-[400px] object-fit' />
//                             </SwiperSlide>
                        
//                     </Swiper>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MainSider


"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; 
import Image from 'next/image';
import React from 'react';

import imgslider from './../../../../public/slider/slider-image-2.jpeg'
import imgslider2 from './../../../../public/slider/grocery-banner-2.jpeg'
import imgslider3 from './../../../../public/slider/slider-2.jpeg'
import imgslider4 from './../../../../public/slider/slider-image-3.jpeg'
import imgslider6 from './../../../../public/slider/grocery-banner.png'

const MainSider = () => {
    return (
        <div className="w-full bg-white"> 
            {/* الحاوية الرئيسية */}
            <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-3 p-3 md:p-5'>
                
                {/* السلايدر الرئيسي - صغرنا الارتفاع هنا */}
                <div className='md:col-span-8 overflow-hidden rounded-2xl shadow-md'>
                    <Swiper 
                        modules={[Autoplay, Pagination, EffectFade]}
                        effect={'fade'} 
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true 
                        }}
                        className="h-[250px] md:h-[400px] w-full" 
                    >
                        <SwiperSlide>
                            <Image src={imgslider4} alt='promo' className='w-full h-full object-cover' priority />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={imgslider2} alt='promo' className='w-full h-full object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={imgslider6} alt='promo' className='w-full h-full object-cover' />
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* الصور الجانبية - صغرنا الارتفاع هنا برضه عشان يطابق السلايدر */}
                <div className='md:col-span-4 flex flex-row md:flex-col gap-3'>
                    <div className="flex-1 h-[120px] md:h-[194px] overflow-hidden rounded-2xl shadow-sm group">
                        <Image 
                            src={imgslider} 
                            alt='side-offer' 
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer' 
                        />
                    </div>
                    <div className="flex-1 h-[120px] md:h-[194px] overflow-hidden rounded-2xl shadow-sm group">
                        <Image 
                            src={imgslider3} 
                            alt='side-offer' 
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer' 
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainSider;
