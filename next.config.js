/* eslint-disable @typescript-eslint/no-var-requires */
const { config: appConfig } = require('node-config-ts');
const { NodeConfigTSPlugin } = require('node-config-ts/webpack');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { logger } = require('./dist/server/logger');

if (!appConfig.applicationURL && !process.env.NEXTAUTH_URL) {
  throw new Error('Missing external application URL (config.applicationUrl)');
} else if (!process.env.NEXTAUTH_URL) {
  process.env.NEXTAUTH_URL = appConfig.applicationURL;
}

const { enabledLocales } = appConfig;
let defaultLocale = 'en';

if (enabledLocales.includes(appConfig.defaultLocale)) {
  defaultLocale = appConfig.defaultLocale;
}

logger.info(`Default locale: ${defaultLocale}`);
logger.info(`Enabled locales: ${enabledLocales}`);
logger.info(`Environment: ${process.env.NODE_ENV}`);

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
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
  },
};
