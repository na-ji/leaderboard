import { Trainer } from '@/types';

import { Leaderboard } from '@/features/leaderboard/components/Leaderboard';
import { generalLeaderboardColumns } from '@/features/leaderboard/components/columnDefinitions';

export const OverallLeaderboards = ({ trainers }: { trainers: Trainer[] }): JSX.Element => {
  return (
    <>
      <Leaderboard trainers={trainers} columns={generalLeaderboardColumns} />
    </>
  );
};
