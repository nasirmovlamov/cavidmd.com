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
                  defined below) that you may associate with the Services, or suspend or terminate any Service User or
                  User Account, including access to our Services.
                  <br />
                  You also agree that you will not:
                  <br /> ● Use the Services under a different email address if we’ve disabled access for you under a
                  different email address, unless you have our written permission first
                  <br /> ● Buy, sell, rent or lease access to your Digital Wallet (as defined below) to any third party,
                  unless you have our written permission first
                  <br /> ● Use or access the Services through any unauthorized third party application(s) or client(s),
                  or to disclose or share your User Account information such as your email address and password with any
                  other person.
                  <h4>User Accounts</h4>
                  In order to access certain functions, Service Users may need to connect their Digital Wallet (as
                  defined below). When a Service User connects a Digital Wallet, they create a user account (“User
                  Account”) with CavidMDW. In order to create a User Account, you may be required to provide additional
                  information, such as your name, email address, username, wallet address, and other information as
                  required by CavidMDW.com.
                  <h4>Your Account</h4>
                  If you use this site, you are responsible for maintaining the confidentiality of your account and
                  password and for restricting access to your computer, and you agree to accept responsibility for all
                  activities that occur under your account or password. You may not assign or otherwise transfer your
                  account to any other person or entity. You acknowledge that CavidMDW (CMDW) is not responsible for
                  third party access to your account that results from theft or misappropriation of your account.
                  CavidMDW (CMDW) and its associates reserve the right to refuse or cancel service, terminate accounts,
                  or remove or edit content in our sole discretion.
                  <h4>NFT Content License </h4>
                  You are granted a limited, exclusive right to access, view, download, playback, or otherwise access
                  (“NFT Content License”) the NFT(Non-Fungible Token) Content associated with the NFT you have
                  purchased. The NFT Content License is subject to these Terms, and/or any additional terms as may be
                  presented to you at the time you purchase the NFT or first access the NFT Content.
                  <h4>Trademark & Copyright </h4>
                  The CavidMDW.com™ or CMDW™ logo and any CavidMDW™ or CMDW product or service names, logos, or slogans
                  that may appear on the CavidMDW.com website are trademarks of and are copyrighted by CavidMDW or our
                  affiliates, and may not be copied, imitated or used, in whole or in part, without our prior express
                  written permission. You may not use any so-called “metatags” or other “hidden text” utilizing
                  “CavidMDW” “CMDW” “CavidMDW.com” or any other name, trademark or product or service name of
                  CavidMDW.com or our affiliates without our prior written permission. In addition, the look and feel of
                  the Services and Content, including, without limitation, all page headers, custom graphics, button
                  icons and scripts, constitute the service mark, trademark or trade dress of CavidMDW.com and may not
                  be copied, imitated or used, in whole or in part, without our prior written permission. All other
                  trademarks, registered trademarks, product names and CavidMDW names or logos mentioned are the
                  property of their respective owners and may not be copied, imitated or used, in whole or in part,
                  without the permission of the applicable trademark holder. Reference to any products, services,
                  processes or other information by name, trademark, manufacturer, supplier or otherwise does not
                  constitute or imply endorsement, sponsorship or recommendation by CavidMDW.
                  <h4>Children Under Thirteen </h4>
                  CavidMDW (CMDW) does not knowingly collect, either online or offline, personal information from
                  persons under the age of thirteen. If you are under 18, you may use https://www.cavidmdw.com only with
                  permission of a parent or guardian.
                  <h4>Links to Third Party Sites/Third Party Services </h4>
                  https://www.cavidmdw.com may contain links to other websites ("Linked Sites"). The Linked Sites are
                  not under the control of CavidMDW (CMDW) and CavidMDW (CMDW) is not responsible for the contents of
                  any Linked Site, including without limitation any link contained in a Linked Site, or any changes or
                  updates to a Linked Site. CavidMDW (CMDW) is providing these links to you only as a convenience, and
                  the inclusion of any link does not imply endorsement by CavidMDW (CMDW) of the site or any association
                  with its operators. Certain services made available via https://www.cavidmdw.com are delivered by
                  third party sites and organizations. By using any product, service or functionality originating from
                  the https:/www.cavidmdwpro.com domain, you hereby acknowledge and consent that CavidMDW (CMDW) may
                  share such information and data with any third party with whom CavidMDW (CMDW) has a contractual
                  relationship to provide the requested product, service or functionality on behalf of
                  https://www.cavidmdw.com users and customers.
                  <h4>No Unlawful or Prohibited Use/Intellectual Property </h4>
                  You are granted a non-exclusive, non-transferable, revocable license to access and use
                  https://www.cavidmdw.com strictly in accordance with these terms of use. As a condition of your use of
                  the Site, you warrant to CavidMDW (CMDW) that you will not use the Site for any purpose that is
                  unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage,
                  disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the
                  Site. You may not obtain or attempt to obtain any materials or information through any means not
                  intentionally made available or provided for through the Site. All content included as part of the
                  Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software
                  used on the Site, is the property of CavidMDW (CMDW) or its suppliers and protected by copyright and
                  other laws that protect intellectual property and proprietary rights. You agree to observe and abide
                  by all copyright and other proprietary notices, legends or other restrictions contained in any such
                  content and will not make any changes thereto. You will not modify, publish, transmit, reverse
                  engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of
                  the content, in whole or in part, found on the Site. CavidMDW (CMDW) content is not for resale. Your
                  use of the Site does not entitle you to make any unauthorized use of any protected content, and in
                  particular you will not delete or alter any proprietary rights or attribution notices in any content.
                  You will use protected content solely for your personal use, and will make no other use of the content
                  without the express written permission of CavidMDW (CMDW) and the copyright owner. You agree that you
                  do not acquire any ownership rights in any protected content. We do not grant you any licenses,
                  express or implied, to the intellectual property of CavidMDW (CMDW) or our licensors except as
                  expressly authorized by these Terms.
                  <h4>Use of Communication Services </h4>
                  The Site may contain bulletin board services, chat areas, news groups, forums, communities, personal
                  web pages, calendars, and/or other message or communication facilities designed to enable you to
                  communicate with the public at large or with a group (collectively, "Communication Services"). You
                  agree to use the Communication Services only to post, send and receive messages and material that are
                  proper and related to the particular Communication Service. By way of example, and not as a
                  limitation, you agree that when using a Communication Service, you will not: defame, abuse, harass,
                  stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of
                  others; publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory,
                  infringing, obscene, indecent or unlawful topic, name, material or information; upload files that
                  contain software or other material protected by intellectual property laws (or by rights of privacy of
                  publicity) unless you own or control the rights thereto or have received all necessary consents;
                  upload files that contain viruses, corrupted files, or any other similar software or programs that may
                  damage the operation of anther's computer; advertise or offer to sell or buy any goods or services for
                  any business purpose, unless such Communication Service specifically allows such messages; conduct or
                  forward surveys, contests, pyramid schemes or chain letters; download any file posted by another user
                  of a Communication Service that you know, or reasonably should know, cannot be legally distributed in
                  such manner; falsify or delete any author attributions, legal or other proper notices or proprietary
                  designations or labels of the origin or source of software or other material contained in a file that
                  is uploaded; restrict or inhibit any other user from using and enjoying the Communication Services;
                  violate any code of conduct or other guidelines which may be applicable for any particular
                  Communication Service; harvest or otherwise collect information about others, including e-mail
                  addresses, without their consent; violate any applicable laws or regulations. CavidMDW (CMDW) has no
                  obligation to monitor the Communication Services. However, CavidMDW (CMDW) reserves the right to
                  review materials posted to a Communication Service and to remove any materials in its sole discretion.
                  CavidMDW (CMDW) reserves the right to terminate your access to any or all of the Communication
                  Services at any time without notice for any reason whatsoever. CavidMDW (CMDW) reserves the right at
                  all times to disclose any information as necessary to satisfy any applicable law, regulation, legal
                  process or governmental request, or to edit, refuse to post or to remove any information or materials,
                  in whole or in part, in CavidMDW (CMDW)'s sole discretion. Always use caution when giving out any
                  personally identifying information about yourself or your children in any Communication Service.
                  CavidMDW (CMDW) does not control or endorse the content, messages or information found in any
                  Communication Service and, therefore, CavidMDW (CMDW) specifically disclaims any liability with regard
                  to the Communication Services and any actions resulting from your participation in any Communication
                  Service. Managers and hosts are not authorized CavidMDW (CMDW) spokespersons, and their views do not
                  necessarily reflect those of CavidMDW (CMDW). Materials uploaded to a Communication Service may be
                  subject to posted limitations on usage, reproduction and/or dissemination. You are responsible for
                  adhering to such limitations if you upload the materials.
                  <h4>Materials Provided to https://www.cavidmdpro.com or Posted on Any CavidMDW (CMDW) Web Page </h4>
                  CavidMDW (CMDW) does not claim ownership of the materials you provide to https://www.cavidmdw.com
                  (including feedback and suggestions) or post, upload, input or submit to any CavidMDW (CMDW) Site or
                  our associated services (collectively "Submissions"). However, by posting, uploading, inputting,
                  providing or submitting your Submission you are granting CavidMDW (CMDW), our affiliated companies and
                  necessary sublicensees permission to use your Submission in connection with the operation of their
                  Internet businesses including, without limitation, the rights to: copy, distribute, transmit, publicly
                  display, publicly perform, reproduce, edit, translate and reformat your Submission; and to publish
                  your name in connection with your Submission. No compensation will be paid with respect to the use of
                  your Submission, as provided herein. CavidMDW (CMDW) is under no obligation to post or use any
                  Submission you may provide and may remove any Submission at any time in CavidMDW (CMDW)'s sole
                  discretion. By posting, uploading, inputting, providing or submitting your Submission you warrant and
                  represent that you own or otherwise control all of the rights to your Submission as described in this
                  section including, without limitation, all the rights necessary for you to provide, post, upload,
                  input or submit the Submissions.
                  <h4>Third Party Accounts </h4>
                  You will be able to connect your CavidMDW (CMDW) account to third party accounts. By connecting your
                  CavidMDW (CMDW) account to your third party account, you acknowledge and agree that you are consenting
                  to the continuous release of information about you to others (in accordance with your privacy settings
                  on those third party sites). If you do not want information about you to be shared in this manner, do
                  not use this feature.
                  <h4>International Users </h4>
                  The Service is controlled, operated and administered by CavidMDW (CMDW) from our offices within the
                  USA. If you access the Service from a location outside the USA, you are responsible for compliance
                  with all local laws. You agree that you will not use the CavidMDW (CMDW) Content accessed through
                  https://www.cavidmdw.com in any country or in any manner prohibited by any applicable laws,
                  restrictions or regulations.
                  <h4>Site Support and Maintenance</h4>
                  You acknowledge and agree that CavidMDW will have no obligation to provide you with any support or
                  maintenance in connection with our website or our services.
                  <h4>Site Availability</h4>
                  By using this site (CavidMDW.com), and its services, you agree and acknowledge that it can be shut
                  down at any time. CavidMDW retains no responsibility to maintain site availability. CavidMDW.com and
                  its services are provided “as is” and to the fullest extent permissible under applicable laws. We do
                  not warrant: that the sites or services, or any of their functions, will be uninterrupted or
                  error-free; that defects will be corrected; that any part of the site or services, or the servers that
                  make them available, are free of viruses or other harmful components.
                  <h4>Indemnification </h4>
                  You agree to indemnify, defend and hold harmless CavidMDW (CMDW), its officers, directors, employees,
                  agents and third parties, for any losses, costs, liabilities and expenses (including reasonable
                  attorney's fees) relating to or arising out of your use of or inability to use the Site or services,
                  any user postings made by you, your violation of any terms of this Agreement or your violation of any
                  rights of a third party, or your violation of any applicable laws, rules or regulations. CavidMDW
                  (CMDW) reserves the right, at its own cost, to assume the exclusive defense and control of any matter
                  otherwise subject to indemnification by you, in which event you will fully cooperate with CavidMDW
                  (CMDW) in asserting any available defenses.
                  <h4>Arbitration</h4>
                  In the event the parties are not able to resolve any dispute between them arising out of or concerning
                  these Terms and Conditions, or any provisions hereof, whether in contract, tort, or otherwise at law
                  or in equity for damages or any other relief, then such dispute shall be resolved only by final and
                  binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator
                  and administered by the American Arbitration Association, or a similar arbitration service selected by
                  the parties, in a location mutually agreed upon by the parties. The arbitrator's award shall be final,
                  and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or
                  equitable action, proceeding or arbitration arises out of or concerns these Terms and Conditions, the
                  prevailing party shall be entitled to recover its costs and reasonable attorney's fees. The parties
                  agree to arbitrate all disputes and claims in regards to these Terms and Conditions or any disputes
                  arising as a result of these Terms and Conditions, whether directly or indirectly, including Tort
                  claims that are a result of these Terms and Conditions. The parties agree that the Federal Arbitration
                  Act governs the interpretation and enforcement of this provision. The entire dispute, including the
                  scope and enforceability of this arbitration provision shall be determined by the Arbitrator. This
                  arbitration provision shall survive the termination of these Terms and Conditions.
                  <h4>Class Action Waiver </h4>
                  Any arbitration under these Terms and Conditions will take place on an individual basis; class
                  arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A
                  PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR
                  CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM
                  OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and CavidMDW (CMDW)
                  agree otherwise, the arbitrator may not consolidate more than one person's claims, and may not
                  otherwise preside over any form of a representative or class proceeding.
                  <h4>Liability Disclaimer</h4>
                  THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY
                  INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION
                  HEREIN. CAVIDMDW AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.
                  CAVIDMDW AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY,
                  AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED
                  GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL
                  SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT
                  WARRANTY OR CONDITION OF ANY KIND. CAVIDMDW AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND
                  CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS,
                  INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  TITLE AND NON-INFRINGEMENT. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
                  CAVIDMDW AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF
                  USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE,
                  WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO
                  PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED
                  THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT,
                  NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF CAVIDMDW OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED
                  OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR
                  LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO
                  YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR
                  SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
                  <h4>Termination/Access Restriction </h4>
                  CavidMDW (CMDW) reserves the right, in its sole discretion, to terminate your access to the Site and
                  the related services or any portion thereof at any time, without notice. To the maximum extent
                  permitted by law, this agreement is governed by the laws of the State of Delaware and you hereby
                  consent to the exclusive jurisdiction and venue of courts in Delaware in all disputes arising out of
                  or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not
                  give effect to all provisions of these Terms, including, without limitation, this section. You agree
                  that no joint venture, partnership, employment, or agency relationship exists between you and CavidMDW
                  (CMDW) as a result of this agreement or use of the Site. CavidMDW (CMDW)'s performance of this
                  agreement is subject to existing laws and legal process, and nothing contained in this agreement is in
                  derogation of CavidMDW (CMDW)'s right to comply with governmental, court and law enforcement requests
                  or requirements relating to your use of the Site or information provided to or gathered by CavidMDW
                  (CMDW) with respect to such use. If any part of this agreement is determined to be invalid or
                  unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and
                  liability limitations set forth above, then the invalid or unenforceable provision will be deemed
                  superseded by a valid, enforceable provision that most closely matches the intent of the original
                  provision and the remainder of the agreement shall continue in effect. Unless otherwise specified
                  herein, this agreement constitutes the entire agreement between the user and CavidMDW (CMDW) with
                  respect to the Site and it supersedes all prior or contemporaneous communications and proposals,
                  whether electronic, oral or written, between the user and CavidMDW (CMDW) with respect to the Site. A
                  printed version of this agreement and of any notice given in electronic form shall be admissible in
                  judicial or administrative proceedings based upon or relating to this agreement to the same extent and
                  subject to the same conditions as other business documents and records originally generated and
                  maintained in printed form. It is the express wish to the parties that this agreement and all related
                  documents be written in English.
                  <h4>Changes to Terms</h4>
                  CavidMDW (CMDW) reserves the right, in its sole discretion, to change the Terms under which
                  https://www.cavidmdw.com is offered. The most current version of the Terms will supersede all previous
                  versions. CavidMDW (CMDW) encourages you to periodically review the Terms to stay informed of our
                  updates. Effective as of December 15, 2022
                  <h3>Privacy Policy¹</h3>
                  Protecting your private information is our priority. This Statement of Privacy applies to
                  https://www.cavidmdw.com, and CavidMDW.com and governs data collection and usage. For the purposes of
                  this Privacy Policy, unless otherwise noted, all references to CavidMDW.com include
                  https://www.cavidmdw.com and CavidMDW.com. The CavidMDW.com website is a website designed to be a
                  showcase for CavidMDW's art, a place for holders of certain CavidMDW NFTs to download their asset
                  files, and a place to learn more about CavidMDW and his projects. By using the CavidMDW.com website,
                  you consent to the data practices described in this statement.
                  <h4>Collection of your Personal Information </h4>
                  In order to better provide you with products and services offered, CavidMDW.com may collect personally
                  identifiable information, such as your:
                  <br /> ● E-mail Address
                  <br /> ● Any other information we deem necessary to operate this site or maintain site safety
                  <br />
                  Please keep in mind that if you directly disclose personally identifiable information or personally
                  sensitive data through CavidMDW.com 's public message boards, this information may be collected and
                  used by others. We do not collect any personal information about you unless you voluntarily provide it
                  to us. However, you may be required to provide certain personal information to us when you elect to
                  use certain products or services. These may include: (a) registering for an account; (b) entering a
                  sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from
                  selected third parties; (d) sending us an email message; (e) submitting your credit card or other
                  payment information when ordering and purchasing products and services. We will use your information
                  for, but not limited to, communicating with you in relation to services and/or products you have
                  requested from us. We also may gather additional personal or non-personal information in the future.
                  <h4>Use of your Personal Information </h4>
                  CavidMDW.com collects and uses your personal information to operate and deliver the services you have
                  requested. CavidMDW.com may also use your personally identifiable information to inform you of other
                  products or services available from CavidMDW.com and its affiliates.
                  <h4>Sharing Information with Third Parties </h4>
                  CavidMDW.com does not sell, rent or lease its customer lists to third parties. CavidMDW.com may share
                  data with trusted partners to help perform statistical analysis, send you email or postal mail,
                  provide customer support, or arrange for deliveries. All such third parties are prohibited from using
                  your personal information except to provide these services to CavidMDW.com , and they are required to
                  maintain the confidentiality of your information. CavidMDW.com may disclose your personal information,
                  without notice, if required to do so by law or in the good faith belief that such action is necessary
                  to: (a) conform to the edicts of the law or comply with legal process served on CavidMDW.com or the
                  site; (b) protect and defend the rights or property of CavidMDW.com ; and/or (c) act under exigent
                  circumstances to protect the personal safety of users of CavidMDW.com , or the public.
                  <h4>Tracking User Behavior </h4>
                  CavidMDW.com may keep track of the websites and pages our users visit within CavidMDW.com, in order to
                  determine what CavidMDW.com services are the most popular. This data could be used to deliver
                  customized content and advertising within CavidMDW.com to customers whose behavior indicates that they
                  are interested in a particular subject area.
                  <h4>Automatically Collected Information </h4>
                  Information about your computer hardware and software may be automatically collected by CavidMDW.com.
                  This information can include: your IP address, browser type, domain names, access times and referring
                  website addresses. This information is used for the operation of the service, to maintain quality of
                  the service, and to provide general statistics regarding use of the CavidMDW.com website.
                  <h4>Use of Cookies</h4>
                  The CavidMDW.com website may use "cookies" to help you personalize your online experience. A cookie is
                  a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run
                  programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be
                  read by a web server in the domain that issued the cookie to you. One of the primary purposes of
                  cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the
                  Web server that you have returned to a specific page. For example, if you personalize CavidMDW.com
                  pages, or register with CavidMDW.com site or services, a cookie helps CavidMDW.com to recall your
                  specific information on subsequent visits. This simplifies the process of recording your personal
                  information, such as billing addresses, shipping addresses, and so on. When you return to the same
                  CavidMDW.com website, the information you previously provided can be retrieved, so you can easily use
                  the CavidMDW.com features that you customized. You have the ability to accept or decline cookies. Most
                  Web browsers automatically accept cookies, but you can usually modify your browser setting to decline
                  cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the
                  interactive features of the CavidMDW.com services or websites you visit.
                  <h4>Links</h4>
                  This website contains links to other sites. Please be aware that we are not responsible for the
                  content or privacy practices of such other sites. We encourage our users to be aware when they leave
                  our site and to read the privacy statements of any other site that collects personally identifiable
                  information.
                  <h4>Personal Information </h4>
                  Sometimes we may be permitted or compelled to use personal information stored on our website for the
                  following reasons:
                  <br /> ● Complete the transaction for which the personal information was collected, fulfill the terms
                  of a written warranty or product recall conducted in accordance with federal law, provide a good or
                  service requested by you, or reasonably anticipated within the context of our ongoing business
                  relationship with you, or otherwise perform a contract between you and us;
                  <br /> ● Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal
                  activity; or prosecute those responsible for that activity;
                  <br /> ● Debug to identify and repair errors that impair existing intended functionality;
                  <br /> ● Exercise free speech, ensure the right of another consumer to exercise his or her right of
                  free speech, or exercise another right provided for by law;
                  <br /> ● Comply with the California Electronic Communications Privacy Act;
                  <br /> ● Engage in public or peer-reviewed scientific, historical, or statistical research in the
                  public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the
                  information is likely to render impossible or seriously impair the achievement of such research,
                  provided we have obtained your informed consent;
                  <br /> ● Enable solely internal uses that are reasonably aligned with your expectations based on your
                  relationship with us;
                  <br /> ● Comply with an existing legal obligation; or otherwise use your personal information,
                  internally, in a lawful manner that is compatible with the context in which you provided the
                  information.
                  <h4>Children Under Thirteen</h4>
                  CavidMDW.com does not knowingly collect personally identifiable information from children under the
                  age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for
                  permission to use this website.
                  <h4>E-mail Communications </h4>
                  From time to time, CavidMDW.com may contact you via email for the purpose of providing announcements,
                  promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to
                  improve our Services, we may receive a notification when you open an email from CavidMDW.com or click
                  on a link therein.
                  <h4>Changes to this Statement</h4>
                  CavidMDW.com reserves the right to change this Privacy Policy from time to time. We will notify you
                  about significant changes in the way we treat personal information by updating the privacy policy
                  information in this section or the sections above. Your continued use of the website and/or Services
                  available after such modifications will constitute your: (a) acknowledgment of the modified Privacy
                  Policy; and (b) agreement to abide and be bound by that Policy.
                  <br />
                  Effective as of December 15, 2022
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
