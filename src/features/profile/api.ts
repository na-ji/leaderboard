import { madPool } from '@/database';
import { Trainer } from '@/types';

export const getTrainerProfile = async (trainerId: string): Promise<Trainer | undefined> => {
  const [rows] = await madPool.execute('SELECT * FROM `cev_trainer` WHERE `trainer_id` = ? ORDER BY `xp` DESC;', [
    trainerId,
  ]);

  const result = rows as unknown as Trainer[];

  if (result.length === 0) {
    return undefined;
  }

  return {
    ...result[0],
    last_seen: (result[0].last_seen as unknown as Date).getTime(),
  };
};
