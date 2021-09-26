import 'reflect-metadata';
import next from 'next';
import { config } from 'node-config-ts';
import { createServer } from 'http';

import { createTrainerHistoryTable } from './database';

const isDev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev: isDev });
const nextHandler = nextApp.getRequestHandler();
const port = config.port || parseInt(process.env.PORT ?? '3000');

async function bootstrap() {
  try {
    await Promise.all([nextApp.prepare(), createTrainerHistoryTable()]);

    createServer((request, response) => {
      nextHandler(request, response);
    }).listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

void bootstrap();
