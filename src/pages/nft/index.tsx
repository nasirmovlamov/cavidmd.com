import { FoundationNft } from "components/shared/FoundationNft";
import { GamestopNft } from "components/shared/GamestopNft";
import React from "react";

export const Nft = () => {
  return (
    <div className="mt-20 md:mt-[267px]  mx-auto w-max gap-9 flex flex-wrap flex-col pb-20">
      <GamestopNft />
      <FoundationNft />
    </div>
  );
};
