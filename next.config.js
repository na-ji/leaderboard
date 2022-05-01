/* eslint-disable @typescript-eslint/no-var-requires */
const { config: appConfig } = require('node-config-ts');
const { NodeConfigTSPlugin } = require('node-config-ts/webpack');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const { enabledLocales } = appConfig;
let defaultLocale = 'en';

if (enabledLocales.includes(appConfig.defaultLocale)) {
  defaultLocale = appConfig.defaultLocale;
}

console.log(`Default locale: ${defaultLocale}`);
console.log(`Enabled locales: ${enabledLocales}`);
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

    return NodeConfigTSPlugin(config);
  },
  i18n: {
    locales: enabledLocales,
    defaultLocale,
  },
  async redirects() {
    return [
      {
        source: '/leaderboard/day',
        destination: '/day',
        permanent: true,
      },
      {
        source: '/leaderboard/week',
        destination: '/week',
        permanent: true,
      },
      {
        source: '/leaderboard/month',
        destination: '/month',
        permanent: true,
      },
    ];
  },
  experimental: {
    cpus: 1,
    workerThreads: 1,
  },
  swcMinify: true,
};
