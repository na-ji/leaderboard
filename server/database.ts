import { config } from 'node-config-ts';

import { pool } from '../src/database';
import { logger } from './logger';

const schemaCreationQuery = `
    CREATE TABLE IF NOT EXISTS ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history
    (
        \`date\`                date                                    NOT NULL DEFAULT (curdate()),
        \`RPL\`                 smallint(6)                             NOT NULL,
        \`name\`                varchar(50) COLLATE utf8mb4_unicode_ci  NOT NULL,
        \`team\`                smallint(6)                             DEFAULT NULL,
        \`level\`               smallint(6)                             DEFAULT NULL,
        \`xp\`                  bigint(8)                               DEFAULT NULL,
        \`battles_won\`         bigint(8)                               DEFAULT NULL,
        \`last_seen\`           datetime                                NOT NULL,
        \`km_walked\`           float                                   DEFAULT NULL,
        \`caught_pokemon\`      bigint(8)                               DEFAULT NULL,
        \`friendship_id\`          varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
        \`gbl_rank\`            smallint(6)                             DEFAULT NULL,
        \`gbl_rating\`          bigint(8)                               DEFAULT NULL,
        \`event_badges\`      varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        \`stops_spun\`          bigint(8)                               DEFAULT NULL,
        \`evolved\`             bigint(8)                               DEFAULT NULL,
        \`hatched\`             bigint(8)                               DEFAULT NULL,
        \`quests\`              bigint(8)                               DEFAULT NULL,
        \`trades\`              bigint(8)                               DEFAULT NULL,
        \`photobombs\`          bigint(8)                               DEFAULT NULL,
        \`purified\`            bigint(8)                               DEFAULT NULL,
        \`grunts_defeated\`     bigint(8)                               DEFAULT NULL,
        \`gym_battles_won\`     bigint(8)                               DEFAULT NULL,
        \`normal_raids_won\`    bigint(8)                               DEFAULT NULL,
        \`legendary_raids_won\` bigint(8)                               DEFAULT NULL,
        \`trainings_won\`       bigint(8)                               DEFAULT NULL,
        \`berries_fed\`         bigint(8)                               DEFAULT NULL,
        \`hours_defended\`      bigint(8)                               DEFAULT NULL,
        \`best_friends\`        bigint(8)                               DEFAULT NULL,
        \`best_buddies\`        bigint(8)                               DEFAULT NULL,
        \`giovanni_defeated\`   bigint(8)                               DEFAULT NULL,
        \`mega_evos\`           bigint(8)                               DEFAULT NULL,
        \`collections_done\`    bigint(8)                               DEFAULT NULL,
        \`unique_stops_spun\`   bigint(8)                               DEFAULT NULL,
        \`unique_mega_evos\`    bigint(8)                               DEFAULT NULL,
        \`unique_raid_bosses\`  bigint(8)                               DEFAULT NULL,
        \`unique_unown\`        smallint(6)                             DEFAULT NULL,
        \`seven_day_streaks\`       bigint(8)                               DEFAULT NULL,
        \`trade_km\`            bigint(8)                               DEFAULT NULL,
        \`raids_with_friends\`  bigint(8)                               DEFAULT NULL,
        \`caught_at_lure\`      bigint(8)                               DEFAULT NULL,
        \`wayfarer_agreements\` bigint(8)                               DEFAULT NULL,
        \`trainers_referred\`   bigint(8)                               DEFAULT NULL,
        \`raid_achievements\`   bigint(8)                               DEFAULT NULL,
        \`xl_karps\`            bigint(8)                               DEFAULT NULL,
        \`xs_rats\`             bigint(8)                               DEFAULT NULL,
        \`pikachu_caught\`      bigint(8)                               DEFAULT NULL,
        \`league_great_won\`    bigint(8)                               DEFAULT NULL,
        \`league_ultra_won\`    bigint(8)                               DEFAULT NULL,
        \`league_master_won\`   bigint(8)                               DEFAULT NULL,
        \`dex_gen1\`            int(11)                                 DEFAULT NULL,
        \`dex_gen2\`            int(11)                                 DEFAULT NULL,
        \`dex_gen3\`            int(11)                                 DEFAULT NULL,
        \`dex_gen4\`            int(11)                                 DEFAULT NULL,
        \`dex_gen5\`            int(11)                                 DEFAULT NULL,
        \`dex_gen6\`            int(11)                                 DEFAULT NULL,
        \`dex_gen7\`            int(11)                                 DEFAULT NULL,
        \`dex_gen8\`            int(11)                                 DEFAULT NULL,
        \`caught_normal\`       bigint(8)                               DEFAULT NULL,
        \`caught_fighting\`     bigint(8)                               DEFAULT NULL,
        \`caught_flying\`       bigint(8)                               DEFAULT NULL,
        \`caught_poison\`       bigint(8)                               DEFAULT NULL,
        \`caught_ground\`       bigint(8)                               DEFAULT NULL,
        \`caught_rock\`         bigint(8)                               DEFAULT NULL,
        \`caught_bug\`          bigint(8)                               DEFAULT NULL,
        \`caught_ghost\`        bigint(8)                               DEFAULT NULL,
        \`caught_steel\`        bigint(8)                               DEFAULT NULL,
        \`caught_fire\`         bigint(8)                               DEFAULT NULL,
        \`caught_water\`        bigint(8)                               DEFAULT NULL,
        \`caught_grass\`        bigint(8)                               DEFAULT NULL,
        \`caught_electric\`     bigint(8)                               DEFAULT NULL,
        \`caught_psychic\`      bigint(8)                               DEFAULT NULL,
        \`caught_ice\`          bigint(8)                               DEFAULT NULL,
        \`caught_dragon\`       bigint(8)                               DEFAULT NULL,
        \`caught_dark\`         bigint(8)                               DEFAULT NULL,
        \`caught_fairy\`        bigint(8)                               DEFAULT NULL,
        PRIMARY KEY (\`date\`, \`name\`),
        UNIQUE KEY \`friendship_id_date\` (\`date\`, \`friendship_id\`),
        KEY \`date\` (\`date\`)
    ) ENGINE = InnoDB
      DEFAULT CHARSET = utf8mb4
      COLLATE = utf8mb4_unicode_ci;
`;

