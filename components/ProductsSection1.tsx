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
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-stone-800 mb-4">
            <span className="block font-serif text-amber-700 text-6xl mb-4">
              Egyptian Bounty
            </span>
            Premium Botanical Selection
          </h2>
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
                {/* <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-stone-800/60 to-stone-800/0" /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-white/10 to-transparent" /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent" /> */}
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
                  {/* <span className="text-stone-400">✦ Certified Organic</span> */}
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
// import React from "react";
// import Image from "next/image";
// interface Product {
//   id: number;
//   title: string;
//   scientificName: string;
//   brand: string;
//   image: string;
// }

// const ProductsSection = () => {
//   const products: Product[] = [
//     {
//       id: 1,
//       title: "Marjoram",
//       scientificName: "Origanum marjora",
//       brand: "HERR & INFUSIONS",
//       image: "/seed-1.jpg",
//     },
//     {
//       id: 2,
//       title: "Fennel",
//       scientificName: "Foeniculum vulgare",
//       brand: "SEDES",
//       image: "/seed-2.jpg",
//     },
//     {
//       id: 3,
//       title: "Marjoram",
//       scientificName: "Origanum marjora",
//       brand: "HERR & INFUSIONS",
//       image: "/seed-1.jpg",
//     },
//     {
//       id: 4,
//       title: "Fennel",
//       scientificName: "Foeniculum vulgare",
//       brand: "SEDES",
//       image: "/pro-1.jpg",
//     },
//     {
//       id: 5,
//       title: "Marjoram",
//       scientificName: "Origanum marjora",
//       brand: "HERR & INFUSIONS",
//       image: "/pro-2.jpg",
//     },
//     {
//       id: 6,
//       title: "Fennel",
//       scientificName: "Foeniculum vulgare",
//       brand: "SEDES",
//       image: "/pro-3.jpg",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">
//             Our Premium Products
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Sourced from the finest farms across Egypt, with full traceability
//             from farm to fork. Experience nature&apos;s goodness in every
//             package.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="relative h-48 overflow-hidden rounded-t-xl">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   className="object-cover"
//                   quality={80}
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-4">
//                   <h3 className="text-xl font-bold text-white">
//                     {product.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm">
//                     {product.scientificName}
//                   </p>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-sm font-medium text-teal-600">
//                     {product.brand}
//                   </span>
//                   <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">
//                     Certified Organic
//                   </span>
//                 </div>

//                 <button className="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-200">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;
// ==============
///////////
///////////
//////////
// ===========
// ================
// ===============
// import React from "react";
// import Image from "next/image";

// interface Product {
//   id: number;
//   title: string;
//   scientificName: string;
//   brand: string;
//   image: string;
// }

// const ProductsSection = () => {
//   const products: Product[] = [
//     {
//       id: 1,
//       title: "Marjoram",
//       scientificName: "Origanum marjora",
//       brand: "HERR & INFUSIONS",
//       image: "/seed-1.jpg",
//     },
//     {
//       id: 2,
//       title: "Fennel",
//       scientificName: "Foeniculum vulgare",
//       brand: "SEDES",
//       image: "/seed-2.jpg",
//     },
//     {
//       id: 3,
//       title: "Marjoram",
//       scientificName: "Origanum marjora",
//       brand: "HERR & INFUSIONS",
//       image: "/seed-1.jpg",
//     },
//     {
//       id: 4,
//       title: "Fennel",
//       scientificName: "Foeniculum vulgare",
//       brand: "SEDES",
//       image: "/pro-1.jpg",
//     },
//     {
//       id: 5,
//       title: "Marjoram",
//       scientificName: "Origanum marjora",
//       brand: "HERR & INFUSIONS",
//       image: "/pro-2.jpg",
//     },
//     {
//       id: 6,
//       title: "Fennel",
//       scientificName: "Foeniculum vulgare",
//       brand: "SEDES",
//       image: "/pro-3.jpg",
//     },
//   ];
//   return (
//     <section className="py-20 bg-slate-900">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-black text-white mb-4 font-sans uppercase tracking-tighter">
//             Egyptian Harvest Excellence
//           </h2>
//           <p className="text-slate-300 max-w-3xl mx-auto text-xl leading-relaxed">
//             Traceable from Nile-rich soils to your table - experience the
//             pinnacle of Egyptian agriculture
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="group relative isolate overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   className="object-cover transition-transform duration-700 group-hover:scale-105"
//                   quality={90}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-3xl font-bold text-white drop-shadow-xl">
//                       {product.title}
//                     </h3>
//                     <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium">
//                       {product.brand}
//                     </span>
//                   </div>
//                   <p className="text-slate-200 font-mono mt-2 text-sm">
//                     {product.scientificName}
//                   </p>
//                 </div>
//               </div>

