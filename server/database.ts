import { config } from 'node-config-ts';

import { pool } from '../src/database';
import { logger } from './logger';

const schemaCreationQuery = `
    CREATE TABLE IF NOT EXISTS ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history
    (
        \`date\`                  date                    NOT NULL DEFAULT (curdate()),
        \`RPL\`                   smallint(6)             NOT NULL,
        \`name\`                  varchar(20)             NOT NULL,
        \`team\`                  tinyint(1) UNSIGNED     DEFAULT NULL,
        \`level\`                 tinyint(2) UNSIGNED     DEFAULT NULL,
        \`xp\`                    bigint(9) UNSIGNED      DEFAULT NULL,
        \`battles_won\`           bigint(8)               DEFAULT NULL,
        \`last_seen\`             int(10)                 NOT NULL,
        \`friend_code\`           varchar(12)             DEFAULT NULL,
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
        UNIQUE KEY \`friend_code_date\` (\`date\`, \`friend_code\`),
        KEY \`date\` (\`date\`)
    ) ENGINE = InnoDB
      DEFAULT CHARSET = utf8mb4
      COLLATE = utf8mb4_unicode_ci;
`;

const schemaUpdateQuery = `
    INSERT ignore 
    INTO ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history (date, rpl, name, team, level, xp, battles_won, last_seen, km_walked, caught_pokemon, friendship_id, friend_code, gbl_rank, gbl_rating, event_badges, stops_spun, evolved, hatched, quests, trades, photobombs, purified, grunts_defeated, gym_battles_won, normal_raids_won, legendary_raids_won, trainings_won, berries_fed, hours_defended, best_friends, best_buddies, giovanni_defeated, mega_evos, collections_done, vivillon, showcase_max_size_first_place, unique_stops_spun, unique_mega_evos, unique_raid_bosses, unique_unown, seven_day_streaks, trade_km, raids_with_friends, caught_at_lure, wayfarer_agreements, trainers_referred, raid_achievements, xl_karps, xs_rats, tiny_pokemon_caught, jumbo_pokemon_caught, pikachu_caught, league_great_won, league_ultra_won, league_master_won, dex_gen1, dex_gen2, dex_gen3, dex_gen4, dex_gen5, dex_gen6, dex_gen7, dex_gen8, dex_gen8a, dex_gen9, caught_normal, caught_fighting, caught_flying, caught_poison, caught_ground, caught_rock, caught_bug, caught_ghost, caught_steel, caught_fire, caught_water, caught_grass, caught_electric, caught_psychic, caught_ice, caught_dragon, caught_dark, caught_fairy)
    SELECT curdate(), 1440, name, team, level, xp, battles_won, last_seen, km_walked, caught_pokemon, friendship_id, friend_code, gbl_rank, gbl_rating, event_badges, stops_spun, evolved, hatched, quests, trades, photobombs, purified, grunts_defeated, gym_battles_won, normal_raids_won, legendary_raids_won, trainings_won, berries_fed, hours_defended, best_friends, best_buddies, giovanni_defeated, mega_evos, collections_done, vivillon, showcase_max_size_first_place, unique_stops_spun, unique_mega_evos, unique_raid_bosses, unique_unown, seven_day_streaks, trade_km, raids_with_friends, caught_at_lure, wayfarer_agreements, trainers_referred, raid_achievements, xl_karps, xs_rats, tiny_pokemon_caught, jumbo_pokemon_caught, pikachu_caught, league_great_won, league_ultra_won, league_master_won, dex_gen1, dex_gen2, dex_gen3, dex_gen4, dex_gen5, dex_gen6, dex_gen7, dex_gen8, dex_gen8a, dex_gen9, caught_normal, caught_fighting, caught_flying, caught_poison, caught_ground, caught_rock, caught_bug, caught_ghost, caught_steel, caught_fire, caught_water, caught_grass, caught_electric, caught_psychic, caught_ice, caught_dragon, caught_dark, caught_fairy
    FROM player
    WHERE name <> ''
      AND friendship_id IS NOT NULL
       OR friend_code IS NOT NULL;
`;

