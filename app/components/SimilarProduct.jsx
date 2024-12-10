"use client";
import Link from "next/link";
import { useRef } from "react";
import SmallCardTemplete from "./templets/SmallCardTemplete";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "../globals.css";

const SimilarProduct = () => {
  const scrollContainerRef = useRef(null);
  const scrollAmount = 200; // Adjust this value to control how far the cards move on each click

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const newScrollPosition =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <section className="h-[60vh] md:h-[70vh] w-full  flex flex-col  pt-10 gap-8 md:gap-6  items-center">
      {/* upper  */}
      <div className="flex w-[96%]  justify-between items-center">
        <h1 className="text-xl md:text-2xl">Articles similaires</h1>
        <p>
          <Link
            className="text-[#393939] text-xs md:text-sm border-b-[1px] border-[#393939]"
            href="/"
          >
            Voir toute la collection
          </Link>
        </p>
      </div>

      {/* lower card container  */}
      <div className="w-full h-[42vh] md:h-[48vh] relative">
        {/* left btn */}
        <button
          className="absolute   md:flex left-0 top-[50%] translate-y-[-50%] w-[3em] h-[3em] bg-sky-200 z-[10] hidden items-center justify-center"
          onClick={() => handleScroll("left")}
        >
          <FaArrowLeft />
        </button>
        {/* right btn */}
        <button
          className="absolute right-0 top-[50%] translate-y-[-50%] w-[3em] h-[3em] bg-sky-200 z-[10] hidden md:flex items-center justify-center"
          onClick={() => handleScroll("right")}
        >
          <FaArrowRight />
        </button>
        {/* card container */}
        <div
          ref={scrollContainerRef}
          className="h-full w-full flex gap-3 pl-7 overflow-x-scroll no-scrollbar"
        >
          <SmallCardTemplete />
          <SmallCardTemplete />
          <SmallCardTemplete />
          <SmallCardTemplete />
          <SmallCardTemplete />
          <SmallCardTemplete />
          <SmallCardTemplete />
        </div>
      </div>
    </section>
  );
};

export default SimilarProduct;
