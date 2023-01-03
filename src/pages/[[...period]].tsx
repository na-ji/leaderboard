import Head from 'next/head';
import type { NextPage } from 'next';
import useSWR from 'swr';
import { config as appConfig } from 'node-config-ts';
import { GetStaticPaths, GetStaticPathsResult } from 'next';
import { useIntl } from 'react-intl';

import { OverallLeaderboards } from '@/features/leaderboard';
import { GlobalStats as GlobalStatsInterface, Trainer } from '@/types';
import { wrapStaticPropsWithLocale } from '@/utils/i18n';
import type { PeriodLeaderboard } from '@/features/leaderboard/api';
import { GlobalStats } from '@/features/leaderboard/components/GlobalStats';

interface HomeProps {
  initialGlobalStats: GlobalStatsInterface;
  initialTrainers: Trainer[];
  period: keyof PeriodLeaderboard | null;
}

enum Paths {
  'day' = 'lastDay',
  'week' = 'lastWeek',
  'month' = 'lastMonth',
}

const paths = Object.keys(Paths).concat('');

const Home: NextPage<HomeProps> = ({ initialTrainers, period, initialGlobalStats }) => {
  const intl = useIntl();
  const description = intl.formatMessage({
    defaultMessage: 'Pokémon Go Leaderboard',
    id: 'app.description',
    description: 'Index page meta description',
  });
  const title = intl.formatMessage({
    defaultMessage: 'Leaderboard',
    id: 'index.title',
    description: 'Index page title',
  });
  const { data: response } = useSWR<{
    trainers: Trainer[];
    globalStats: GlobalStatsInterface;
  }>(`/api/leaderboard${period ? '/' + period : ''}`, {
    fallbackData: { trainers: initialTrainers, globalStats: initialGlobalStats },
  });
  const { trainers, globalStats } = response || {};

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />
        <link
          key="preload"
          rel="preload"
          href={`/api/leaderboard${period ? '/' + period : ''}`}
          as="fetch"
          crossOrigin="anonymous"
        />
      </Head>
      <h1 className="title-1 mt-2.5 lg:mt-0.5 mb-4 lg:mb-7.5">{title}</h1>
      {globalStats && <GlobalStats globalStats={globalStats} />}
      {Array.isArray(trainers) && <OverallLeaderboards trainers={trainers} />}
    </>
  );
};

export const getStaticProps = wrapStaticPropsWithLocale<HomeProps, { period?: ['day'] | ['week'] | ['month'] }>(
  async ({ params }) => {
    let trainers,
      period = null;

    if (params && Array.isArray(params?.period) && paths.includes(params?.period[0])) {
      const { getPeriodTrainers } = await import('@/features/leaderboard/api');
      period = Paths[params.period[0]];
      trainers = await getPeriodTrainers(period);
    } else {
      const { getOverallLeaderboard } = await import('@/features/leaderboard/api');
      trainers = await getOverallLeaderboard();
    }

    const { getGlobalPlayerStats } = await import('@/features/leaderboard/api');
    const globalStats = await getGlobalPlayerStats();

    return {
      props: { initialTrainers: trainers, period, initialGlobalStats: globalStats },
      // rebuild at most every 30 minutes
      revalidate: 1800,
    };
  },
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: paths.reduce<GetStaticPathsResult['paths']>((paths, path) => {
      appConfig.enabledLocales.forEach((locale) => {
        paths.push({ params: { period: path === '' ? [] : [path] }, locale });
      });

      return paths;
    }, []),
    fallback: false,
  };
};

export default Home;

export const config = {
  unstable_includeFiles: [
    'config/**/*.json',
    'dist/**/*.js',
    'node_modules/next/dist/**/*.js*',
    'node_modules/next/dist/server/next.js',
    'node_modules/next/dist/server/next.js',
    'node_modules/next/dist/server/config*.js',
    'node_modules/next/dist/telemetry/ci-info.js',
    'node_modules/next/dist/compiled/find-up/index.js',
    'node_modules/next/dist/compiled/p-limit/index.js',
    'node_modules/next/dist/compiled/webpack/*.js*',
    'node_modules/next/dist/compiled/webpack-sources3/index.js',
    'node_modules/next/dist/compiled/neo-async/package.json',
    'node_modules/next/dist/compiled/neo-async/async.js',
    'node_modules/next/dist/compiled/acorn/acorn.js',
    'node_modules/next/dist/compiled/acorn/package.json',
    'node_modules/next/dist/compiled/ci-info/index.js',
    'node_modules/next/dist/compiled/ @babel/runtime/package.json',
    'node_modules/next/dist/compiled/node-fetch/index.js',
    'node_modules/cron/package.json',
    'node_modules/cron/lib/*.js',
    'node_modules/luxon/package.json',
    'node_modules/luxon/build/node/luxon.js',
    'node_modules/tslog/package.json',
    'node_modules/tslog/dist/cjs/*.js',
    'node_modules/source-map-support/package.json',
    'node_modules/source-map-support/source-map-support.js',
    'node_modules/source-map/package.json',
    'node_modules/source-map/source-map.js',
    'node_modules/source-map/lib/*.js',
    'node_modules/buffer-from/package.json',
    'node_modules/buffer-from/index.js',
  ],
};
