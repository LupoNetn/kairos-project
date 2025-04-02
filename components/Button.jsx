import React from "react";

const Button = ({ children, textColor, hoverColor, bgColor, hoverText }) => {
  return (
    <button
      type="button"
      className={`w-32 h-10 px-8 py-2 border-black border rounded-2xl mr-2 cursor-pointer ${textColor} ${hoverColor} ${bgColor} ${hoverText}`}
    >
      {children}
    </button>
  );
};

export default Button;
