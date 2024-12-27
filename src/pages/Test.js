import React, { useState } from "react";

const CodeReviewComments = () => {
  const [comments, setComments] = useState([
    "Refactor this function to improve readability.",
    "Consider using a more descriptive variable name.",
    "Avoid using inline styles; use a CSS class instead."
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleEditComment = (index, updatedText) => {
    const updatedComments = comments.map((comment, i) =>
      i === index ? updatedText : comment
    );
    setComments(updatedComments);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-gray-100 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Code Review Comments</h2>
      <ul className="space-y-3">
        {comments.map((comment, index) => (
          <li key={index} className="flex items-center gap-2">
            <input
              type="text"
              value={comment}
              onChange={(e) => handleEditComment(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a new comment"
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddComment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CodeReviewComments;
