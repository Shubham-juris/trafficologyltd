import React from "react";
import trafficImg from "../../assets/Images/traffic.jpg"; 

export default function HeroSection() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(71, 167, 95, 0.2), rgba(0,0,0,0.3)), url(${trafficImg})`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-7xl font-[650px] tracking-wide font-serif">
          Mastering Traffic Solutions
        </h1>
      </div>

      {/* Top Tag */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white text-lg  font-semibold md:font-bold tracking-widest">
        TRAFFIC OLOGY
      </div>
    </div>
  )
};
