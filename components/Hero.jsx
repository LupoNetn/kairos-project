import React from "react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-90px)] flex flex-col justify-center items-center text-center px-4 max-sm:px-2">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 text-center max-w-[800px] md:max-w-[900px] lg:max-w-[1000px]">
        Do you want to become a 10X developer?? join the 30 days of code with
        vicky jay!
      </h1>
      <p className="text-base md:text-lg lg:text-xl max-w-[800px] mx-auto px-4 md:px-6 lg:px-8 text-center">
        The "30 Days of Code with VickyJay" challenge is an engaging and
        intensive programming contest designed to foster continuous learning and
        project development
      </p>
    </div>
  );
};

export default Hero;
