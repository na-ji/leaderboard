## Pogo Leaderboard

Simple app displaying a leaderboard of Pokémon Go trainers.

### Planned features

- [x] General leaderboard
- [x] Day, week and month leaderboards
- [x] Basic profile page
- [x] Basic discord authentication
- [ ] Advanced profile page, with charts
- [ ] Registration flow where the player has to tell his trainer name
- [ ] Limit auth to member of guild
- [ ] Limit auth to guild member having role

### Requirements

- node > 14
- modded MAD

## Installation

```shell
npm ci
cp config/default.json config/env/production.json
```

Then edit the file `config/env/production.json` to put your configuration.

## Database setup

You will also need to create a table to record daily data

```mysql
CREATE TABLE `trainer_data`
 (
              `date`        DATE NOT NULL DEFAULT Curdate(),
              `rpl`         SMALLINT(6) NOT NULL,
              `name`        VARCHAR(50) collate utf8mb4_unicode_ci NOT NULL,
              `team`        SMALLINT(6) DEFAULT NULL,
              `level`       SMALLINT(6) DEFAULT NULL,
              `xp`          BIGINT(8) DEFAULT NULL,
              `battles_won` BIGINT(8) DEFAULT NULL,
              `last_seen`   datetime NOT NULL,
              `km_walked`   FLOAT DEFAULT NULL,
              `caught_pokemon`      BIGINT(8) DEFAULT NULL,
              `trainer_id`          VARCHAR(100) COLLATE utf8mb4_unicode_ci NOT NULL,
              `gbl_rank`            SMALLINT(6) DEFAULT NULL,
              `gbl_rating`          BIGINT(8) DEFAULT NULL,
              `special_badges`      VARCHAR(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
              `stops_spun`          BIGINT(8) DEFAULT NULL,
              `evolved`             BIGINT(8) DEFAULT NULL,
              `hatched`             BIGINT(8) DEFAULT NULL,
              `quests`              BIGINT(8) DEFAULT NULL,
              `trades`              BIGINT(8) DEFAULT NULL,
              `photobombs`          BIGINT(8) DEFAULT NULL,
              `purified`            BIGINT(8) DEFAULT NULL,
              `grunts_defeated`     BIGINT(8) DEFAULT NULL,
              `gym_battles_won`     BIGINT(8) DEFAULT NULL,
              `normal_raids_won`    BIGINT(8) DEFAULT NULL,
              `legendary_raids_won` BIGINT(8) DEFAULT NULL,
              `trainings_won`       BIGINT(8) DEFAULT NULL,
              `berries_fed`         BIGINT(8) DEFAULT NULL,
              `hours_defended`      BIGINT(8) DEFAULT NULL,
              `best_friends`        BIGINT(8) DEFAULT NULL,
              `best_buddies`        BIGINT(8) DEFAULT NULL,
              `giovanni_defeated`   BIGINT(8) DEFAULT NULL,
              `mega_evos`           BIGINT(8) DEFAULT NULL,
              `collections_done`    BIGINT(8) DEFAULT NULL,
              `unique_stops_spun`   BIGINT(8) DEFAULT NULL,
              `unique_mega_evos`    BIGINT(8) DEFAULT NULL,
              `unique_raid_bosses`  BIGINT(8) DEFAULT NULL,
              `unique_unown`        SMALLINT(6) DEFAULT NULL,
              `7_day_streaks`       BIGINT(8) DEFAULT NULL,
              `trade_km`            BIGINT(8) DEFAULT NULL,
              `raids_with_friends`  BIGINT(8) DEFAULT NULL,
              `caught_at_lure`      BIGINT(8) DEFAULT NULL,
              `wayfarer_agreements` BIGINT(8) DEFAULT NULL,
              `trainers_referred`   BIGINT(8) DEFAULT NULL,
              `raid_achievements`   BIGINT(8) DEFAULT NULL,
              `xl_karps`            BIGINT(8) DEFAULT NULL,
              `xs_rats`             BIGINT(8) DEFAULT NULL,
              `pikachu_caught`      BIGINT(8) DEFAULT NULL,
              `league_great_won`    BIGINT(8) DEFAULT NULL,
              `league_ultra_won`    BIGINT(8) DEFAULT NULL,
              `league_master_won`   BIGINT(8) DEFAULT NULL,
              `dex_gen1`            INT(11) DEFAULT NULL,
              `dex_gen2`            INT(11) DEFAULT NULL,
              `dex_gen3`            INT(11) DEFAULT NULL,
              `dex_gen4`            INT(11) DEFAULT NULL,
              `dex_gen5`            INT(11) DEFAULT NULL,
              `dex_gen6`            INT(11) DEFAULT NULL,
              `dex_gen7`            INT(11) DEFAULT NULL,
              `dex_gen8`            INT(11) DEFAULT NULL,
              `caught_normal`       BIGINT(8) DEFAULT NULL,
              `caught_fighting`     BIGINT(8) DEFAULT NULL,
              `caught_flying`       BIGINT(8) DEFAULT NULL,
              `caught_poison`       BIGINT(8) DEFAULT NULL,
              `caught_ground`       BIGINT(8) DEFAULT NULL,
              `caught_rock`         BIGINT(8) DEFAULT NULL,
              `caught_bug`          BIGINT(8) DEFAULT NULL,
              `caught_ghost`        BIGINT(8) DEFAULT NULL,
              `caught_steel`        BIGINT(8) DEFAULT NULL,
              `caught_fire`         BIGINT(8) DEFAULT NULL,
              `caught_water`        BIGINT(8) DEFAULT NULL,
              `caught_grass`        BIGINT(8) DEFAULT NULL,
              `caught_electric`     BIGINT(8) DEFAULT NULL,
              `caught_psychic`      BIGINT(8) DEFAULT NULL,
              `caught_ice`          BIGINT(8) DEFAULT NULL,
              `caught_dragon`       BIGINT(8) DEFAULT NULL,
              `caught_dark`         BIGINT(8) DEFAULT NULL,
              `caught_fairy`        BIGINT(8) DEFAULT NULL,
              PRIMARY KEY (`date`,`name`)
 );
```

