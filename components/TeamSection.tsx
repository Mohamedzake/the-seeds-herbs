"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Mostafa Bedair",
    role: "CEO",
    image: "/ceo-1.png",
    initials: "MB",
  },
  {
    name: "Seif Shady",
    role: "Deputy CEO",
    image: "/ceo-2.jpg",
    initials: "SS",
  },
  {
    name: "Sherif Youssef",
    role: "Operations Director",
    image: "/ceo-1.png",
    initials: "SY",
  },
  {
    name: "Abdelfatah Mohamed",
    role: "CHSE Manager",
    image: "/ceo-2.jpg",
    initials: "AM",
  },
  {
    name: "Abdelfatah Mohamed",
    role: "CHSE Manager",
    image: "/ceo-2.jpg",
    initials: "AM",
  },
  {
    name: "Mostafa Bedair",
    role: "CEO",
    image: "/ceo-1.png",
    initials: "MB",
  },
  {
    name: "Seif Shady",
    role: "Deputy CEO",
    image: "/ceo-2.jpg",
    initials: "SS",
  },
  {
    name: "Sherif Youssef",
    role: "Operations Director",
    image: "/ceo-1.png",
    initials: "SY",
  },
];

export const TeamSection = () => {
  return (
    <section className="bg-amber-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-stone-900 mb-4">
            <span className="block font-serif text-amber-700 text-5xl lg:text-6xl mb-4">
              Leadership Team
            </span>
            Experienced Guidance for Spice Excellence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-amber-200 flex items-center justify-center">
                    <span className="text-3xl font-bold text-amber-800">
                      {member.initials}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 text-center space-y-2">
                <h3 className="text-xl font-bold text-stone-900">
                  {member.name}
                </h3>
                <p className="text-amber-700 font-semibold">{member.role}</p>
              </div>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-300 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
