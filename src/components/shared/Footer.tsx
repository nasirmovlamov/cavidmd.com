import { useWindowSize } from "@react-hook/window-size";
import discordLogo from "images/discord.svg";
import footerBg from "images/footer-bg.svg";
import footerMobileBg from "images/footer-mobile-bg.svg";
import instagramLogo from "images/instagram.svg";
import redditLogo from "images/reddit.svg";
import twitterLogo from "images/twitter.svg";
import React from "react";

export const Footer = () => {
  const [width, height] = useWindowSize();

  return (
    <div
      className="items-center h-[32px] md:h-[90px] md:pt-4   z-10 flex flex-nowrap  md:flex-wrap gap-y-6 justify-between md:px-16 box-content md:box-border py-1  md:py-4  bg-transparent bg-no-repeat bg-cover px-[13px] "
      style={{
        backgroundImage: `url(${width > 500 ? footerBg : footerMobileBg})`
      }}
    >
      <div className="md:text-base text-[7.5px]">&#169; 2022 CAVID MAMMADLI. ALL RIGHTS RESERVED</div>
      <div className="flex md:gap-6 gap-2 items-center">
        <a href="https://discord.gg/cavidmdw" target="_blank" rel="noreferrer">
          <img src={discordLogo} alt="twitter" className="w-[22px] h-[16px] md:w-[35px] md:h-[25px] hover:scale-110" />
        </a>
        <a href="https://www.instagram.com/cavidmdw/" target="_blank" rel="noreferrer">
          <img
            src={instagramLogo}
            alt="discord"
            className="w-[22px] h-[16px]  md:w-[35px] md:h-[25px] hover:scale-110"
          />
        </a>
        <a href="https://twitter.com/cavidmdwpro" target="_blank" rel="noreferrer">
          <img src={twitterLogo} alt="reddit" className="w-[22px] h-[16px]  md:w-[35px] md:h-[25px] hover:scale-110" />
        </a>
        <a href="https://www.reddit.com/r/CAVIDMDW/" target="_blank" rel="noreferrer">
          <img
            src={redditLogo}
            alt="instagram"
            className="w-[19px] h-[20px]  md:w-[27px] md:h-[29px] hover:scale-110"
          />
        </a>
      </div>
    </div>
  );
};
