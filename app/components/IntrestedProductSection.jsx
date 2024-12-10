"use client";
import Link from "next/link";
import React from "react";
import ProductCard from "./templets/ProductCard";
import "../globals.css";

const IntrestedProductSection = () => {
  return (
    <section className="h-[115vh] md:h-[60vh] w-full  flex flex-col items-center justify-end gap-7">
      <div className="flex w-[93%]  justify-between items-center">
        <h1 className="text-[1em] w-[60%] md:text-2xl">
          Ces produits pourraient vous intéresser
        </h1>
        <p>
          <Link
            className="text-[#393939]  text-[0.7em]  md:text-sm border-b-[1px] border-[#393939]"
            href="/"
          >
            Voir toute la collection
          </Link>
        </p>
      </div>

      {/* intrested products cont  */}
      <div className="flex md:flex-row flex-col w-[96%] h-auto gap-5 md:h-[45vh] md:gap-0  items-center justify-around overflow-hidden ">
        <ProductCard width={"32%"} />
        <ProductCard width={"32%"} />
        <ProductCard width={"32%"} />
      </div>
    </section>
  );
};

export default IntrestedProductSection;
