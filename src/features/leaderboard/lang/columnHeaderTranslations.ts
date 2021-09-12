import { defineMessages } from 'react-intl';

import { Badge } from '@/types';

export const columnHeaderTranslations = defineMessages({
  trainer_id: {
    id: 'leaderboard_header.rank',
    defaultMessage: 'Rank',
    description: 'Leaderboard rank column header',
  },
  name: {
    id: 'leaderboard_header.name',
    defaultMessage: 'Trainer',
    description: 'Leaderboard trainer column header',
  },
  level: {
    id: 'leaderboard_header.level',
    defaultMessage: 'Level',
    description: 'Leaderboard level column header',
  },
  xp: {
    id: 'leaderboard_header.xp',
    defaultMessage: 'XP',
    description: 'Leaderboard xp column header',
  },
  battles_won: {
    id: 'leaderboard_header.battles_won',
    defaultMessage: 'Battles won',
    description: 'Leaderboard battles won column header',
  },
  caught_pokemon: {
    id: 'leaderboard_header.caught_pokemon',
    defaultMessage: 'Caught',
    description: 'Leaderboard caught pokemon column header',
  },
  stops_spun: {
    id: 'leaderboard_header.stops_spun',
    defaultMessage: 'Pokéstops',
    description: 'Leaderboard Pokéstops spun column header',
  },
  km_walked: {
    id: 'leaderboard_header.km_walked',
    defaultMessage: 'KM',
    description: 'Leaderboard km waled column header',
  },
  hatched: {
    id: 'leaderboard_header.hatched',
    defaultMessage: 'Hatched',
    description: 'Leaderboard eggs hatched column header',
  },
  quests: {
    id: 'leaderboard_header.quests',
    defaultMessage: 'Quests',
    description: 'Leaderboard quests column header',
  },
  evolved: {
    id: 'leaderboard_header.evolved',
    defaultMessage: 'Evolved',
    description: 'Leaderboard evolved column header',
  },
  trades: {
    id: 'leaderboard_header.trades',
    defaultMessage: 'Trades',
    description: 'Leaderboard evolved column header',
  },
  dex_gen1: {
    id: 'leaderboard_header.dex_gen1',
    defaultMessage: 'Gen 1',
    description: 'Leaderboard gen 1 column header',
  },
  dex_gen2: {
    id: 'leaderboard_header.dex_gen2',
    defaultMessage: 'Gen 2',
    description: 'Leaderboard gen 2 column header',
  },
  dex_gen3: {
    id: 'leaderboard_header.dex_gen3',
    defaultMessage: 'Gen 3',
    description: 'Leaderboard gen 3 column header',
  },
  dex_gen4: {
    id: 'leaderboard_header.dex_gen4',
    defaultMessage: 'Gen 4',
    description: 'Leaderboard gen 4 column header',
  },
  dex_gen5: {
    id: 'leaderboard_header.dex_gen5',
    defaultMessage: 'Gen 5',
    description: 'Leaderboard gen 5 column header',
  },
  dex_gen6: {
    id: 'leaderboard_header.dex_gen6',
    defaultMessage: 'Gen 6',
    description: 'Leaderboard gen 6 column header',
  },
  dex_gen7: {
    id: 'leaderboard_header.dex_gen7',
    defaultMessage: 'Gen 7',
    description: 'Leaderboard gen 7 column header',
  },
  dex_gen8: {
    id: 'leaderboard_header.dex_gen8',
    defaultMessage: 'Gen 8',
    description: 'Leaderboard gen 8 column header',
  },
  gym_battles_won: {
    id: 'leaderboard_header.gym_battles_won',
    defaultMessage: 'Battles',
    description: 'Leaderboard battles won column header',
  },
  hours_defended: {
    id: 'leaderboard_header.hours_defended',
    defaultMessage: 'Hours',
    description: 'Leaderboard hours defended column header',
  },
  berries_fed: {
    id: 'leaderboard_header.berries_fed',
    defaultMessage: 'Berries',
    description: 'Leaderboard berries column header',
  },
  gbl_rank: {
    id: 'leaderboard_header.gbl_rank',
    defaultMessage: 'GBL Rank',
    description: 'Leaderboard gbl rank column header',
  },
  gbl_rating: {
    id: 'leaderboard_header.gbl_rating',
    defaultMessage: 'GBL rating',
    description: 'Leaderboard gbl rating column header',
  },
  league_great_won: {
    id: 'leaderboard_header.league_great_won',
    defaultMessage: 'Great',
    description: 'Leaderboard great league column header',
  },
  league_ultra_won: {
    id: 'leaderboard_header.league_ultra_won',
    defaultMessage: 'Ultra',
    description: 'Leaderboard ultra league column header',
  },
  league_master_won: {
    id: 'leaderboard_header.league_master_won',
    defaultMessage: 'Master',
    description: 'Leaderboard master league column header',
  },
  trainings_won: {
    id: 'leaderboard_header.trainings_won',
    defaultMessage: 'Trainings',
    description: 'Leaderboard trainings won column header',
  },
  total_raids: {
    id: 'leaderboard_header.total_raids',
    defaultMessage: 'Total',
    description: 'Leaderboard total raids column header',
  },
  normal_raids_won: {
    id: 'leaderboard_header.normal_raids_won',
    defaultMessage: 'Normal',
    description: 'Leaderboard normal raids column header',
  },
  legendary_raids_won: {
    id: 'leaderboard_header.legendary_raids_won',
    defaultMessage: 'Legendary',
    description: 'Leaderboard legendary raids column header',
  },
  raids_with_friends: {
    id: 'leaderboard_header.raids_with_friends',
    defaultMessage: 'With friends',
    description: 'Leaderboard with friends raids column header',
  },
  raid_achievements: {
    id: 'leaderboard_header.raid_achievements',
    defaultMessage: 'Achievements',
    description: 'Leaderboard raid achievements column header',
  },
  unique_raid_bosses: {
    id: 'leaderboard_header.unique_raid_bosses',
    defaultMessage: 'Unique',
    description: 'Leaderboard unique raids column header',
  },
  grunts_defeated: {
    id: 'leaderboard_header.grunts_defeated',
    defaultMessage: 'Grunts',
    description: 'Leaderboard grunts defeated column header',
  },
  giovanni_defeated: {
    id: 'leaderboard_header.giovanni_defeated',
    defaultMessage: 'Giovanni',
    description: 'Leaderboard giovanni defeated column header',
  },
  purified: {
    id: 'leaderboard_header.purified',
    defaultMessage: 'Purified',
    description: 'Leaderboard purified column header',
  },
  pikachu_caught: {
    id: 'leaderboard_header.pikachu_caught',
    defaultMessage: 'Pikachu',
    description: 'Leaderboard pikachu caught column header',
  },
  unique_unown: {
    id: 'leaderboard_header.unique_unown',
    defaultMessage: 'Unown',
    description: 'Leaderboard unique unown column header',
  },
  xl_karps: {
    id: 'leaderboard_header.xl_karps',
    defaultMessage: 'Magikarp',
    description: 'Leaderboard magikarp column header',
  },
  xs_rats: {
    id: 'leaderboard_header.xs_rats',
    defaultMessage: 'Rattata',
    description: 'Leaderboard rattata column header',
  },
  [Badge.CAUGHT_NORMAL]: {
    id: 'badge_caught_normal',
    defaultMessage: 'Normal',
    description: 'Badge CAUGHT_NORMAL',
  },
  [Badge.CAUGHT_FIGHTING]: {
    id: 'badge_caught_fighting',
    defaultMessage: 'Fighting',
    description: 'Badge CAUGHT_FIGHTING',
  },
  [Badge.CAUGHT_FLYING]: {
    id: 'badge_caught_flying',
    defaultMessage: 'Flying',
    description: 'Badge CAUGHT_FLYING',
  },
  [Badge.CAUGHT_POISON]: {
    id: 'badge_caught_poison',
    defaultMessage: 'Poison',
    description: 'Badge CAUGHT_POISON',
  },
  [Badge.CAUGHT_GROUND]: {
    id: 'badge_caught_ground',
    defaultMessage: 'Ground',
    description: 'Badge CAUGHT_GROUND',
  },
  [Badge.CAUGHT_ROCK]: {
    id: 'badge_caught_rock',
    defaultMessage: 'Rock',
    description: 'Badge CAUGHT_ROCK',
  },
  [Badge.CAUGHT_BUG]: {
    id: 'badge_caught_bug',
    defaultMessage: 'Bug',
    description: 'Badge CAUGHT_BUG',
  },
  [Badge.CAUGHT_GHOST]: {
    id: 'badge_caught_ghost',
    defaultMessage: 'Ghost',
    description: 'Badge CAUGHT_GHOST',
  },
  [Badge.CAUGHT_STEEL]: {
    id: 'badge_caught_steel',
    defaultMessage: 'Steel',
    description: 'Badge CAUGHT_STEEL',
  },
  [Badge.CAUGHT_FIRE]: {
    id: 'badge_caught_fire',
    defaultMessage: 'Fire',
    description: 'Badge CAUGHT_FIRE',
  },
  [Badge.CAUGHT_WATER]: {
    id: 'badge_caught_water',
    defaultMessage: 'Water',
    description: 'Badge CAUGHT_WATER',
  },
  [Badge.CAUGHT_GRASS]: {
    id: 'badge_caught_grass',
    defaultMessage: 'Grass',
    description: 'Badge CAUGHT_GRASS',
  },
  [Badge.CAUGHT_ELECTRIC]: {
    id: 'badge_caught_electric',
    defaultMessage: 'Electric',
    description: 'Badge CAUGHT_ELECTRIC',
  },
  [Badge.CAUGHT_PSYCHIC]: {
    id: 'badge_caught_psychic',
    defaultMessage: 'Psychic',
    description: 'Badge CAUGHT_PSYCHIC',
  },
  [Badge.CAUGHT_ICE]: {
    id: 'badge_caught_ice',
    defaultMessage: 'Ice',
    description: 'Badge CAUGHT_ICE',
  },
  [Badge.CAUGHT_DRAGON]: {
    id: 'badge_caught_dragon',
    defaultMessage: 'Dragon',
    description: 'Badge CAUGHT_DRAGON',
  },
  [Badge.CAUGHT_DARK]: {
    id: 'badge_caught_dark',
    defaultMessage: 'Dark',
    description: 'Badge CAUGHT_DARK',
  },
  [Badge.CAUGHT_FAIRY]: {
    id: 'badge_caught_fairy',
    defaultMessage: 'Fairy',
    description: 'Badge CAUGHT_FAIRY',
  },
});
