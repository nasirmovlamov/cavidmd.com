import { NftElement } from "components/shared/NftElement";
import nftElement1 from "images/nftElement1.png";
import nftElement2 from "images/nftElement2.png";
import React from "react";

export const Asset = () => {
  return (
    <div className="mt-20">
      {/* <div className="flex flex-wrap flex-col mx-auto w-max items-center gap-9">
        <button className="w-[300px] sm:w-[401px] h-[91px] bg-transparent text-3xl justify-center items-center border-2 border-[#B8FE00] rounded-xl text-white hover:bg-[#B8FE00] hover:text-black transition-colors">
          CONNECT WALLET
        </button>
        <p className="text-white 2xl:w-[1348px] text-3xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </p>
      </div> */}
      <div className="flex flex-wrap flex-col gap-28 w-max mx-auto  md:mt-[261px]">
        <NftElement imgSrc={nftElement1} title={"Mira's Hummingbird Katana ss"} downloadLink="http://www.google.com" />
        <NftElement
          imgSrc={nftElement2}
          title={"Aeress's AI-9 Sky Demon Helmet"}
          downloadLink="http://www.google.com"
        />
      </div>
    </div>
  );
};
