// "use client";

// import Image from "next/image";

// export default function Certifications() {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white text-center">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
//           Our Certifications
//         </h2>
//         <p className="text-gray-600 mb-12 text-base md:text-lg leading-relaxed">
//           At Giza, we ensure the highest quality of our products through our
//           various certifications. We have obtained Global GAP, USDA Organic, and
//           EU Organic certifications, which ensure sustainable and organic
//           farming practices, and no use of synthetic pesticides and fertilizers.
//           We regularly undergo inspections and audits to maintain these
//           certifications, so our customers can trust they are buying products
//           produced with the highest standards.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Certificate 1 */}
//           <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
//             <Image
//               src="/cer-1.png"
//               alt="ISO 22000"
//               width={80}
//               height={80}
//               className="mb-4"
//             />
//             <h3 className="text-xl font-bold text-gray-800 mb-2">
//               ISO 22000-2018
//             </h3>
//             <p className="text-gray-600 text-sm mb-4">
//               An international Food Safety Management Standard that enables
//               organizations to identify and control food safety hazards. It
//               provides a layer of reassurance within the global food supply
//               chain and helps products to cross borders and brings people the
//               food that they can trust.
//             </p>
//             <button className="bg-primary-green text-white px-4 py-2 rounded hover:bg-primary-green3 text-sm font-medium">
//               VIEW CERTIFICATE
//             </button>
//           </div>

//           {/* Certificate 2 */}
//           <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
//             <Image
//               src="/cer-2.png"
//               alt="ISO 9001"
//               width={80}
//               height={80}
//               className="mb-4"
//             />
//             <h3 className="text-xl font-bold text-gray-800 mb-2">
//               ISO 9001-2015
//             </h3>
//             <p className="text-gray-600 text-sm mb-4">
//               An International Quality Management Standard that promotes the
//               adoption of a process when developing, implementing and improving
//               the effectiveness of a quality management system, to enhance
//               customer satisfaction through meeting customers’ requirements,
//               food that they can trust.
//             </p>
//             <button className="bg-primary-green text-white px-4 py-2 rounded hover:bg-primary-green3 text-sm font-medium">
//               VIEW CERTIFICATE
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
//
//
//
////
"use client";

import Image from "next/image";
import React from "react";

const certificates = [
  {
    image: "/cer-1.png",
    alt: "ISO 22000",
    title: "ISO 22000:2018",
    description: `An international Food Safety Management Standard that enables
    organizations to identify and control food safety hazards. It
    provides a layer of reassurance within the global food supply
    chain and helps products cross borders with trust.`,
  },
  {
    image: "/cer-2.png",
    alt: "ISO 9001",
    title: "ISO 9001:2015",
    description: `An International Quality Management Standard that promotes a
    process approach to enhance customer satisfaction by meeting
    customer and regulatory requirements.`,
  },
  {
    image: "/cer-3.jpg",
    alt: "ISO 9001",
    title: "HACCP",
    description: `An International Quality Management Standard that promotes a
    process approach to enhance customer satisfaction by meeting
    customer and regulatory requirements.`,
  },
  {
    image: "/cer-4.png",
    alt: "ISO 9001",
    title: "FSSC",
    description: `An International Quality Management Standard that promotes a
    process approach to enhance customer satisfaction by meeting
    customer and regulatory requirements.`,
  },
];

export default function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#059669] mb-6">
          Our Certifications
        </h2>
        <p className="text-gray-600 mb-12 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          At RADICI, we ensure the highest quality of our products through
          internationally recognized certifications. These validate our
          commitment to food safety, organic practices, and global standards of
          excellence.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left flex flex-col items-start"
            >
              <Image
                src={cert.image}
                alt={cert.alt}
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>
              <button className="mt-auto bg-[#059669] text-white px-5 py-2 rounded-md hover:bg-green-800 transition-colors duration-200 text-sm font-medium">
                VIEW CERTIFICATE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
