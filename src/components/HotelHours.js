import React from "react";
import { IoMdRestaurant } from "react-icons/io";
const HotelHours = () => {
  return (
    <div className="bg-[#a94421] w-full flex flex-col items-center py-8 relative">
      
        <div className="absolute flex justify-center items-center  size-[48px] rounded-full bg-gray-100  border-[#a0bd57] border-4 -top-6">
          {/* Example: Icon */}
          <IoMdRestaurant className="size-7 text-[#a0bd57]" />
        </div>
      

      {/* Section Container */}
      <div className=" w-[200px] bg-[#a44924]  ">
        {/* Hotel Hours Section */}
        <div className="mb-8">
          <h2 className="text-[#a0bd57] text-[24px] font-[lobster] mb-4  ">
            Hotel Hours
          </h2>
          <ul className="text-[#ebd7a9] text-[13px]">
            <li className="mb-2">
              <span className="font-bold text-[#ebd7a9]">Monday:</span> 10 am -
              10 pm
            </li>
            <li className="mb-2">
              <span className="font-bold text-[#ebd7a9]">Tuesday:</span> 10 am -
              10 pm
            </li>
            <li className="mb-2">
              <span className="font-bold text-[#ebd7a9]">Wednesday:</span> 10 am
              - 10 pm
            </li>
            <li className="mb-2">
              <span className="font-bold text-[#ebd7a9]">Thursday:</span> 10 am
              - 10 pm
            </li>
            <li className="mb-2">
              <span className="font-bold text-[#ebd7a9]">Friday:</span> 10 am -
              10 pm
            </li>
            <li className="mb-2">
              <span className="font-bold text-[#ebd7a9]">Saturday:</span> 10 am
              - 10 pm
            </li>
            <li className="mb-2">
              <span className="font-bold text-[#ebd7a9]">Sunday:</span> Holiday
            </li>
          </ul>
          <p className="text-sm text-[#e7a88f] mt-2">
            CLOSED Mondays & Tuesday
          </p>
        </div>

        {/* Booking Section */}
        <div>
          <h2 className="text-[#a0bd57] text-[24px] font-[lobster] mb-4">
            Make a Booking
          </h2>
          <div className="text-yellow-200 text-[13px] mb-4">
            <p className="mb-2 text-[#ebd7a9]">
              <span className="font-bold text-[#ebd7a9]">Lunch Timings:</span><br/>
              Wed - Sat | 12:00 pm - 3:00 pm
            </p>
            <p className="mb-2 text-[#ebd7a9]">
              <span className="font-bold text-[#ebd7a9]">Dinner Timings:</span><br/>
              Tue - Sun | 5:30 pm - 10:00 pm
            </p>
            <p className="text-sm text-[#e7a88f]">
              BOOKINGS CLOSED on Mondays & Tuesday
            </p>
          </div>

          {/* Book Now Button */}
          <button className="bg-[#a0bd57] border-4 border-[#bcdb6b] text-[14px] text-white py-2 px-4 rounded-full hover:bg-green-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelHours;
