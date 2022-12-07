import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const BackgroundVideo = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <>
        <iframe
          className="-z-20 w-screen h-screen bg-cover bg-center fixed top-0 left-0 "
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uiya0ecsgEY?controls=0&showinfo=0&autoplay=1&mute=1&loop=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="bg-[rgba(0,0,0,0.75)] fixed -z-10 w-screen h-screen top-0 left-0"></div>
      </>
    );
  }
  return null;
};
