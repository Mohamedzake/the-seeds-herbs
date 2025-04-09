import {
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
  ChartBarIcon,
  HandRaisedIcon,
  UserGroupIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
export const AboutSection = () => {
  const certificates = [
    { name: "ISO 22000", image: "/cer-1.png" },
    { name: "ISO 9001", image: "/cer-2.png" },
    { name: "HACCP", image: "/cer-3.jpg" },
    { name: "FSSC", image: "/cer-4.png" },
  ];
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 lg:mb-24">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-800 mb-6 animate-fade-in-up">
              Crafting Spice Excellence Since 1935
            </h2>
            <p className="text-lg text-amber-900/90 leading-relaxed">
              Giza stands as Egypt&apos;s premier spice exporter, combining
              centuries-old craftsmanship with cutting-edge food safety
              technology. Our vertically integrated process—from ethical
              sourcing through rigorous sterilization to precision packaging—
              ensures unparalleled quality control across 300+ SKUs.
            </p>
            <div className="prose prose-lg text-amber-800/80">
              <p>
                With 250+ spice experts overseeing every step, we maintain full
                traceability while processing 10,000+ metric tons annually for
                global partners. Our Cairo-based facilities set the benchmark
                for spice excellence in North Africa.
              </p>
            </div>
          </div>

          {/* Right Column - Values & Certificates */}
          <div className="space-y-10">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-amber-50">
              <h3 className="text-amber-800 text-2xl font-bold mb-6 flex items-center gap-2">
                <SparklesIcon className="w-6 h-6 text-amber-600" />
                Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Customer Focused", icon: HeartIcon },
                  { label: "Result Driven", icon: ChartBarIcon },
                  { label: "Artisan Spirit", icon: HandRaisedIcon },
                  { label: "Team Synergy", icon: UserGroupIcon },
                  { label: "Continuous Innovation", icon: LightBulbIcon },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <span className="text-amber-800 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates Section */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-amber-50">
              <h3 className="text-amber-800 text-2xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheckIcon className="w-6 h-6 text-amber-600" />
                Our Certificates
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {certificates.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-20 h-20  rounded-xl flex items-center justify-center border border-amber-100">
                      <Image
                        src={cert.image}
                        alt={cert.name + " Certification"}
                        width={80}
                        height={80}
                        className="object-contain w-full h-full"
                        quality={100}
                        priority={false}
                      />
                    </div>
                    <span className="text-sm font-medium text-amber-700">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {[
            { number: "30+", label: "Countries Served" },
            { number: "100+", label: "Global Clients" },
            { number: "300+", label: "Product Variants" },
            { number: "10k+", label: "Tons Annual Output" },
            { number: "250+", label: "Quality Experts" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-50"
            >
              <p className="text-4xl font-bold text-amber-700 mb-2">
                {stat.number}
              </p>
              <p className="text-sm font-semibold text-amber-600/90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
