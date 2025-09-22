// src/pages/categories.tsx
import getAllCategories from '@/apis/allcartegories';
import Image from 'next/image';

// نوع مؤقت للفئات
type Category = {
  name: string;
  image: string;
};

const CategoriesPage = async () => {
  const categories: Category[] = await getAllCategories();

  return (
    <div className="md:w-[80%] mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        All Categories
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
