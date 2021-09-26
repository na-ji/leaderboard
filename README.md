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

And then have a cron to populate this table daily. I personally use a maridb event:

```mysql
create event trainer_data_update on schedule
    every '1' DAY
        starts '2021-09-10 23:58:00'
    enable
    do
INSERT ignore
INTO   pogo_leaderboard_trainer_history
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
| database                         | -       | The configuration to connect to the database. You can save the leaderboard tables from a separate database from MAD. But the user must have access to both databases.                                                             |
| defaultLocale                    | en      | en or fr. This will determine which locale will be accessible on the base path. Other locales will be available on the /{locale} path. The user will be automatically redirected to those paths depending on their browser locale |
| applicationURL                   | -       | Full URL access your app                                                                                                                                                                                                          |
| enableAuth                       | false   | Whether the site is public or not                                                                                                                                                                                                 |
| secret                           | -       | Put a random string, needed to secure the authentication                                                                                                                                                                          |
| trainerCode                      | -       | The trainer code of the bot                                                                                                                                                                                                       |
| discord                          | -       | Discord Client ID and Client Secret to run the authentication. Mandatory if auth is enabled                                                                                                                                       |
| numberOfTrainerProfileToPrebuild | 50      | The pages are statically rendered, but for the trainer profile to reduce the load you can pre-render them.                                                                                                                        |
