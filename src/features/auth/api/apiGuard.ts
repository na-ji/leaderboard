import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { config } from 'node-config-ts';

export const isUserNotLoggedIn = async (request: NextApiRequest, response: NextApiResponse): Promise<boolean> => {
  if (!config.enableAuth) {
    return false;
  }

  const session = await getSession({ req: request });

  if (!session) {
    response.setHeader('Cache-Control', 'no-store, max-age=0');
    response.status(401).send('please log in :/');
    response.end();

    return true;
  }

  return false;
};
