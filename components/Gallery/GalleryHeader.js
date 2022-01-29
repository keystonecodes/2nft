import React, { useState } from "react";
import Logo from "../Logo";
import ThemeChanger from "../ThemeChanger";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";

function GalleryHeader() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="header-container">
      <div className="header">
        <button className="hamburger-menu" onClick={handleClick}>
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
          }   w-full sm:inline-flex sm:w-auto pl-4`}
        >
          <div className="header-items-container">
          <Link href="https://www.keystone.codes">
              <a className="header-button">
                <ChevronRightIcon className="anchor-chevron" />
                Home
              </a>
            </Link>
            <ChevronRightIcon className="header-chevron" />
            <h1 className="hidden sm:inline font-bold text-xl px-3 opacity-50">
              2NFT
            </h1>
          </div>
        </div>

        <ThemeChanger />
      </div>
    </header>
  );
}

export default GalleryHeader;
