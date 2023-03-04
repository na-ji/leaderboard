import { pool } from '@/database';
import { Trainer } from '@/types';

export const getOverallLeaderboard = async (): Promise<Trainer[]> => {
  const [rows] = await pool.execute(
    'SELECT * FROM `player` WHERE `friendship_id` IS NOT NULL OR `friend_code` IS NOT NULL ORDER BY `xp` DESC;',
  );

  return rows as unknown as Trainer[];
};
