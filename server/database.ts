import { config } from 'node-config-ts';

import { pool } from '../src/database';
import { logger } from './logger';

const schemaCreationQuery = `
    CREATE TABLE IF NOT EXISTS ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history
    (
        \`date\`                  date                                    NOT NULL DEFAULT (curdate()),
        \`RPL\`                   smallint(6)                             NOT NULL,
        \`name\`                  varchar(20)                             NOT NULL,
        \`team\`                  tinyint(1) UNSIGNED     DEFAULT NULL,
        \`level\`                 tinyint(2) UNSIGNED     DEFAULT NULL,
        \`xp\`                    bigint(9) UNSIGNED      DEFAULT NULL,
        \`battles_won\`           bigint(8)               DEFAULT NULL,
        \`last_seen\`             int(10)                 NOT NULL,
        \`km_walked\`             float UNSIGNED          DEFAULT NULL,
        \`caught_pokemon\`        int(6) UNSIGNED         DEFAULT NULL,
        \`friendship_id\`         varchar(100)            DEFAULT NULL,
        \`gbl_rank\`              tinyint(2) UNSIGNED     DEFAULT NULL,
        \`gbl_rating\`            smallint(4) UNSIGNED    DEFAULT NULL,
        \`event_badges\`          varchar(500)            DEFAULT NULL,
        \`stops_spun\`            int(6) UNSIGNED         DEFAULT NULL,
        \`evolved\`               int(6) UNSIGNED         DEFAULT NULL,
        \`hatched\`               int(6) UNSIGNED         DEFAULT NULL,
        \`quests\`                int(6) UNSIGNED         DEFAULT NULL,
        \`trades\`                int(6) UNSIGNED         DEFAULT NULL,
        \`photobombs\`            int(6) UNSIGNED         DEFAULT NULL,
        \`purified\`              int(6) UNSIGNED         DEFAULT NULL,
        \`grunts_defeated\`       int(6) UNSIGNED         DEFAULT NULL,
        \`gym_battles_won\`       int(6) UNSIGNED         DEFAULT NULL,
        \`normal_raids_won\`      int(6) UNSIGNED         DEFAULT NULL,
        \`legendary_raids_won\`   int(6) UNSIGNED         DEFAULT NULL,
        \`trainings_won\`         int(6) UNSIGNED         DEFAULT NULL,
        \`berries_fed\`           int(6) UNSIGNED         DEFAULT NULL,
        \`hours_defended\`        int(6) UNSIGNED         DEFAULT NULL,
        \`best_friends\`          int(6) UNSIGNED         DEFAULT NULL,
        \`best_buddies\`          int(6) UNSIGNED         DEFAULT NULL,
        \`giovanni_defeated\`     smallint(3) UNSIGNED    DEFAULT NULL,
        \`mega_evos\`             int(6) UNSIGNED         DEFAULT NULL,
        \`collections_done\`      smallint(3) UNSIGNED    DEFAULT NULL,
        \`vivillon\`              tinyint(2) UNSIGNED     DEFAULT NULL,
        \`unique_stops_spun\`     int(6) UNSIGNED         DEFAULT NULL,
        \`unique_mega_evos\`      int(3) UNSIGNED         DEFAULT NULL,
        \`unique_raid_bosses\`    int(4) UNSIGNED         DEFAULT NULL,
        \`unique_unown\`          tinyint(2) UNSIGNED     DEFAULT NULL,
        \`seven_day_streaks\`     int(6) UNSIGNED         DEFAULT NULL,
        \`trade_km\`              bigint(8)               DEFAULT NULL,
        \`raids_with_friends\`    int(6) UNSIGNED         DEFAULT NULL,
        \`caught_at_lure\`        int(6) UNSIGNED         DEFAULT NULL,
        \`wayfarer_agreements\`   int(6) UNSIGNED         DEFAULT NULL,
        \`trainers_referred\`     int(6) UNSIGNED         DEFAULT NULL,
        \`raid_achievements\`     int(6) UNSIGNED         DEFAULT NULL,
        \`xl_karps\`              int(6) UNSIGNED         DEFAULT NULL,
        \`xs_rats\`               int(6) UNSIGNED         DEFAULT NULL,
        \`tiny_pokemon_caught\`   int(6) UNSIGNED         DEFAULT NULL,
        \`jumbo_pokemon_caught\`  int(6) UNSIGNED         DEFAULT NULL,
        \`pikachu_caught\`        int(6) UNSIGNED         DEFAULT NULL,
        \`league_great_won\`      int(6) UNSIGNED         DEFAULT NULL,
        \`league_ultra_won\`      int(6) UNSIGNED         DEFAULT NULL,
        \`league_master_won\`     int(6) UNSIGNED         DEFAULT NULL,
        \`dex_gen1\`              tinyint(3) UNSIGNED     DEFAULT NULL,
        \`dex_gen2\`              tinyint(3) UNSIGNED     DEFAULT NULL,
        \`dex_gen3\`              tinyint(3) UNSIGNED     DEFAULT NULL,
        \`dex_gen4\`              tinyint(3) UNSIGNED     DEFAULT NULL,
        \`dex_gen5\`              tinyint(3) UNSIGNED     DEFAULT NULL,
        \`dex_gen6\`              tinyint(3) UNSIGNED     DEFAULT NULL,
        \`dex_gen7\`              tinyint(3) UNSIGNED     DEFAULT NULL,
        \`dex_gen8\`              tinyint(3) UNSIGNED     DEFAULT NULL,
        \`dex_gen8a\`             tinyint(3) UNSIGNED     DEFAULT NULL,
        \`caught_normal\`         int(6) UNSIGNED         DEFAULT NULL,
        \`caught_fighting\`       int(6) UNSIGNED         DEFAULT NULL,
        \`caught_flying\`         int(6) UNSIGNED         DEFAULT NULL,
        \`caught_poison\`         int(6) UNSIGNED         DEFAULT NULL,
        \`caught_ground\`         int(6) UNSIGNED         DEFAULT NULL,
        \`caught_rock\`           int(6) UNSIGNED         DEFAULT NULL,
        \`caught_bug\`            int(6) UNSIGNED         DEFAULT NULL,
        \`caught_ghost\`          int(6) UNSIGNED         DEFAULT NULL,
        \`caught_steel\`          int(6) UNSIGNED         DEFAULT NULL,
        \`caught_fire\`           int(6) UNSIGNED         DEFAULT NULL,
        \`caught_water\`          int(6) UNSIGNED         DEFAULT NULL,
        \`caught_grass\`          int(6) UNSIGNED         DEFAULT NULL,
        \`caught_electric\`       int(6) UNSIGNED         DEFAULT NULL,
        \`caught_psychic\`        int(6) UNSIGNED         DEFAULT NULL,
        \`caught_ice\`            int(6) UNSIGNED         DEFAULT NULL,
        \`caught_dragon\`         int(6) UNSIGNED         DEFAULT NULL,
        \`caught_dark\`           int(6) UNSIGNED         DEFAULT NULL,
        \`caught_fairy\`          int(6) UNSIGNED         DEFAULT NULL,
        PRIMARY KEY (\`date\`, \`name\`),
        UNIQUE KEY \`friendship_id_date\` (\`date\`, \`friendship_id\`),
        KEY \`date\` (\`date\`)
    ) ENGINE = InnoDB
      DEFAULT CHARSET = utf8mb4
      COLLATE = utf8mb4_unicode_ci;
`;

