// This file is to show what making a connect button looks like behind the scenes!

import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { contractAddresses } from "../constants";

// Top navbar
export default function ManualHeader() {
  const {
    enableWeb3,
    isWeb3Enabled,
    isWeb3EnableLoading,
    account,
    Moralis,
    deactivateWeb3,
    chainId: chainIdHex,
  } = useMoralis();

  const chainId = parseInt(chainIdHex);

  const presaleAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;
  useEffect(() => {
    if (
      !isWeb3Enabled &&
      typeof window !== "undefined" &&
      window.localStorage.getItem("connected")
    ) {
      {
        console.log(`EGWWW ${parseInt(chainId).toString()}`);
      }
      enableWeb3();
      // enableWeb3({provider: window.localStorage.getItem("connected")}) // add walletconnect
    }
  }, [isWeb3Enabled]);
  // no array, run on every render
  // empty array, run once
  // dependency array, run when the stuff in it changesan

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to ${account}`);
      console.log(chainIdHex);
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("Null Account found");
      }
    });
  }, []);
  const networks = {
    polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
    bsc: {
      chainId: `0x${Number(56).toString(16)}`,
      chainName: "Binance Smart Chain Mainnet",
      nativeCurrency: {
        name: "Binance Chain Native Token",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: [
        "https://bsc-dataseed1.binance.org",
        "https://bsc-dataseed2.binance.org",
        "https://bsc-dataseed3.binance.org",
        "https://bsc-dataseed4.binance.org",
        "https://bsc-dataseed1.defibit.io",
        "https://bsc-dataseed2.defibit.io",
        "https://bsc-dataseed3.defibit.io",
        "https://bsc-dataseed4.defibit.io",
        "https://bsc-dataseed1.ninicoin.io",
        "https://bsc-dataseed2.ninicoin.io",
        "https://bsc-dataseed3.ninicoin.io",
        "https://bsc-dataseed4.ninicoin.io",
        "wss://bsc-ws-node.nariox.org",
      ],
      blockExplorerUrls: ["https://bscscan.com"],
    },
  };

  const changeNetwork = async ({ networkName, setError }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName],
          },
        ],
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const [error, setError] = useState();

  const handleNetworkSwitch = async (networkName) => {
    setError();

    await changeNetwork({ networkName, setError });
  };

  return (
    <div className="ribbon">
      {!presaleAddress && account ? (
        <button
          className="ribbon2 site-button button-lg outline radius-md shadow"
          onClick={() => handleNetworkSwitch("bsc")}
        >
          <img src={require("../../images/bsc.png")}></img> <span>{"   "}</span>{" "}
          SWITCH TO BSC
        </button>
      ) : account ? (
        <div>
          <a
            href="javascript:void(0);"
            data-toggle="modal"
            data-target="#exampleModal2"
            className="ribbon2 site-button button-lg outline radius-md shadow"
          >
            <img
              className="img"
              src={require("../../images/wallet-lodge.png")}
              alt=""
            />
          </a>
          <span>{"  "}</span>
          <button className="ribbon2 site-button button-lg outline radius-md shadow">
            <img src={require("../../images/bsc.png")}></img>{" "}
            <span>{"   "}</span> Connected to {account.slice(0, 6)}...
            {account.slice(account.length - 4)}
          </button>
        </div>
      ) : (
        <button
          onClick={async () => {
            // await walletModal.connect()
            const ret = await enableWeb3();

            if (typeof ret !== "undefined") {
              // depends on what button they picked
              if (typeof window !== "undefined") {
                window.localStorage.setItem("connected", "injected");
                // window.localStorage.setItem("connected", "walletconnect")
              }
            }
          }}
          className="ribbon2 site-button button-lg outline radius-md shadow"
        >
          Connect
        </button>
      )}
    </div>
  );
}
