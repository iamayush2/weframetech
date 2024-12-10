import React from "react";
import NavLinksTemp from "./templets/NavLinksTemp";
import SocialsIconsTemp from "./templets/SocialsIconsTemp";

const Footer = () => {
  return (
    <footer className="h-[70vh] md:h-[60vh] w-full  flex items-end justify-center">
      <div className="w-full h-[75%] flex  justify-center border-t-[2px] border-[#39393930]">
        {/* cont  */}
        <div className="cont h-[90%] w-[95%] flex   md:flex-row flex-col  items-end md:items-center justify-between ">
          {/* nav links  */}
          <div className="flex h-[65%] md:h-[70%] w-full md:w-[60%] items-center justify-around">
            {/* img div  */}
            <div className="h-[40%]  w-[20%] ">
              <img className="h-auto w-[90%] " src="Group (5).png" alt="" />
            </div>

            {/* {1 st nav link } */}

            <NavLinksTemp
              heading={"INFOS PRATIQUES"}
              link1={"À propos"}
              link2={"Livraisons & Reprises"}
              link3={"Mode d’emploi"}
              link4={"F.A.Q"}
            />
            {/* {2 st nav link } */}

            <NavLinksTemp
              heading={"LÉGAL"}
              link1={"Mentions légales"}
              link2={"CGU"}
              link3={"CGV"}
              link4={"Politique de confidentialité"}
            />
            {/* {3 st nav link } */}

            <NavLinksTemp
              heading={"MON COMPTE"}
              link1={"Accéder à mon compte"}
              link2={"Ma liste d’envie"}
              link3={"Créer un compte"}
              link4={"Mot de passe oublié"}
            />
          </div>

          {/* nav socials cont  */}

          <div className="flex h-[30%] md:h-[70%] w-[35%] md:w-[20%]  items-center justify-end">
            <div className="w-full md:w-[80%] h-[80%] flex flex-col items-end gap-3">
              <h1 className="text-[#393939] font-medium text-xs md:text-lg">
                NOUS SUIVRE
              </h1>
              {/* socials cont  */}
              <div className="w-full md:w-[80%]  h-[53%] md:h-[35%]  flex justify-between">
                <SocialsIconsTemp imgsrc={"twitter (1).png"} />
                <SocialsIconsTemp imgsrc={"instagram.png"} />
                <SocialsIconsTemp imgsrc={"linkedin-in.png"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
