import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import SwiperDemo from "../components/swiper/SwiperDemo";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { MdHome } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoUmbrella } from "react-icons/io5";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import {Card} from "../components/Card";
import BlogCard from "../components/BlogCard";
import ThemeCard from "../components/ThemeCard";

export const Home = () => {
  const navbar = [
    { icon: <BiSolidCoffeeAlt />, title: "Menu" },
    { icon: <MdHome />, title: "We Accomodate" },
    { icon: <PiForkKnifeFill />, title: "We Serve" },
    { icon: <IoUmbrella />, title: "We Care" },
  ];

  const [chosen, setChosen] = useState(null);
  return (
    <div className="bg-[#f7f3ee]">
      <div className="w-full bg-[#e2ded3] flex flex-col justify-center items-center text-center py-5">
        <h1 className="flex font-bold text-[24px] gap-2">
          <span className="flex text-[#a0bd57]">
            <GiCoffeeCup className="size-8" />
            Bella
          </span>
          Home
        </h1>
        <p className="text-[#bdb39e]">Restaurant & Bakery HTML Template</p>
      </div>
      <div>
        <SwiperDemo />
      </div>
      <div className="flex flex-col my-5">
        {navbar.map((el, index) => (
          <div key={index} className="navbar flex justify-center py-2 ">
            <div
              onClick={() => setChosen(index)}
              className="flex items-center gap-2"
            >
              <div className="icon rounded-full flex justify-center items-center size-[45px] text-white bg-[#a44823] ">
                {el.icon}
              </div>
              <h2 className={chosen === index && "text-[#a0bd7d] duration-300"}>
                {el.title}
              </h2>
            </div>
          </div>
        ))}
        <div className="flex justify-center my-5">
          <button className="bg-[#b88f40] border-4 border-[#d1c1a6] py-2 px-4 rounded-full text-white">
            Book A Table
          </button>
        </div>
      </div>
      <ProductCard />
      <div>
        <Card />
        <BlogCard />
        <ThemeCard />
      </div>
    </div>
  );
};
