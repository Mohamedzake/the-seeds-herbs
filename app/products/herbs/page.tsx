import ContactUs from "@/components/ContactUs";
import ProductShowcase from "@/components/ProductShowcase";
import React from "react";
const products = [
  {
    id: 1,
    name: "Anise",
    latinName: "Pimpinella anisum L.",
    category: "Rosemary",
    image: "/seed-1.jpg",
  },
  {
    id: 2,
    name: "Caraway",
    latinName: "Carum carvi",
    category: "Rosemary",
    image: "/seed-2.jpg",
  },
  {
    id: 3,
    name: "Coriander",
    latinName: "Corundum sativum.L",
    category: "Rosemary",
    image: "/seed-1.jpg",
  },
  {
    id: 4,
    name: "Fennel",
    latinName: "Foeniculum Vulgare",
    category: "Oregano",
    image: "/seed-2.jpg",
  },
  {
    id: 5,
    name: "Fennel",
    latinName: "Foeniculum Vulgare",
    category: "Oregano",
    image: "/seed-2.jpg",
  },
  {
    id: 6,
    name: "Coriander",
    latinName: "Corundum sativum.L",
    category: "Sage",
    image: "/seed-1.jpg",
  },
  {
    id: 7,
    name: "Fennel",
    latinName: "Foeniculum Vulgare",
    category: "Sage",
    image: "/seed-2.jpg",
  },
  {
    id: 8,
    name: "Fennel",
    latinName: "Foeniculum Vulgare",
    category: "Lemon grass",
    image: "/seed-2.jpg",
  },
];

const tabs = ["Rosemary", "Oregano", "Sage", "Lemon grass"];
export default function Page() {
  return (
    <section>
      <div className="bg-home_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh] relative">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div className="text-white flex flex-col items-center gap-y-4 px-4 w-full max-w-[1200px] mx-auto animate-fadeIn3D">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
              herbs
            </h1>
          </div>
        </div>
      </div>
      <ProductShowcase products={products} tabs={tabs} />
      <ContactUs />
    </section>
  );
}
