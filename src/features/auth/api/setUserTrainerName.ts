import type { ResultSetHeader } from 'mysql2';

import { pool } from '@/database';

export const setUserTrainerName = async (userId: string, trainerName: string): Promise<boolean> => {
  const [resultSetHeader] = await pool.execute('UPDATE `pogo_leaderboard_users` SET `trainerName` = ? WHERE id = ?;', [
    trainerName,
    userId,
  ]);

  return (resultSetHeader as ResultSetHeader).affectedRows === 1;
};
