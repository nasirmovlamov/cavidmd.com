import React from "react";
import { Link } from "react-router-dom";

export const ArtElement = ({
  id,
  imgSrc,
  title,
  description
}: {
  id: string | number;
  imgSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <Link to={`/artwork/${id}`}>
      <div className="relative mx-1 rounded-lg w-full  md:w-[428px] h-[534px] bg-black hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-900 transition-transform">
        <img src={imgSrc} alt="" className="w-full h-full object-cover rounded-lg" />
        <div className="flex flex-col gap-4 justify-center items-center bg-black opacity-0 hover:opacity-70  h-full w-full absolute z-20 top-0 left-0 transition-all text-white">
          <h3 className="text-3xl ">{title}</h3>
          <p className="text-xl px-10 text-justify">{description.slice(0, 100)}...</p>
        </div>
      </div>
    </Link>
  );
};
