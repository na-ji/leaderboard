import { pool } from '@/database';
import { Trainer } from '@/types';

export const getTrainerByName = async (
  trainerName: string,
): Promise<Pick<Trainer, 'name' | 'friendship_id'> | undefined> => {
  const [rows] = await pool.execute('SELECT name, friendship_id FROM `player` WHERE `name` = ?;', [trainerName]);
  const result = rows as unknown as { name: string }[];

  if (result.length > 0) {
    return result[0];
  }

  return undefined;
};
