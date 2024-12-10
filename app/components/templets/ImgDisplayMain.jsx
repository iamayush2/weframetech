"use client";
import React, { useState } from "react";

const ImgDisplayMain = () => {
  const [productsimg, setProductsImg] = useState([
    { src: "Table ronde 165cm Festi 2.png", isActive: true },
    { src: "Table ronde 165cm Festi 2.png", isActive: false },
    { src: "Table ronde 165cm Festi 2.png", isActive: false },
    { src: "Table ronde 165cm Festi 2.png", isActive: false },
  ]);

  const handleImageClick = (index) => {
    const updatedImages = productsimg.map((img, i) => ({
      ...img,
      isActive: i === index,
    }));
    setProductsImg(updatedImages);
  };

  return (
    <div className="h-[58%] lg:h-full w-[93%] bg-[#F8F6F4]  relative flex items-center justify-center  rounded-md">
      <img
        className="h-[80%] w-auto bg-[#F8F6F4] mix-blend-multiply"
        src="Location Cheese big picture 1.png"
        alt=""
      />

      <div className="flex flex-col absolute gap-2  w-[9%] top-[5%] left-[5%]  ">
        {productsimg.map((e, i) => {
          return (
            <div
              key={i}
              className="w-full h-auto cursor-pointer"
              onClick={() => handleImageClick(i)}
            >
              <img
                className={`w-full ${
                  e.isActive ? "" : "bg-[#F8F6F4] mix-blend-multiply opacity-50"
                }`}
                src={e.src}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImgDisplayMain;
