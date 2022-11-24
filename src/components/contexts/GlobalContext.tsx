import React, { useState } from "react";

type GlobalContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

export const GlobalContext = React.createContext<GlobalContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {
    // set dark mode
  }
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return <GlobalContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</GlobalContext.Provider>;
};
