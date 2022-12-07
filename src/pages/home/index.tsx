import homeElement from "images/mask.svg";
import maskTextElement from "images/maskText.svg";
import mobileHomeElement from "images/mobileHomeBg.png";
import React from "react";

export const Home = () => {
  return (
    <div className="mx-auto">
      <div className="z-20 relative justify-center max-auto xl:max-w-7xl mt-[182px]  h-auto  2xl:w-[1582px] mx-auto hidden md:flex">
        <img
          className="w-[1562px] h-[248px] absolute -z-10 mt-[150px] hover:translate-x-2 transition-all"
          src={maskTextElement}
          alt="cavidmd 3d"
        />
        <img
          className="w-[508px] h-[605px] absolute -z-10 hover:-translate-x-2 transition-all"
          src={homeElement}
          alt="cavidmd 3d"
        />
      </div>

      <img className="object-cover h-56   mx-auto bloack md:hidden mt-28" src={mobileHomeElement} alt="cavidmd 3d" />
    </div>
  );
};
