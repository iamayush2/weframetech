import React from "react";
import "../../globals.css";
import IconsDisplayTemp from "./IconsDisplayTemp";

const IconsSection = () => {
  return (
    <div className="h-[120vh] md:h-[70vh] w-full flex items-end  ">
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(238, 65, 151, 0.04) 0%, rgba(255, 255, 255, 0.56) 14.61%)",
        }}
        className="w-full h-[110vh] md:h-[65vh] flex flex-col items-center justify-center gap-4 "
      >
        <h1 className="iconsheading text-4xl md:text-4xl">
          On s’occupe de <span className="text-[#5CD2DD] font-bold"> tout</span>
        </h1>
        <p className="text-[#9C9C9C] text-sm text-center w-[90%] md:text-base  iconsp">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>

        {/* icons div  */}
        <div className="h-[90vh] md:h-[30vh] w-[75%] flex md:flex-row flex-col items-center justify-around mt-8 ">
          <IconsDisplayTemp
            src={"Groupe_25.png"}
            name={"Livraison & Reprise"}
            tag={"Selon vos besoins"}
          />
          <IconsDisplayTemp
            src={"dish.png"}
            name={"Nettoyage"}
            tag={"Selon vos besoins"}
          />
          <IconsDisplayTemp
            src={"Groupe_56.png"}
            name={"Commande Illimitée"}
            tag={"Tout est possible"}
          />
          <IconsDisplayTemp
            src={"Groupe_123.png"}
            name={"Transport & Enlèvement"}
            tag={"On s’occupe de tout."}
          />
        </div>
      </div>
    </div>
  );
};

export default IconsSection;
