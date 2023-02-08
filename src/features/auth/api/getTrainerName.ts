import { pool } from '@/database';

export const getTrainerName = async (trainerId: string): Promise<string> => {
  const [rows] = await pool.execute('SELECT name FROM `player` WHERE `friendship_id` = ?;', [trainerId]);
  const result = rows as unknown as { name: string }[];

  if (result.length > 0) {
    return result[0].name;
  }

  return '';
};
