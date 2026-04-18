// src/pages/categories.tsx
import getAllCategories from "@/apis/allcartegories";
import Image from "next/image";

// نوع مؤقت للفئات
type Category = {
  name: string;
  image: string;
};

const CategoriesPage = async () => {
  const categories: Category[] = await getAllCategories();

  return (
    <div className="md:w-[80%] mx-auto p-5">
      <h1 className="relative text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-12">
        <span className="relative inline-block">
          All Categories
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-emerald-500 rounded-full"></span>
        </span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat: Category, idx: number) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={200}
              height={200}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="font-medium text-center">{cat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
