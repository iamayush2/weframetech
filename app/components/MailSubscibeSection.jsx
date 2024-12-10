import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const MailSubscibeSection = () => {
  return (
    <div className="h-[60vh] md:h-[39vh] w-full  flex md:flex-row flex-col items-center gap-6 ">
      {/* img cont */}

      <div className="h-[40%] md:h-full w-[95%] md:w-[46%]  flex  items-center justify-center md:justify-end ">
        <img
          className="h-full w-[95%] object-cover rounded-2xl"
          src="BUFFET_037 1.png"
          alt=""
        />
      </div>
      <div className="h-[60%] md:h-full  w-[95%] md:w-[50%] px-10  flex items-center justify-center gap-2  bg-[#FFF3F9] rounded-2xl flex-col ">
        <h1 className="iconsheading text-2xl md:text-4xl w-full">
          S’inscrire & économiser <span className="text-[#BDA2B0]">10%</span>{" "}
        </h1>
        <p className="text-[#BDA2B0] md:text-base text-sm iconsp">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway
          job due harvest most opportunity didn't. Yet busy any meeting shark
          light marginalised 4-blocker message. Productize corporate nail caught
          synergy highlights lunch. Company another pushback items dear or any.
        </p>

        <div className="flex w-full justify-between mt-2">
          <input
            className="h-[6vh] md:h-[8vh] w-[68%] md:w-[76%] px-4 "
            type="email"
            placeholder="jhonhoe@gmail.com"
          />

          {/* button  */}
          <button className="w-[30%] md:w-[22%] flex items-center text-xs md:text-base   justify-center gap-2 h-[6vh] md:h-[8vh] bg-[#5CD2DD] text-[#FFFFFF] uppercase ">
            S’inscrire <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailSubscibeSection;
