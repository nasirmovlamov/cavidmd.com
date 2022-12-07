import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const BackgroundVideo = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <>
        <iframe
          className="-z-20 w-screen h-screen bg-cover bg-center fixed top-0 left-0 "
          src="https://www.youtube.com/embed/uiya0ecsgEY?controls=0&showinfo=0&playlist=uiya0ecsgEY&loop=1&autoplay=1&mute=1"
          allowFullScreen
        ></iframe>
        <div className="bg-[rgba(0,0,0,0.75)] fixed -z-10 w-screen h-screen top-0 left-0"></div>
      </>
    );
  }
  return null;
};
