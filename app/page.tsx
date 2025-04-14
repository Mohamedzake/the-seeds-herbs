import { AboutSection } from "@/components/AboutSection";
import ContactUs from "@/components/ContactUs";

import ProductsSection from "@/components/ProductsSection";

import StatsSection from "@/components/StatsSection";
import React from "react";

export default function Page() {
  return (
    <section>
      <div className="bg-home_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh] relative">
        <div className="flex flex-col justify-center items-start h-full text-left">
          <div className="text-white flex flex-col items-start gap-y-4 px-4 pr-16 md:px-6 md:pr-24 lg:px-8 lg:pr-32 xl:px-10 xl:pr-40 w-full max-w-[1200px] mx-auto animate-fadeIn3D">
            <h1 className="text-left text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold leading-snug drop-shadow-md">
              Crafting Spice Excellence Since 1935
            </h1>

            <h2 className="text-left text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl text-white/90">
              As Egypt’s leading spice exporter, Giza blends ancient
              craftsmanship with modern food safety innovation — delivering over
              10,000 MT of spices across 30+ countries with unmatched precision,
              traceability, and passion.
            </h2>
          </div>
          <div className="absolute inset-0 bg-black/15 z-0" />
        </div>
      </div>
      <StatsSection />

      <ProductsSection />
      <AboutSection />
      <ContactUs />
    </section>
  );
}
//
//
//
//
// import { AboutSection } from "@/components/AboutSection";
// import ContactUs from "@/components/ContactUs";
// import ProductsSection from "@/components/ProductsSection";
// import StatsSection from "@/components/StatsSection";
// import React from "react";

// export default function Page() {
//   return (
//     <section>
//       {/* Hero Section with Video Background */}
//       <div className="bg-gradient-to-br from-white via-[#f7fff9] to-[#e8faf1] relative w-full h-screen overflow-hidden pointer-events-none">
//         {/* Video Background */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           poster="/fallback.jpg"
//           controls={false}
//           disablePictureInPicture
//           controlsList="nodownload nofullscreen noremoteplayback"
//           className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
//         >
//           <source
//             src="https://vjpfae0gy98amero.public.blob.vercel-storage.com/Finaledit-32apNayMP2Z5vn1uBWTagxRYAg9d4g.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/15 z-10" />

//         {/* Text Content */}
//         <div className="relative z-20 flex flex-col justify-center items-start h-full text-left">
//           <div className="text-white flex flex-col items-start gap-y-4 px-4 pr-16 md:px-6 md:pr-24 lg:px-8 lg:pr-32 xl:px-10 xl:pr-40 w-full max-w-[1200px] mx-auto animate-fadeIn3D">
//             <h1 className="text-left text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold leading-snug drop-shadow-md">
//               🌿 Crafting Spice Excellence Since 1935
//             </h1>
//             <h2 className="text-left text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl text-white/90">
//               As Egypt’s leading spice exporter, Giza blends ancient
//               craftsmanship with modern food safety innovation — delivering over
//               10,000 MT of spices across 30+ countries with unmatched precision,
//               traceability, and passion.
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* Other Sections */}
//       <StatsSection />
//       <ProductsSection />
//       <AboutSection />
//       <ContactUs />
//     </section>
//   );
// }
//
//

//
///
//
//

// "use client";
// import { AboutSection } from "@/components/AboutSection";
// import ContactUs from "@/components/ContactUs";
// import ProductsSection from "@/components/ProductsSection";
// import StatsSection from "@/components/StatsSection";
// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import Image from "next/image";
// import {
//   FaGlobe,
//   FaRecycle,
//   FaLeaf,
//   FaBoxes,
//   FaSeedling,
// } from "react-icons/fa";

// export default function Page() {
//   const stats = [
//     {
//       icon: <FaGlobe className="text-emerald-400 text-3xl" />,
//       value: "30+",
//       label: "Countries Served",
//     },
//     {
//       icon: <FaRecycle className="text-emerald-400 text-3xl" />,
//       value: "100+",
//       label: "Global Customers",
//     },
//     {
//       icon: <FaLeaf className="text-emerald-400 text-3xl" />,
//       value: "300+",
//       label: "SKUs Owned",
//     },
//     {
//       icon: <FaBoxes className="text-emerald-400 text-3xl" />,
//       value: "10k+",
//       label: "MT Processed",
//     },
//     {
//       icon: <FaSeedling className="text-emerald-400 text-3xl" />,
//       value: "250+",
//       label: "Spice Experts",
//     },
//   ];

