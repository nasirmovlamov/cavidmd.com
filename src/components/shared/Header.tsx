import cavidMdLogo from "images/cavidmd-logo.png";
import React from "react";
import { Link } from "react-router-dom";

import { headerLinkChecker } from "../../utility/headerLinkChecker";

export const Header = () => {
  return (
    <div className="w-max mx-auto flex gap-8 pt-8 text-xl text-white z-10">
      <Link to={"/artwork"} className={`${headerLinkChecker(location.pathname, "/artwork")}`}>
        ARTWORK
      </Link>
      <Link to={"/about"} className={`${headerLinkChecker(location.pathname, "/about")}`}>
        ABOUT
      </Link>
      <Link to={"/contact"} className={`${headerLinkChecker(location.pathname, "/contact")}`}>
        CONTACT
      </Link>

      <Link to={"/"} className={"cursor-pointer"}>
        <img src={cavidMdLogo} alt="cavid mdw logo" className="mx-24" />
      </Link>

      <Link to={"/nft"} className={`${headerLinkChecker(location.pathname, "/nft")}`}>
        NFT
      </Link>
      <Link to={"/asset"} className={`${headerLinkChecker(location.pathname, "/asset")}`}>
        ASSET
      </Link>
      <Link to={"/roadmap"} className={`${headerLinkChecker(location.pathname, "/roadmap")}`}>
        ROADMAP
      </Link>
    </div>
  );
};
