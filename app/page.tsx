import React from "react";

export default function Page() {
  return (
    <section>
      <div className="bg-home_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh] relative  ">
        <div className="flex flex-col justify-center items-center gap-10 w-full h-full text-center ">
          <div className="text-2xl text-white flex flex-col gap-y-10  items-center">
            <h1 className="text-2xl font-bold sm:text-2xl xl:text-4xl 2xl:text-5xl ">
              Providing Flavors, unlocking experiences, empowering communities
            </h1>
            <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl px-4 w-8/12 text-center">
              Giza has been a global market leader for more than 90 years
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