//   const products = [
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
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <section className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-white via-[#f7fff9] to-[#e8faf1]">
//         {/* Text Content */}
//         <div className="lg:order-none order-2 flex flex-col justify-center p-8 lg:p-16 space-y-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#2a7965] to-[#3aa38f] bg-clip-text text-transparent">
//               <span className="block mb-4">Crafting Spice</span>
//               <span className="block text-[#1a3a32]">
//                 Excellence Since 1935
//               </span>
//             </h1>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="space-y-6"
//           >
//             <div className="h-[2px] w-24 bg-[#3aa38f]/40" />
//             <p className="text-lg text-[#2d4a43] max-w-xl leading-relaxed">
//               As Egypt&apos;s leading spice exporter, we blend ancient
//               craftsmanship with modern food safety innovation — delivering over
//               10,000 MT of spices across 30+ countries with unmatched precision
//               and traceability.
//             </p>
//           </motion.div>
//         </div>

//         {/* Video Container */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="lg:order-none order-1 relative border-r border-emerald-50 h-screen lg:top-0 shadow-xl"
//         >
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//             poster="/home-1.jpeg"
//             controls={false}
//             disablePictureInPicture
//             controlsList="nodownload nofullscreen noremoteplayback"
//             className="absolute top-0 left-0 w-full h-full object-cover z-0 "
//           >
//             <source
//               src="https://vjpfae0gy98amero.public.blob.vercel-storage.com/Finaledit-32apNayMP2Z5vn1uBWTagxRYAg9d4g.mp4"
//               type="video/mp4"
//             />
//           </video>
//           {/* <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-[#f7fff9]/20 z-10" /> */}
//         </motion.div>
//       </section>

//       {/* Stats Grid */}
//       <section className="relative py-24 overflow-hidden bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-400 transition-colors flex flex-col items-center text-center shadow-sm hover:shadow-md"
//               >
//                 <div className="mb-4 text-emerald-600">{stat.icon}</div>
//                 <h3 className="text-3xl font-bold text-gray-800 mb-2">
//                   {stat.value}
//                 </h3>
//                 <p className="text-sm text-gray-600">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Product Gallery */}
//       {/* <section className="min-h-screen py-24 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center container mx-auto px-4">
//         <div className="space-y-8">
//           <h2 className="text-5xl font-bold text-gray-800">
//             Premium Organic Products
//           </h2>
//           <p className="text-gray-600 max-w-xl">
//             Sourced from the finest farms across Egypt, with full traceability
//             from farm to fork. Experience nature&apos;s goodness in every
//             package.
//           </p>
//         </div>

//         <div className="relative h-[800px]">
//           <div className="absolute w-[120%] h-full left-[10%] bg-emerald-50 rounded-3xl rotate-12" />
//           <div className="absolute w-[120%] h-full left-[10%] bg-gradient-to-br from-emerald-100/50 to-teal-100/30 backdrop-blur-sm rounded-3xl -rotate-6" />

//           <div className="relative grid grid-cols-2 gap-8 h-full p-8">
//             {products.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-emerald-400 transition-colors shadow-sm hover:shadow-md"
//               >
//                 <div className="relative h-64">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {product.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 italic mb-2">
//                     {product.scientificName}
//                   </p>
//                   <div className="flex justify-between items-center text-xs">
//                     <span className="text-emerald-600">{product.brand}</span>
//                     <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
//                       ✦ Certified Organic
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* About Section */}
//       <section className="relative py-24 container mx-auto px-4">
//         <AboutSection />
//       </section>

//       {/* Contact Section */}
//       <section className="min-h-screen flex items-center justify-center container mx-auto px-4">
//         <div className="w-full max-w-4xl bg-white backdrop-blur-lg rounded-[40px] border border-gray-200 p-8 lg:p-16 shadow-xl">
//           <ContactUs />
//         </div>
//       </section>
//     </div>
//     // <div className="bg-[#0a0f0d]">
//     //   {/* Hero Section */}

//     //   <section className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-[#0a0f0d] via-[#13201b] to-[#0a0f0d]">
//     //     {/* Text Content - Order first on mobile */}
//     //     <div className="lg:order-none order-2 flex flex-col justify-center p-8 lg:p-16 space-y-12">
//     //       <motion.div
//     //         initial={{ opacity: 0, y: 20 }}
//     //         animate={{ opacity: 1, y: 0 }}
//     //         transition={{ delay: 0.4 }}
//     //       >
//     //         <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
//     //           <span className="block mb-4">Crafting Spice</span>
//     //           <span className="block text-emerald-100">
//     //             Excellence Since 1935
//     //           </span>
//     //         </h1>
//     //       </motion.div>

//     //       <motion.div
//     //         initial={{ opacity: 0 }}
//     //         animate={{ opacity: 1 }}
//     //         transition={{ delay: 0.8 }}
//     //         className="space-y-6"
//     //       >
//     //         <div className="h-[2px] w-24 bg-emerald-400/50" />
//     //         <p className="text-lg text-emerald-100/80 max-w-xl leading-relaxed">
//     //           As Egypt&apos;s leading spice exporter, we blend ancient
//     //           craftsmanship with modern food safety innovation — delivering over
//     //           10,000 MT of spices across 30+ countries with unmatched precision
//     //           and traceability.
//     //         </p>
//     //       </motion.div>
//     //     </div>

