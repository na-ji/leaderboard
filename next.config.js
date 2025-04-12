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
  output: undefined,
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
    localeDetection: false,
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
    // outputFileTracingIncludes: {
    //   '/': ['config/**/*.json', 'dist/**/*.js'],
    //   '/(day|week|month)': ['config/**/*.json', 'dist/**/*.js'],
    //   '/profile/**': ['config/**/*.json', 'dist/**/*.js'],
    //   '/api/**': [
    //     'node_modules/cron/package.json',
    //     'node_modules/cron/lib/*.js',
    //     'node_modules/luxon/package.json',
    //     'node_modules/luxon/build/node/luxon.js',
    //     'node_modules/tslog/package.json',
    //     'node_modules/tslog/dist/cjs/**/*.js',
    //     'node_modules/tslog/dist/esm/**/*.js',
    //     'node_modules/tslog/dist/browser/*.js',
    //     'node_modules/source-map-support/package.json',
    //     'node_modules/source-map-support/source-map-support.js',
    //     'node_modules/source-map/package.json',
    //     'node_modules/source-map/source-map.js',
    //     'node_modules/source-map/lib/*.js',
    //     'node_modules/buffer-from/package.json',
    //     'node_modules/buffer-from/index.js',
    //   ],
    // },
  },
};
