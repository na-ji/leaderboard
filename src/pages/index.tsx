import Head from 'next/head';
import type { NextPage } from 'next';
import useSWR from 'swr';
import { useIntl } from 'react-intl';

import { OverallLeaderboards } from '@/features/leaderboard';
import { Trainer } from '@/types';
import { wrapStaticPropsWithLocale } from '@/utils/i18n';

interface HomeProps {
  initialTrainers: Trainer[];
}

const Home: NextPage<HomeProps> = ({ initialTrainers }) => {
  const intl = useIntl();
  const description = intl.formatMessage({
    defaultMessage: 'Pokémon Go Leaderboard',
    id: 'app.description',
    description: 'Index page meta description',
  });
  const title = intl.formatMessage({
    defaultMessage: 'General leaderboard',
    id: 'index.title',
    description: 'Index page title',
  });
  const { data: trainers } = useSWR<Trainer[]>('/api/trainers', { fallbackData: initialTrainers });

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />
        <link key="preload" rel="preload" href="/api/trainers" as="fetch" crossOrigin="anonymous" />
      </Head>
      <h1 className="title-1 mt-2.5 lg:mt-0.5 mb-4 lg:mb-7.5">{title}</h1>
      {Array.isArray(trainers) && <OverallLeaderboards trainers={trainers} />}
    </>
  );
};

export const getStaticProps = wrapStaticPropsWithLocale<HomeProps>(async () => {
  const { getOverallLeaderboard } = await import('@/features/leaderboard/api');
  const trainers = await getOverallLeaderboard();

  return {
    props: { initialTrainers: trainers },
    // rebuild at most every 30 minutes
    revalidate: 1800,
  };
});

export default Home;
