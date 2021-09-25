import Container from '@mui/material/Container';
import Head from 'next/head';
import type { NextPage, GetStaticPaths, GetStaticPathsResult } from 'next';
import useSWR from 'swr';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

import { Profile } from '@/features/profile';
import { SupportedLocale, wrapStaticPropsWithLocale } from '@/utils/i18n';
import { Trainer } from '@/types';
import { PageTitle } from '@/components/PageTitle';
import { config } from 'node-config-ts';

interface ProfileProps {
  initialTrainer?: Trainer;
}

const ProfilePage: NextPage<ProfileProps> = ({ initialTrainer }) => {
  const intl = useIntl();
  const title = initialTrainer
    ? intl.formatMessage(
        {
          defaultMessage: "{name}'s Profile",
          description: 'Profile page title',
        },
        { name: initialTrainer.name },
      )
    : '';
  const { trainerId } = useRouter().query;

  const { data: trainer } = useSWR<Trainer>(`/api/trainers/${encodeURIComponent(trainerId as string)}`, {
    fallbackData: initialTrainer,
  });

  return (
    <>
      {trainer && (
        <>
          <Head>
            <title key="title">{title}</title>
            <meta key="description" name="description" content={title} />
            <link
              key="preload"
              rel="preload"
              href={`/api/trainers/${encodeURIComponent(trainerId as string)}`}
              as="fetch"
              crossOrigin="anonymous"
            />
          </Head>
          <PageTitle>{title}</PageTitle>
          <Container maxWidth={false}>
            <Profile trainer={trainer} />
          </Container>
        </>
      )}
    </>
  );
};

export const getStaticProps = wrapStaticPropsWithLocale<ProfileProps, { trainerId: string }>(async ({ params }) => {
  if (!params) {
    return { notFound: true };
  }

  const { getTrainerProfile } = await import('@/features/profile/api');
  const trainer = await getTrainerProfile(params.trainerId);

  if (!trainer) {
    return { notFound: true };
  }

  return {
    props: { initialTrainer: trainer },
    // rebuild at most every 30 minutes
    revalidate: 1800,
  };
});

export const getStaticPaths: GetStaticPaths = async () => {
  const { getOverallLeaderboard } = await import('@/features/leaderboard/api');
  const trainers = await getOverallLeaderboard();

  return {
    paths: trainers
      .slice(0, config.numberOfTrainerProfileToPrebuild ?? 30)
      .reduce<GetStaticPathsResult['paths']>((paths, trainer) => {
        Object.values(SupportedLocale).forEach((locale) => {
          paths.push({ params: { trainerId: trainer.trainer_id }, locale });
        });

        return paths;
      }, []),
    fallback: true,
  };
};

export default ProfilePage;
