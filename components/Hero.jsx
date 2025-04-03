import React from "react";
import {
  FaRocket,
  FaLightbulb,
  FaLaptopCode,
  FaCloud,
  FaCodeBranch,
} from "react-icons/fa";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-90px)] flex flex-col justify-center items-center text-center px-4 max-sm:px-2 relative overflow-hidden">
      {/* Decorative Background Icons */}
      <FaRocket className="absolute top-5 left-5 text-purple-200 opacity-70 text-7xl max-sm:text-5xl sm:top-3 sm:left-3 z-[-1]" />
      <FaLightbulb className="absolute bottom-10 right-10 text-pink-200 opacity-70 text-9xl max-sm:text-6xl sm:bottom-5 sm:right-5 z-[-1]" />
      <FaLaptopCode className="absolute top-1/3 right-1/4 text-orange-200 opacity-70 text-6xl max-sm:text-4xl sm:top-3 sm:right-1/5 z-[-1]" />
      <FaCloud className="absolute top-1/4 left-1/4 text-blue-200 opacity-70 text-8xl max-sm:text-5xl max-sm:top-[6em] sm:top-1/5 sm:left-1/5 z-[-1]" />
      <FaCodeBranch className="absolute bottom-1/3 right-1/3 text-green-200 opacity-70 text-7xl max-sm:text-4xl sm:bottom-1/4 sm:right-1/4 z-[-1]" />
      {/* End of Decorative Background Icons */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 text-center max-w-[800px] md:max-w-[900px] lg:max-w-[1000px]">
        Do you want to become a 10X developer?? join the 30 days of code with
        vicky jay!
      </h1>
      <p className="text-base md:text-lg lg:text-xl max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 text-center">
        The "30 Days of Code with VickyJay" challenge is an engaging and
        intensive programming contest designed to foster continuous learning and
        project development
      </p>
      <div className="flex sm:m-12 max-sm:m-8">
        <div>
          <Button hoverColor='bg-black' hoverText='text-white'>Join Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
