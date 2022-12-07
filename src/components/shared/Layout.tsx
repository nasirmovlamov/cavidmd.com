import { useWindowSize } from "@react-hook/window-size";
import React from "react";
import { useLocation } from "react-router-dom";

import { bgChanger } from "../../utility/bgChanger";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";

type LayoutPropsType = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutPropsType> = ({ children }) => {
  const location = useLocation();
  const [width, height] = useWindowSize();
  const bgStyle = () => {
    if (location.pathname !== "/") {
      return {
        backgroundImage: `url(${bgChanger(location.pathname, width > 500)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingBottom: "60px"
      };
    }
  };
  return (
    <div>
      <div className={`min-h-[calc(100vh-60px)] `} style={bgStyle()}>
        <MobileMenu />
        <Header />
        <div className="h-max">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
