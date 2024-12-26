import React from "react";

const BlogCard = () => {
  const blogs = [
    {
      title: "A Though about being Vegan",
      description:
        "Roin a bibendum nibh. Nunc fermentum sit amet mi nec consequat. Praesent porttitor nulla sit amet dui lobortis...",
      image: "/menu-img5.jpg",
    },
    {
      title: "Tastes like Chicken - A Test Drive with Veggie",
      description:
        "Roin a bibendum nibh. Nunc fermentum sit amet mi nec consequat. Praesent porttitor nulla sit amet dui lobortis...",
      image: "/menu-img6.jpg",
    },
  ];
  return (
    <div className="container flex flex-col items-center justify-center py-15">
      <h3 className="text-[#a0bd57] text-[20px] font-[lobster] float-left mb-4">Recent Blog</h3>
      {blogs.map((el, index) => (
        <div key={index} className="bg-cream p-6 rounded-lg border-b border-slate-300 text-center w-[200px]">
          {/* Blog Section Title */}

          {/* Image Section */}
          <div className="mb-4">
            <img
              src={el.image}
              alt="Blog Thumbnail"
              className="rounded-lg border border-gray-300"
            />
          </div>

          {/* Blog Title */}
          <h4 className="text-brown text-[20px]  font-[roboto-condensed] mb-2 text-[#A58039] ">
            {el.title}
          </h4>

          {/* Blog Description */}
          <p className="text-gray-600 text-sm">
            {el.description}
          </p>

          {/* Blog Footer */}
          <div className="flex justify-center items-center text-gray-500 text-sm mt-4">
            <span className="flex items-center mr-4">
              <i className="far fa-calendar-alt mr-2"></i>21 Aug 2013
            </span>
            <span className="flex items-center">
              <i className="far fa-user mr-2"></i>Admin
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
