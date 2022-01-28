import { useRouter } from "next/router";
import EthereumLogo from "../Ethereum/EthereumLogo";
import SolanaLogo from "../Solana/SolanaLogo";
import Link from "next/link";

function GalleryHome() {
  const router = useRouter();
  return (
    <div className="content-container">
      <div className="flex flex-col">
        <h1 className="flex font-bold px-4 py-2 text-2xl justify-center text-center">
          Welcome to 2NFT
        </h1>
        <h2 className="flex text-l justify-center mb-10">
          Choose a Blockchain to begin!
        </h2>
        <div className="blockchain-container">
          <Link href="/solana" passHref>
            <div className="solana-card group">
              <SolanaLogo />
              <div className="blockchain-link">
                <a className="blockchain-text group-hover:bg-[#9945ff] dark:group-hover:bg-[#14f195] group-hover:text-white group-trans-button">
                  Solana
                </a>
              </div>
            </div>
          </Link>
          <Link href="/ethereum" passHref>
            <div className="ethereum-card group">
              <EthereumLogo />
              <div className="blockchain-link mt-[32px]">
                <a className="blockchain-text group-hover:bg-[#1d2434] dark:group-hover:bg-[#f4f7fa] group-hover:text-white dark:group-hover:text-[#1d2434] group-trans-button">
                  Ethereum
                </a>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GalleryHome;
