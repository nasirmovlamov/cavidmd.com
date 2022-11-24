import React from "react";

export const ArtElement = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="mx-10 rounded-lg w-full  md:w-[428px] h-[534px] bg-black hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-900 transition-transform">
      <img src={imgSrc} alt="" className="w-full h-full object-cover rounded-lg" />
    </div>
  );
};
