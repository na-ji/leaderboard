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
    INSERT INTO   ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history (date, rpl, name, team, level, xp, battles_won, last_seen, km_walked, caught_pokemon, friendship_id, gbl_rank, gbl_rating, event_badges, stops_spun, evolved, hatched, quests, trades, photobombs, purified, grunts_defeated, gym_battles_won, normal_raids_won, legendary_raids_won, trainings_won, berries_fed, hours_defended, best_friends, best_buddies, giovanni_defeated, mega_evos, collections_done, vivillon, unique_stops_spun, unique_mega_evos, unique_raid_bosses, unique_unown, seven_day_streaks, trade_km, raids_with_friends, caught_at_lure, wayfarer_agreements, trainers_referred, raid_achievements, xl_karps, xs_rats, tiny_pokemon_caught, jumbo_pokemon_caught, pikachu_caught, league_great_won, league_ultra_won, league_master_won, dex_gen1, dex_gen2, dex_gen3, dex_gen4, dex_gen5, dex_gen6, dex_gen7, dex_gen8, caught_normal, caught_fighting, caught_flying, caught_poison, caught_ground, caught_rock, caught_bug, caught_ghost, caught_steel, caught_fire, caught_water, caught_grass, caught_electric, caught_psychic, caught_ice, caught_dragon, caught_dark, caught_fairy)
    SELECT curdate(), 1440, name, team, level, xp, battles_won, last_seen, km_walked, caught_pokemon, friendship_id, gbl_rank, gbl_rating, event_badges, stops_spun, evolved, hatched, quests, trades, photobombs, purified, grunts_defeated, gym_battles_won, normal_raids_won, legendary_raids_won, trainings_won, berries_fed, hours_defended, best_friends, best_buddies, giovanni_defeated, mega_evos, collections_done, vivillon, unique_stops_spun, unique_mega_evos, unique_raid_bosses, unique_unown, seven_day_streaks, trade_km, raids_with_friends, caught_at_lure, wayfarer_agreements, trainers_referred, raid_achievements, xl_karps, xs_rats, tiny_pokemon_caught, jumbo_pokemon_caught, pikachu_caught, league_great_won, league_ultra_won, league_master_won, dex_gen1, dex_gen2, dex_gen3, dex_gen4, dex_gen5, dex_gen6, dex_gen7, dex_gen8, caught_normal, caught_fighting, caught_flying, caught_poison, caught_ground, caught_rock, caught_bug, caught_ghost, caught_steel, caught_fire, caught_water, caught_grass, caught_electric, caught_psychic, caught_ice, caught_dragon, caught_dark, caught_fairy
    FROM   player b
    WHERE friendship_id IS NOT NULL and name <> ''
    ON DUPLICATE KEY UPDATE team=b.team, level=b.level, xp=b.xp, battles_won=b.battles_won, last_seen=b.last_seen, km_walked=b.km_walked, caught_pokemon=b.caught_pokemon, friendship_id=b.friendship_id, gbl_rank=b.gbl_rank, gbl_rating=b.gbl_rating, event_badges=b.event_badges, stops_spun=b.stops_spun, evolved=b.evolved, hatched=b.hatched, quests=b.quests, trades=b.trades, photobombs=b.photobombs, purified=b.purified, grunts_defeated=b.grunts_defeated, gym_battles_won=b.gym_battles_won, normal_raids_won=b.normal_raids_won, legendary_raids_won=b.legendary_raids_won, trainings_won=b.trainings_won, berries_fed=b.berries_fed, hours_defended=b.hours_defended, best_friends=b.best_friends, best_buddies=b.best_buddies, giovanni_defeated=b.giovanni_defeated, mega_evos=b.mega_evos, collections_done=b.collections_done, vivillon=b.vivillon, unique_stops_spun=b.unique_stops_spun, unique_mega_evos=b.unique_mega_evos, unique_raid_bosses=b.unique_raid_bosses, unique_unown=b.unique_unown, seven_day_streaks=b.seven_day_streaks, trade_km=b.trade_km, raids_with_friends=b.raids_with_friends, caught_at_lure=b.caught_at_lure, wayfarer_agreements=b.wayfarer_agreements, trainers_referred=b.trainers_referred, raid_achievements=b.raid_achievements, xl_karps=b.xl_karps, xs_rats=b.xs_rats, tiny_pokemon_caught=b.tiny_pokemon_caught, jumbo_pokemon_caught=b.jumbo_pokemon_caught, pikachu_caught=b.pikachu_caught, league_great_won=b.league_great_won, league_ultra_won=b.league_ultra_won, league_master_won=b.league_master_won, dex_gen1=b.dex_gen1, dex_gen2=b.dex_gen2, dex_gen3=b.dex_gen3, dex_gen4=b.dex_gen4, dex_gen5=b.dex_gen5, dex_gen6=b.dex_gen6, dex_gen7=b.dex_gen7, dex_gen8=b.dex_gen8, caught_normal=b.caught_normal, caught_fighting=b.caught_fighting, caught_flying=b.caught_flying, caught_poison=b.caught_poison, caught_ground=b.caught_ground, caught_rock=b.caught_rock, caught_bug=b.caught_bug, caught_ghost=b.caught_ghost, caught_steel=b.caught_steel, caught_fire=b.caught_fire, caught_water=b.caught_water, caught_grass=b.caught_grass, caught_electric=b.caught_electric, caught_psychic=b.caught_psychic, caught_ice=b.caught_ice, caught_dragon=b.caught_dragon, caught_dark=b.caught_dark, caught_fairy=b.caught_fairy;
`;

export const createTrainerHistoryTable = async (): Promise<void> => {
  logger.info('Creating leaderboard table if needed');
  await pool.execute(schemaCreationQuery);
};

export const updateTrainerHistory = async (): Promise<void> => {
  logger.info('Updating trainer data');
  await pool.execute(schemaUpdateQuery);
};
