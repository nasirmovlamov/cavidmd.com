import React from "react";

export const ArtElement = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="rounded-lg w-[428px] h-[534px] bg-black hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-900 transition-transform">
      <img src={imgSrc} alt="" className="w-full h-full" />
    </div>
  );
};
