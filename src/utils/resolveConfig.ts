import path from 'path';

export const resolveConfig = (): void => {
  path.resolve(process.cwd(), 'config', 'default.json');
  path.resolve(process.cwd(), 'config/env', 'production.json');
};
