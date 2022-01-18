import type { NextApiRequest, NextApiResponse } from 'next';

import { isUserNotLoggedIn } from '@/features/auth/api/apiGuard';
import { getTrainerByName, setUserTrainerId } from '@/features/auth/api';
import { getSession } from 'next-auth/react';

export interface Response {
  error?: 'invalid_request' | 'trainer_not_found';
  message?: 'gg';
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: NextApiRequest, response: NextApiResponse<Response>): Promise<void> => {
  if (await isUserNotLoggedIn(request, response)) {
    return;
  }

  if (request.method !== 'POST') {
    response.status(400).json({ error: 'invalid_request' });
    response.end();

    return;
  }

  const { trainerName } = request.body;
  const trainer = await getTrainerByName(trainerName);

  if (!trainer || typeof trainer.trainer_id !== 'string') {
    response.status(404).json({ error: 'trainer_not_found' });
    response.end();

    return;
  }

  const session = await getSession({ req: request });
  if (!session?.userId || typeof session?.userId !== 'string') {
    response.status(400).json({ error: 'invalid_request' });
    response.end();

    return;
  }

  await setUserTrainerId(session.userId, trainer.trainer_id);
  session.trainerId = trainer.trainer_id;
  session.trainerName = trainer.name;

  response.status(200).json({ message: 'gg' });
};
