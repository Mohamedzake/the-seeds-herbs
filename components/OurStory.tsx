"use client";

import { motion } from "framer-motion";

const timeline = [
  // { year: "1930s", text: "Trading of spices, herbs and seeds" },
  { year: "1970s", text: "1st mechanical spice processing line in Egypt" },
  { year: "1980s", text: "1st electrical sorting line in Egypt" },
  { year: "1990s", text: "1st ETO sterilization chamber in Egypt" },
  { year: "2010s", text: "1st steam sterilization chamber in Egypt" },
  { year: "2020s", text: "1st full-fledged contract farming program in Egypt" },
];

const OurStory = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green2 via-lime-700 to-emerald-500 mb-6 text-center"
        >
          Our Story
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-700 leading-relaxed space-y-6"
          >
            <p>
              Giza Seeds & Herbs is the largest & fastest-growing exporter of
              premium spices, herbs, and seeds out of Egypt. Giza has been a
              global market leader for Egyptian items for almost 90 years.
            </p>
            <p>
              We provide an integrated value chain that includes sourcing,
              cleaning, processing, sterilizing and packaging spices as well as
              managing excellent aftermarket services to our customers offering
              the most reliable organic & non-organic spices’ solutions across
              many countries.
            </p>
            <p>
              Our solutions serve a full range of culinary and medicinal
              applications and are ready to be served to the final users. We
              offer fully traceable products via our extensively controlled
              value chain managed by more than 250 on-ground spice experts.
            </p>
            <p>
              Giza aims to continue its journey and become the most dominant
              supplier in this region, expanding its footprint as a
              one-stop-shop for all adjacent food ingredients.
            </p>
          </motion.div>

          {/* Right Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="border-l-4 border-green2 pl-6 space-y-10">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[1.1rem] top-1 w-5 h-5 bg-green2 border-4 border-blue-100 rounded-full shadow-lg" />
                  <div className="mb-1 ml-2 text-green2 font-semibold text-lg">
                    {item.year}
                  </div>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
