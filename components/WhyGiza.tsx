// import {
//   UserCircleIcon,
//   ChartBarIcon,
//   HandRaisedIcon,
//   UserGroupIcon,
//   ArrowPathIcon,
//   BriefcaseIcon,
//   ComputerDesktopIcon,
//   // HandshakeIcon,
// } from "@heroicons/react/24/outline";

// export const WhyGiza = () => {
//   return (
//     <section className="bg-stone-50 py-20 lg:py-28">
//       <div className="container mx-auto px-4 max-w-6xl">
//         {/* Main Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-light text-stone-800 mb-4">
//             <span className="block font-serif text-amber-600 text-5xl lg:text-6xl mb-4">
//               Why Giza?
//             </span>
//             Excellence in Spice Trading Since 1935
//           </h2>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
//           {/* Our Values Section */}
//           <div className="space-y-8">
//             <h3 className="text-2xl font-semibold text-stone-700 flex items-center gap-3 mb-8">
//               <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
//                 <HandRaisedIcon className="w-5 h-5 text-amber-600" />
//               </div>
//               Our Core Values
//             </h3>

//             <div className="grid gap-6">
//               {[
//                 {
//                   icon: UserCircleIcon,
//                   title: "Customer Focused",
//                   description:
//                     "Dedicated to exceeding client expectations through personalized service",
//                 },
//                 {
//                   icon: ChartBarIcon,
//                   title: "Result Oriented",
//                   description:
//                     "Driven by measurable outcomes and continuous improvement",
//                 },
//                 {
//                   icon: HandRaisedIcon,
//                   title: "Craftsmen Spirit",
//                   description:
//                     "Artisanal expertise meets modern food safety standards",
//                 },
//                 {
//                   icon: UserGroupIcon,
//                   title: "Team Players",
//                   description:
//                     "Collaborative approach ensuring seamless operations",
//                 },
//                 {
//                   icon: ArrowPathIcon,
//                   title: "Continuous Improvement",
//                   description:
//                     "Ongoing innovation in processes and quality control",
//                 },
//               ].map((value, index) => (
//                 <div
//                   key={index}
//                   className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="p-3 bg-amber-50 rounded-lg">
//                       <value.icon className="w-6 h-6 text-amber-600" />
//                     </div>
//                     <div>
//                       <h4 className="text-lg font-medium text-stone-800 mb-2">
//                         {value.title}
//                       </h4>
//                       <p className="text-stone-600">{value.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Value Proposition Section */}
//           <div className="space-y-8">
//             <h3 className="text-2xl font-semibold text-stone-700 flex items-center gap-3 mb-8">
//               <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
//                 <BriefcaseIcon className="w-5 h-5 text-amber-600" />
//               </div>
//               Our Value Proposition
//             </h3>

//             <div className="grid gap-8">
//               {[
//                 {
//                   icon: UserGroupIcon,
//                   title: "Extensive Client Service",
//                   description:
//                     "Dedicated account managers with 24-hour response time, available on-site within 2-3 business days",
//                 },
//                 {
//                   icon: ComputerDesktopIcon,
//                   title: "Digital Account Management",
//                   description:
//                     "Real-time tracking portal with inventory management, order configuration, and client onboarding tools",
//                 },
//                 {
//                   icon: UserGroupIcon,
//                   title: "Sustainable Partnerships",
//                   description:
//                     "Long-term value creation through transparent practices and ethical sourcing commitments",
//                 },
//               ].map((proposition, index) => (
//                 <div
//                   key={index}
//                   className="group relative p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
//                 >
//                   <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-100 transition-colors" />
//                   <div className="flex items-start gap-5">
//                     <div className="p-4 bg-amber-50 rounded-xl">
//                       <proposition.icon className="w-7 h-7 text-amber-600" />
//                     </div>
//                     <div>
//                       <h4 className="text-xl font-semibold text-stone-800 mb-3">
//                         {proposition.title}
//                       </h4>
//                       <p className="text-stone-600 leading-relaxed">
//                         {proposition.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// =======
// ======
// ===

"use client";
import { motion } from "framer-motion";
import {
  UserCircleIcon,
  ChartBarIcon,
  HandRaisedIcon,
  UserGroupIcon,
  ArrowPathIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const hoverScale = { scale: 1.03 };
const tapScale = { scale: 0.98 };

export const WhyGiza = () => {
  return (
    <section className="bg-stone-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-stone-800 mb-4">
            <span className="block font-serif text-amber-600 text-5xl lg:text-6xl mb-4">
              Why Giza?
            </span>
            Excellence in Spice Trading Since 1935
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Our Values Section */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="text-2xl font-semibold text-stone-700 flex items-center gap-3 mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"
              >
                <HandRaisedIcon className="w-5 h-5 text-amber-600" />
              </motion.div>
              Our Core Values
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6"
            >
              {[
                {
                  icon: UserCircleIcon,
                  title: "Customer Focused",
                  description:
                    "Dedicated to exceeding client expectations through personalized service",
                },
                {
                  icon: ChartBarIcon,
                  title: "Result Oriented",
                  description:
                    "Driven by measurable outcomes and continuous improvement",
                },
                {
                  icon: HandRaisedIcon,
                  title: "Craftsmen Spirit",
                  description:
                    "Artisanal expertise meets modern food safety standards",
                },
                {
                  icon: UserGroupIcon,
                  title: "Team Players",
                  description:
                    "Collaborative approach ensuring seamless operations",
                },
                {
                  icon: ArrowPathIcon,
                  title: "Continuous Improvement",
                  description:
                    "Ongoing innovation in processes and quality control",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={hoverScale}
                  whileTap={tapScale}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.4 }}
                      className="p-3 bg-amber-50 rounded-lg"
                    >
                      <value.icon className="w-6 h-6 text-amber-600" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-medium text-stone-800 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-stone-600">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Value Proposition Section */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="text-2xl font-semibold text-stone-700 flex items-center gap-3 mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"
              >
                <BriefcaseIcon className="w-5 h-5 text-amber-600" />
              </motion.div>
              Our Value Proposition
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-8"
            >
              {[
                {
                  icon: UserGroupIcon,
                  title: "Extensive Client Service",
                  description:
                    "Dedicated account managers with 24-hour response time, available on-site within 2-3 business days",
                },
                {
                  icon: ComputerDesktopIcon,
                  title: "Digital Account Management",
                  description:
                    "Real-time tracking portal with inventory management, order configuration, and client onboarding tools",
                },
                {
                  icon: UserGroupIcon,
                  title: "Sustainable Partnerships",
                  description:
                    "Long-term value creation through transparent practices and ethical sourcing commitments",
                },
              ].map((proposition, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={hoverScale}
                  whileTap={tapScale}
                  className="group relative p-8 bg-white rounded-xl shadow-sm hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-start gap-5">
                    <motion.div
                      whileHover={{ rotate: [0, -15, 15, 0] }}
                      transition={{ duration: 0.6 }}
                      className="p-4 bg-amber-50 rounded-xl"
                    >
                      <proposition.icon className="w-7 h-7 text-amber-600" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-semibold text-stone-800 mb-3">
                        {proposition.title}
                      </h4>
                      <p className="text-stone-600 leading-relaxed">
                        {proposition.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
