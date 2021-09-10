import type { NextApiRequest, NextApiResponse } from 'next';

import { getLeaderboard } from '@/features/leaderboard/api';
import { Trainer } from '@/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Trainer[]>): Promise<void> => {
  const trainers = await getLeaderboard();

  res.status(200).json(trainers);
};
