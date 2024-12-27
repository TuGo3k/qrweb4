import React from "react";
import { IoMdRestaurant } from "react-icons/io";

const ThemeCard = () => {
  return (
    <div className="bg-cream rounded-lg text-start   w-[200px] mx-auto py-[60px]">
      {/* Icon Section */}
      <div className="mb-4 flex items-center">
        <div className="w-[76px] bg-slate-300 h-[1px]"></div>
        <div className="flex justify-center items-center mx-auto size-[48px] rounded-full bg-gray-100 border border-gray-300">
          {/* Example: Icon */}
          <IoMdRestaurant className="size-7 text-[#a0bd57]" />
        </div>

        <div className="w-[76px] bg-slate-300 h-[1px]"></div>
      </div>

      {/* Title Section */}
      <h3 className="text-brown text-xl  mb-2">
        <span className="text-[#c78f3f] font-bold">Bella Model</span> - A
        Restaurant Theme
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-10">
        Roin a bibendum nibh. Nunc fermentum sit amet mi nec consequat. Praesent
        porttitor nulla sit amet dui lobortis. Nunc fermentum sit amet mi nec
        consequat. Praesent porttitor nulla sit amet dui lobortis, id venenatis
        nibh accumsan.
      </p>

      {/* Button */}
      <button className="bg-brown text-white font-semibold py-[8px] px-[20px] rounded-full text-[14px] bg-[#b88f40] border-4 border-[#d9cdb6]">
        Purchase Theme
      </button>
    </div>
  );
};

export default ThemeCard;
