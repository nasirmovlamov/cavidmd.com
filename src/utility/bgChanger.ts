import aboutBg from "images/about-bg.png";
import aboutMobileBg from "images/about-mobile-bg.png";
import assetBg from "images/asset-bg.png";
import blackBg from "images/black-bg.png";
import contactBg from "images/contact-bg.png";
import contactMobileBg from "images/contact-bg.png";
import homeBg from "images/home-bg.png";
import homeMobileBg from "images/home-mobile-bg.png";

export const bgChanger = (path: string, isDesktop: boolean) => {
  switch (path) {
    case "/":
      return isDesktop ? homeBg : homeMobileBg;
      break;
    case "/artworks":
      return isDesktop ? null : null;
      break;
    case "/contact":
      return isDesktop ? contactBg : contactMobileBg;
      break;
    case "/about":
      return isDesktop ? aboutBg : aboutMobileBg;
      break;
    case "/nft":
      return isDesktop ? homeBg : homeBg;
      break;
    case "/asset":
      return isDesktop ? assetBg : assetBg;
      break;
    case "/roadmap":
      return isDesktop ? homeBg : homeBg;
      break;
    default:
      break;
  }
};
