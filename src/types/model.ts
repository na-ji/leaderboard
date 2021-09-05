export enum Team {
  MYSTIC = 1,
  VALOR = 2,
  INSTINCT = 3,
}

export interface Trainer {
  name: string;
  team: Team;
  level: number;
  xp: number;
  battles_won: number;
  last_seen: number;
  km_walked?: number;
  caught_pokemon?: number;
  trainer_id?: string;
  gbl_rank?: number;
  gbl_rating?: number;
  special_badges?: string;
  stops_spun?: number;
  evolved?: number;
  hatched?: number;
  quests?: number;
  trades?: number;
  photobombs?: number;
  purified?: number;
  grunts_defeated?: number;
  gym_battles_won?: number;
  normal_raids_won?: number;
  legendary_raids_won?: number;
  trainings_won?: number;
  berries_fed?: number;
  hours_defended?: number;
  best_friends?: number;
  best_buddies?: number;
  giovanni_defeated?: number;
  mega_evos?: number;
  collections_done?: number;
  unique_stops_spun?: number;
  unique_mega_evos?: number;
  unique_raid_bosses?: number;
  unique_unown?: number;
  '7_day_streaks'?: number;
  trade_km?: number;
  raids_with_friends?: number;
  caught_at_lure?: number;
  wayfarer_agreements?: number;
  trainers_referred?: number;
  raid_achievements?: number;
  xl_karps?: number;
  xs_rats?: number;
  pikachu_caught?: number;
  league_great_won?: number;
  league_ultra_won?: number;
  league_master_won?: number;
  dex_gen1?: number;
  dex_gen2?: number;
  dex_gen3?: number;
  dex_gen4?: number;
  dex_gen5?: number;
  dex_gen6?: number;
  dex_gen7?: number;
  dex_gen8?: number;
  caught_normal?: number;
  caught_fighting?: number;
  caught_flying?: number;
  caught_poison?: number;
  caught_ground?: number;
  caught_rock?: number;
  caught_bug?: number;
  caught_ghost?: number;
  caught_steel?: number;
  caught_fire?: number;
  caught_water?: number;
  caught_grass?: number;
  caught_electric?: number;
  caught_psychic?: number;
  caught_ice?: number;
  caught_dragon?: number;
  caught_dark?: number;
  caught_fairy?: number;
}

export enum Badge {
  KM_WALKED = 'km_walked',
  CAUGHT_POKEMON = 'caught_pokemon',
  STOPS_SPUN = 'stops_spun',
  EVOLVED = 'evolved',
  HATCHED = 'hatched',
  QUESTS = 'quests',
  TRADES = 'trades',
  PHOTOBOMBS = 'photobombs',
  PURIFIED = 'purified',
  GRUNTS_DEFEATED = 'grunts_defeated',
  GYM_BATTLES_WON = 'gym_battles_won',
  NORMAL_RAIDS_WON = 'normal_raids_won',
  LEGENDARY_RAIDS_WON = 'legendary_raids_won',
  TRAININGS_WON = 'trainings_won',
  BERRIES_FED = 'berries_fed',
  HOURS_DEFENDED = 'hours_defended',
  BEST_FRIENDS = 'best_friends',
  BEST_BUDDIES = 'best_buddies',
  GIOVANNI_DEFEATED = 'giovanni_defeated',
  MEGA_EVOS = 'mega_evos',
  COLLECTIONS_DONE = 'collections_done',
  UNIQUE_STOPS_SPUN = 'unique_stops_spun',
  UNIQUE_MEGA_EVOS = 'unique_mega_evos',
  UNIQUE_RAID_BOSSES = 'unique_raid_bosses',
  UNIQUE_UNOWN = 'unique_unown',
  '7_DAY_STREAKS' = '7_day_streaks',
  TRADE_KM = 'trade_km',
  RAIDS_WITH_FRIENDS = 'raids_with_friends',
  CAUGHT_AT_LURE = 'caught_at_lure',
  WAYFARER_AGREEMENTS = 'wayfarer_agreements',
  TRAINERS_REFERRED = 'trainers_referred',
  RAID_ACHIEVEMENTS = 'raid_achievements',
  XL_KARPS = 'xl_karps',
  XS_RATS = 'xs_rats',
  PIKACHU_CAUGHT = 'pikachu_caught',
  LEAGUE_GREAT_WON = 'league_great_won',
  LEAGUE_ULTRA_WON = 'league_ultra_won',
  LEAGUE_MASTER_WON = 'league_master_won',
  DEX_GEN_1 = 'dex_gen1',
  DEX_GEN_2 = 'dex_gen2',
  DEX_GEN_3 = 'dex_gen3',
  DEX_GEN_4 = 'dex_gen4',
  DEX_GEN_5 = 'dex_gen5',
  DEX_GEN_6 = 'dex_gen6',
  DEX_GEN_7 = 'dex_gen7',
  DEX_GEN_8 = 'dex_gen8',
  CAUGHT_NORMAL = 'caught_normal',
  CAUGHT_FIGHTING = 'caught_fighting',
  CAUGHT_FLYING = 'caught_flying',
  CAUGHT_POISON = 'caught_poison',
  CAUGHT_GROUND = 'caught_ground',
  CAUGHT_ROCK = 'caught_rock',
  CAUGHT_BUG = 'caught_bug',
  CAUGHT_GHOST = 'caught_ghost',
  CAUGHT_STEEL = 'caught_steel',
  CAUGHT_FIRE = 'caught_fire',
  CAUGHT_WATER = 'caught_water',
  CAUGHT_GRASS = 'caught_grass',
  CAUGHT_ELECTRIC = 'caught_electric',
  CAUGHT_PSYCHIC = 'caught_psychic',
  CAUGHT_ICE = 'caught_ice',
  CAUGHT_DRAGON = 'caught_dragon',
  CAUGHT_DARK = 'caught_dark',
  CAUGHT_FAIRY = 'caught_fairy',
}

