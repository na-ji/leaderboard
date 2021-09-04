import { Trainer } from '@/types/model';
import { connectToDatabase } from '@/database';

export const getLeaderboard = async (): Promise<Trainer[]> => {
  const connection = await connectToDatabase();
  const [rows] = await connection.execute(
    'SELECT * FROM `cev_trainer` WHERE `trainer_id` IS NOT NULL ORDER BY `xp` DESC;',
  );

  return (rows as unknown as Trainer[]).map<Trainer>((row) => ({
    ...row,
    last_seen: (row.last_seen as unknown as Date).getTime(),
  }));
};
