//  "use server"
// import React from 'react'
// import getsingleproduct from '../../../apis/singleproducr';
// import Image from 'next/image'
// import AddBtnCart from './../../_component/AddBtnCart/AddBtnCart';

// const Productdetails = async ({ params }) => {
//   const { id } = params;
//   const data = await getsingleproduct(id);

//   console.log(data);


//   return (
//     <div>
//       <div className='w-full md:w-[80%] mx-auto my-10 p-5 flex flex-col md:flex-row gap-5 border border-gray-300 rounded-lg mx-auto items-center'>
//         <div className='w-full md:w-1/3'>


//           <Image width={500} height={500} src={data.imageCover} alt={data.title} className='w-full h-full object-cover rounded-lg' />
//         </div>
//         <div className='w-full md:w-2/3 flex flex-col gap-5'>
//           <h2 className='text-2xl font-bold'>{data.title}</h2>
//           <p className='text-gray-600'>{data.category.name}</p>
//           <p className='text-gray-600'>{data.description}</p>
//           <div className="p-4 flex justify-between items-center border-t border-gray-200">
//             <p className=" font-semibold">{data.price} EGP</p>
//             <p><i className="fa-solid fa-star ml-1 text-amber-400"></i> {data.ratingsAverage}</p>
//           </div>
      
//           <AddBtnCart id={data.id} />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Productdetails




"use client";

import React, { useState, useEffect } from 'react';
import getsingleproduct from '../../../apis/singleproducr';
import Image from 'next/image';
import AddBtnCart from './../../_component/AddBtnCart/AddBtnCart';

const Productdetails = ({ params }) => {
  const { id } = React.use(params);
  const [data, setData] = useState(null); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getsingleproduct(id);
      setData(productData); 
    };
    fetchProduct();
  }, [id]);

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center">
       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
    </div>
  ); 

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + data.images.length) % data.images.length);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-[2rem] overflow-hidden border border-slate-100 flex flex-col md:flex-row gap-10 p-6 md:p-10">
        
        {/* Left Side: Image Gallery */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="relative aspect-square bg-slate-100 rounded-3xl overflow-hidden group">
            <Image
              fill
              src={data.images[currentImageIndex]}
              alt={data.title}
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur shadow-md rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all cursor-pointer opacity-0 group-hover:opacity-100"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur shadow-md rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all cursor-pointer opacity-0 group-hover:opacity-100"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          {/* Thumbnails الصوّر المصغرة */}
          <div className="flex gap-3 justify-center overflow-x-auto py-2">
            {data.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  currentImageIndex === index ? "border-emerald-500 ring-2 ring-emerald-100" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="mb-6">
            <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {data.category.name}
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-800 mt-3 leading-tight">
              {data.title}
            </h1>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-lg">
              <i className="fa-solid fa-star text-amber-400"></i>
              <span className="font-bold text-amber-700">{data.ratingsAverage}</span>
            </div>
            <span className="text-slate-400 text-sm">|</span>
            <span className="text-slate-500 text-sm font-medium italic underline decoration-emerald-200 decoration-2 underline-offset-4">Verified Product</span>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8 text-lg">
            {data.description}
          </p>

          <div className="mt-auto pt-8 border-t border-slate-100">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-slate-400 text-sm font-bold uppercase mb-1">Total Price</p>
                <p className="text-4xl font-black text-slate-900 tracking-tight">
                  {data.price} <span className="text-lg font-bold text-emerald-500">EGP</span>
                </p>
              </div>
            </div>
            
            <div className="w-full transform transition-transform active:scale-95">
               <AddBtnCart id={data.id} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Productdetails;