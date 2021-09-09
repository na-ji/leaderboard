export const fetcher = async <JSON = unknown>(input: RequestInfo, init?: RequestInit): Promise<JSON> => {
  const res = await fetch(input, init);
  return res.json();
};
