import contactArrow from "images/contact-arrow.png";
import contactDiscord from "images/contact-discord.png";
import contactInstagram from "images/contact-instagram.png";
import contactReddit from "images/contact-reddit.png";
import contactTwitter from "images/contact-twitter.png";
import inputBg from "images/inputBg.png";
import textareaBg from "images/textareaBg.png";
import React from "react";

export const Contact = () => {
  return (
    <div className="ml-8 md:mx-auto  flex flex-wrap w-max gap-5 xl:gap-36 flex-col xl:flex-row md:gap-y-20 mb-20">
      <div className="mt-6 md:mt-44 flex flex-col flex-wrap w-max sm:w-[389px] text-white gap-y-4 md:gap-y-14">
        <h1 className="w-full text-3xl  md:text-7xl text-[#B8FE00] font-bold">
          CONTACT <br /> WITH ME
        </h1>
        <div className="flex gap-5 flex-wrap w-full md:ml-5">
          <div className="flex flex-wrap flex-col items-center gap-1 ">
            <img src={contactArrow} alt="contact arrow" className="w-4" />
            <a href="#">
              <img src={contactDiscord} alt="" className="w-9 " />
            </a>
          </div>
          <div className="flex flex-wrap flex-col items-center gap-1">
            <img src={contactArrow} alt="contact arrow" className="w-4" />
            <a href="#">
              <img src={contactInstagram} alt="" className="w-9 " />
            </a>
          </div>
          <div className="flex flex-wrap flex-col items-center gap-1">
            <img src={contactArrow} alt="contact arrow" className="w-4" />
            <a href="#">
              <img src={contactReddit} alt="" className="w-9 " />
            </a>
          </div>
          <div className="flex flex-wrap flex-col items-center gap-1">
            <img src={contactArrow} alt="contact arrow" className="w-4" />
            <a href="#">
              <img src={contactTwitter} alt="" className="w-9 " />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-44 flex flex-wrap flex-col  text-xl text-white w-[300px] md:w-[403px]">
        <div className="flex flex-col gap-5 w-full">
          <label htmlFor="" className="font-bold">
            Full Name
          </label>
          <input
            style={{
              background: "transparent",
              backgroundImage: `url(${inputBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%"
            }}
            type="text"
            placeholder="Enter name"
            className="pr-10 placeholder:text-[#3A5000] bg-black w-[300px] sm:w-[403px] md:w-[403px] h-11 px-4 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-5 mt-11 w-full">
          <label htmlFor="" className="font-bold">
            E-mail Address
          </label>
          <input
            style={{
              background: "transparent",
              backgroundImage: `url(${inputBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%"
            }}
            type="email"
            placeholder="Enter email address"
            className="pr-10 placeholder:text-[#3A5000] bg-black w-[300px] sm:w-[403px] h-11 px-4 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-5 mt-14 w-full">
          <textarea
            style={{
              background: "transparent",
              backgroundImage: `url(${textareaBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%"
            }}
            placeholder="Enter your message"
            className="overflow-hidden pr-16 placeholder:text-[#3A5000] bg-black w-[300px] sm:w-[403px] h-36 px-4 focus:outline-none pt-2"
          ></textarea>
        </div>
        <div className="flex flex-col gap-5 mt-14">
          <button className="hover:h-[71px] transition-all font-bold w-[300px] sm:w-[403px] h-[61px] text-xl justify-center items-center border-2 border-[#B8FE00] rounded-xl  bg-[#B8FE00] text-black ">
            SEND YOUR MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};
