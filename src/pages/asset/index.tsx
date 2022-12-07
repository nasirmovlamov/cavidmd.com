import { useLoopring2 } from "components/hooks/useLoopring2";
import { NftElement } from "components/shared/NftElement";
import { TermsAndConditions } from "components/shared/TermsAndConditions";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebase-conf";
import loadingIcon from "images/loading.png";
import nftElement1 from "images/nftElement1.png";
import nftElement2 from "images/nftElement2.png";
import { useMetaMask } from "metamask-react";
import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";

export const Asset = () => {
  const { status: metaMaskStatus, connect, account } = useMetaMask();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const {
    status: loopringStatus,
    account: loopringAccountInfo,
    balance: loopringUserBalance
  } = useLoopring2({ accountHash: account });

  const [nftList, setNftList] = useState<{
    status: "loading" | "succeed" | "failed";
    data: {
      id: string;
      title: string;
      url: string;
      downloadLink: string;
      imgLink: string;
    }[];
  }>({
    status: "loading",
    data: []
  });

  async function getNfts(
    userNfts: {
      accountId: string;
      minter: string;
      nftData: string;
      nftId: string;
      nftType: string;
      tokenAddress: string;
      tokenId: string;
    }[]
  ) {
    setNftList({
      status: "loading",
      data: []
    });
    try {
      const fetchNfts = await await getDocs(collection(db, "nfts"));
      const nfts = fetchNfts.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      const filteredNfts = nfts.filter((nft: any) => {
        return userNfts.some((userNft) => {
          return userNft.nftId === nft.id;
        });
      });

      setNftList({
        status: "succeed",
        data: filteredNfts as {
          id: string;
          title: string;
          url: string;
          downloadLink: string;
          imgLink: string;
        }[]
      });
      console.log("filtered-nfts", filteredNfts);
      return filteredNfts;
    } catch (error) {
      console.error(error);
      setNftList({
        status: "failed",
        data: []
      });
      return [];
    }
  }

  useEffect(() => {
    if (metaMaskStatus === "connected" && loopringStatus === "succeed") {
      console.log(loopringUserBalance);
      if (loopringUserBalance && loopringUserBalance.data && loopringUserBalance.data.length > 0) {
        getNfts(loopringUserBalance?.data);
      }
    }
  }, [metaMaskStatus, loopringStatus]);

  if (metaMaskStatus === "initializing") {
    return (
      <div className="mt-20">
        <div className="flex flex-wrap flex-col gap-28 w-max mx-auto  md:mt-[261px] text-white text-3xl">
          Synchronisation with MetaMask ongoing...
        </div>
      </div>
    );
  }

  if (metaMaskStatus === "unavailable") {
    return (
      <div className="mt-20">
        <div className="flex flex-wrap flex-col gap-28 w-max mx-auto  md:mt-[261px] text-white  text-3xl">
          Unavailable..
        </div>
      </div>
    );
  }

  if (metaMaskStatus === "notConnected")
    return (
      <>
        <div className="mt-20">
          <div className="flex flex-wrap flex-col mx-auto w-max items-center gap-9 md:mt-[261px]">
            <button
              onClick={connect}
              className="w-[261px] h-[61px]  text-2xl sm:w-[401px] sm:h-[91px] bg-transparent md:text-3xl justify-center items-center border-2 border-[#B8FE00] rounded-xl text-white hover:bg-[#B8FE00] hover:text-black transition-colors"
            >
              CONNECT WALLET
            </button>
            <p className="text-white w-[360px] text-base  sm:w-[600px]  md:w-[760px]  2xl:w-[1348px] sm:text-3xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>
      </>
    );

  if (metaMaskStatus === "connecting") {
    return (
      <div className="mt-20">
        <div className="flex flex-wrap flex-col gap-28 w-max mx-auto  md:mt-[261px] text-white">Connecting..</div>
      </div>
    );
  }
  if (metaMaskStatus === "connected")
    return (
      <div className="mt-20">
        <div className="flex flex-wrap flex-col gap-28 w-max mx-auto  md:mt-[261px] text-white">
          {(loopringStatus === "loading" || nftList.status === "loading") && (
            <div className="text-center text-3xl flex justify-center ">
              <Bars
                height="80"
                width="80"
                color="white"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          )}
          {loopringStatus === "succeed" &&
            nftList.status === "succeed" &&
            nftList.data.map((nft) => {
              return (
                <NftElement
                  key={nft.id}
                  title={nft.title}
                  imgSrc={nft.imgLink}
                  downloadLink={nft.downloadLink}
                  detailsLink={nft.url}
                />
              );
            })}
        </div>
      </div>
    );

  return null;
};
