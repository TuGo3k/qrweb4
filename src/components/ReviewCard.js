import React, { useState, useEffect } from "react";

const ReviewCard = () => {
  const comments = [
    {
      author: "Steve Bucami",
      image: "/authour.jpg",
      Role: "Chief Chef in Alfa Restaurant",
      comment:
        "Duis viverra aliquam quam vitae posuere. Sed ac vehicula nibh. Donec imperdiet adipiscing tortor, a euismod nisl. Vestibulum sit amet consectetur nisl, nec molestie dui. Donec vitae tincidunt ligula.",
    },
    {
      author: "Adam Walsh",
      image: "/authour1.jpg",
      Role: "Fresh Chef in Korola Hotel",
      comment:
        "Duis viverra aliquam quam vitae posuere. Sed ac vehicula nibh. Donec imperdiet adipiscing tortor, a euismod nisl. Vestibulum sit amet consectetur nisl, nec molestie dui. Donec vitae tincidunt ligula.",
    },
    {
      author: "Michal Clark",
      image: "/authour2.jpg",
      Role: "Head Chief in Mona Restaurant",
      comment:
        "Duis viverra aliquam quam vitae posuere. Sed ac vehicula nibh. Donec imperdiet adipiscing tortor, a euismod nisl. Vestibulum sit amet consectetur nisl, nec molestie dui. Donec vitae tincidunt ligula.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [comments.length]);

  return (
    <div className="flex justify-center bg-[#eae8df]  w-full">
    <div className="flex flex-col items-center bg-[#eae8df] p-8 rounded-lg w-[280px]">
      {/* Stars */}
      <div className="flex space-x-1 text-gray-500 mb-4">
        <span className="text-xl">☆☆☆</span>
        <h3 className="text-[#a0bd57] font-[lobster] text-lg mb-4">Reviews</h3>
        <span className="text-xl">☆☆☆</span>
      </div>

      {/* Heading */}

      {/* Reviewer Image */}
      <div className="rounded-full border-4 border-gray-200 p-1 w-32 h-32 mb-4">
        <img
          src={comments[currentIndex].image}
          alt="Reviewer"
          className="w-full h-full rounded-full transition duration-500 ease-in-out transform hover:scale-110"
        />
      </div>

      {/* Animated Quote */}
      <div
        key={currentIndex} // Use `key` to force React to treat it as a new element
        className="transition-opacity duration-500 ease-in-out opacity-100 transform scale-100 text-center"
      >
        <p className="text-gray-600 italic mb-4">
          {comments[currentIndex].comment}
        </p>
        <p className="text-gray-800 font-medium">
          {comments[currentIndex].author}
        </p>
        <p className="text-sm text-gray-500">{comments[currentIndex].Role}</p>
      </div>
    </div>
    </div>
  );
};

export default ReviewCard;
