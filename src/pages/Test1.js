import React, { useState, useEffect } from "react";

const AutoChangingComments = () => {
  // Array of comments
  const comments = [
    "Keep your code clean and readable.",
    "Don't forget to comment your functions.",
    "Always optimize for performance.",
    "Write tests for your components!",
    "Refactor often to improve maintainability."
  ];

  // State to store the current comment index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set an interval to update the comment every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [comments.length]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-6 rounded-lg shadow-md bg-white">
        <p className="text-lg font-semibold text-gray-700">
          {comments[currentIndex]}
        </p>
      </div>
    </div>
  );
};

export default AutoChangingComments;
