import { GlobalStats } from '@/types';
import { pool } from '@/database';

const globalPlayerStatsQuery = `
    SELECT COUNT(1)                            AS totalRegisteredTrainers,
           CAST(SUM(xp) AS signed)             AS totalXp,
           CAST(SUM(battles_won) AS signed)    AS totalBattlesWon,
           CAST(SUM(caught_pokemon) AS signed) AS totalPokemonCaught
    FROM   cev_trainer
    WHERE  trainer_id IS NOT NULL
    ORDER  BY xp DESC;
`;

export const getGlobalPlayerStats = async (): Promise<GlobalStats> => {
  const [rows] = await pool.execute(globalPlayerStatsQuery);

  return (rows as unknown as GlobalStats[])[0];
};
