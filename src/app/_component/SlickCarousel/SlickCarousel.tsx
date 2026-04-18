'use client';

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Category } from "@/types/categories.type";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface SlickCarouselProps {
  categories: Category[];
}

const SlickCarousel: React.FC<SlickCarouselProps> = ({ categories }) => {
  const [mounted, setMounted] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesToShow(2);
      else if (width < 768) setSlidesToShow(3);
      else if (width < 1024) setSlidesToShow(4);
      else setSlidesToShow(6); // زودنا العدد شوية للشاشات الكبيرة لشكل أشيك
      setMounted(true);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = useMemo(() => ({
    dots: false,
    arrows: false,
    infinite: categories.length > slidesToShow,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // سرعة أهدى شوية عشان متبقاش مزعجة
    speed: 800,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)", // حركة أنعم بكتير
    swipeToSlide: true,
    pauseOnHover: true, // يوقف لما العميل يقف عليه عشان يلحق يشوف الاسم
  }), [slidesToShow, categories.length]);

  if (!mounted) return null;

  return (
    <div className="w-full py-8">
      <Slider key={slidesToShow} {...settings}>
        {categories.map((category) => (
          <div key={category._id} className="px-3 outline-none group cursor-pointer">
            <div className="flex flex-col items-center">
              {/* Image Container */}
              <div className="relative w-24 h-24 md:w-36 md:h-36 mb-4 overflow-hidden rounded-full border-4 border-transparent group-hover:border-emerald-500 transition-all duration-500 shadow-sm group-hover:shadow-xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Category Name */}
              <p className="text-sm md:text-base font-bold text-slate-700 group-hover:text-emerald-600 transition-colors duration-300 text-center line-clamp-1 w-full">
                {category.name}
              </p>
              
              {/* Dot indicator under text */}
              <div className="w-0 h-1 bg-emerald-500 rounded-full mt-1 group-hover:w-6 transition-all duration-300"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;