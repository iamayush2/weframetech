import React from "react";
import ImgDisplayMain from "./templets/ImgDisplayMain";
import ProductDescription from "./templets/ProductDescription";
import ProductInfo from "./templets/ProductInfo";
import InfoStripe from "./templets/InfoStripe";

const ProductMainDisplay = () => {
  return (
    <section className="w-full  flex flex-col ">
      {/* product first name cont  */}
      <div className="w-full h-[7vh] flex items-center iconsp  gap-2 px-5 lg:px-10 ">
        <h1>Home </h1>
        <div className="h-[5px] w-[5px] bg-[#9C9C9C] rounded-full mt-1 "></div>
        <h1 className="text-[#9C9C9C]">Art de la table</h1>
      </div>

      {/* product disply  */}
      <div className="w-full h-[60vh] lg:h-[80vh] flex">
        {/* product img cont  */}
        <div className="h-full w-[50%] lg:w-[53%]  flex  lg:items-center justify-center">
          <ImgDisplayMain />
        </div>

        {/* {product desc} */}
        <div className="h-full w-[50%] lg:w-[47%] ">
          <ProductDescription />
        </div>
      </div>

      {/* product info and question cont  */}
      <div className="w-full   flex flex-col sm:flex-row items-center h-[50vh]  sm:h-[32vh] ">
        <div className="h-full w-full sm:w-[52%] flex justify-center ">
          <ProductInfo />
        </div>
        {/* ques stripes  */}
        <div className="h-full w-full sm:w-[48%] flex flex-col gap-4 sm:gap-2 justify-center  items-center ">
          <InfoStripe name={"Livraisons"} />
          <InfoStripe name={"Questions"} />
        </div>
      </div>
    </section>
  );
};

export default ProductMainDisplay;
