import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import ThemeChanger from "../ThemeChanger";
import ScrollToTop from "../ScrollToTop";
import Link from "next/link";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEthers, useNotifications } from "@usedapp/core";
import Copy from "./Copy";
import Logo from "../Logo";
import ConnectWallet from "./ConnectWallet";

function truncateHash(hash, string, length = 38) {
  return hash.replace(hash.substring(4, length), "..");
}

function EthereumHeader() {
  const { account, deactivate } = useEthers();

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="header-container">
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
            <Link href="/">
              <a className="header-button">
                <ChevronRightIcon className="anchor-chevron" />
                2NFT
              </a>
            </Link>
            <ChevronRightIcon className="hidden sm:inline w-7 h-7 opacity-50" />
            <h1 className="hidden sm:inline font-bold text-xl px-1 opacity-50">
              ETH
            </h1>
            <ScrollToTop />
          </div>
        </div>
        <div className="absolute right-[85px] top-0 mt-4">
          <Container maxWidth="container.xl">
            {account ? (
              <Flex justifyContent={["flex-start", null, null, "flex-end"]}>
                <Menu placement="bottom-end">
                  <MenuButton
                    as={Button}
                    ml="4"
                    width="161px"
                    height="47px"
                    colorScheme=""
                    variant="outline"
                  >
                    <Image
                      width="20px"
                      marginBottom="-17px"
                      marginLeft="5px"
                      src="/images/logo-metamask.png"
                      alt="MetaMask"
                    />
                    <Box marginLeft="33px">{truncateHash(account)}</Box>
                  </MenuButton>

                  <MenuList>
                    <MenuItem color="black">
                      <Copy toCopy={account}>Copy address</Copy>
                    </MenuItem>
                    <MenuItem color="black" onClick={deactivate}>
                      Disconnect
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            ) : (
              <ConnectWallet />
            )}
          </Container>
        </div>
        <ThemeChanger />
      </div>
    </header>
  );
}

export default EthereumHeader;