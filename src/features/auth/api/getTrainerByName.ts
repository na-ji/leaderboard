import { pool } from '@/database';
import { Trainer } from '@/types';

export const getTrainerByName = async (
  trainerName: string,
): Promise<Pick<Trainer, 'name' | 'trainer_id'> | undefined> => {
  const [rows] = await pool.execute('SELECT name, trainer_id FROM `cev_trainer` WHERE `name` = ?;', [trainerName]);
  const result = rows as unknown as { name: string }[];

  if (result.length > 0) {
    return result[0];
  }

  return undefined;
};
