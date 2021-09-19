import { madPool } from '@/database';
import { Trainer } from '@/types';

export const getOverallLeaderboard = async (): Promise<Trainer[]> => {
  const [rows] = await madPool.execute(
    'SELECT * FROM `cev_trainer` WHERE `trainer_id` IS NOT NULL ORDER BY `xp` DESC;',
  );

  return (rows as unknown as Trainer[]).map<Trainer>((row) => ({
    ...row,
    last_seen: (row.last_seen as unknown as Date).getTime(),
  }));
};
