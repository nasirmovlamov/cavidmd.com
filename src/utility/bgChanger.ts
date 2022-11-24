import aboutBg from "images/about-bg.png";
import assetBg from "images/asset-bg.png";
import homeBg from "images/home-bg.png";

export const bgChanger = (path: string) => {
  switch (path) {
    case "/":
      return homeBg;
      break;
    case "/artworks":
      return homeBg;
      break;
    case "/contact":
      return homeBg;
      break;
    case "/about":
      return aboutBg;
      break;
    case "/nft":
      return homeBg;
      break;
    case "/asset":
      return assetBg;
      break;
    case "/roadmap":
      return homeBg;
      break;
    default:
      break;
  }
};
