import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalContextProvider } from "./components/contexts/GlobalContext";
import { Layout } from "./components/shared/Layout";
import { Routes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Layout>
          <Routes />
        </Layout>
      </GlobalContextProvider>
    </BrowserRouter>
  );
};

export default App;
