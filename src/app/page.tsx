// import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Categories from './categories/page';
import getallproduct from "@/apis/allproduct";
import HomeCard from "./_component/HomeCard/HomeCard";

import MainSider from "./_component/MainSider/MainSider";
import CategorySlide from "./_component/CategorySlide/CategorySlide";
import { Product } from "@/types/product.type";

export default async function Home() {
  const data :Product[] = await getallproduct()
  console.log(data); 
  return (
    <>
      <section className="px-5 md:px-0 my-10 w-full md:w-[80%] mx-auto ">
        <MainSider/> 
        <CategorySlide/>
        <div className="flex flex-wrap">
          {data.map((product:Product, idx) => <HomeCard key={idx} product={product}/>)}
        </div>
      </section >
    </>
  );
}
