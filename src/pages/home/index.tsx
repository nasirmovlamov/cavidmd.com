import homeElement from "images/home-element.png";
import mobileHomeElement from "images/mobileHomeBg.png";
import React from "react";

export const Home = () => {
  return (
    <div className="mx-auto">
      <img
        className="w-full max-auto xl:max-w-7xl mt-48  h-auto  2xl:w-[1582px] mx-auto hidden md:block"
        src={homeElement}
        alt="cavidmd 3d"
      />
      <img
        className="object-cover h-56  2xl:w-[1582px] mx-auto bloack md:hidden mt-28"
        src={mobileHomeElement}
        alt="cavidmd 3d"
      />
    </div>
  );
};