And then have a cron to populate this table daily. I personally use a maridb event:

```mysql
create event trainer_data_update on schedule
    every '1' DAY
        starts '2021-09-10 23:58:00'
    enable
    do
INSERT ignore
INTO   trainer_data
       (date, rpl, NAME, team, level, xp, battles_won, last_seen, km_walked, caught_pokemon, trainer_id, gbl_rank, gbl_rating, special_badges, stops_spun, evolved, hatched, quests, trades, photobombs, purified, grunts_defeated, gym_battles_won, normal_raids_won, legendary_raids_won, trainings_won, berries_fed, hours_defended, best_friends, best_buddies, giovanni_defeated, mega_evos, collections_done, unique_stops_spun, unique_mega_evos, unique_raid_bosses, unique_unown, 7_day_streaks, trade_km, raids_with_friends, caught_at_lure, wayfarer_agreements, trainers_referred, raid_achievements, xl_karps, xs_rats, pikachu_caught, league_great_won, league_ultra_won, league_master_won, dex_gen1, dex_gen2, dex_gen3, dex_gen4, dex_gen5, dex_gen6, dex_gen7, dex_gen8, caught_normal, caught_fighting, caught_flying, caught_poison, caught_ground, caught_rock, caught_bug, caught_ghost, caught_steel, caught_fire, caught_water, caught_grass, caught_electric, caught_psychic, caught_ice, caught_dragon, caught_dark, caught_fairy)
SELECT curdate(), 60, NAME, team, level, xp, battles_won, last_seen, km_walked, caught_pokemon, trainer_id, gbl_rank, gbl_rating, special_badges, stops_spun, evolved, hatched, quests, trades, photobombs, purified, grunts_defeated, gym_battles_won, normal_raids_won, legendary_raids_won, trainings_won, berries_fed, hours_defended, best_friends, best_buddies, giovanni_defeated, mega_evos, collections_done, unique_stops_spun, unique_mega_evos, unique_raid_bosses, unique_unown, 7_day_streaks, trade_km, raids_with_friends, caught_at_lure, wayfarer_agreements, trainers_referred, raid_achievements, xl_karps, xs_rats, pikachu_caught, league_great_won, league_ultra_won, league_master_won, dex_gen1, dex_gen2, dex_gen3, dex_gen4, dex_gen5, dex_gen6, dex_gen7, dex_gen8, caught_normal, caught_fighting, caught_flying, caught_poison, caught_ground, caught_rock, caught_bug, caught_ghost, caught_steel, caught_fire, caught_water, caught_grass, caught_electric, caught_psychic, caught_ice, caught_dragon, caught_dark, caught_fairy
FROM   cev_trainer
WHERE  trainer_id IS NOT NULL;
```

## Running the application

```shell
npm run build
npm run start
```

## Configuration

| Configuration                    | Default | Description                                                                                                                                                                                                                       |
| -------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| madDatabase                      | -       | The configuration to connect to the modded MAD database                                                                                                                                                                           |
| leaderboardDatabase              | -       | The configuration to connect to the database where the leaderboard will save its data. You can use the same configuration as MAD if you want to keep everything in the same database                                              |
| defaultLocale                    | en      | en or fr. This will determine which locale will be accessible on the base path. Other locales will be available on the /{locale} path. The user will be automatically redirected to those paths depending on their browser locale |
| applicationURL                   | -       | Full URL access your app                                                                                                                                                                                                          |
| enableAuth                       | false   | Whether the site is public or not                                                                                                                                                                                                 |
| secret                           | -       | Put a random string, needed to secure the authentication                                                                                                                                                                          |
| trainerCode                      | -       | The trainer code of the bot                                                                                                                                                                                                       |
| discord                          | -       | Discord Client ID and Client Secret to run the authentication. Mandatory if auth is enabled                                                                                                                                       |
| numberOfTrainerProfileToPrebuild | 50      | The pages are statically rendered, but for the trainer profile to reduce the load you can pre-render them.                                                                                                                        |
