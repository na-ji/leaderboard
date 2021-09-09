import Container from '@mui/material/Container';
import Head from 'next/head';
import type { NextPage, GetStaticPaths, GetStaticPathsResult } from 'next';
import useSWR from 'swr';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

import { Trainer } from '@/types/model';
import { Profile } from '@/features/profile';
import { SupportedLocale, wrapStaticPropsWithLocale } from '@/utils/i18n';

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
  const { trainer_id } = useRouter().query;

  const { data: trainer } = useSWR<Trainer>(`/api/trainers/${trainer_id}`, { fallbackData: initialTrainer });

  return (
    <>
      {trainer && (
        <>
          <Head>
            <title key="title">{title}</title>
            <meta key="description" name="description" content={title} />
            <link key="preload" rel="preload" href={`/api/trainers/${trainer_id}`} as="fetch" crossOrigin="anonymous" />
          </Head>
          <Container maxWidth={false}>
            <Profile trainer={trainer} />
          </Container>
        </>
      )}
    </>
  );
};

export const getStaticProps = wrapStaticPropsWithLocale<ProfileProps, { trainer_id: string }>(async ({ params }) => {
  if (!params) {
    return { notFound: true };
  }

  const { getTrainerProfile } = await import('@/features/profile/api');
  const trainer = await getTrainerProfile(params.trainer_id);

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
  const { getLeaderboard } = await import('@/features/leaderboard/api');
  const trainers = await getLeaderboard();

  return {
    paths: trainers.slice(0, 100).reduce<GetStaticPathsResult['paths']>((paths, trainer) => {
      Object.values(SupportedLocale).forEach((locale) => {
        paths.push({ params: { trainer_id: trainer.trainer_id }, locale });
      });

      return paths;
    }, []),
    fallback: true,
  };
};

export default ProfilePage;
