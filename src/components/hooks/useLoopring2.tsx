import axios from "axios";
import React, { useEffect, useState } from "react";
import { LOOPRING_API } from "utility/loopringApi";

export const useLoopring2 = ({ accountHash }: { accountHash: string | null }) => {
  const [account, setAccount] = useState<null | {
    accountId: string;
  }>(null);
  const [status, setStatus] = useState<"loading" | "succeed" | "failed">("loading");
  const [balance, setBalance] = useState<null | {
    totalNum: string;
    data: {
      accountId: string;
      minter: string;
      nftData: string;
      nftId: string;
      nftType: string;
      tokenAddress: string;
      tokenId: string;
    }[];
  }>(null);
  const getUserAccountId = async (hash: string) => {
    try {
      // console.log("hash", hash);
      const fetchAccountInfo: {
        data: {
          accountId: string;
        };
      } = await axios.get(LOOPRING_API.GET__USER_INFO, {
        params: {
          owner: hash
        }
      });
      setAccount(fetchAccountInfo.data);
      // console.log("accountId", fetchAccountInfo.data.accountId);
      return {
        accountId: fetchAccountInfo.data.accountId
      };
    } catch (error) {
      console.log(error);
      return {
        accountId: null
      };
    }
  };

  const getUserBalance = async (hash: string) => {
    setStatus("loading");
    try {
      const { accountId } = await getUserAccountId(hash);
      if (!accountId) {
        setStatus("failed");
        return;
      }
      const fetchBalance = await axios.get(LOOPRING_API.GET__USER_BALANCE, {
        params: {
          accountId,
          limit: 1000
        },
        headers: {
          "X-API-KEY": "XA24V7QYbIeTtFJ1YpHzpyF4J5Jk6OdpYf6S4K7fcS7a2NvC3Jb9bDdrSwpeF3mZ",
          "access-control-allow-headers": "*"
        }
      });
      // console.log("balance", fetchBalance.data);
      setBalance(fetchBalance.data);
      setStatus("succeed");
      return "fetchBalance.data";
    } catch (error) {
      setStatus("failed");
      // console.log(error);
    }
  };

  useEffect(() => {
    if (accountHash) {
      getUserBalance(accountHash);
    }
  }, [accountHash]);

  return {
    status,
    account,
    balance
  };
};
