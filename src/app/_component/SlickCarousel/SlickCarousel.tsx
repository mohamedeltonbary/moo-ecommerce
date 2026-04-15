'use client';

import React from "react";
import { Category } from '@/types/categories.type';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlickCarouselProps {
  categories: Category[];
}

const SlickCarousel: React.FC<SlickCarouselProps> = ({ categories }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // من هنا تبدأ تتغير إعدادات العرض بناءً على الحجم
        settings: {
          slidesToShow: 5, // 3 صور على الشاشات الأكبر من 1024px (مثل الكمبيوتر)
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4, // 2 صور على الشاشات بين 768px و 1024px
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3, // عرض صورة واحدة على الموبايلات
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {categories.map((category) => (
        <div key={category._id} className="flex flex-col items-center">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-[200px] object-cover rounded-lg shadow-md"
          />
          <p className="mt-2 text-xl text-center font-semibold">{category.name}</p>
        </div>
      ))}
    </Slider>
  );
};

export default SlickCarousel;