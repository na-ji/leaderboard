import { migrateTrainerHistoryToGolbat } from './database';

migrateTrainerHistoryToGolbat()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
