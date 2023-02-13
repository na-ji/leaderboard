import { pool } from '@/database';
import { Trainer } from '@/types';

export const getTrainerProfile = async (trainerId: string): Promise<Trainer | undefined> => {
  const [rows] = await pool.execute('SELECT * FROM `player` WHERE `friendship_id` = ? ORDER BY `xp` DESC;', [
    trainerId,
  ]);

  const result = rows as unknown as Trainer[];

  if (result.length === 0) {
    return undefined;
  }

  return result[0];
};
