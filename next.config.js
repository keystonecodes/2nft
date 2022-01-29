/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

/** eslint-disable @typescript-eslint/no-var-requires */
const withTM = require("next-transpile-modules")([
  "@solana/wallet-adapter-base",
  // Uncomment wallets you want to use
  // "@solana/wallet-adapter-bitpie",
  // "@solana/wallet-adapter-coin98",
  // "@solana/wallet-adapter-ledger",
  // "@solana/wallet-adapter-mathwallet",
  "@solana/wallet-adapter-phantom",
  "@solana/wallet-adapter-react",
  "@solana/wallet-adapter-solflare",
  "@solana/wallet-adapter-sollet",
  // "@solana/wallet-adapter-solong",
  // "@solana/wallet-adapter-torus",
  "@solana/wallet-adapter-wallets",
  // "@project-serum/sol-wallet-adapter",
  // "@solana/wallet-adapter-ant-design",
]);

// add this if you need LESS
// also install less and less-loader
// const withLess = require("next-with-less");

const plugins = [
  // add this if you need LESS
  // [withLess, {
  //   lessLoaderOptions: {
  //     /* ... */
  //   },
  // }],
  [
    withTM,
    {
      webpack5: true,
      reactStrictMode: true,
    },
  ],
];

const nextConfig = {
  distDir: ".next",
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      // FIX this
      // Disable minimize to make it work with Candy Machine template
      // minimization brakes Public Key names
      config.optimization.minimize = false;
    }
    return config;
  },
};

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
};

module.exports = withPlugins(plugins, nextConfig, allowCors);
