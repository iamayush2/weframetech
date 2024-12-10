import React from "react";

const InfoStripe = ({ name }) => {
  return (
    <div className="h-[6vh] sm:h-[8vh] w-[90%] flex bg-[#FBF9F899] items-center justify-between px-7 cursor-pointer">
      <h1 className="uppercase text-[#393939] iconname">{name}</h1>
      <p>+</p>
    </div>
  );
};

export default InfoStripe;
