import React from "react";

export const Card = () => {
  const foodData = [
    {
      title: "Tomato Special Fry - 1 Plate",
      description:
        "Roin a bibendum nibh. Nunc fermentum sit amet mi nec consequat. Praesent porttitor nulla sit amet dui lobortis...",
      image: "/menu-img1.jpg",
      code: "TOMFRY",
      price: 25.0,
    },
    {
      title: "Bitter Sweet - 1 Plate",
      description:
        "Roin a bibendum nibh. Nunc fermentum sit amet mi nec consequat. Praesent porttitor nulla sit amet dui lobortis...",
      image: "/menu-img2.jpg",
      code: "TOMFRY",
      price: 25.0,
    },
    {
      title: "Olives with Spices",
      description:
        "Roin a bibendum nibh. Nunc fermentum sit amet mi nec consequat. Praesent porttitor nulla sit amet dui lobortis...",
      image: "/menu-img3.jpg",
      code: "TOMFRY",
      price: 25.0,
    },
    {
      title: "Potato Croquettes",
      description:
        "Roin a bibendum nibh. Nunc fermentum sit amet mi nec consequat. Praesent porttitor nulla sit amet dui lobortis...",
      image: "/menu-img4.jpg",
      code: "TOMFRY",
      price: 25.0,
    },
  ];


  return (
    <>
      {foodData.map((el, index) => (
        <div className="container flex justify-center py-5">
          <div className="img-container flex flex-col items-center justify-center relative gap-5 w-[200px] ">
            <span className="back size-[175px] border border-[#ccc2b1] bg-[#dad6cf] top-0  -rotate-6 z-10 absolute"></span>
            <div className="front border-4 border-[#ccc2b1] size-[178px] z-10 relative ">
              <img className="food-img" src={el.image} />
              {/* -------------------------------------------------------------------- */}
              <img
                className="z-10 size-[49px] absolute -top-4 -right-5"
                src="/top-left.png"
              ></img>
              <img
                className="z-10 size-[49px] absolute -bottom-4 -left-5 rotate-180"
                src="/top-left.png"
              ></img>
              <div className="flex absolute top-2/3 -right-3 items-center text-white font-semibold overflow-hidden">
                <img
                  className="w-[19px] h-[44px]"
                  src="/price-tag-before.png"
                />
                <p className="bg-[#a0bd57] p-[10px]">Code:{el.code}</p>
              </div>
            </div>
            <div className="mt-4 w-full flex justify-between">
              <div className="text-wrap w-2/3">
                <h3 className="text-[20px] text-[#a58039] font-[lobster]">
                 {el.title}
                </h3>
              </div>
              <div
                className="size-[60px] -ml-5 text-white flex justify-center text-center items-center  font-bold "
                style={{ backgroundImage: "url(/menu-price.png)" }}
              >
                ${el.price}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-2">
            {el.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
