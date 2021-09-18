import type { NextApiRequest, NextApiResponse } from 'next';

import { getOverallLeaderboard } from '@/features/leaderboard/api';
import { Trainer } from '@/types';
import { isUserNotLoggedIn } from '@/features/auth/api/apiGuard';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: NextApiRequest, response: NextApiResponse<Trainer[]>): Promise<void> => {
  if (await isUserNotLoggedIn(request, response)) {
    return;
  }

  const trainers = await getOverallLeaderboard();

  response.status(200).json(trainers);
};
