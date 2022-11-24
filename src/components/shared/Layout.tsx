import React from "react";
import { useLocation } from "react-router-dom";

import { bgChanger } from "../../utility/bgChanger";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutPropsType = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutPropsType> = ({ children }) => {
  const location = useLocation();
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${bgChanger(location.pathname)})`
      }}
    >
      <Header />
      <div className="min-h-[calc(100vh-126px)]">{children}</div>
      <Footer />
    </div>
  );
};
