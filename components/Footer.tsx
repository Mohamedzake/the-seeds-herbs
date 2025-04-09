// "use client";

// import Link from "next/link";
// import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#f4f7f3] text-gray-800 py-10 px-6 md:px-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div className="col-span-1">
//           <h2 className="text-2xl font-bold mb-2 flex items-center gap-1">
//             GIZA <span className="text-green-700">🌿</span>
//           </h2>
//           <p className="text-sm mt-1 text-gray-700">
//             Giza is the market leading exporter of premium spices out of Egypt.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-green-700 font-semibold mb-2">ADDRESS</h3>
//           <p className="text-sm">
//             6th of October City, First Industrial Zone, Giza, Egypt.12451
//           </p>
//         </div>

//         <div>
//           <h3 className="text-green-700 font-semibold mb-2">EMAIL</h3>
//           <Link
//             href="mailto:connect@gizaseeds.com"
//             className="text-sm underline"
//           >
//             connect@gizaseeds.com
//           </Link>

//           <h3 className="text-green-700 font-semibold mt-4 mb-2">PHONE</h3>
//           <p className="text-sm">
//             +202 38200669 / 38200673 / <br />
//             38200893 / +20 1099660247
//           </p>
//         </div>

//         <div>
//           <h3 className="text-green-700 font-semibold mb-2">GET CONNECTED</h3>
//           <div className="flex gap-4 text-green-700 text-xl">
//             <Link href="https://wa.me/201099660247" target="_blank">
//               <FaWhatsapp />
//             </Link>
//             <Link href="https://instagram.com" target="_blank">
//               <FaInstagram />
//             </Link>
//             <Link href="https://linkedin.com" target="_blank">
//               <FaLinkedin />
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="mt-10 border-t border-gray-200 pt-4 text-sm text-center text-gray-600">
//         COPYRIGHT © 2023 GIZA SEEDS & HERBS. ALL RIGHTS RESERVED.
//       </div>
//     </footer>
//   );
// }
"use client";

import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    // bg-[#224a15]
    <footer className="bg-[#059669] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-1">
            GIZA <span className="text-green-700">🌿</span>
          </h2>
          <p className="text-sm mt-1 text-white">
            Giza is the market leading exporter of premium spices out of Egypt.
          </p>
        </div>

        <div>
          <h3 className="text-green-700 font-semibold mb-2">ADDRESS</h3>
          <p className="text-sm">
            6th of October City, First Industrial Zone, Giza, Egypt.12451
          </p>
        </div>

        <div>
          <h3 className="text-green-700 font-semibold mb-2">EMAIL</h3>
          <Link
            href="mailto:connect@gizaseeds.com"
            className="text-sm underline"
          >
            connect@gizaseeds.com
          </Link>

          <h3 className="text-green-700 font-semibold mt-4 mb-2">PHONE</h3>
          <p className="text-sm">
            +202 38200669 / 38200673 / <br />
            38200893 / +20 1099660247
          </p>
        </div>

        <div>
          <h3 className="text-green-700 font-semibold mb-2">GET CONNECTED</h3>
          <div className="flex gap-4 text-green-700 text-xl">
            <Link href="https://wa.me/201099660247" target="_blank">
              <FaWhatsapp />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-4 text-sm text-center text-white">
        COPYRIGHT © 2023 GIZA SEEDS & HERBS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
