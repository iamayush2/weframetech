import Link from "next/link";
import React from "react";

const NavLinksTemp = ({ heading, link1, link2, link3, link4 }) => {
  return (
    <div className="h-[85%] w-[22%]  text-[#393939] flex flex-col justify-around">
      <h1 className="text-xs md:text-lg font-medium">{heading}</h1>
      <Link className="text-xs md:text-base" href="/">
        {link1}
      </Link>
      <Link className="text-xs md:text-base" href="/">
        {link2}
      </Link>
      <Link className="text-xs md:text-base" href="/">
        {link3}
      </Link>
      <Link className="text-xs md:text-base" href="/">
        {link4}
      </Link>
    </div>
  );
};

export default NavLinksTemp;
