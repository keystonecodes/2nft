import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import SolanaFooter from "../../components/Solana/SolanaFooter";
import SolanaHeader from "../../components/Solana/SolanaHeader";
import SolanaGallery from "../../components/Solana/SolanaGallery";

const SOLANA_NETWORK = WalletAdapterNetwork.Mainnet;
// const SOLANA_NETWORK = WalletAdapterNetwork.Devnet;
const network = SOLANA_NETWORK;

const WalletProvider = dynamic(
  () => import("../../contexts/ClientWalletProvider"),
  {
    ssr: false,
  }
);

export default function Solana() {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider>
        <div className="flex flex-col h-screen overflow-auto justify-between scroll-smooth">
          <SolanaHeader />
          <SolanaGallery />
          <SolanaFooter />
        </div>
      </WalletProvider>
    </ConnectionProvider>
  );
}