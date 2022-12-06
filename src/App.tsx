import "./style/global.css";

import { MetaMaskProvider } from "metamask-react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalContextProvider } from "./components/contexts/GlobalContext";
import { Layout } from "./components/shared/Layout";
import { Routes } from "./routes";

export const App = () => {
  return (
    <MetaMaskProvider>
      <BrowserRouter>
        <GlobalContextProvider>
          <Layout>
            <Routes />
          </Layout>
        </GlobalContextProvider>
      </BrowserRouter>
    </MetaMaskProvider>
  );
};

export default App;
