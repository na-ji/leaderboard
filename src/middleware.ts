import { withAuth } from 'next-auth/middleware';
import { config as projectConfig } from 'node-config-ts';

const passthroughMiddleware = function () {
  // do nothing
};

export const middleware = projectConfig.enableAuth
  ? withAuth({
      secret: projectConfig.secret,
    })
  : passthroughMiddleware;
