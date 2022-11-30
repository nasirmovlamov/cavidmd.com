import cavidMdLogo from "images/cavidmd-logo.png";
import mobileNav from "images/mobileNav.svg";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { headerLinkChecker } from "../../utility/headerLinkChecker";
import { GlobalContext } from "../contexts/GlobalContext";

export const Header = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(GlobalContext);

  return (
    <div className="justify-start xl:gap-12 md:justify-center md:w-max md:mx-auto flex gap-6 lg:gap-8 pt-8 text-xl text-white z-10 w-full mx-10 md:h-auto">
      <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden">
        <img src={mobileNav} className="w-5 h-5" alt="" />
      </button>

      <Link to={"/artwork"} className={`${headerLinkChecker(location.pathname, "/artwork")} hidden md:flex`}>
        ARTWORK
      </Link>
      <Link to={"/about"} className={`${headerLinkChecker(location.pathname, "/about")} hidden md:flex`}>
        ABOUT
      </Link>
      <Link to={"/contact"} className={`${headerLinkChecker(location.pathname, "/contact")} hidden md:flex`}>
        CONTACT
      </Link>

      <Link to={"/"} className={"cursor-pointer mx-auto "}>
        <img src={cavidMdLogo} alt="cavid mdw logo" className="w-[144px] h-[37px] lg:mx-24 -ml-10 md:ml-0" />
      </Link>

      <Link to={"/nft"} className={`${headerLinkChecker(location.pathname, "/nft")} hidden md:flex`}>
        NFT
      </Link>
      <Link to={"/asset"} className={`${headerLinkChecker(location.pathname, "/asset")} hidden md:flex`}>
        ASSET
      </Link>
      <a
        href={
          "https://firebasestorage.googleapis.com/v0/b/nft-metamask.appspot.com/o/frontend.pdf?alt=media&token=3b5607f5-60d7-4eec-b7bd-0ecd7b7127ca"
        }
        target={"_blank"}
        download
        className={`${headerLinkChecker(location.pathname, "/roadmap")} hidden md:flex`}
        rel="noreferrer"
      >
        ROADMAP
      </a>
    </div>
  );
};
