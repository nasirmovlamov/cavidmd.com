import React from "react";
import { Link } from "react-router-dom";

export const NftElement = ({
  imgSrc,
  title,
  downloadLink,
  detailsLink
}: {
  imgSrc: string;
  title: string;
  downloadLink: string;
  detailsLink: string;
}) => {
  const downloadNFT = () => {
    window.open(downloadLink, "_blank");
  };

  return (
    <div className="flex flex-wrap gap-7 items-center text-white">
      <div className="w-[150px] h-[150px] flex justify-center items-center bg-[#151515] rounded-[50px]">
        <img src={imgSrc} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl text-[#B8FE00] mb-7">{title}</h3>
        <div className="flex gap-6">
          <button
            onClick={downloadNFT}
            className="w-[153px] h-[37px] font-bold bg-transparent text-xl justify-center items-center border-2 border-[#B8FE00] rounded-xl text-white hover:bg-[#B8FE00] hover:text-black transition-colors"
          >
            DOWNLOAD
          </button>
          <a href={detailsLink} className="text-xl underline" target={"_blank"} rel="noreferrer">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};
