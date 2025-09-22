//  "use server"
import React from 'react'
import getsingleproduct from '../../../apis/singleproducr';
import Image from 'next/image'
import AddBtnCart from './../../_component/AddBtnCart/AddBtnCart';

const Productdetails = async ({ params }) => {
  // مش لازم await هنا لأن params مش Promise
  const { id } = params;
  const data = await getsingleproduct(id);

  console.log(data);


  return (
    <div>
      <div className='w-full md:w-[80%] mx-auto my-10 p-5 flex flex-col md:flex-row gap-5 border border-gray-300 rounded-lg mx-auto items-center'>
        <div className='w-full md:w-1/3'>
          <Image width={500} height={500} src={data.imageCover} alt={data.title} className='w-full h-full object-cover rounded-lg' />
        </div>
        <div className='w-full md:w-2/3 flex flex-col gap-5'>
          <h2 className='text-2xl font-bold'>{data.title}</h2>
          <p className='text-gray-600'>{data.category.name}</p>
          <p className='text-gray-600'>{data.description}</p>
          <div className="p-4 flex justify-between items-center border-t border-gray-200">
            <p className=" font-semibold">{data.price} EGP</p>
            <p><i className="fa-solid fa-star ml-1 text-amber-400"></i> {data.ratingsAverage}</p>
          </div>
          {/* <button className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg  hover:bg-blue-700 transition'>Add to Cart</button> */}
{/* 
          <AddBtnCart id={product.id} /> */}
          <AddBtnCart id={data.id} />
        </div>

      </div>
    </div>
  )
}

export default Productdetails
