import { NextApiResponse } from 'next';

export const setCacheControlHeader = (response: NextApiResponse): void => {
  response.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
};
