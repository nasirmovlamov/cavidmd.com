import { useWindowWidth } from "@react-hook/window-size";
import homeMobileBg from "images/home-mobile-bg.png";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const BackgroundVideo = () => {
  const location = useLocation();
  const width = useWindowWidth();
  if (location.pathname === "/") {
    return (
      <>
        {width > 600 && (
          <iframe
            className="-z-20 w-screen h-screen bg-cover bg-center fixed top-0 left-0 "
            src="https://www.youtube.com/embed/qXBLWCP4rbA?controls=0&showinfo=0&playlist=uiya0ecsgEY&loop=1&autoplay=1&mute=1"
            allowFullScreen
          ></iframe>
        )}
        {width < 600 && (
          <img
            className="-z-20 w-screen h-screen bg-cover bg-center fixed top-0 left-0 "
            src={homeMobileBg}
            alt="cavidmd 3d"
          />
        )}

        {width > 600 && <div className="bg-[rgba(0,0,0,0.75)] fixed -z-10 w-screen h-screen top-0 left-0"></div>}
      </>
    );
  }
  return null;
};
