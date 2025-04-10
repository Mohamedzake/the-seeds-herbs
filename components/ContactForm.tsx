// import React from "react";

// const ContactForm = () => {
//   return (
//     <section className="bg-accent-500 text-white px-4 py-16">
//       <div className="max-w-6xl mx-auto text-center animate-fadeIn3D">
//         <h2 className="text-4xl font-bold mb-4 ">Welcome to Giza Seeds 🌱</h2>
//         <p className="text-lg max-w-2xl mx-auto mb-8">
//           We&apos;re excited to connect with you! If you have any questions or
//           want to learn more about our work, feel free to reach out anytime.
//         </p>
//       </div>

//       {/* Contact Form and Info Section */}
//       <div
//         id="contact-form"
//         className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-12 px-2 md:px-0 "
//       >
//         <div className="animate-fadeIn3D">
//           <h2 className="text-3xl font-bold text-primary-green mb-6 ">
//             Send us a message
//           </h2>
//           <form className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-semibold text-primary-green">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your full name"
//                   className="w-full p-3 border border-gray-300 rounded text-black"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-primary-green">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full p-3 border border-gray-300 rounded text-black"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-primary-green">
//                 Your message
//               </label>
//               <textarea
//                 placeholder="Enter your message"
//                 className="w-full p-3 border border-blue-400 rounded resize-none h-28 text-black"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-[#4E7641] px-6 py-3 rounded text-white tracking-wider hover:bg-[#3c5c31] duration-300"
//             >
//               SEND
//             </button>
//           </form>
//         </div>

//         <div className="bg-[#F7F9F7] p-8 rounded shadow animate-fadeIn3D">
//           <h3 className="text-2xl font-bold text-[#3C5C31] mb-4">Email</h3>
//           <p className="mb-6 text-black">
//             <a href="mailto:connect@gizaseeds.com" className="underline">
//               connect@gizaseeds.com
//             </a>
//           </p>
//           <h3 className="text-2xl font-bold text-[#3C5C31] mb-2">Phone</h3>
//           <p className="mb-6 text-black">
//             +(202) 38200669 / +(202) 38200673 / +(202) 38200893 / +20 1099660247
//           </p>
//           <h3 className="text-2xl font-bold text-[#3C5C31] mb-2">Address</h3>
//           <p className="mb-6 text-black">
//             6th of October City, First Industrial Zone, Giza, Egypt.12451
//           </p>
//           <button className="bg-[#4E7641] px-6 py-3 rounded text-white tracking-wider hover:bg-[#3c5c31] duration-300">
//             GET LOCATION
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
// =======
// ===============
// ===========
// =====================
"use client";
import React from "react";

const ContactForm = () => {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-[#e8f5e9] to-white text-green animate-fadeIn3D">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-green">
          Welcome to Giza Seeds 🌱
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700">
          We’re excited to connect with you! If you have any questions or want
          to learn more about our work, feel free to reach out anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-green2">
            Send us a message
          </h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-1 text-green">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green2 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-green">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green2 text-black"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-green">
                Your message
              </label>
              <textarea
                placeholder="Enter your message"
                className="w-full p-3 border border-blue-400 rounded resize-none h-28 text-black focus:outline-none focus:ring-2 focus:ring-green2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#4E7641] px-6 py-3 rounded text-white tracking-wider hover:bg-[#3c5c31] duration-300 w-full"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="p-8 rounded-lg shadow-lg bg-gradient-to-br from-[#f0fdf4] to-[#e0f7e9]">
          <h3 className="text-2xl font-bold mb-4 text-green3">Email</h3>
          <p className="mb-6 text-gray-800">
            <a href="mailto:connect@gizaseeds.com" className="underline">
              connect@gizaseeds.com
            </a>
          </p>

          <h3 className="text-2xl font-bold mb-2 text-green3">Phone</h3>
          <p className="mb-6 text-gray-800 leading-relaxed">
            +(202) 38200669 / +(202) 38200673 / +(202) 38200893 / +20 1099660247
          </p>

          <h3 className="text-2xl font-bold mb-2 text-green3">Address</h3>
          <p className="mb-6 text-gray-800 leading-relaxed">
            6th of October City, First Industrial Zone, Giza, Egypt.12451
          </p>

          <button className="bg-green2 px-6 py-3 rounded text-white tracking-wider hover:bg-[#59a228] duration-300 w-full">
            GET LOCATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
