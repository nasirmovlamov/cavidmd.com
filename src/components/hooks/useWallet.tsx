export {};
// // index.js
// import { useMetaMask } from "metamask-react";
// import React, { useEffect, useState } from "react";

// export const useWallet = () => {
//   const [wallet, setWallet] = useState<{
//     status: "loading" | "connected" | "disconnected";
//   }>({
//     status: "loading"
//   });

//   const connectMetaMask = () => {
//     if (window?.ethereum) {
//       window?.ethereum.request({ method: "eth_requestAccounts" });
//     } else {
//       console.log("MetaMask is not installed");
//     }
//   };

//   useEffect(() => {
//     if (window?.ethereum) {
//       setWallet({ status: "loading" });
//       window?.ethereum.on("accountsChanged", (accounts: string[]) => {
//         if (accounts.length > 0) {
//           setWallet({ status: "connected" });
//         } else {
//           setWallet({ status: "disconnected" });
//         }
//       });
//     }
//   }, []);

//   return { IsWalletConnected, connectMetaMask };
// };
