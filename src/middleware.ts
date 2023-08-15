import { config as projectConfig } from 'node-config-ts';
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

const passthroughMiddleware = function () {
  return NextResponse.next();
};

export const middleware = projectConfig.enableAuth
  ? withAuth({
      secret: projectConfig.secret,
    })
  : passthroughMiddleware;

export const config = {
  matcher: '/((?!api|_next/static|_next/image|badges|fonts|avatars|favicon.ico).*)',
};
