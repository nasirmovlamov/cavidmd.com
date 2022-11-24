import gameStopBg from "images/gamestop.png";
import gameStopText from "images/gamestopText.png";
import React from "react";

export const GamestopNft = () => {
  return (
    <div className="relative mx-4 w-full w- sm:w-[652px] h-[187px] flex justify-center items-center overflow-hidden border-2 border-[#B8FE00] rounded-3xl bg-black">
      <img src={gameStopBg} className="absolute w-full h-full object-cover" />
      <img src={gameStopText} className="w-[279px]" />
    </div>
  );
};
