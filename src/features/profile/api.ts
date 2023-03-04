import { pool } from '@/database';
import { Trainer } from '@/types';

export const getTrainerProfile = async (trainerName: string): Promise<Trainer | undefined> => {
  const [rows] = await pool.execute('SELECT * FROM `player` WHERE `name` = ? ORDER BY `xp` DESC;', [trainerName]);

  const result = rows as unknown as Trainer[];

  if (result.length === 0) {
    return undefined;
  }

  return result[0];
};
