import React from "react";
import ProductMainDisplay from "./components/ProductMainDisplay";
import IntrestedProductSection from "./components/IntrestedProductSection";
import IconsSection from "./components/templets/IconsSection";
import MailSubscibeSection from "./components/MailSubscibeSection";
import SimilarProduct from "./components/SimilarProduct";

const page = () => {
  return (
    <>
      <ProductMainDisplay />
      <SimilarProduct />
      <IntrestedProductSection />
      <IconsSection />
      <MailSubscibeSection />
    </>
  );
};

export default page;
