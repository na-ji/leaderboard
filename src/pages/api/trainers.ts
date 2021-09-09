import type { NextApiRequest, NextApiResponse } from 'next';

import { Trainer } from '@/types/model';
import { getLeaderboard } from '@/features/leaderboard/api';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Trainer[]>): Promise<void> => {
  const trainers = await getLeaderboard();

  res.status(200).json(trainers);
};
