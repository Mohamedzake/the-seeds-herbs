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
