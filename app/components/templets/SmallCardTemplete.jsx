"use client";
import React from "react";
import LikeBtn from "./LikeBtn";
import "../../globals.css";

const SmallCardTemplete = () => {
  return (
    <div
      className={` w-[15em] md:w-[18rem] h-full  rounded-md flex flex-col flex-shrink-0`}
    >
      {/* upper  */}
      <div className="flex relative w-full h-[77%] bg-[#F9F7F5]  rounded-t-md items-center justify-center">
        <img
          className="w-auto h-[60%] bg-[#F9F7F5] mix-blend-multiply"
          src="Table ronde 165cm Festi 1.png"
          alt=""
        />

        {/* {like btn } */}
        <div className="absolute top-[5%] left-[3%] translate-x-[-3%] translate-y-[-5%]">
          <LikeBtn />
        </div>

        {/* {name} */}

        <div className="absolute p-1 right-[3%] top-[5%] bg-white">
          <p className="text-xs uppercase">Art de la table</p>
        </div>
      </div>
      {/* lower  */}
      <div className="flex flex-col h-[23%] w-full justify-around">
        {/* title  */}
        <div className="producTtitle flex items-center justify-between w-full px-3">
          <h1 className="text-2xl">Title</h1>
          <div className="flex text-3xl leading-none">
            0{" "}
            <span className="flex h-full justify-center mt-[4px] text-xs text-start">
              €
            </span>
          </div>
        </div>

        {/* per piece price desc cont & piece  */}
        <div className="cardlowerinfo flex items-center w-full px-1 md:px-3 justify-between font-semibold">
          {/* first -info */}
          <p className="text-sm text-[#9C9C9C]">
            0,35€/Pièce ·{" "}
            <span className="inline-block text-[0.6em] lg:text-[0.7vw]">
              {" "}
              RÉF:VABGN5
            </span>
          </p>
          <div className="p-1 px-2 bg-[#F1F4F6] rounded-full">
            <p className="text-[0.7em] md:text-xs text-[#546A7D] leading-none">
              20 pièces
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCardTemplete;
