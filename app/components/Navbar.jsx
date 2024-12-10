import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { TfiLightBulb } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const products = [
    { name: "Art de la table", isActive: true, pid: 1 },
    { name: "Mobilier", isActive: false, pid: 2 },
    { name: "Nappage", isActive: false, pid: 3 },
    { name: "Matériel de salle", isActive: false, pid: 4 },
    { name: "Cuisine", isActive: false, pid: 5 },
    { name: "Barbecue", isActive: false, pid: 6 },
    { name: "Tente", isActive: false, pid: 7 },
    { name: "Chauffage", isActive: false, pid: 8 },
    { name: "Podium - Piste de danse", isActive: false, pid: 9 },
    { name: "Son et lumière", isActive: false, pid: 10 },
    { name: "Packs", isActive: false, pid: 11 },
    { name: "Consommables", isActive: false, pid: 12 },
  ];

  return (
    <nav className=" w-full  flex flex-col">
      {/* upper section logo search and rest  */}
      <div className="h-[10vh] w-full flex pt-1 md:pt-3 ">
        {/* logo and search bar  */}
        <div className="firstcont w-full md:w-[61%]  h-full  gap-2 md:gap-0  flex items-center">
          {/* logo  */}
          <div className=" w-[20%] flex justify-center ">
            <img
              className=" w-[80%] h-auto md:h-[50%] md:w-[60%] "
              src="Group (1).png"
              alt=""
            />
          </div>

          {/* search bar  */}
          <div className="w-[65%] md:w-[80%] bg-[#F9FAFB] relative  flex">
            <input
              type="text"
              className=" w-[100%] p-2 md:p-4"
              placeholder="Rechercher un produit"
            />
            <CiSearch className="absolute text-xl md:text-2xl right-3 top-[50%] translate-y-[-50%]" />
          </div>

          {/* hamburger menu  */}
          <div className="w-[20%] flex md:hidden items-center justify-center text-2xl">
            <RxHamburgerMenu />
          </div>
        </div>

        {/* profile & button section  */}
        <div className="secondcont md:flex w-[39%] h-full hidden ">
          {/* buttons  */}

          <div className="h-full w-[80%] flex items-center justify-end gap-6 ">
            {/* button 1 inspiratopn  */}
            <div className="h-[50%] flex flex-col overflow-hidden relative group">
              {/* Upper div */}
              <div className="w-full h-full flex  gap-2 items-center flex-shrink-0 transform transition-transform duration-500 group-hover:-translate-y-full">
                <TfiLightBulb />
                <Link href="/"> Inspirations</Link>
              </div>
              {/* Lower div */}
              <div className="w-full h-full flex  gap-2 items-center flex-shrink-0 transform transition-transform duration-500 absolute top-full group-hover:translate-y-[-100%]">
                <TfiLightBulb />
                <Link href="/"> Inspirations</Link>
              </div>
            </div>

            {/* button 2  */}
            <div className="h-[50%] flex flex-col overflow-hidden relative group">
              {/* Upper div */}
              <div className="w-full h-full flex  gap-2 items-center flex-shrink-0 transform transition-transform duration-500 group-hover:-translate-y-full">
                <CiHeart />
                <Link href="/">Mes favoris</Link>
                <div className="flex rounded-full text-base font-semibold bg-[#CAD2D566] items-center px-2 py-1">
                  25
                </div>
              </div>
              {/* Lower div */}
              <div className="w-full h-full flex  gap-2 items-center flex-shrink-0 transform transition-transform duration-500 absolute top-full group-hover:translate-y-[-100%]">
                <CiHeart />
                <Link href="/">Mes favoris</Link>
                <div className="flex rounded-full text-sm bg-[#CAD2D566] items-center px-2 py-1">
                  25
                </div>
              </div>
            </div>

            {/* button 3  */}

            <div className="h-[70%] bg-[#0093D0] text-white flex flex-col overflow-hidden relative group px-5 pr-5 rounded-lg">
              {/* Upper div */}
              <div className="w-full h-full flex  gap-2 items-center flex-shrink-0 transform transition-transform duration-500 group-hover:-translate-y-full">
                <CgShoppingCart />
                <Link href="/">Panier</Link>
              </div>
              {/* Lower div */}
              <div className="w-full h-full flex  gap-2 items-center flex-shrink-0 transform transition-transform duration-500 absolute top-full group-hover:translate-y-[-100%]">
                <CgShoppingCart />
                <Link href="/">Panier</Link>
              </div>
            </div>
          </div>

          {/* profile and lang  */}
          <div className="h-full w-[20%] gap-3  flex items-center justify-center">
            <div className="bg-[#EAEDEE] h-[70%] w-[35%] rounded-full"></div>
            <div className="text-lg">Fr </div>
          </div>
        </div>
      </div>

      {/* lower opton section  */}

      <div className="w-full h-[7vh] md:h-[9vh]  pt-2 px-2 md:px-0 gap-5 md:gap-0 flex items-center justify-around border-b-[1px]  overflow-auto no-scrollbar border-[#E5E7EB] ">
        {products.map((e, i) => {
          return (
            <div
              key={i}
              className={`flex-shrink-0 ${
                e.isActive
                  ? "border-[#0093D0] text-[#0093D0] border-b-[1px] "
                  : ""
              } h-full flex items-center font-semibold text-xs md:text-sm uppercase`}
            >
              <Link href="/">{e.name}</Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
