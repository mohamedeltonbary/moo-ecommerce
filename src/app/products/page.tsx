// src/pages/products.tsx
import getAllProducts from '@/apis/allproduct';
import Image from 'next/image';

// نوع مؤقت للمنتجات
type Product = {
  title: string;
  price: number;
  imageCover: string;
};

const ProductsPage = async () => {
  const products: Product[] = await getAllProducts();

  return (
    <div className="md:w-[80%] mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        All Products
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product: Product, idx: number) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <Image
              src={product.imageCover}
              alt={product.title}
              width={200}
              height={200}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="font-medium line-clamp-1">{product.title}</h2>
            <p className="text-sm text-gray-500">Price: {product.price} EGP</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
