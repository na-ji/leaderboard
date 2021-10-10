/* eslint-disable @typescript-eslint/no-var-requires */
const { config } = require('node-config-ts');
const { NodeConfigTSPlugin } = require('node-config-ts/webpack');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const path = require('path');

const supportedLocales = ['en', 'fr'];
let defaultLocale = 'en';

if (supportedLocales.includes(config.defaultLocale)) {
  defaultLocale = config.defaultLocale;
}

console.log(`Default locale: ${defaultLocale}`);
console.log(`Environment: ${process.env.NODE_ENV}`);

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config) => {
    config.plugins.push(
      new StatsWriterPlugin({
        filename: 'stats.json',
        stats: {
          context: './src', // optional, will improve readability of the paths
          assets: true,
          entrypoints: true,
          chunks: true,
          modules: true,
        },
      }),
    );

    config.resolve.alias['@mui/styled-engine'] = path.join(__dirname, 'node_modules', '@mui/styled-engine-sc');

    return NodeConfigTSPlugin(config);
  },
  i18n: {
    locales: supportedLocales,
    defaultLocale,
  },
  env: {
    NEXTAUTH_URL: config.applicationURL,
  },
  experimental: {
    cpus: 1,
    workerThreads: 1,
  },
};
