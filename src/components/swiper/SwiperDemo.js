import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import required modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bg = [
  { image: "./slider-bg1.jpg" },
  { image: "./slider-bg2.jpg" },
];

const AnimatedSwiper = () => {
  return (
    <div className=" text-white  flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation={true}
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        className="w-full h-[293px]"
      >
        {/* Slide 1 */}
        {bg.map((el, index) => (
             <SwiperSlide key={index}>
             <div
               className="h-full w-full bg-cover bg-center flex justify-center items-center transition-transform duration-700 transform hover:scale-105 shadow-lg"
               style={{
                 backgroundImage: `url(${el.image})`,
               }}
             >
               <div className="text-center bg-black bg-opacity-50 p-4 rounded-lg">
                 <h2 className="text-3xl font-bold">Welcome to Adventure</h2>
                 <p className="mt-2">Discover the beauty of the world!</p>
               </div>
             </div>
           </SwiperSlide>
        ))}
       

    
      </Swiper>
    </div>
  );
};

export default AnimatedSwiper;
