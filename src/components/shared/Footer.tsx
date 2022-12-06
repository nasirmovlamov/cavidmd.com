import discordLogo from "images/discord.png";
import footerBg from "images/footer-bg.png";
import instagramLogo from "images/instagram.png";
import redditLogo from "images/reddit.png";
import twitterLogo from "images/twitter.png";
import React from "react";

export const Footer = () => {
  return (
    <div
      className=" pt-10 md:pt-1  z-10 flex flex-wrap gap-y-6 justify-between px-16 box-content md:box-border py-5  bg-black bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div>© 2022 CAVID MAMMADLI. ALL RIGHTS RESERVED</div>
      <div className="flex gap-6 items-center">
        <a href="www.twitter.com">
          <img src={discordLogo} alt="twitter" />
        </a>
        <a href="www.discord.com">
          <img src={instagramLogo} alt="discord" />
        </a>
        <a href="www.instagram.com">
          <img src={redditLogo} alt="instagram" />
        </a>
        <a href="www.reddit.com">
          <img src={twitterLogo} alt="reddit" />
        </a>
      </div>
    </div>
  );
};