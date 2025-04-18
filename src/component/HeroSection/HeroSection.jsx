import React from "react";
import { motion } from "framer-motion";
import trafficImg from "../../assets/Images/traffic.jpg";

export default function HeroSection() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(71, 167, 95, 0.3), rgba(0,0,0,0.6)), url(${trafficImg})`,
      }}
    >
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        
        {/* Optional Top Tag */}
        <motion.div
          className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold md:font-bold tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Empowering Smart Mobility
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-7xl font-bold tracking-wide font-serif drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Mastering Traffic Solutions
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-6 max-w-xl text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          We design intelligent, adaptive, and future-ready traffic systems.
        </motion.p>
      </div>
    </div>
  );
}
