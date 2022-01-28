import { SearchIcon } from "@heroicons/react/outline";
import { ethers, providers, utils } from "ethers";
import React, { useReducer, useState, useEffect } from "react";
import { ChainId, useEthers, useSendTransaction } from "@usedapp/core";
import { NftGallery } from "react-nft-gallery";
import ENSAddress from "./ENSAddress";
import { Loader } from "../Solana/Loader";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

function EthereumGallery() {
  const { account, chainId, library } = useEthers();
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  const [ensName, setEnsName] = useState(null);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  let router = useRouter();

  let manualAddressSubmit = () => {
    if (value) {
      router.push(`/${value}`);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (value === "") {
      return null;
    } else if (currentTheme === "dark" && value !== "") {
      return (
        <NftGallery
          darkMode={true}
          ownerAddress={value}
          key={value}
          galleryContainerStyle={{ background: "#111827" }}
          itemContainerStyle={{
            maxWidth: "20rem",
            border: "solid #f4f7fa",
            borderWidth: "4px",
            borderRadius: "20px",
            boxShadow:
              "0 10px 15px -3px rgba(209, 213, 219, 1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        />
      );
    } else {
      return (
        <NftGallery
          darkMode={false}
          ownerAddress={value}
          key={value}
          galleryContainerStyle={{ background: "#f1f5f9" }}
          itemContainerStyle={{
            maxWidth: "20rem",
            border: "solid #1d2434",
            borderWidth: "4px",
            borderRadius: "20px",
            boxShadow:
              "0 10px 15px -3px rgba(29, 36, 52, 1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        />
      );
    }
  };

  return (
    <div className="content-container">
      <div className="flex flex-col">
        <div id="top" style={{ scrollMarginTop: "200px" }}></div>
        <h1 className="flex font-bold text-2xl justify-center">
          Ethereum NFT Gallery
        </h1>
        <h2 className="flex text-l justify-center text-center px-4">
          Use Search Bar or Connect Wallet to begin!
        </h2>
        <div className="flex justify-center items-center pt-16">
          <div className="search-container">
            <SearchIcon className="text-[#d9d9d9] dark:text-gray-500 pt-1 h-5 z-50" />
            <input
              type="text"
              className="input"
              value={value}
              onChange={handleChange}
              required
              placeholder="ENS or Ethereum Address"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-10">
          {renderThemeChanger()}
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
}

export default EthereumGallery;
