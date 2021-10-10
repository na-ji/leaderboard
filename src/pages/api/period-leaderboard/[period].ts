import type { NextApiRequest, NextApiResponse } from 'next';

import { getPeriodTrainers, periodIntervals, PeriodLeaderboard } from '@/features/leaderboard/api';
import { isUserNotLoggedIn } from '@/features/auth/api/apiGuard';
import { PeriodTrainer } from '@/types';
import { setCacheControlHeader } from '@/utils/apiCacheControl';

interface ApiError {
  code: number;
  message: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  request: NextApiRequest,
  response: NextApiResponse<PeriodTrainer[] | ApiError>,
): Promise<void> => {
  if (await isUserNotLoggedIn(request, response)) {
    return;
  }
  setCacheControlHeader(response);

  const { period } = request.query;

  if (typeof period !== 'string' || !(period in periodIntervals)) {
    response.status(400).json({ code: 400, message: 'bad request' });
    return;
  }

  const periodTrainers = await getPeriodTrainers(period as keyof PeriodLeaderboard);

  response.status(200).json(periodTrainers ?? []);
};
