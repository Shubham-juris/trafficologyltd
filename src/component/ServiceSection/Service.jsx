import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";


const services = [
  {
    title: "Award Winning SEO Programs for Any Budget",
    content: "Custom SEO strategies tailored to your needs and budget.",
  },
  {
    title: "Google, Facebook, and TikTok Ad Management",
    content: "Expert management to boost your ad ROI across platforms.",
  },
  {
    title: "We Build Premium Backlink Profiles",
    content: "Get high-quality backlinks that improve your search ranking.",
  },
  {
    title: "Social Media Post Management",
    content: "Consistent and engaging social content creation & scheduling.",
  },
];

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) =>
    setActiveIndex(index === activeIndex ? null : index);

  return (
    <section className="py-16 px-4 md:px-12 bg-white text-green-800" id="services">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <div>
          <p className="text-green-600 font-semibold uppercase tracking-wide mb-2">
            Transform Your Search Results
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our Services
          </h2>

          <div className="space-y-4">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={index} className="border-b border-green-200 pb-2">
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full flex justify-between items-center text-left text-lg font-semibold hover:text-green-600 transition"
                  >
                    {service.title}
                    {isActive ? <ChevronUp /> : <ChevronDown />}
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-green-700 mt-2"
                      >
                        {service.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center">
          <img
            src=" https://images.pexels.com/photos/3061303/pexels-photo-3061303.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Our Services Illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
