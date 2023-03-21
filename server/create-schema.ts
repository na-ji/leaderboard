import { addFriendCodeToHistoryTable, createTrainerHistoryTable } from './database';

createTrainerHistoryTable()
  .then(addFriendCodeToHistoryTable)
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
