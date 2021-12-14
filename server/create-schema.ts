import { createTrainerHistoryTable } from './database';

createTrainerHistoryTable()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