//               <div className="p-6 bg-white">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="space-y-1">
//                     <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
//                       Certification
//                     </span>
//                     <div className="flex items-center space-x-2">
//                       <span className="w-3 h-3 bg-emerald-500 rounded-full" />
//                       <span className="text-emerald-700 font-bold text-sm">
//                         Organic Certified
//                       </span>
//                     </div>
//                   </div>
//                   <span className="text-slate-900 text-2xl font-black">
//                     #{product.id.toString().padStart(2, "0")}
//                   </span>
//                 </div>

//                 <div className="h-px bg-slate-100 my-6" />

//                 <div className="grid grid-cols-2 gap-4 text-sm">
//                   <div className="space-y-1">
//                     <span className="block text-slate-500 font-medium">
//                       Origin
//                     </span>
//                     <span className="text-slate-900 font-semibold">
//                       Upper Egypt
//                     </span>
//                   </div>
//                   <div className="space-y-1">
//                     <span className="block text-slate-500 font-medium">
//                       Harvest
//                     </span>
//                     <span className="text-slate-900 font-semibold">
//                       2024 Season
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;
// ================
// ===============
// ============

// import React from "react";
// import Image from "next/image";

// interface Product {
//   id: number;
//   title: string;
//   scientificName: string;
//   brand: string;
//   image: string;
// }

// const ProductsSection = () => {
//   const products: Product[] = [
//     {
//       id: 1,
//       title: "Marjoram",
//       scientificName: "Origanum marjora",
//       brand: "HERR & INFUSIONS",
//       image: "/seed-1.jpg",
//     },
//     {
//       id: 2,
//       title: "Fennel",
//       scientificName: "Foeniculum vulgare",
//       brand: "SEDES",
//       image: "/seed-2.jpg",
//     },
//     {
//       id: 3,
//       title: "Marjoram",
//       scientificName: "Origanum marjora",
//       brand: "HERR & INFUSIONS",
//       image: "/seed-1.jpg",
//     },
//     {
//       id: 4,
//       title: "Fennel",
//       scientificName: "Foeniculum vulgare",
//       brand: "SEDES",
//       image: "/pro-1.jpg",
//     },
//     {
//       id: 5,
//       title: "Marjoram",
//       scientificName: "Origanum marjora",
//       brand: "HERR & INFUSIONS",
//       image: "/pro-2.jpg",
//     },
//     {
//       id: 6,
//       title: "Fennel",
//       scientificName: "Foeniculum vulgare",
//       brand: "SEDES",
//       image: "/pro-3.jpg",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-slate-50 to-indigo-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
//               Egyptian Botanical Treasures
//             </span>
//           </h2>
//           <p className="text-slate-600 text-xl max-w-3xl mx-auto">
//             Cultivated in the fertile Nile Valley, perfected through generations
//             of expertise
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//             >
//               <div className="relative h-72 overflow-hidden rounded-t-3xl">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   quality={90}
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

//                 <div className="absolute top-4 right-4 flex flex-col gap-2">
//                   <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-indigo-600 shadow-sm">
//                     #{product.id.toString().padStart(2, "0")}
//                   </span>
//                   <span className="bg-emerald-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-white">
//                     Certified Organic
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6 relative -mt-8">
//                 <div className="bg-white rounded-2xl p-6 shadow-lg">
//                   <div className="flex items-start justify-between mb-4">
//                     <div>
//                       <h3 className="text-2xl font-bold text-slate-900 mb-1">
//                         {product.title}
//                       </h3>
//                       <p className="text-slate-500 text-sm font-mono">
//                         {product.scientificName}
//                       </p>
//                     </div>
//                     <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg text-sm font-bold">
//                       {product.brand}
//                     </span>
//                   </div>

//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center space-x-2">
//                       <svg
//                         className="w-5 h-5 text-slate-400"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                         />
//                       </svg>
//                       <span className="text-sm font-semibold text-slate-700">
//                         Nile Delta
//                       </span>
//                     </div>

//                     <div className="flex items-center space-x-2">
//                       <svg
//                         className="w-5 h-5 text-slate-400"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                         />
//                       </svg>
//                       <span className="text-sm font-semibold text-slate-700">
//                         2024
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;
