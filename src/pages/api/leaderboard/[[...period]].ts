import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import {
  getOverallLeaderboard,
  getPeriodTrainers,
  periodIntervals,
  PeriodLeaderboard,
} from '@/features/leaderboard/api';
import { isUserNotLoggedIn } from '@/features/auth/api/apiGuard';
import { Trainer } from '@/types';
import { setCacheControlHeader } from '@/utils/apiCacheControl';

interface ApiError {
  code: number;
  message: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: NextApiRequest, response: NextApiResponse<Trainer[] | ApiError>): Promise<void> => {
  console.log(path.resolve(process.cwd(), 'config', 'default.json'));
  if (await isUserNotLoggedIn(request, response)) {
    return;
  }
  setCacheControlHeader(response);

  const { period } = request.query;
  let trainers;

  if (!Array.isArray(period) || !(period[0] in periodIntervals)) {
    trainers = await getOverallLeaderboard();
  } else {
    trainers = await getPeriodTrainers(period[0] as keyof PeriodLeaderboard);
  }

  response.status(200).json(trainers ?? []);
};
