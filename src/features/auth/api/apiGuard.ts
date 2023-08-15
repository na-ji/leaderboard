import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { config } from 'node-config-ts';

import { authOptions } from '@/pages/api/auth/[...nextauth]';

export const isUserNotLoggedIn = async (request: NextApiRequest, response: NextApiResponse): Promise<boolean> => {
  if (!config.enableAuth) {
    return false;
  }

  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    response.setHeader('Cache-Control', 'no-store, max-age=0');
    response.status(401).send('please log in :/');
    response.end();

    return true;
  }

  return false;
};
