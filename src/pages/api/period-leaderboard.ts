import type { NextApiRequest, NextApiResponse } from 'next';

import { getPeriodLeaderboard, PeriodLeaderboard } from '@/features/leaderboard/api';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<PeriodLeaderboard>): Promise<void> => {
  const periodLeaderboard = await getPeriodLeaderboard();

  res.status(200).json(periodLeaderboard);
};
