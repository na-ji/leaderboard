import type { NextApiRequest, NextApiResponse } from 'next';

import {
  getGlobalPlayerStats,
  getOverallLeaderboard,
  getPeriodTrainers,
  periodIntervals,
  PeriodLeaderboard,
} from '@/features/leaderboard/api';
import { isUserNotLoggedIn } from '@/features/auth/api/apiGuard';
import { GlobalStats, Trainer } from '@/types';
import { setCacheControlHeader } from '@/utils/apiCacheControl';
import { resolveConfig } from '@/utils/resolveConfig';

interface ApiError {
  code: number;
  message: string;
}

interface Response {
  trainers: Trainer[];
  globalStats: GlobalStats;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: NextApiRequest, response: NextApiResponse<Response | ApiError>): Promise<void> => {
  resolveConfig();
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

  const globalStats = await getGlobalPlayerStats();

  response.status(200).json({ trainers: trainers ?? [], globalStats });
};
