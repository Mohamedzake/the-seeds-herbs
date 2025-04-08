import Image from "next/image";
import React from "react";

export default function GreetQuality() {
  return (
    <section className="px-4 py-12 md:py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
              Farming
            </h2>
            <p className="text-base md:text-lg">
              We master the full value chain from cultivation from our contract
              farms to aftermarket services to our clients. We are specialized
              in sourcing, cleaning, processing, sterilizing, and packaging
              spices. Giza is the preferred choice for a global client base
              across more than 50 countries. We are the largest buyers of spices
              raw materials in Egypt, this enables us to provide our business
              partners with the most reliable solutions for organic and
              non-organic spices.
            </p>
          </div>
          <div>
            <Image
              src="/qu-1.jpeg"
              alt="Farming Image"
              width={700}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
              Ongoing Process Control
            </h2>
            <p className="text-base md:text-lg">
              We continue enhancing the equipment and technology such as
              laboratory testing equipment, metal detectors, screens and color
              sorting and differentiation, to meet up with our customers’
              requirements in the best way.
            </p>
          </div>

          <div className="md:order-1">
            <Image
              src="/qu-2.jpg"
              alt="Process Control Image"
              width={700}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
