import { config as appConfig } from 'node-config-ts';
import { NodeConfigTSPlugin } from 'node-config-ts/webpack.js';
import { StatsWriterPlugin } from 'webpack-stats-plugin';
import { logger } from './dist/server/logger.js';

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
// eslint-disable-next-line import/no-anonymous-default-export
export default {
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
