import React from "react";

const HeroSection = () => (
  <section className="relative bg-blue-900 text-white h-screen flex flex-col justify-center items-center px-6 md:px-30">
    {/* Background overlay */}
    <div className="absolute inset-0 bg-black opacity-40"></div>

    {/* Text and Button Container */}
    <div className="z-10  w-full">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 sm:mb-8 md:mb-10 leading-tight">
        Films. Web Stories. <br /> Real People.
      </h1>
      <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg sm:text-xl md:text-2xl">
        Watch Our Work
      </button>
    </div>
  </section>
);

export default HeroSection;