//     //     {/* Video Container - Order second on mobile */}
//     //     <motion.div
//     //       initial={{ opacity: 0, x: -50 }}
//     //       animate={{ opacity: 1, x: 0 }}
//     //       className="lg:order-none order-1 relative border-r border-emerald-900/50 h-screen lg:top-0"
//     //     >
//     //       <video
//     //         autoPlay
//     //         muted
//     //         loop
//     //         playsInline
//     //         preload="auto"
//     //         poster="/fallback.jpg"
//     //         controls={false}
//     //         disablePictureInPicture
//     //         controlsList="nodownload nofullscreen noremoteplayback"
//     //         className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
//     //       >
//     //         <source
//     //           src="https://vjpfae0gy98amero.public.blob.vercel-storage.com/Homepage-Bg1-WDbZsw1iNesvqBEy3GZf8WFWQD1i2r.mp4"
//     //           type="video/mp4"
//     //         />
//     //         Your browser does not support the video tag.
//     //       </video>
//     //       <div className="absolute inset-0 bg-black/15 z-10" />
//     //     </motion.div>
//     //   </section>
//     //   {/* Floating Stats Grid */}
//     //   <section className="relative py-24 overflow-hidden">
//     //     <div className="container mx-auto px-4">
//     //       <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//     //         {stats.map((stat, index) => (
//     //           <motion.div
//     //             key={index}
//     //             whileHover={{ scale: 1.05 }}
//     //             className="bg-emerald-900/20 backdrop-blur-sm border border-emerald-800/30 rounded-xl p-6 hover:border-emerald-400/50 transition-colors flex flex-col items-center text-center"
//     //           >
//     //             <div className="mb-4">{stat.icon}</div>
//     //             <h3 className="text-3xl font-bold text-emerald-300 mb-2">
//     //               {stat.value}
//     //             </h3>
//     //             <p className="text-sm text-emerald-100/80">{stat.label}</p>
//     //           </motion.div>
//     //         ))}
//     //       </div>
//     //     </div>
//     //   </section>

//     //   {/* Product Gallery */}
//     //   <section className="min-h-screen py-24 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center container mx-auto px-4">
//     //     <div className="space-y-8">
//     //       <h2 className="text-5xl font-bold text-emerald-100">
//     //         Premium Organic Products
//     //       </h2>
//     //       <p className="text-emerald-100/80 max-w-xl">
//     //         Sourced from the finest farms across Egypt, with full traceability
//     //         from farm to fork. Experience nature&apos;s goodness in every
//     //         package.
//     //       </p>
//     //     </div>

//     //     <div className="relative h-[800px]">
//     //       <div className="absolute w-[120%] h-full left-[10%] bg-emerald-900/20 rounded-3xl rotate-12" />
//     //       <div className="absolute w-[120%] h-full left-[10%] bg-gradient-to-br from-emerald-900/30 to-teal-900/20 backdrop-blur-sm rounded-3xl -rotate-6" />

//     //       <div className="relative grid grid-cols-2 gap-8 h-full p-8">
//     //         {products.map((product, index) => (
//     //           <motion.div
//     //             key={product.id}
//     //             initial={{ opacity: 0, y: 20 }}
//     //             animate={{ opacity: 1, y: 0 }}
//     //             transition={{ delay: index * 0.1 }}
//     //             className="relative bg-emerald-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-emerald-800/30 hover:border-emerald-400/50 transition-colors"
//     //           >
//     //             <div className="relative h-64">
//     //               <Image
//     //                 src={product.image}
//     //                 alt={product.title}
//     //                 fill
//     //                 className="object-cover opacity-90"
//     //               />
//     //               <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />
//     //             </div>
//     //             <div className="p-4">
//     //               <h3 className="text-lg font-semibold text-emerald-100">
//     //                 {product.title}
//     //               </h3>
//     //               <p className="text-sm text-emerald-300/80 italic mb-2">
//     //                 {product.scientificName}
//     //               </p>
//     //               <div className="flex justify-between items-center text-xs">
//     //                 <span className="text-emerald-400">{product.brand}</span>
//     //                 <span className="bg-emerald-900/30 px-2 py-1 rounded-full text-emerald-300">
//     //                   ✦ Certified Organic
//     //                 </span>
//     //               </div>
//     //             </div>
//     //           </motion.div>
//     //         ))}
//     //       </div>
//     //     </div>
//     //   </section>

//     //   {/* About Section Integration */}
//     //   <section className="relative py-24 container mx-auto px-4">
//     //     <AboutSection />
//     //   </section>

//     //   {/* Contact Section */}
//     //   <section className="min-h-screen flex items-center justify-center container mx-auto px-4">
//     //     <div className="w-full max-w-4xl bg-emerald-900/20 backdrop-blur-lg rounded-[40px] border border-emerald-700/30 p-8 lg:p-16">
//     //       <ContactUs />
//     //     </div>
//     //   </section>
//     // </div>
//   );
// }
