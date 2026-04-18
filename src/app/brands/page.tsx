// src/pages/brands.tsx
import getAllBrands from "@/apis/allbrands";
import Image from "next/image";

// نوع مؤقت للبراندات
type Brand = {
  name: string;
  image: string;
};

const BrandsPage = async () => {
  const brands: Brand[] = await getAllBrands();

  return (
    <div className="md:w-[80%] mx-auto p-5">
      <h1 className="relative text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-12">
        <span className="relative inline-block">
          All Brands
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-emerald-500 rounded-full"></span>
        </span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {brands.map((brand: Brand, idx: number) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={200}
              height={200}
              className="w-full h-40 object-contain mb-2"
            />
            <h2 className="text-center font-medium">{brand.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
