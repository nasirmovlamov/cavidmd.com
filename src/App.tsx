import "./style/global.css";

import { MetaMaskProvider } from "metamask-react";
import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import { GlobalContextProvider } from "./components/contexts/GlobalContext";
import { BackgroundVideo } from "./components/shared/BackgroundVideo";
import { Layout } from "./components/shared/Layout";
import { Routes } from "./routes";

export const App = () => {
  return (
    <MetaMaskProvider>
      <BrowserRouter>
        <BackgroundVideo />

        <GlobalContextProvider>
          <Layout>
            <Routes />
          </Layout>
        </GlobalContextProvider>
      </BrowserRouter>
      <Toaster />
    </MetaMaskProvider>
  );
};

export default App;
