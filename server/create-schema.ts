import { addFriendCodeToHistoryTable, addGen9ToHistoryTable, createTrainerHistoryTable } from './database';

createTrainerHistoryTable()
  .then(addFriendCodeToHistoryTable)
  .then(addGen9ToHistoryTable)
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
