import gameStopBg from "images/gamestop.png";
import gameStopText from "images/gamestopText.png";
import React from "react";

export const GamestopNft = () => {
  return (
    <a href="https://nft.gamestop.com/user/cavidmdw" target="_blank" rel="noreferrer">
      <div className="relative mx-4 w-[300px] sm:w-[652px] h-[187px] flex justify-center items-center overflow-hidden border-2 border-[#B8FE00] rounded-3xl bg-black">
        <img src={gameStopText} className="w-[279px] z-10" />
        <img src={gameStopBg} className="absolute w-full h-full object-cover hover:scale-110 transition-all" />
      </div>
    </a>
  );
};
