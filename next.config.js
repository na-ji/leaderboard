/* eslint-disable @typescript-eslint/no-var-requires */
const { NodeConfigTSPlugin } = require('node-config-ts/webpack');
const { config } = require('node-config-ts');

const supportedLocales = ['en', 'fr'];
let defaultLocale = 'en';

if (supportedLocales.includes(config.defaultLocale)) {
  defaultLocale = config.defaultLocale;
}

console.log(`Default locale: ${defaultLocale}`);

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    return NodeConfigTSPlugin(config);
  },
  i18n: {
    locales: supportedLocales,
    defaultLocale,
  },
};
