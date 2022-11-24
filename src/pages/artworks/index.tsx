import { ArtElement } from "components/shared/ArtElement";
import nft1 from "images/nft-1.png";
import nft2 from "images/nft-2.png";
import nft3 from "images/nft-3.png";
import nft4 from "images/nft-4.png";
import nft5 from "images/nft-5.png";
import nft6 from "images/nft-6.png";
import nft7 from "images/nft-7.png";
import nft8 from "images/nft-8.png";
import nft9 from "images/nft-9.png";
import nft10 from "images/nft-10.png";
import React from "react";

export const Artworks = () => {
  return (
    <div className="flex flex-wrap gap-8 mt-14 mx-auto 2xl:w-[1400px]">
      <ArtElement imgSrc={nft1} />
      <ArtElement imgSrc={nft2} />
      <ArtElement imgSrc={nft3} />
      <ArtElement imgSrc={nft4} />
      <ArtElement imgSrc={nft5} />
      <ArtElement imgSrc={nft6} />
      <ArtElement imgSrc={nft7} />
      <ArtElement imgSrc={nft8} />
      <ArtElement imgSrc={nft9} />
      <ArtElement imgSrc={nft10} />
    </div>
  );
};
