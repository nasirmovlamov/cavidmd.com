import emailjs from "@emailjs/browser";
import contactArrow from "images/contact-arrow.svg";
import contactDiscord from "images/contact-discord.svg";
import contactInstagram from "images/contact-instagram.svg";
import contactReddit from "images/contact-reddit.svg";
import contactTwitter from "images/contact-twitter.svg";
import inputBg from "images/inputBg.png";
import textareaBg from "images/textareaBg.png";
import React, { FormEvent, useRef } from "react";
import toast from "react-hot-toast";

const notify = () => toast.success(" Message sent successfully ", { duration: 3000, position: "top-right" });
const notifyError = () => toast.error("Something went wrong!", { duration: 3000, position: "top-right" });
export const Contact = () => {
  const form = useRef<any>();
  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await emailjs.sendForm("service_qkzpj9o", "template_5yv6tf8", form.current, "mUeKi8aPYFhvWITmO");
      console.log(response);
      notify();
    } catch (error) {
      notifyError();
    }
  };
  return (
    <div className="ml-8 md:mx-auto  flex flex-wrap w-max gap-5 xl:gap-36 flex-col xl:flex-row md:gap-y-20 mb-20">
      <div className="mt-6 md:mt-44 flex flex-col flex-wrap w-max sm:w-[389px] text-white gap-y-4 md:gap-y-14">
        <h1 className="w-full text-3xl  md:text-7xl text-[#B8FE00] font-bold">GET IN TOUCH</h1>
        <div className="flex gap-5 flex-wrap w-full md:ml-5">
          <div className="flex flex-wrap flex-col items-center gap-1 socialContact">
            <img src={contactArrow} alt="contact arrow" className="w-4" />
            <a href="https://discord.gg/cavidmdw">
              <img src={contactDiscord} alt="" className="w-[35px] h-[35px] " />
            </a>
          </div>
          <div className="flex flex-wrap flex-col items-center gap-1 socialContact ">
            <img src={contactArrow} alt="contact arrow" className="w-4" />
            <a href="https://www.instagram.com/cavidmdw/">
              <img src={contactInstagram} alt="" className="w-[35px] h-[35px] " />
            </a>
          </div>
          <div className="flex flex-wrap flex-col items-center gap-1 socialContact ">
            <img src={contactArrow} alt="contact arrow" className="w-4" />
            <a href="https://www.reddit.com/r/CAVIDMDW/">
              <img src={contactReddit} alt="" className="w-[31px] h-[31px] " />
            </a>
          </div>
          <div className="flex flex-wrap flex-col items-center gap-1 socialContact ">
            <img src={contactArrow} alt="contact arrow" className="w-4" />
            <a href="https://twitter.com/cavidmdwpro">
              <img src={contactTwitter} alt="" className="w-[35px] h-[27px]  " />
            </a>
          </div>
        </div>
      </div>
      <form
        onSubmit={sendEmail}
        ref={form}
        className="mt-6 md:mt-44 flex flex-wrap flex-col  text-xl text-white w-[300px] md:w-[403px]"
      >
        <div className="flex flex-col gap-5 w-full">
          <label htmlFor="" className="font-bold">
            Full Name
          </label>
          <input
            name="user_name"
            required
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
            required
            name="user_email"
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
            name="message"
            required
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
          <button
            type="submit"
            className="hover:h-[71px] transition-all font-bold w-[300px] sm:w-[403px] h-[61px] text-xl justify-center items-center border-2 border-[#B8FE00] rounded-xl  bg-[#B8FE00] text-black "
          >
            SEND YOUR MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};
