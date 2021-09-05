import Container from '@mui/material/Container';
import Head from 'next/head';
import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import { FormattedMessage, useIntl, RawIntlProvider } from 'react-intl';

import { Trainer } from '@/types/model';
import { Leaderboard } from '@/features/leaderboard';
import { wrapStaticPropsWithLocale } from '@/utils/i18n';

interface HomeProps {
  trainers: Trainer[];
}

const Home: NextPage<HomeProps> = ({ trainers }) => {
  const intl = useIntl();

  return (
    <>
      <Head>
        <RawIntlProvider value={intl}>
          <title>
            <FormattedMessage defaultMessage="Leaderboard" description="Index page title" />
          </title>
          <meta
            name="description"
            content={intl.formatMessage({
              defaultMessage: 'Pokémon Go Leaderboard',
              description: 'Index page meta description',
            })}
          />
        </RawIntlProvider>
      </Head>
      <Container maxWidth={false}>
        <Typography variant="h3" gutterBottom component="div">
          <FormattedMessage defaultMessage="Leaderboard" description="Index page title" />
        </Typography>
        <Leaderboard trainers={trainers} />
      </Container>
    </>
  );
};

export const getStaticProps = wrapStaticPropsWithLocale<HomeProps>(async () => {
  const { getLeaderboard } = await import('@/features/leaderboard/api');
  const trainers = await getLeaderboard();

  return {
    props: { trainers },
    // rebuild at most every 30 minutes
    revalidate: 1800,
  };
});

export default Home;
