import React, { useState } from "react";

import { ModalTermsAndConditions } from "../shared/ModalTermsAndConditions";

type ModalContextType = {
  isTermsAndConditionsModalOpen: boolean;
  openTermsAndConditions: () => void;
  closeTermsAndConditions: () => void;
};

export const ModalContext = React.createContext<ModalContextType>({
  isTermsAndConditionsModalOpen: false,
  openTermsAndConditions: () => {
    // open terms and conditions
  },
  closeTermsAndConditions: () => {
    // close terms and conditions
  }
});

export const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTermsAndConditionsModalOpen, setIsTermsAndConditionsModalOpen] = useState<boolean>(false);

  const openTermsAndConditions = () => {
    setIsTermsAndConditionsModalOpen(true);
  };

  const closeTermsAndConditions = () => {
    setIsTermsAndConditionsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isTermsAndConditionsModalOpen, openTermsAndConditions, closeTermsAndConditions }}>
      {children}
      {/* <ModalTermsAndConditions /> */}
    </ModalContext.Provider>
  );
};