const migrateToGolbatQuery = `
  ALTER TABLE ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history 
    ADD COLUMN \`new_last_seen\` INT(10) DEFAULT NULL;
  UPDATE ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history
    SET \`new_last_seen\`=UNIX_TIMESTAMP(\`last_seen\`);
  ALTER TABLE ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history
      DROP COLUMN \`last_seen\`;
  ALTER TABLE ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history 
    CHANGE \`name\` \`name\`                               VARCHAR(20) NOT NULL,
    ADD    \`friend_code\`                                 VARCHAR(12) DEFAULT NULL,
    CHANGE \`team\` \`team\`                               TINYINT(1) UNSIGNED DEFAULT NULL,
    CHANGE \`level\` \`level\`                             TINYINT(2) UNSIGNED DEFAULT NULL,
    CHANGE \`xp\` \`xp\`                                   BIGINT(9) UNSIGNED DEFAULT NULL,
    CHANGE \`battles_won\` \`battles_won\`                 BIGINT(8) DEFAULT NULL,
    CHANGE \`new_last_seen\` \`last_seen\`                 INT(10) NOT NULL,
    CHANGE \`km_walked\` \`km_walked\`                     FLOAT UNSIGNED DEFAULT NULL,
    CHANGE \`caught_pokemon\` \`caught_pokemon\`           INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`trainer_id\` \`friendship_id\`                VARCHAR(100) DEFAULT NULL,
    CHANGE \`gbl_rank\` \`gbl_rank\`                       TINYINT(2) UNSIGNED DEFAULT NULL,
    CHANGE \`gbl_rating\` \`gbl_rating\`                   SMALLINT(4) UNSIGNED DEFAULT NULL,
    CHANGE \`special_badges\` \`event_badges\`             VARCHAR(500) DEFAULT NULL,
    CHANGE \`stops_spun\` \`stops_spun\`                   INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`evolved\` \`evolved\`                         INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`hatched\` \`hatched\`                         INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`quests\` \`quests\`                           INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`trades\` \`trades\`                           INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`photobombs\` \`photobombs\`                   INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`purified\` \`purified\`                       INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`grunts_defeated\` \`grunts_defeated\`         INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`gym_battles_won\` \`gym_battles_won\`         INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`normal_raids_won\` \`normal_raids_won\`       INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`legendary_raids_won\` \`legendary_raids_won\` INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`trainings_won\` \`trainings_won\`             INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`berries_fed\` \`berries_fed\`                 INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`hours_defended\` \`hours_defended\`           INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`best_friends\` \`best_friends\`               INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`best_buddies\` \`best_buddies\`               INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`giovanni_defeated\` \`giovanni_defeated\`     SMALLINT(3) UNSIGNED DEFAULT NULL,
    CHANGE \`mega_evos\` \`mega_evos\`                     INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`collections_done\` \`collections_done\`       SMALLINT(3) UNSIGNED DEFAULT NULL,
    ADD \`vivillon\`                                       TINYINT(2) UNSIGNED DEFAULT NULL,
    CHANGE \`unique_stops_spun\` \`unique_stops_spun\`     INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`unique_mega_evos\` \`unique_mega_evos\`       INT(3) UNSIGNED DEFAULT NULL,
    CHANGE \`unique_raid_bosses\` \`unique_raid_bosses\`   INT(4) UNSIGNED DEFAULT NULL,
    CHANGE \`unique_unown\` \`unique_unown\`               TINYINT(2) UNSIGNED DEFAULT NULL,
    CHANGE \`7_day_streaks\` \`seven_day_streaks\`         INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`trade_km\` \`trade_km\`                       BIGINT(8) DEFAULT NULL,
    CHANGE \`raids_with_friends\` \`raids_with_friends\`   INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_at_lure\` \`caught_at_lure\`           INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`wayfarer_agreements\` \`wayfarer_agreements\` INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`trainers_referred\` \`trainers_referred\`     INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`raid_achievements\` \`raid_achievements\`     INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`xl_karps\` \`xl_karps\`                       INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`xs_rats\` \`xs_rats\`                         INT(6) UNSIGNED DEFAULT NULL,
    ADD \`tiny_pokemon_caught\`                            INT(6) UNSIGNED DEFAULT NULL,
    ADD \`jumbo_pokemon_caught\`                           INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`pikachu_caught\` \`pikachu_caught\`           INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`league_great_won\` \`league_great_won\`       INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`league_ultra_won\` \`league_ultra_won\`       INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`league_master_won\` \`league_master_won\`     INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`dex_gen1\` \`dex_gen1\`                       TINYINT(3) UNSIGNED DEFAULT NULL,
    CHANGE \`dex_gen2\` \`dex_gen2\`                       TINYINT(3) UNSIGNED DEFAULT NULL,
    CHANGE \`dex_gen3\` \`dex_gen3\`                       TINYINT(3) UNSIGNED DEFAULT NULL,
    CHANGE \`dex_gen4\` \`dex_gen4\`                       TINYINT(3) UNSIGNED DEFAULT NULL,
    CHANGE \`dex_gen5\` \`dex_gen5\`                       TINYINT(3) UNSIGNED DEFAULT NULL,
    CHANGE \`dex_gen6\` \`dex_gen6\`                       TINYINT(3) UNSIGNED DEFAULT NULL,
    CHANGE \`dex_gen7\` \`dex_gen7\`                       TINYINT(3) UNSIGNED DEFAULT NULL,
    CHANGE \`dex_gen8\` \`dex_gen8\`                       TINYINT(3) UNSIGNED DEFAULT NULL,
    ADD \`dex_gen8a\`                                      TINYINT(3) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_normal\` \`caught_normal\`             INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_fighting\` \`caught_fighting\`         INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_flying\` \`caught_flying\`             INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_poison\` \`caught_poison\`             INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_ground\` \`caught_ground\`             INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_rock\` \`caught_rock\`                 INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_bug\` \`caught_bug\`                   INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_ghost\` \`caught_ghost\`               INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_steel\` \`caught_steel\`               INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_fire\` \`caught_fire\`                 INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_water\` \`caught_water\`               INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_grass\` \`caught_grass\`               INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_electric\` \`caught_electric\`         INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_psychic\` \`caught_psychic\`           INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_ice\` \`caught_ice\`                   INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_dragon\` \`caught_dragon\`             INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_dark\` \`caught_dark\`                 INT(6) UNSIGNED DEFAULT NULL,
    CHANGE \`caught_fairy\` \`caught_fairy\`               INT(6) UNSIGNED DEFAULT NULL;
`;

