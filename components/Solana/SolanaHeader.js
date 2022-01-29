import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Logo from "../Logo";
import ThemeChanger from "../ThemeChanger";
import ScrollToTop from "../ScrollToTop";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

function SolanaHeader() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="sticky top-0 solana-bg">
      <div className="header">
        <button
          className="hamburger-menu"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Logo />
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full sm:inline-flex sm:w-auto pl-1`}
        >
          <div className="header-items-container">
            <Link href="https://www.keystone.codes">
              <a className="mt-2 sm:mt-0 header-button">
                <ChevronRightIcon className="anchor-chevron" />
                Home
              </a>
            </Link>
            <ChevronRightIcon className="header-chevron" />
            <Link href="/">
              <a className="header-button">
                <ChevronRightIcon className="anchor-chevron" />
                2NFT
              </a>
            </Link>
            <ChevronRightIcon className="header-chevron" />
            <h1 className="hidden sm:inline font-bold text-xl px-1 opacity-50">
              SOL
            </h1>
            <ScrollToTop />
          </div>
        </div>
        <div className="connect-button-container">
          <WalletMultiButton />
        </div>

        <ThemeChanger />
        </div>
    </header>
  );
}

export default SolanaHeader;