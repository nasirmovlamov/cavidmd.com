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
  return (
    <div>
      <div
        className="min-h-[calc(100vh-60px)] "
        style={{
          backgroundImage: `url(${bgChanger(location.pathname, width > 500)})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <MobileMenu />
        <Header />
        <div className="h-max">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
