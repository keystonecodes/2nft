import React from "react";
import EthereumHeader from "../../components/Ethereum/EthereumHeader";
import EthereumGallery from "../../components/Ethereum/EthereumGallery";
import EthereumFooter from "../../components/Ethereum/EthereumFooter";
import { ChainId, Config, DAppProvider } from "@usedapp/core";
import { ChakraProvider } from '@chakra-ui/react'

const config: Config = {
  readOnlyUrls: {
    [ChainId.Ropsten]: "http://localhost:8545",
    [ChainId.Hardhat]: "http://localhost:8545",
    [ChainId.Localhost]: "http://localhost:8545",
  },
  supportedChains: [
    ChainId.Mainnet,
    ChainId.Goerli,
    ChainId.Kovan,
    ChainId.Rinkeby,
    ChainId.Ropsten,
    ChainId.xDai,
    ChainId.Localhost,
    ChainId.Hardhat,
  ],
};

export default function Ethereum() {
  return (
    <DAppProvider config={config}>
    <ChakraProvider>
      <div className="flex flex-col h-screen overflow-auto justify-between scroll-smooth">
        <EthereumHeader />
        <EthereumGallery />
        <EthereumFooter />
      </div>
      </ChakraProvider>
    </DAppProvider>
  );
}