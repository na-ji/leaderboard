import { job } from 'cron';

import { createTrainerHistoryTable, updateTrainerHistory } from './database';
import { logger } from './logger';

// update leaderboard every day at 23:58
logger.info(`Current timezone used for the cron: "${Intl.DateTimeFormat().resolvedOptions().timeZone}"`);
job(
  '0 58 23 * * *',
  () => {
    void updateTrainerHistory();
  },
  null,
  true,
  Intl.DateTimeFormat().resolvedOptions().timeZone,
);

async function bootstrap() {
  try {
    await createTrainerHistoryTable();
  } catch (err) {
    logger.fatal(err);
  }
}

void bootstrap();
