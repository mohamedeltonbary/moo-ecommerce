import getAllCategories from '@/apis/allcartegories';
import React from 'react'
import SwiperCategory from '../SwiperCategory/SwiperCategory';
import { Category } from '@/types/product.type';
import { getMyToken } from '@/utilites/token';

const CategorySlide = async () => {
    const data: Category[] = await getAllCategories()
    console.log(data);

   
    return (
        <div>
            <div className='mb-8'>
                <SwiperCategory categories={data} />


            </div>
        </div>
    )
}

export default CategorySlide
