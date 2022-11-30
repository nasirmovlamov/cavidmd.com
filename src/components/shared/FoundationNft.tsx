import foundationBg from "images/foundation.png";
import foundationText from "images/foundationText.png";
import React from "react";

export const FoundationNft = () => {
  return (
    <a href="#">
      <div className="relative mx-4 w-[300px] sm:w-[652px] h-[187px] flex justify-center items-center overflow-hidden border-2 border-[#B8FE00]  rounded-3xl bg-black">
        <img src={foundationBg} className="absolute w-full h-full object-cover" />
        <img src={foundationText} className="w-[394px]" />
      </div>
    </a>
  );
};
