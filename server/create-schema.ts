import { addFriendCodeToHistoryTable, addGen9ToHistoryTable, addNewBadgesToHistoryTable, createTrainerHistoryTable } from './database';

createTrainerHistoryTable()
  .then(addFriendCodeToHistoryTable)
  .then(addGen9ToHistoryTable)
  .then(addNewBadgesToHistoryTable)
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
