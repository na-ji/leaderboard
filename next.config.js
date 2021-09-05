const { NodeConfigTSPlugin } = require('node-config-ts/webpack');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    return NodeConfigTSPlugin(config);
  },
  i18n: {
    locales: ['en-GB', 'fr'],
    defaultLocale: 'en-GB',
  },
};
