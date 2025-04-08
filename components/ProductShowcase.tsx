/* eslint-disable react-hooks/rules-of-hooks */

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import classNames from "classnames";
// import { useInView } from "react-intersection-observer";

// type Product = {
//   id: number;
//   name: string;
//   latinName: string;
//   category: "SEEDS" | "HERBS & INFUSIONS";
//   image: string;
// };

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Anise",
//     latinName: "Pimpinella anisum L.",
//     category: "SEEDS",
//     image: "/seed-1.jpg",
//   },
//   {
//     id: 2,
//     name: "Caraway",
//     latinName: "Carum carvi",
//     category: "SEEDS",
//     image: "/seed-2.jpg",
//   },
//   {
//     id: 3,
//     name: "Coriander",
//     latinName: "Corundum sativum.L",
//     category: "SEEDS",
//     image: "/seed-1.jpg",
//   },
//   {
//     id: 4,
//     name: "Anise",
//     latinName: "Pimpinella anisum L.",
//     category: "SEEDS",
//     image: "/seed-1.jpg",
//   },
//   {
//     id: 5,
//     name: "Caraway",
//     latinName: "Carum carvi",
//     category: "SEEDS",
//     image: "/seed-2.jpg",
//   },
//   {
//     id: 6,
//     name: "Coriander",
//     latinName: "Corundum sativum.L",
//     category: "SEEDS",
//     image: "/seed-1.jpg",
//   },
//   {
//     id: 7,
//     name: "Fennel",
//     latinName: "Foeniculum Vulgare",
//     category: "HERBS & INFUSIONS",
//     image: "/seed-2.jpg",
//   },
//   {
//     id: 8,
//     name: "Fennel",
//     latinName: "Foeniculum Vulgare",
//     category: "HERBS & INFUSIONS",
//     image: "/seed-2.jpg",
//   },
// ];

// const tabs = [
//   "SEEDS",
//   "HERBS & INFUSIONS",
//   "SEEDS2",
//   "HERBS & INFUSIONS2",
// ] as const;

// export default function ProductShowcase() {
//   const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("SEEDS");

//   const filteredProducts = products.filter((p) => p.category === activeTab);

//   return (
//     <section className="bg-white px-4 py-12 md:py-20 text-gray-800">
//       <div className="max-w-7xl mx-auto">
//         {/* Tabs */}
//         <div className="flex gap-4">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={classNames(
//                 "flex-1 text-center mb-8 px-6 py-3 font-semibold rounded-md transition-all duration-200",
//                 activeTab === tab
//                   ? "bg-primary-green text-white"
//                   : "bg-gray-100 text-gray-700"
//               )}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Product Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {filteredProducts.map((product) => {
//             const { ref, inView } = useInView({
//               triggerOnce: true,
//               threshold: 0.1,
//             });

//             return (
//               <div
//                 key={product.id}
//                 ref={ref}
//                 className={classNames(
//                   "border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-all",
//                   inView ? "animate-fadeIn3D" : ""
//                 )}
//               >
//                 <div className="relative w-full h-48">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     className="object-contain p-4"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-primary-green font-bold text-lg">
//                     {product.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-2">
//                     {product.latinName}
//                   </p>
//                   <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">
//                     {product.category}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

//
///
//

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import classNames from "classnames";

// type Product = {
//   id: number;
//   name: string;
//   latinName: string;
//   category: string;
//   image: string;
// };

// type Props = {
//   products: Product[];
//   tabs: string[];
// };

// export default function ProductShowcase({ products, tabs }: Props) {
//   const [activeTab, setActiveTab] = useState(tabs[0]);

//   const filteredProducts = products.filter((p) => p.category === activeTab);

//   return (
//     <section className="bg-white px-4 py-12 md:py-20 text-gray-800">
//       <div className="max-w-7xl mx-auto">
//         {/* Tabs */}
//         <div className="flex gap-4 flex-wrap">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={classNames(
//                 "flex-1 text-center mb-8 px-6 py-3 font-semibold rounded-md transition-all duration-200",
//                 activeTab === tab
//                   ? "bg-primary-green text-white"
//                   : "bg-gray-100 text-gray-700"
//               )}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Product Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {filteredProducts.map((product) => {
//             return (
//               <div
//                 key={product.id}
//                 className={classNames(
//                   "border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-all"
//                 )}
//               >
//                 <div className="relative w-full h-48">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     className="object-contain p-4"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-primary-green font-bold text-lg">
//                     {product.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-2">
//                     {product.latinName}
//                   </p>
//                   <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">
//                     {product.category}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

type Product = {
  id: number;
  name: string;
  latinName: string;
  category: string;
  image: string;
};

type Props = {
  products: Product[];
  tabs: string[];
};

export default function ProductShowcase({ products, tabs }: Props) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const filteredProducts = products.filter((p) => p.category === activeTab);

  return (
    <section className="bg-gray-50 px-4 py-16 md:py-24 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-6 mb-16 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={classNames(
                "relative px-4 py-2.5 text-lg font-medium transition-colors duration-300",
                activeTab === tab
                  ? "text-emerald-700"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500 rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content Overlay */}
              <div className="p-6 bg-gradient-to-t from-white/90 via-white/70 to-transparent">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm italic text-gray-500">
                    {product.latinName}
                  </p>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
