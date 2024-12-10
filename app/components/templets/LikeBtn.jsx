import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import "./LikeAnimation.css";

const LikeBtn = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div>
      {isLiked ? (
        <AiFillHeart
          className={`text-2xl lg:text-4xl cursor-pointer text-red-500 ${
            isAnimating ? "animate-like" : ""
          }`}
          onClick={handleLike}
        />
      ) : (
        <CiHeart
          className={` text-2xl lg:text-4xl cursor-pointer text-gray-500 ${
            isAnimating ? "animate-like" : ""
          }`}
          onClick={handleLike}
        />
      )}
    </div>
  );
};

export default LikeBtn;
