import { madPool } from '@/database';

export const getTrainerName = async (trainerId: string): Promise<string> => {
  const [rows] = await madPool.execute('SELECT name FROM `cev_trainer` WHERE `trainer_id` = ?;', [trainerId]);
  const result = rows as unknown as { name: string }[];

  if (result.length > 0) {
    return result[0].name;
  }

  return '';
};
