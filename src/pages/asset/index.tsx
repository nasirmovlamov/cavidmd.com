/* eslint-disable react/no-unescaped-entities */
import { useWindowWidth } from "@react-hook/window-size";
import { useLoopring2 } from "components/hooks/useLoopring2";
import { NftElement } from "components/shared/NftElement";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebase-conf";
import formConnectArrow from "images/formConnectArrow.svg";
import formConnectBg from "images/formConnectBg.svg";
import { useMetaMask } from "metamask-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Bars } from "react-loader-spinner";

const notifyError = () =>
  toast.error("Please accept the terms and conditions.", { duration: 3000, position: "top-right" });
export const Asset = () => {
  const width = useWindowWidth();
  const { status: metaMaskStatus, connect, account } = useMetaMask();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState<any>(false);
  const [isTermsAndConditionsOpen, setIsTermsAndConditionsOpen] = useState(false);

  const connectWallet = () => {
    if (!isTermsAccepted) {
      notifyError();
      return;
    }
    connect();
  };

  const openTermsAndConditions = () => {
    setIsTermsAndConditionsOpen(true);
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

  if (isTermsAndConditionsOpen && metaMaskStatus === "notConnected") {
    return (
      <div className="mt-10 sm:mt-20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            connectWallet();
          }}
          className="pb-5  relative pt-[45px] px-7 sm:px-10 mt-[69px] md:w-[782px] w-[350px] mx-auto sm:min-h-[818px] sm:pb-[100px]  sm:bg-transparent rounded-[20px] flex flex-wrap flex-col bg-[#B8FE00]"
          style={{
            backgroundImage: `url(${width > 500 ? formConnectBg : null})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="flex flex-wrap flex-col">
            <h1 className="text-5xl font-[b]">Terms and Conditions</h1>
            <h2 className="text-xl text-[#444444] mt-2">Last Updated: 11.9.2022</h2>
            <div className="p-2 bg-black mt-4">
              <div className="bg-black py-6 px-6 text-white h-auto sm:h-[481px]  formConnectText">
                <h3 className="text-2xl">Welcome to Cyber Crew!</h3>
                <p className="mt-4 ">
                  <h4>Terms and Conditions</h4>
                  <h4>Agreement between User and https://www.cavidmdw.com</h4>
                  Welcome to https://www.cavidmdw.com. The https://www.cavidmdw.com website (the "Site") is composed of
                  various web pages operated by CavidMDW ("CavidMDW (CMDW)"). https://www.cavidmdw.com is offered to you
                  conditioned on your acceptance without modification of the terms, conditions, and notices contained
                  herein (the "Terms"). Your use of https://www.cavidmdw.com constitutes your agreement to all such
                  Terms. Please read these terms carefully, and keep a copy of them for your reference. For the purpose
                  of these Terms and Conditions https://www.cavidmdw.com is considered the same as CavidMDW.com.
                  https://www.cavidmdw.com is a NFT (Non-Fungible Token) Art and Asset Management Site. This website was
                  designed to be a showcase for CavidMDW's art, a place for holders of certain CavidMDW NFTs to download
                  their asset files, and a place to learn more about CavidMDW and his projects.
                  <h4>Privacy</h4>
                  Your use ofhttps://www.cavidmdw.com is subject to CavidMDW (CMDW)'s Privacy Policy. Please review our
                  Privacy Policy¹, which also governs the Site and informs users of our data collection practices.
                  <h4>Electronic Communications</h4>
                  Visiting https://www.cavidmdw.com or sending emails to CavidMDW (CMDW) constitutes electronic
                  communications. You consent to receive electronic communications and you agree that all agreements,
                  notices, disclosures and other communications that we provide to you electronically, via email and on
                  the Site, satisfy any legal requirement that such communications be in writing.
                  <h4>Service Users</h4>
                  By using our services you are a service user (“Service User”). By becoming a Service User, you agree:
                  (a) to provide accurate, current and complete information about yourself; (b) to maintain and promptly
                  update from time to time as necessary your information; (c) to immediately notify us if you discover
                  or otherwise suspect any security breaches related to the Services; (d) that you are fully responsible
                  for all activity on the Services that occurs under your email and/or password combination; (e) to not
                  attempt to circumvent or bypass restricted token-gated content on this site by trading ownership of
                  NFTs with the intent to collect, view, or download the associated token-gated files and services; and
                  (f) to not redistribute locked, token-gated content or services associated with your NFT to any third
                  party without express written consent from CavidMDW.com. We may, in our sole discretion, refuse to
                  allow you to become a Service User, or limit the number of User Accounts or Digital Wallets (as
                  defined below) that you may
                </p>
              </div>
            </div>
            <div className="mt-2 sm:mt-16 flex flex-wrap">
              <input
                type="checkbox"
                value={isTermsAccepted}
                onChange={() => setIsTermsAccepted(!isTermsAccepted)}
                className="bg-black w-[29px] h-[29px] sm:w-[49px] sm:h-[49px]"
              />
              <p className="font-[b] md:text-base ml-1 md:ml-2 text-[10px] ">
                By continuing to use or access the Site, you agree <br /> to be bound by and subject to these terms.
              </p>
              <button className="mt-5 sm:mt-0 z-10 sm:ml-3 w-full sm:w-[169px] h-[49px]   text-[15px] text-black bg-transparent  justify-center items-center border-2 border-black rounded-xl  hover:bg-black hover:text-[#B8FE00] transition-colors">
                CONNECT WALLET
              </button>
            </div>
          </div>

          <img
            src={formConnectArrow}
            className="hidden md:block absolute bottom-10 -right-1 -z-0 w-[332px] h-[132px]"
          />
        </form>
      </div>
    );
  }

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

  if (!isTermsAndConditionsOpen && metaMaskStatus === "notConnected")
    return (
      <>
        <div className="mt-24">
          <div className="flex flex-wrap flex-col mx-auto w-max items-center gap-9 md:mt-[261px]">
            <button
              onClick={openTermsAndConditions}
              className="w-[261px] h-[61px]  text-2xl sm:w-[401px] sm:h-[91px] bg-transparent md:text-3xl justify-center items-center border-2 border-[#B8FE00] rounded-xl text-white hover:bg-[#B8FE00] hover:text-black transition-colors"
            >
              CONNECT WALLET
            </button>
            {/* <p className="text-white w-[360px] text-base  sm:w-[600px]  md:w-[760px]  2xl:w-[1348px] sm:text-3xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p> */}
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

          {loopringStatus === "succeed" && nftList.status === "succeed" && (
            <div>{nftList.data.length < 1 && <>No NFTs found</>}</div>
          )}
        </div>
      </div>
    );

  return null;
};
