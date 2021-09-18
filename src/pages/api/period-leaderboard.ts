import type { NextApiRequest, NextApiResponse } from 'next';

import { getPeriodLeaderboard, PeriodLeaderboard } from '@/features/leaderboard/api';
import { isUserNotLoggedIn } from '@/features/auth/api/apiGuard';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: NextApiRequest, response: NextApiResponse<PeriodLeaderboard>): Promise<void> => {
  if (await isUserNotLoggedIn(request, response)) {
    return;
  }

  const periodLeaderboard = await getPeriodLeaderboard();

  response.status(200).json(periodLeaderboard);
};