const schemaUpdateQuery = `
    INSERT ignore 
    INTO ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history (date, rpl, name, team, level, xp, battles_won, last_seen, km_walked, caught_pokemon, friendship_id, gbl_rank, gbl_rating, event_badges, stops_spun, evolved, hatched, quests, trades, photobombs, purified, grunts_defeated, gym_battles_won, normal_raids_won, legendary_raids_won, trainings_won, berries_fed, hours_defended, best_friends, best_buddies, giovanni_defeated, mega_evos, collections_done, vivillon, unique_stops_spun, unique_mega_evos, unique_raid_bosses, unique_unown, seven_day_streaks, trade_km, raids_with_friends, caught_at_lure, wayfarer_agreements, trainers_referred, raid_achievements, xl_karps, xs_rats, tiny_pokemon_caught, jumbo_pokemon_caught, pikachu_caught, league_great_won, league_ultra_won, league_master_won, dex_gen1, dex_gen2, dex_gen3, dex_gen4, dex_gen5, dex_gen6, dex_gen7, dex_gen8, dex_gen8a, caught_normal, caught_fighting, caught_flying, caught_poison, caught_ground, caught_rock, caught_bug, caught_ghost, caught_steel, caught_fire, caught_water, caught_grass, caught_electric, caught_psychic, caught_ice, caught_dragon, caught_dark, caught_fairy)
    SELECT curdate(), 1440, name, team, level, xp, battles_won, last_seen, km_walked, caught_pokemon, friendship_id, gbl_rank, gbl_rating, event_badges, stops_spun, evolved, hatched, quests, trades, photobombs, purified, grunts_defeated, gym_battles_won, normal_raids_won, legendary_raids_won, trainings_won, berries_fed, hours_defended, best_friends, best_buddies, giovanni_defeated, mega_evos, collections_done, vivillon, unique_stops_spun, unique_mega_evos, unique_raid_bosses, unique_unown, seven_day_streaks, trade_km, raids_with_friends, caught_at_lure, wayfarer_agreements, trainers_referred, raid_achievements, xl_karps, xs_rats, tiny_pokemon_caught, jumbo_pokemon_caught, pikachu_caught, league_great_won, league_ultra_won, league_master_won, dex_gen1, dex_gen2, dex_gen3, dex_gen4, dex_gen5, dex_gen6, dex_gen7, dex_gen8, dex_gen8a, caught_normal, caught_fighting, caught_flying, caught_poison, caught_ground, caught_rock, caught_bug, caught_ghost, caught_steel, caught_fire, caught_water, caught_grass, caught_electric, caught_psychic, caught_ice, caught_dragon, caught_dark, caught_fairy
    FROM player
    WHERE friendship_id IS NOT NULL and name <> '';
`;

export const createTrainerHistoryTable = async (): Promise<void> => {
  logger.info('Creating leaderboard table if needed');
  await pool.execute(schemaCreationQuery);
};

export const updateTrainerHistory = async (): Promise<void> => {
  logger.info('Updating trainer data');
  await pool.execute(schemaUpdateQuery);
};
