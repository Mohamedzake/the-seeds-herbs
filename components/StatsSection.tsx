import {
  FaGlobe,
  FaRecycle,
  FaLeaf,
  FaBoxes,
  FaSeedling,
} from "react-icons/fa";

type Stat = {
  icon: JSX.Element;
  value: string;
  label: string;
};

const stats: Stat[] = [
  {
    icon: <FaGlobe className="text-green-700 text-4xl" />,
    value: "30+",
    label: "Countries Served",
  },
  {
    icon: <FaRecycle className="text-green-700 text-4xl" />,
    value: "100+",
    label: "Global Customers Served",
  },
  {
    icon: <FaLeaf className="text-green-700 text-4xl" />,
    value: "300+",
    label: "SKUs Owned",
  },
  {
    icon: <FaBoxes className="text-green-700 text-4xl" />,
    value: "10k+",
    label: "MT of Goods Processed",
  },
  {
    icon: <FaSeedling className="text-green-700 text-4xl" />,
    value: "250+",
    label: "Spice Experts Acquired/dealt with",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-50 animate-fadeIn3D text-primary-green rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          >
            {stat.icon}
            <h3 className="text-2xl font-bold text-gray-800 mt-4">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
