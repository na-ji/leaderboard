import Container from '@mui/material/Container';
import Head from 'next/head';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import { Trainer } from '@/types/model';
import { Profile } from '@/features/profile';

interface ProfileProps {
  trainer?: Trainer;
}

const ProfilePage: NextPage<ProfileProps> = ({ trainer }) => {
  return (
    <>
      {trainer && (
        <>
          <Head>
            <title>{trainer.name}&apos;s Profile</title>
            <meta name="description" content={`${trainer.name}'s Profile`} />
          </Head>
          <Container maxWidth={false}>
            <Profile trainer={trainer} />
          </Container>
        </>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<ProfileProps, { trainer_id: string }> = async ({ params }) => {
  if (!params) {
    return { notFound: true };
  }

  const { getTrainerProfile } = await import('@/features/profile/api');
  const trainer = await getTrainerProfile(params.trainer_id);

  if (!trainer) {
    return { notFound: true };
  }

  return {
    props: { trainer },
    // rebuild at most every 30 minutes
    revalidate: 1800,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { getLeaderboard } = await import('@/features/leaderboard/api');
  const trainers = await getLeaderboard();

  return {
    paths: trainers.slice(0, 100).map((trainer) => ({ params: { trainer_id: trainer.trainer_id } })),
    fallback: true,
  };
};

export default ProfilePage;
