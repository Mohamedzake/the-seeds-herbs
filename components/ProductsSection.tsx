import React from "react";
import Image from "next/image";
interface Product {
  id: number;
  title: string;
  scientificName: string;
  brand: string;
  image: string;
}
const ProductsSection1 = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Marjoram",
      scientificName: "Origanum marjora",
      brand: "HERR & INFUSIONS",
      image: "/seed-1.jpg",
    },
    {
      id: 2,
      title: "Fennel",
      scientificName: "Foeniculum vulgare",
      brand: "SEDES",
      image: "/seed-2.jpg",
    },
    {
      id: 3,
      title: "Marjoram",
      scientificName: "Origanum marjora",
      brand: "HERR & INFUSIONS",
      image: "/seed-1.jpg",
    },
    {
      id: 4,
      title: "Fennel",
      scientificName: "Foeniculum vulgare",
      brand: "SEDES",
      image: "/pro-1.jpg",
    },
    {
      id: 5,
      title: "Marjoram",
      scientificName: "Origanum marjora",
      brand: "HERR & INFUSIONS",
      image: "/pro-2.jpg",
    },
    {
      id: 6,
      title: "Fennel",
      scientificName: "Foeniculum vulgare",
      brand: "SEDES",
      image: "/pro-3.jpg",
    },
  ];
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">
            Our Premium Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sourced from the finest farms across Egypt, with full traceability
            from farm to fork. Experience nature&apos;s goodness in every
            package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.08)] transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/15 to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-stone-800">
                    {product.title}
                  </h3>
                  <p className="text-sm text-stone-500 italic">
                    {product.scientificName}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-teal-600">{product.brand}</span>
                  <span className="bg-teal-100 text-teal-800  px-3 py-1 rounded-full">
                    ✦ Certified Organic
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductsSection1;
