import Container from '@mui/material/Container';
import Head from 'next/head';
import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import useSWR from 'swr';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import { GetStaticPaths, GetStaticPathsResult } from 'next';

import { OverallLeaderboards } from '@/features/leaderboard';
import { PageTitle } from '@/components/PageTitle';
import { SupportedLocale, wrapStaticPropsWithLocale } from '@/utils/i18n';
import type { PeriodLeaderboard } from '@/features/leaderboard/api';
import { PeriodTrainer } from '@/types';

interface PeriodLeaderboardProps {
  initialTrainers?: PeriodTrainer[];
  period: keyof PeriodLeaderboard;
}

const periodTranslations = defineMessages({
  lastDay: {
    id: 'period_leaderboard.last_day',
    defaultMessage: "Today's",
    description: 'Last day period',
  },
  lastWeek: {
    id: 'period_leaderboard.last_week',
    defaultMessage: "Last week's",
    description: 'Last day period',
  },
  lastMonth: {
    id: 'period_leaderboard.last_month',
    defaultMessage: "Last month's",
    description: 'Last day period',
  },
});

const PeriodLeaderboardPage: NextPage<PeriodLeaderboardProps> = ({ initialTrainers, period }) => {
  const intl = useIntl();
  const description = intl.formatMessage({
    defaultMessage: 'Pokémon Go Leaderboard',
    id: 'app.description',
    description: 'Index page meta description',
  });
  const title = intl.formatMessage(
    {
      defaultMessage: '{period} leaderboard',
      id: 'period_leaderboard.title',
      description: 'Period leaderboard title',
    },
    {
      period: intl.formatMessage(periodTranslations[period]),
    },
  );
  const { data: trainers } = useSWR<PeriodTrainer[]>(`/api/period-leaderboard/${period}`, {
    fallbackData: initialTrainers,
  });

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />
        <link
          key="preload"
          rel="preload"
          href={`/api/period-leaderboard/${period}`}
          as="fetch"
          crossOrigin="anonymous"
        />
      </Head>
      <PageTitle>{title}</PageTitle>
      <Container maxWidth={false}>
        <Typography variant="h3">{title}</Typography>
        {!(Array.isArray(trainers) && trainers.length > 0) && (
          <Typography variant="subtitle1">
            <FormattedMessage
              defaultMessage="No data :("
              id="period_leaderboard.no_data"
              description="Error message when leaderboard is not available"
            />
          </Typography>
        )}
        {Array.isArray(trainers) && trainers.length > 0 && <OverallLeaderboards trainers={trainers} />}
      </Container>
    </>
  );
};

enum Paths {
  'day' = 'lastDay',
  'week' = 'lastWeek',
  'month' = 'lastMonth',
}

export const getStaticProps = wrapStaticPropsWithLocale<PeriodLeaderboardProps, { period: keyof typeof Paths }>(
  async ({ params }) => {
    if (!params) {
      return { notFound: true };
    }

    const { getPeriodTrainers } = await import('@/features/leaderboard/api');
    const period = Paths[params.period];
    const periodLeaderboard = await getPeriodTrainers(period);

    return {
      props: {
        initialTrainers: periodLeaderboard ?? [],
        period: period,
      },
      // rebuild at most every 30 minutes
      revalidate: 1800,
    };
  },
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(Paths).reduce<GetStaticPathsResult['paths']>((paths, path) => {
      Object.values(SupportedLocale).forEach((locale) => {
        paths.push({ params: { period: path }, locale });
      });

      return paths;
    }, []),
    fallback: false,
  };
};

export default PeriodLeaderboardPage;
