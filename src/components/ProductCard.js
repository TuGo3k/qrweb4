import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const ProductCard = () => {
  const foods = [
    { image: "/product1.jpg", price: 15, title: "Tuna Chops" },
    { image: "/product2.jpg", price: 15, title: "Deep Prawn Fry" },
    { image: "/product3.jpg", price: 15, title: "Sliced Sea Fish" },
    { image: "/product4.jpg", price: 15, title: "Tuna Chops" },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
    //   navigation={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
      }}
      loop={true}
    >
        {foods.map((el, index) =>(<SwiperSlide key={index}>
        <div className=" flex items-center justify-center bg-[#f9f7ed]">
          <div className=" border-4 border-[#c2b59d] w-[166px] bg-white rounded-md shadow-md overflow-hidden relative">
            {/* Badge */}
            <div className="absolute rotate-45 py-1 px-10 top-3  right-[-45px] bg-green-100 text-green-600 text-sm font-semibold  rounded-full">
              Non Veg
            </div>

            {/* Image */}
            <div
              className="h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${el.image})` }}
            >
              {/* Add image here */}
            </div>

            {/* Content */}
            <div className="p-4 text-center">
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-gray-700">
                {el.title}
              </h2>

              {/* Button */}
              <button className="bg-[#b88f40] border-4 border-[#d1c1a6] py-2 px-4 rounded-full text-white text-[14px]">
                Select Options
              </button>
            </div>

            {/* Price Tag */}
            <div className="transform translate-x-[100px] w-[70px] bg-green-500 text-white font-bold px-3 text-sm rounded-md mb-5 py-3 border-l-4 border-green-900">
              ${el.price}
            </div>
          </div>
        </div>
      </SwiperSlide>))}
      
    </Swiper>
  );
};

export default ProductCard;
