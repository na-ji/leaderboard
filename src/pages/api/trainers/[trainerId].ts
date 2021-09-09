import type { NextApiRequest, NextApiResponse } from 'next';

import { Trainer } from '@/types/model';
import { getTrainerProfile } from '@/features/profile/api';

interface ApiError {
  code: number;
  message: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse<Trainer | ApiError>): Promise<void> => {
  const { trainerId } = req.query;

  if (typeof trainerId !== 'string') {
    res.status(400).json({ code: 400, message: 'bad request' });
    return;
  }

  const trainer = await getTrainerProfile(trainerId);

  if (!trainer) {
    res.status(404).json({ code: 404, message: 'not found' });
    return;
  }

  res.status(200).json(trainer);
};