const addFriendCodeToHistoryTableQuery = `
  ALTER TABLE ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history
    ADD COLUMN IF NOT EXISTS friend_code VARCHAR(12) DEFAULT NULL,
    ADD UNIQUE \`friend_code_date\` (\`friend_code\`, \`date\`);
`;

const addGen9ToHistoryTableQuery = `
  ALTER TABLE ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history
      ADD COLUMN IF NOT EXISTS \`dex_gen9\`                      TINYINT UNSIGNED DEFAULT NULL AFTER \`dex_gen8a\`,
      ADD COLUMN IF NOT EXISTS \`showcase_max_size_first_place\` INT(6)  UNSIGNED DEFAULT NULL AFTER \`vivillon\`;
`;

export const createTrainerHistoryTable = async (): Promise<void> => {
  logger.info('Creating leaderboard table if needed');
  await pool.execute(schemaCreationQuery);
};

export const updateTrainerHistory = async (): Promise<void> => {
  logger.info('Updating trainer data');
  await pool.execute(schemaUpdateQuery);
};

export const migrateTrainerHistoryToGolbat = async (): Promise<void> => {
  logger.info('Migrating leaderboard table to Golbat schema');
  await pool.execute(migrateToGolbatQuery);
};

export const addFriendCodeToHistoryTable = async (): Promise<void> => {
  logger.info('Adding missing friend code to history if needed');
  try {
    await pool.execute(addFriendCodeToHistoryTableQuery);
  } catch {
    // nothing
  }
};

export const addGen9ToHistoryTable = async (): Promise<void> => {
  logger.info('Adding gen9 and showcase to history if needed');
  try {
    await pool.execute(addGen9ToHistoryTableQuery);
  } catch (error) {
    logger.warn(error);
  }
};
