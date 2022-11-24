import mobileArrow from "images/mobileArrow.svg";
import mobileMenuBg from "images/mobileMenu.svg";
import xButton from "images/x-button.png";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { bgChanger } from "utility/bgChanger";

import { GlobalContext } from "../contexts/GlobalContext";
import { MobileDot } from "./MobileDot";

export const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(GlobalContext);
  return (
    <div
      className={
        "w-[210px] h-[387px] bg-transparent fixed md:hidden  z-20 transition-transform bord " +
        `${isMobileMenuOpen ? " translate-x-0-0 " : " -translate-x-full "}`
      }
      style={{
        backgroundImage: `url(${mobileMenuBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      {/* <img src={mobileMenuBg} alt="mobile menu" className="absolute w-screen h-screen" /> */}
      <div className="relative flex flex-wrap flex-col text-base gap-4 font-bold py-9 px-10 pb-0 z-40">
        <button onClick={() => setIsMobileMenuOpen(false)}>
          <img src={xButton} alt="close button" className="w-4 h-4" />
        </button>
        <div className="flex gap-2 items-center h-[23px]">
          <MobileDot path={"/"} />
          <Link to={"/"} className="leading-4">
            HOME
          </Link>
        </div>
        <div className="flex gap-2 items-center h-[23px]">
          <MobileDot path={"/artwork"} />
          <Link to={"/artwork"} className="leading-4">
            ARTWORK
          </Link>
        </div>
        <div className="flex gap-2 items-center h-[23px]">
          <MobileDot path={"/about"} />
          <Link to={"/about"} className="leading-4">
            ABOUT
          </Link>
        </div>
        <div className="flex gap-2 items-center h-[23px]">
          <MobileDot path={"/contact"} />
          <Link to={"/contact"} className="leading-4">
            CONTACT
          </Link>
        </div>
        <div className="flex gap-2 items-center h-[23px]">
          <MobileDot path={"/nft"} />
          <Link to={"/nft"} className="leading-4">
            NFT
          </Link>
        </div>
        <div className="flex gap-2 items-center h-[23px]">
          <MobileDot path={"/asset"} />
          <Link to={"/asset"} className="leading-4">
            ASSET
          </Link>
        </div>
        <div className="flex gap-2 items-center h-[23px]">
          <MobileDot path={"/roadmap"} />
          <Link to={"/roadmap"} className="leading-4">
            ROADMAP
          </Link>
        </div>
      </div>

      <img src={mobileArrow} alt="" className="w-[220px] h-[77px] absolute bottom-5 -ml-2  scale-[1.10]" />
    </div>
  );
};
