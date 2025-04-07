import React from "react";

export default function Page() {
  return (
    <section>
      <div className="bg-home_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh] relative">
        <div className="flex flex-col justify-center items-start h-full text-left">
          <div className="text-white flex flex-col items-start gap-y-4 px-4 pr-16 md:px-6 md:pr-24 lg:px-8 lg:pr-32 xl:px-10 xl:pr-40 w-full max-w-[1200px] mx-auto animate-fadeIn3D">
            <h1 className="text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
              Quailty
            </h1>
            <h2 className="text-left text-xs sm:text-sm md:text-base lg:text-lg max-w-xl">
              Giza has been a global market leader for more than 90 years
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
