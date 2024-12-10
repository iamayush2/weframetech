import React from "react";

const IconsDisplayTemp = ({ src, name, tag }) => {
  return (
    <div className="h-[25vh] w-[14rem]  flex flex-col items-center justify-center gap-3 ">
      <img className=" w-[35%] h-auto" src={`${src}`} alt="" />
      <h1 className="iconname text-xl mt-2">{name}</h1>
      <p className="text-[#9C9C9C] iconsp">{tag}</p>
    </div>
  );
};

export default IconsDisplayTemp;
