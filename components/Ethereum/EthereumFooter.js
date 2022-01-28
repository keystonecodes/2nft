function EthereumFooter() {
    return (
      <footer className="footer">
        <div className="footer-text flex-col">
          <h1 className="pb-4">© 2022 Keystone Codes</h1>
          <h1 className="text-center">
            Uses{" "}
            <a
              href="https://www.npmjs.com/package/react-nft-gallery"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              react-nft-gallery
            </a>{" "}
            package to fetch NFTs for a specific wallet
          </h1>
        </div>
      </footer>
    );
  }
  
  export default EthereumFooter;