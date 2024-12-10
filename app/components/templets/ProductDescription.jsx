"use client";
import React, { useState } from "react";
import LikeBtn from "./LikeBtn";

const ProductDescription = () => {
  const [count, setcount] = useState(1);

  const handleAddButton = () => {
    setcount((prev) => prev + 1);
  };

  const handleDecrementButton = () => {
    setcount((prev) => {
      if (prev === 1) {
        return 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="h-full w-[99%]  lg:w-[97%]  relative flex flex-col">
      {/* heart icon  */}
      <div className=" absolute top-[15%]  translate-y-[-15%] lg:translate-y-0 lg:top-[1%] right-[2%] ">
        <LikeBtn />
      </div>

      {/* product name & price cont  */}
      <div className="flex flex-col gap-4 h-[15vh]">
        {/* {product name} */}
        <h1 className="text-lg lg:text-3xl playfair">
          Cheese – appareil à raclette 1/2 roue
        </h1>
        <h2 className=" text-base lg:text-2xl iconsp">
          39,50€ <span className="inline-block text-[#9C9C9C]">/pièce</span>
        </h2>
      </div>

      {/* product ref and det  */}
      <div className="h-[10vh] w-full iconsp mt-2 lg:mt-0 border-[#9C9C9C] border-y-[1px] flex items-center justify-between ">
        {/* product det  */}
        <div className="flex items-center gap-5 lg:gap-12">
          {/* 1 st  */}
          <div className="flex h-[50%] gap-2 lg:gap-4 ">
            <img className="" src="Group (2).png" alt="" />
            <h1 className="flex text-sm lg:text-2xl h-full items-center">
              20{" "}
              <span className="flex h-full text-xs lg:text-base text-start">
                cm
              </span>
            </h1>
          </div>

          {/* 2nd  */}
          <div className="flex h-[50%] gap-2 lg:gap-4 iconsp">
            <img className="" src="Frame.png" alt="" />
            <h1 className="flex text-sm lg:text-2xl h-full items-center">
              50{" "}
              <span className="flex h-full text-xs lg:text-base text-start">
                cm
              </span>
            </h1>
          </div>
        </div>

        <p className="text-[#9C9C9C]  text-right lg:text-base text-xs ">
          RÉF : VABGN5
        </p>
      </div>

      {/* product desc  */}

      <div className="flex flex-col iconsp border-b-[1px] border-[#9C9C9C] text-[#5D5D5D] h-[43vh] pt-3 lg:pt-5 text-xs lg:text-base ">
        <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue</p>
        <p>Réglable en hauteur</p>
        <p>Appareil à raclette professionnel</p>
        <p>Boîtier de chauffe horizontal réglable en hauteur</p>
        <p className="mt-4">220V</p>
        <p className="">900W</p>
      </div>

      {/* button cont  */}
      <div className="w-full h-[15vh]  flex items-center justify-between">
        {/* total product  count  */}
        <div className="w-[45%] lg:w-[25%] h-[50%] border-[1px] border-[#00000021] flex items-center justify-between px-4  ">
          <button
            className="text-xs lg:text-xl flex h-full items-center leading-none  "
            onClick={() => handleDecrementButton()}
          >
            <div className="h-[1px] w-[6px] lg:w-[11px] border-[1px] border-black"></div>
          </button>
          <h1 className="text-sm lg:text-base">{count}</h1>
          <button
            className="text-base lg:text-2xl h-full leading-none"
            onClick={() => handleAddButton()}
          >
            +
          </button>
        </div>
        {/* add to cart btn  */}
        <button className="w-[52%] lg:w-[73%] h-[50%] iconname text-xs lg:text-base text-white uppercase bg-[#5CD2DD] font-medium rounded-md">
          {" "}
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