const schemaUpdateQuery = `
    INSERT ignore
    INTO   ${config.database.leaderboardDatabase}.pogo_leaderboard_trainer_history (date, rpl, NAME, team, level, xp, battles_won, last_seen, km_walked, caught_pokemon, friendship_id, gbl_rank, gbl_rating, event_badges, stops_spun, evolved, hatched, quests, trades, photobombs, purified, grunts_defeated, gym_battles_won, normal_raids_won, legendary_raids_won, trainings_won, berries_fed, hours_defended, best_friends, best_buddies, giovanni_defeated, mega_evos, collections_done, unique_stops_spun, unique_mega_evos, unique_raid_bosses, unique_unown, seven_day_streaks, trade_km, raids_with_friends, caught_at_lure, wayfarer_agreements, trainers_referred, raid_achievements, xl_karps, xs_rats, pikachu_caught, league_great_won, league_ultra_won, league_master_won, dex_gen1, dex_gen2, dex_gen3, dex_gen4, dex_gen5, dex_gen6, dex_gen7, dex_gen8, caught_normal, caught_fighting, caught_flying, caught_poison, caught_ground, caught_rock, caught_bug, caught_ghost, caught_steel, caught_fire, caught_water, caught_grass, caught_electric, caught_psychic, caught_ice, caught_dragon, caught_dark, caught_fairy)
    SELECT curdate(), 60, NAME, team, level, xp, battles_won, last_seen, km_walked, caught_pokemon, friendship_id, gbl_rank, gbl_rating, event_badges, stops_spun, evolved, hatched, quests, trades, photobombs, purified, grunts_defeated, gym_battles_won, normal_raids_won, legendary_raids_won, trainings_won, berries_fed, hours_defended, best_friends, best_buddies, giovanni_defeated, mega_evos, collections_done, unique_stops_spun, unique_mega_evos, unique_raid_bosses, unique_unown, seven_day_streaks, trade_km, raids_with_friends, caught_at_lure, wayfarer_agreements, trainers_referred, raid_achievements, xl_karps, xs_rats, pikachu_caught, league_great_won, league_ultra_won, league_master_won, dex_gen1, dex_gen2, dex_gen3, dex_gen4, dex_gen5, dex_gen6, dex_gen7, dex_gen8, caught_normal, caught_fighting, caught_flying, caught_poison, caught_ground, caught_rock, caught_bug, caught_ghost, caught_steel, caught_fire, caught_water, caught_grass, caught_electric, caught_psychic, caught_ice, caught_dragon, caught_dark, caught_fairy
    FROM   player
    WHERE  friendship_id IS NOT NULL;
`;

export const createTrainerHistoryTable = async (): Promise<void> => {
  logger.info('Creating leaderboard table if needed');
  await pool.execute(schemaCreationQuery);
};

export const updateTrainerHistory = async (): Promise<void> => {
  logger.info('Updating trainer data');
  await pool.execute(schemaUpdateQuery);
};
