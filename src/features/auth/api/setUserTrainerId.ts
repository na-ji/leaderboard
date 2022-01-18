import type { ResultSetHeader } from 'mysql2';

import { pool } from '@/database';

export const setUserTrainerId = async (userId: string, trainerId: string): Promise<boolean> => {
  const [resultSetHeader] = await pool.execute('UPDATE `pogo_leaderboard_users` SET `trainerId` = ? WHERE id = ?;', [
    trainerId,
    userId,
  ]);

  return (resultSetHeader as ResultSetHeader).affectedRows === 1;
};
