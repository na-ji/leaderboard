import {
  addFriendCodeToHistoryTable,
  addGen9ToHistoryTable,
  addRouteTeamAmbassadorBadgesToHistoryTable,
  createTrainerHistoryTable,
} from './database';

createTrainerHistoryTable()
  .then(addFriendCodeToHistoryTable)
  .then(addGen9ToHistoryTable)
  .then(addRouteTeamAmbassadorBadgesToHistoryTable)
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
