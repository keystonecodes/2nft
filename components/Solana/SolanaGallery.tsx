import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useWalletNfts, NftTokenAccount } from "@nfteyez/sol-rayz-react";
import { Loader } from "./Loader";
import { NftCard } from "./NFTCard";

const walletPublicKey = "";

export default function SolanaGallery() {
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);

  const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: walletToParsePublicKey,
    sanitize: true,
  });

  console.log("nfts", nfts);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWalletToParsePublicKey(value.trim());
  };

  return (
    <div className="content-container solana-bg">
      <div className="flex flex-col">
      <div id="top" style={{scrollMarginTop: "200px"}}></div>
        <h1 className="flex font-bold text-2xl justify-center">
          Solana NFT Gallery
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
              placeholder="Solana Wallet Address"
              value={walletToParsePublicKey}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-10">
          {error ? (
            <div
              className={`flex flex-col justify-center items-center ${
                walletToParsePublicKey === "" && "hidden"
              }`}
            >
              <p className="text-3xl pb-4">🚫</p>
              <div>{(error as any)?.message}</div>
            </div>
          ) : null}

          {!error && isLoading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <NftList nfts={nfts} />
          )}
        </div>
      </div>
    </div>
  );
}

type NftListProps = {
  nfts: NftTokenAccount[];
};

const NftList = ({ nfts }: NftListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-16 gap-4 items-start">
      {nfts?.map((nft) => (
        <NftCard key={nft.mint} details={nft} onSelect={() => {}} />
      ))}
    </div>
  );
};
