import Head from 'next/head';
import type { NextPage, GetStaticPaths, GetStaticPathsResult } from 'next';
import useSWR from 'swr';
import { config as appConfig } from 'node-config-ts';
import { useIntl } from 'react-intl';

import { Profile } from '@/features/profile';
import { wrapStaticPropsWithLocale } from '@/utils/i18n';
import { Trainer } from '@/types';

interface ProfileProps {
  initialTrainer?: Trainer;
  trainerName: string;
}

const ProfilePage: NextPage<ProfileProps> = ({ initialTrainer, trainerName }) => {
  const intl = useIntl();
  const title = initialTrainer
    ? intl.formatMessage(
        {
          defaultMessage: "{name}'s Profile",
          id: 'profile.title',
          description: 'Profile page title',
        },
        { name: initialTrainer.name },
      )
    : '';

  const { data: trainer } = useSWR<Trainer>(trainerName ? `/api/trainers/${encodeURIComponent(trainerName)}` : null, {
    fallbackData: initialTrainer,
  });

  return (
    <>
      {trainer && trainerName && (
        <>
          <Head>
            <title key="title">{title}</title>
            <meta key="description" name="description" content={title} />
            <link
              key="preload"
              rel="preload"
              href={`/api/trainers/${encodeURIComponent(trainerName)}`}
              as="fetch"
              crossOrigin="anonymous"
            />
          </Head>
          <Profile trainer={trainer} />
        </>
      )}
    </>
  );
};

export const getStaticProps = wrapStaticPropsWithLocale<ProfileProps, { trainerName: string }>(async ({ params }) => {
  if (!params || !params.trainerName) {
    return { notFound: true };
  }

  const { getTrainerProfile } = await import('@/features/profile/api');
  const trainer = await getTrainerProfile(params.trainerName);

  if (!trainer) {
    return { notFound: true };
  }

  return {
    props: { initialTrainer: trainer, trainerName: params.trainerName },
    // rebuild at most every 30 minutes
    revalidate: 1800,
  };
});

export const getStaticPaths: GetStaticPaths = async () => {
  const { getOverallLeaderboard } = await import('@/features/leaderboard/api');
  const trainers = await getOverallLeaderboard();

  return {
    paths: trainers
      .slice(0, appConfig.numberOfTrainerProfileToPrebuild ?? 30)
      .reduce<GetStaticPathsResult['paths']>((paths, trainer) => {
        appConfig.enabledLocales.forEach((locale) => {
          paths.push({ params: { trainerName: trainer.name.toLowerCase() }, locale });
        });

        return paths;
      }, []),
    fallback: true,
  };
};

export default ProfilePage;

export const config = {
  unstable_includeFiles: ['config/**/*.json'],
};