export const badgeToAssetId: Partial<Record<Badge, string | number>> = {
  [Badge.KM_WALKED]: 1,
  [Badge.DEX_GEN_1]: 2,
  [Badge.CAUGHT_POKEMON]: 3,
  [Badge.EVOLVED]: 5,
  [Badge.HATCHED]: 6,
  [Badge.STOPS_SPUN]: 8,
  [Badge.XL_KARPS]: 11,
  [Badge.GYM_BATTLES_WON]: 13,
  [Badge.TRAININGS_WON]: 14,
  [Badge.XS_RATS]: 36,
  [Badge.PIKACHU_CAUGHT]: 37,
  [Badge.UNIQUE_UNOWN]: 38,
  [Badge.DEX_GEN_2]: 39,
  [Badge.NORMAL_RAIDS_WON]: 40,
  [Badge.LEGENDARY_RAIDS_WON]: 41,
  [Badge.BERRIES_FED]: 42,
  [Badge.HOURS_DEFENDED]: 43,
  [Badge.DEX_GEN_3]: 45,
  [Badge.QUESTS]: 46,
  [Badge.BEST_FRIENDS]: 48,
  [Badge.TRADES]: 49,
  [Badge.TRADE_KM]: 50,
  [Badge.DEX_GEN_4]: 51,
  [Badge.LEAGUE_GREAT_WON]: 52,
  [Badge.LEAGUE_ULTRA_WON]: 53,
  [Badge.LEAGUE_MASTER_WON]: 54,
  [Badge.PHOTOBOMBS]: 55,
  [Badge.DEX_GEN_5]: 56,
  [Badge.PURIFIED]: 57,
  [Badge.GRUNTS_DEFEATED]: 58,
  [Badge.GIOVANNI_DEFEATED]: 59,
  [Badge.BEST_BUDDIES]: 60,
  [Badge.DEX_GEN_6]: 61,
  [Badge.DEX_GEN_7]: 62,
  [Badge.DEX_GEN_8]: 63,
  [Badge['7_DAY_STREAKS']]: 64,
  [Badge.UNIQUE_RAID_BOSSES]: 65,
  [Badge.RAIDS_WITH_FRIENDS]: 66,
  [Badge.CAUGHT_AT_LURE]: 67,
  [Badge.WAYFARER_AGREEMENTS]: 68,
  [Badge.MEGA_EVOS]: 69,
  [Badge.UNIQUE_MEGA_EVOS]: 70,
  [Badge.TRAINERS_REFERRED]: 73,
  [Badge.COLLECTIONS_DONE]: '1002_01',
  [Badge.CAUGHT_NORMAL]: 'ico_0_normal',
  [Badge.CAUGHT_FIGHTING]: 'ico_1_fighting',
  [Badge.CAUGHT_FLYING]: 'ico_2_flying',
  [Badge.CAUGHT_POISON]: 'ico_3_poison',
  [Badge.CAUGHT_GROUND]: 'ico_4_ground',
  [Badge.CAUGHT_ROCK]: 'ico_5_rock',
  [Badge.CAUGHT_BUG]: 'ico_6_bug',
  [Badge.CAUGHT_GHOST]: 'ico_7_ghost',
  [Badge.CAUGHT_STEEL]: 'ico_8_steel',
  [Badge.CAUGHT_FIRE]: 'ico_9_fire',
  [Badge.CAUGHT_WATER]: 'ico_10_water',
  [Badge.CAUGHT_GRASS]: 'ico_11_grass',
  [Badge.CAUGHT_ELECTRIC]: 'ico_12_electric',
  [Badge.CAUGHT_PSYCHIC]: 'ico_13_psychic',
  [Badge.CAUGHT_ICE]: 'ico_14_ice',
  [Badge.CAUGHT_DRAGON]: 'ico_15_dragon',
  [Badge.CAUGHT_DARK]: 'ico_16_dark',
  [Badge.CAUGHT_FAIRY]: 'ico_17_fairy',
};
