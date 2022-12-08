import cavidMdLogo from "images/cavidmd-logo.svg";
import mobileNav from "images/mobileNav.svg";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { headerLinkChecker } from "../../utility/headerLinkChecker";
import { GlobalContext } from "../contexts/GlobalContext";

export const Header = () => {
  const { setIsMobileMenuOpen } = useContext(GlobalContext);

  return (
    <header className="justify-start xl:gap-12 md:justify-center md:w-max md:mx-auto flex gap-6 lg:gap-8 pt-8 text-xl text-white z-10 w-full mx-10 md:h-auto items-center">
      <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden">
        <img src={mobileNav} className="w-5 h-5" alt="" />
      </button>

      <Link
        to={"/artwork"}
        className={`${headerLinkChecker(location.pathname, "/artwork")} hidden md:flex font-[b] w-[102px]`}
      >
        ARTWORK
      </Link>
      <Link
        to={"/about"}
        className={`${headerLinkChecker(location.pathname, "/about")} hidden md:flex font-[b] w-[102px]`}
      >
        ABOUT
      </Link>
      <Link
        to={"/contact"}
        className={`${headerLinkChecker(location.pathname, "/contact")} hidden md:flex font-[b] w-[102px]`}
      >
        CONTACT
      </Link>

      <Link to={"/"} className={"cursor-pointer mx-auto "}>
        <img src={cavidMdLogo} alt="cavid mdw logo" className="w-[144px] h-[37px] lg:mx-14 -ml-10 md:ml-0 font-[b]" />
      </Link>

      <Link to={"/nft"} className={`${headerLinkChecker(location.pathname, "/nft")} hidden md:flex font-[b] w-[102px]`}>
        NFT
      </Link>
      <Link
        to={"/asset"}
        className={`${headerLinkChecker(location.pathname, "/asset")} hidden md:flex font-[b] w-[102px]`}
      >
        ASSET
      </Link>
      <Link
        to={"/roadmap"}
        className={`${headerLinkChecker(location.pathname, "/roadmap")} hidden md:flex font-[b] w-[102px]`}
      >
        ROADMAP
      </Link>
    </header>
  );
};
