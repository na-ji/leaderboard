import Container from '@mui/material/Container';
import Head from 'next/head';
import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import useSWR from 'swr';
import { FormattedMessage, useIntl } from 'react-intl';

import { OverallLeaderboards } from '@/features/leaderboard';
import { PageTitle } from '@/components/PageTitle';
import { Trainer } from '@/types';
import { wrapStaticPropsWithLocale } from '@/utils/i18n';

interface HomeProps {
  initialTrainers: Trainer[];
}

const Home: NextPage<HomeProps> = ({ initialTrainers }) => {
  const intl = useIntl();
  const description = intl.formatMessage({
    defaultMessage: 'Pokémon Go Leaderboard',
    description: 'Index page meta description',
  });
  const title = intl.formatMessage({
    defaultMessage: 'Leaderboard',
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
      <PageTitle>
        <FormattedMessage defaultMessage="Leaderboard" description="Index page title" />
      </PageTitle>
      <Container maxWidth={false}>
        <Typography variant="h3" gutterBottom component="div">
          <FormattedMessage defaultMessage="Leaderboard" description="Index page title" />
        </Typography>
        {Array.isArray(trainers) && <OverallLeaderboards trainers={trainers} />}
      </Container>
    </>
  );
};

export const getStaticProps = wrapStaticPropsWithLocale<HomeProps>(async () => {
  const { getLeaderboard } = await import('@/features/leaderboard/api');
  const trainers = await getLeaderboard();

  return {
    props: { initialTrainers: trainers },
    // rebuild at most every 30 minutes
    revalidate: 1800,
  };
});

export default Home;
