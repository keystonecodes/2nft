import {
    Box,
    Button,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
  } from '@chakra-ui/react'
  import { useEthers } from '@usedapp/core'
  import React from 'react'
  import { useTheme } from "next-themes";
  import ENSAddress from './ENSAddress'
  
  
  function ConnectWallet(): JSX.Element {
    const { activate, activateBrowserWallet } = useEthers()
    const { onOpen, isOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Box
          order={[-1, null, null, 2]}
          textAlign={['left', null, null, 'right']}
        >
          <Button colorScheme="black" variant="outline" onClick={onOpen}>
            Select Wallet
          </Button>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="black" >Connect Wallet</ModalHeader>
            <ModalCloseButton color="black" />
            <ModalBody>
  
              <Button
                justifyContent="space-between"
                width="100%"
                mb="4"
                color="black"
                size="lg"
                variant="outline"
                rightIcon={
                  <Image
                    maxWidth="20px"
                    src="/images/logo-metamask.png"
                    alt="MetaMask"
                  />
                }
                onClick={() => {
                  activateBrowserWallet()
                }}
              >
                MetaMask
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  
  export default ConnectWallet