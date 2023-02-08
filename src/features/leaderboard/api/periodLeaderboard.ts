import { config } from 'node-config-ts';

import { formatDate } from '@/features/leaderboard/utils';
import { PeriodTrainer, RawPeriodTrainer } from '@/types';
import { pool } from '@/database';

const periodLeaderboardQuery = `
  SELECT trainer_history.date                                              AS date,
         trainer.name                                                      AS name,
         trainer.friendship_id                                                AS friendship_id,
         trainer.team                                                      AS team,
         trainer.last_seen                                                 AS last_seen,
         trainer.level               - trainer_history.level               AS level,
         trainer.xp                  - trainer_history.xp                  AS xp,
         trainer.battles_won         - trainer_history.battles_won         AS battles_won,
         trainer.km_walked           - trainer_history.km_walked           AS km_walked,
         trainer.caught_pokemon      - trainer_history.caught_pokemon      AS caught_pokemon,
         trainer.gbl_rank            - trainer_history.gbl_rank            AS gbl_rank,
         trainer.gbl_rating          - trainer_history.gbl_rating          AS gbl_rating,
         trainer.stops_spun          - trainer_history.stops_spun          AS stops_spun,
         trainer.evolved             - trainer_history.evolved             AS evolved,
         trainer.hatched             - trainer_history.hatched             AS hatched,
         trainer.quests              - trainer_history.quests              AS quests,
         trainer.trades              - trainer_history.trades              AS trades,
         trainer.photobombs          - trainer_history.photobombs          AS photobombs,
         trainer.purified            - trainer_history.purified            AS purified,
         trainer.grunts_defeated     - trainer_history.grunts_defeated     AS grunts_defeated,
         trainer.gym_battles_won     - trainer_history.gym_battles_won     AS gym_battles_won,
         trainer.normal_raids_won    - trainer_history.normal_raids_won    AS normal_raids_won,
         trainer.legendary_raids_won - trainer_history.legendary_raids_won AS legendary_raids_won,
         trainer.trainings_won       - trainer_history.trainings_won       AS trainings_won,
         trainer.berries_fed         - trainer_history.berries_fed         AS berries_fed,
         trainer.hours_defended      - trainer_history.hours_defended      AS hours_defended,
         trainer.best_friends        - trainer_history.best_friends        AS best_friends,
         trainer.best_buddies        - trainer_history.best_buddies        AS best_buddies,
         trainer.giovanni_defeated   - trainer_history.giovanni_defeated   AS giovanni_defeated,
         trainer.mega_evos           - trainer_history.mega_evos           AS mega_evos,
         trainer.collections_done    - trainer_history.collections_done    AS collections_done,
         trainer.unique_stops_spun   - trainer_history.unique_stops_spun   AS unique_stops_spun,
         trainer.unique_mega_evos    - trainer_history.unique_mega_evos    AS unique_mega_evos,
         trainer.unique_raid_bosses  - trainer_history.unique_raid_bosses  AS unique_raid_bosses,
         trainer.unique_unown        - trainer_history.unique_unown        AS unique_unown,
         trainer.seven_day_streaks       - trainer_history.seven_day_streaks       AS seven_day_streaks,
         trainer.trade_km            - trainer_history.trade_km            AS trade_km,
         trainer.raids_with_friends  - trainer_history.raids_with_friends  AS raids_with_friends,
         trainer.caught_at_lure      - trainer_history.caught_at_lure      AS caught_at_lure,
         trainer.wayfarer_agreements - trainer_history.wayfarer_agreements AS wayfarer_agreements,
         trainer.trainers_referred   - trainer_history.trainers_referred   AS trainers_referred,
         trainer.raid_achievements   - trainer_history.raid_achievements   AS raid_achievements,
         trainer.xl_karps            - trainer_history.xl_karps            AS xl_karps,
         trainer.xs_rats             - trainer_history.xs_rats             AS xs_rats,
         trainer.pikachu_caught      - trainer_history.pikachu_caught      AS pikachu_caught,
         trainer.league_great_won    - trainer_history.league_great_won    AS league_great_won,
         trainer.league_ultra_won    - trainer_history.league_ultra_won    AS league_ultra_won,
         trainer.league_master_won   - trainer_history.league_master_won   AS league_master_won,
         trainer.dex_gen1            - trainer_history.dex_gen1            AS dex_gen1,
         trainer.dex_gen2            - trainer_history.dex_gen2            AS dex_gen2,
         trainer.dex_gen3            - trainer_history.dex_gen3            AS dex_gen3,
         trainer.dex_gen4            - trainer_history.dex_gen4            AS dex_gen4,
         trainer.dex_gen5            - trainer_history.dex_gen5            AS dex_gen5,
         trainer.dex_gen6            - trainer_history.dex_gen6            AS dex_gen6,
         trainer.dex_gen7            - trainer_history.dex_gen7            AS dex_gen7,
         trainer.dex_gen8            - trainer_history.dex_gen8            AS dex_gen8,
         trainer.caught_normal       - trainer_history.caught_normal       AS caught_normal,
         trainer.caught_fighting     - trainer_history.caught_fighting     AS caught_fighting,
         trainer.caught_flying       - trainer_history.caught_flying       AS caught_flying,
         trainer.caught_poison       - trainer_history.caught_poison       AS caught_poison,
         trainer.caught_ground       - trainer_history.caught_ground       AS caught_ground,
         trainer.caught_rock         - trainer_history.caught_rock         AS caught_rock,
         trainer.caught_bug          - trainer_history.caught_bug          AS caught_bug,
         trainer.caught_ghost        - trainer_history.caught_ghost        AS caught_ghost,
         trainer.caught_steel        - trainer_history.caught_steel        AS caught_steel,
         trainer.caught_fire         - trainer_history.caught_fire         AS caught_fire,
         trainer.caught_water        - trainer_history.caught_water        AS caught_water,
         trainer.caught_grass        - trainer_history.caught_grass        AS caught_grass,
         trainer.caught_electric     - trainer_history.caught_electric     AS caught_electric,
         trainer.caught_psychic      - trainer_history.caught_psychic      AS caught_psychic,
         trainer.caught_ice          - trainer_history.caught_ice          AS caught_ice,
         trainer.caught_dragon       - trainer_history.caught_dragon       AS caught_dragon,
         trainer.caught_dark         - trainer_history.caught_dark         AS caught_dark,
         trainer.caught_fairy        - trainer_history.caught_fairy        AS caught_fairy
  FROM   player trainer
  JOIN   ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history trainer_history
    ON   trainer.friendship_id = trainer_history.friendship_id
   AND   trainer_history.date =
         (
                SELECT   sub_trainer_history.date
                FROM     ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history sub_trainer_history
                WHERE    sub_trainer_history.date >= curdate() - INTERVAL __INTERVAL__ DAY
                AND      sub_trainer_history.friendship_id = trainer.friendship_id
                ORDER BY sub_trainer_history.date
                LIMIT 1
         )
  ORDER BY date DESC, friendship_id;
`;

export interface PeriodLeaderboard {
  lastDay?: PeriodTrainer[];
  lastWeek?: PeriodTrainer[];
  lastMonth?: PeriodTrainer[];
}

export const periodIntervals = {
  lastDay: 1,
  lastWeek: 7,
  lastMonth: 30,
};

export const getPeriodTrainers = async (period: keyof PeriodLeaderboard): Promise<PeriodTrainer[]> => {
  const interval = periodIntervals[period];
  const [rows] = await pool.execute(periodLeaderboardQuery.replace('__INTERVAL__', `${interval}`));

  return (rows as unknown as RawPeriodTrainer[]).map<PeriodTrainer>((row) => ({
    ...row,
    date: formatDate(row.date),
  }));
};
