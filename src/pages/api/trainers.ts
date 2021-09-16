import type { NextApiRequest, NextApiResponse } from 'next';

import { getOverallLeaderboard } from '@/features/leaderboard/api';
import { Trainer } from '@/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Trainer[]>): Promise<void> => {
  const trainers = await getOverallLeaderboard();

  res.status(200).json(trainers);
};
