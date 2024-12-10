import Link from "next/link";
import React from "react";

const SocialsIconsTemp = ({ imgsrc }) => {
  return (
    <Link
      className="h-full w-[31%]  flex items-center justify-center border-[2px] border-[#39393959]"
      href="/"
    >
      <img className="" src={imgsrc} alt="" />
    </Link>
  );
};

export default SocialsIconsTemp;
