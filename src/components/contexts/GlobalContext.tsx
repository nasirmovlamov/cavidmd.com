import React, { useState } from "react";

import { ModalContextProvider } from "./ModalContext";

type GlobalContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
};

export const GlobalContext = React.createContext<GlobalContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {
    // set dark mode
  },
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {
    // set mobile menu open
  }
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  return (
    <GlobalContext.Provider value={{ isDarkMode, isMobileMenuOpen, setIsDarkMode, setIsMobileMenuOpen }}>
      <ModalContextProvider>{children}</ModalContextProvider>
    </GlobalContext.Provider>
  );
};
