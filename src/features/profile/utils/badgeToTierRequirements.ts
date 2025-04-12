import { Badge } from '@/types';

export const badgeToTierRequirements: Record<Badge, [number, number, number, number]> = {
  [Badge.KM_WALKED]: [10, 100, 1000, 10000],
  [Badge.DEX_GEN_1]: [5, 50, 100, 151],
  [Badge.CAUGHT_POKEMON]: [30, 500, 2000, 50000],
  [Badge.EVOLVED]: [3, 20, 200, 2000],
  [Badge.HATCHED]: [10, 100, 500, 2500],
  [Badge.STOPS_SPUN]: [100, 1000, 2000, 50000],
  [Badge.UNIQUE_STOPS_SPUN]: [10, 100, 1000, 2000],
  [Badge.XL_KARPS]: [3, 50, 300, 1000],
  [Badge.GYM_BATTLES_WON]: [10, 100, 1000, 4000],
  [Badge.TRAININGS_WON]: [10, 100, 1000, 2000],
  [Badge.XS_RATS]: [3, 50, 300, 1000],
  [Badge.PIKACHU_CAUGHT]: [3, 50, 300, 1000],
  [Badge.UNIQUE_UNOWN]: [3, 10, 26, 28],
  [Badge.DEX_GEN_2]: [5, 30, 70, 100],
  [Badge.NORMAL_RAIDS_WON]: [10, 100, 1000, 2000],
  [Badge.LEGENDARY_RAIDS_WON]: [10, 100, 1000, 2000],
  [Badge.BERRIES_FED]: [10, 100, 1000, 15000],
  [Badge.HOURS_DEFENDED]: [10, 100, 1000, 15000],
  [Badge.DEX_GEN_3]: [5, 40, 90, 135],
  [Badge.QUESTS]: [10, 100, 1000, 2500],
  [Badge.BEST_FRIENDS]: [1, 2, 3, 20],
  [Badge.TRADES]: [10, 100, 1000, 2500],
  [Badge.TRADE_KM]: [1000, 100000, 1000000, 10000000],
  [Badge.DEX_GEN_4]: [5, 30, 80, 107],
  [Badge.LEAGUE_GREAT_WON]: [5, 50, 200, 1000],
  [Badge.LEAGUE_ULTRA_WON]: [5, 50, 200, 1000],
  [Badge.LEAGUE_MASTER_WON]: [5, 50, 200, 1000],
  [Badge.PHOTOBOMBS]: [10, 50, 200, 400],
  [Badge.DEX_GEN_5]: [5, 50, 100, 156],
  [Badge.PURIFIED]: [5, 50, 500, 1000],
  [Badge.GRUNTS_DEFEATED]: [10, 100, 1000, 2000],
  [Badge.GIOVANNI_DEFEATED]: [1, 5, 20, 50],
  [Badge.BEST_BUDDIES]: [1, 10, 100, 200],
  [Badge.DEX_GEN_6]: [5, 25, 50, 72],
  [Badge.DEX_GEN_7]: [5, 25, 50, 86],
  [Badge.DEX_GEN_8]: [5, 25, 50, 89],
  [Badge.DEX_GEN_9]: [5, 30, 80, 103],
  [Badge.SEVEN_DAY_STREAKS]: [1, 10, 50, 100],
  [Badge.UNIQUE_RAID_BOSSES]: [2, 10, 50, 150],
  [Badge.RAIDS_WITH_FRIENDS]: [10, 100, 1000, 2000],
  [Badge.CAUGHT_AT_LURE]: [5, 25, 500, 2500],
  [Badge.WAYFARER_AGREEMENTS]: [50, 500, 1000, 1500],
  [Badge.MEGA_EVOS]: [1, 50, 500, 1000],
  [Badge.UNIQUE_MEGA_EVOS]: [1, 24, 36, 46],
  [Badge.TRAINERS_REFERRED]: [1, 10, 20, 50],
  [Badge.RAID_ACHIEVEMENTS]: [1, 50, 200, 500],
  [Badge.DEX_GEN_8A]: [1, 3, 5, 7],
  [Badge.TINY_POKEMON_CAUGHT]: [5, 25, 100, 500],
  [Badge.JUMBO_POKEMON_CAUGHT]: [5, 25, 100, 500],
  [Badge.COLLECTIONS_DONE]: [0, 0, 0, 0],
  [Badge.VIVILLON]: [1, 5, 10, 18],
  [Badge.SHOWCASE_MAX_SIZE_FIRST_PLACE]: [1, 10, 50, 100],
  [Badge.EVENT_CHECK_INS]: [1, 20, 50, 100],
  [Badge.PARTIES_COMPLETED]: [10, 50, 100, 200],
  [Badge.TOTAL_ROUTE_PLAY]: [10, 50, 200, 600],
  [Badge.CAUGHT_NORMAL]: [10, 50, 200, 2500],
  [Badge.CAUGHT_FIGHTING]: [10, 50, 200, 2500],
  [Badge.CAUGHT_FLYING]: [10, 50, 200, 2500],
  [Badge.CAUGHT_POISON]: [10, 50, 200, 2500],
  [Badge.CAUGHT_GROUND]: [10, 50, 200, 2500],
  [Badge.CAUGHT_ROCK]: [10, 50, 200, 2500],
  [Badge.CAUGHT_BUG]: [10, 50, 200, 2500],
  [Badge.CAUGHT_GHOST]: [10, 50, 200, 2500],
  [Badge.CAUGHT_STEEL]: [10, 50, 200, 2500],
  [Badge.CAUGHT_FIRE]: [10, 50, 200, 2500],
  [Badge.CAUGHT_WATER]: [10, 50, 200, 2500],
  [Badge.CAUGHT_GRASS]: [10, 50, 200, 2500],
  [Badge.CAUGHT_ELECTRIC]: [10, 50, 200, 2500],
  [Badge.CAUGHT_PSYCHIC]: [10, 50, 200, 2500],
  [Badge.CAUGHT_ICE]: [10, 50, 200, 2500],
  [Badge.CAUGHT_DRAGON]: [10, 50, 200, 2500],
  [Badge.CAUGHT_DARK]: [10, 50, 200, 2500],
  [Badge.CAUGHT_FAIRY]: [10, 50, 200, 2500],
};
