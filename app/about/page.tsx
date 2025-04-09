import ContactUs from "@/components/ContactUs";
import OurStory from "@/components/OurStory";
import { WhyGiza } from "@/components/WhyGiza";
import React from "react";

export default function Page() {
  return (
    <section>
      <div className="bg-home_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh] relative">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div className="text-white flex flex-col items-center gap-y-4 px-4 w-full max-w-[1200px] mx-auto animate-fadeIn3D">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
              About
            </h1>
          </div>
          <div className="absolute inset-0 bg-black/15 z-0" />
        </div>
      </div>
      <OurStory />
      <WhyGiza />
      <ContactUs />
    </section>
  );
}
