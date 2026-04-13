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



// "use client";

// import React, { useState, useEffect } from 'react';
// import getsingleproduct from '../../../apis/singleproducr';
// import Image from 'next/image';
// import AddBtnCart from './../../_component/AddBtnCart/AddBtnCart';

// const Productdetails = ({ params }) => {
//   const { id } = params;
//   const [data, setData] = useState(null); 
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const productData = await getsingleproduct(id);
//       setData(productData); 
//     };

//     fetchProduct();
//   }, [id]);

//   if (!data) return <div>Loading...</div>; 

//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.images.length);
//   };

//   const handlePrev = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + data.images.length) % data.images.length);
//   };

//   return (
//     <div>
//       <div className='w-full md:w-[80%] mx-auto my-10 p-5 flex flex-col md:flex-row gap-5 border border-gray-300 rounded-lg mx-auto items-center'>
//         <div className='w-full md:w-1/3'>
//           <div className="relative w-full h-full">
//             <Image
//               width={500}
//               height={500}
//               src={data.images[currentImageIndex]}
//               alt={data.title}
//               className='w-full h-full object-cover rounded-lg'
//             />
//             <button
//               onClick={handlePrev}
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
//             >
//               &#60;
//             </button>
//             <button
//               onClick={handleNext}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
//             >
//               &#62;
//             </button>
//           </div>
//         </div>
//         <div className='w-full md:w-2/3 flex flex-col gap-5'>
//           <h2 className='text-2xl font-bold'>{data.title}</h2>
//           <p className='text-gray-600'>{data.category.name}</p>
//           <p className='text-gray-600'>{data.description}</p>
//           <div className="p-4 flex justify-between items-center border-t border-gray-200">
//             <p className="font-semibold">{data.price} EGP</p>
//             <p><i className="fa-solid fa-star ml-1 text-amber-400"></i> {data.ratingsAverage}</p>
//           </div>
//           <AddBtnCart id={data.id} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productdetails;



"use client";

import React, { useState, useEffect } from 'react';
import getsingleproduct from '../../../apis/singleproducr';
import Image from 'next/image';
import AddBtnCart from './../../_component/AddBtnCart/AddBtnCart';

const Productdetails = ({ params }) => {
  const { id } = React.use(params); // فك تجميع الـ Promise باستخدام React.use()

  const [data, setData] = useState(null); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getsingleproduct(id);
      setData(productData); 
    };

    fetchProduct();
  }, [id]);

  if (!data) return <div>Loading...</div>; 

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + data.images.length) % data.images.length);
  };

  return (
    <div>
      <div className='w-full md:w-[80%] mx-auto my-10 p-5 flex flex-col md:flex-row gap-5 border border-gray-300 rounded-lg mx-auto items-center'>
        <div className='w-full md:w-1/3'>
          <div className="relative w-full h-full">
            <Image
              width={500}
              height={500}
              src={data.images[currentImageIndex]}
              alt={data.title}
              className='w-full h-full object-cover rounded-lg'
              priority // إضافة خاصية priority للصورة
            />
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full cursor-pointer"
            >
              &#60;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full cursor-pointer"
            >
              &#62;
            </button>
          </div>
        </div>
        <div className='w-full md:w-2/3 flex flex-col gap-5'>
          <h2 className='text-2xl font-bold'>{data.title}</h2>
          <p className='text-gray-600'>{data.category.name}</p>
          <p className='text-gray-600'>{data.description}</p>
          <div className="p-4 flex justify-between items-center border-t border-gray-200">
            <p className="font-semibold">{data.price} EGP</p>
            <p><i className="fa-solid fa-star ml-1 text-amber-400"></i> {data.ratingsAverage}</p>
          </div>
          <AddBtnCart id={data.id} />
        </div>
      </div>
    </div>
  );
};

export default Productdetails;