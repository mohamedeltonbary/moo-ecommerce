// src/pages/brands.tsx
import getAllBrands from '@/apis/allbrands';
import Image from 'next/image';

// نوع مؤقت للبراندات
type Brand = {
  name: string;
  image: string;
};
 
const BrandsPage = async () => {
  const brands: Brand[] = await getAllBrands();

  return (
    <div className="md:w-[80%] mx-auto p-5">
      <h1
        className="text-3xl mb-6 text-center  pb-2"
        style={{
          color: "rgb(79, 167, 79)",
          fontFamily: "Segoe UI Semibold, sans-serif",
          fontWeight: 600, // Semibold
        }}
      >
        All Brands
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
