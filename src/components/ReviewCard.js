import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex flex-col items-center bg-[#f7f3ef] p-8 rounded-lg  w-[200px]">
      {/* Stars */}
      <div className="flex space-x-1 text-gray-500 mb-4">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-xl">
            ☆
          </span>
        ))}
      </div>

      {/* Heading */}
      <h3 className="text-green-500 font-semibold text-lg mb-4">Reviews</h3>

      {/* Image */}
      <div className="rounded-full border-4 border-gray-200 p-1 size-[128px]">
        <img
          src="https://via.placeholder.com/100" // Replace with the actual image URL
          alt="Reviewer"
          className="w-24 h-24 rounded-full"
        />
      </div>

      {/* Quote */}
      <p className="text-center italic text-gray-600 mt-4">
        " Duis viverra aliquam quam vitae posuere. Sed ac vehicula nibh. Donec
        imperdiet adipiscing tortor, a euismod nisl. Vestibulum sit amet
        consectetur nisl, nec molestie dui. Donec vitae tincidunt ligula. "
      </p>

      {/* Name */}
      <p className="text-gray-800 font-medium mt-6">Michal Clark</p>
    </div>
  );
};

export default ReviewCard;
