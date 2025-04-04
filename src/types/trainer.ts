import { Team } from '@/types/team';

export interface Trainer {
  name: string;
  team: Team;
  level: number;
  xp: number;
  battles_won: number;
  last_seen: number;
  km_walked?: number;
  caught_pokemon?: number;
  friendship_id?: string;
  gbl_rank?: number;
  gbl_rating?: number;
  event_badges?: string;
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
  vivillon?: number;
  showcase_max_size_first_place?: number;
  event_check_ins?: number;
  parties_completed?: number;
  total_route_play?: number;
  unique_stops_spun?: number;
  unique_mega_evos?: number;
  unique_raid_bosses?: number;
  unique_unown?: number;
  seven_day_streaks?: number;
  trade_km?: number;
  raids_with_friends?: number;
  caught_at_lure?: number;
  wayfarer_agreements?: number;
  trainers_referred?: number;
  raid_achievements?: number;
  xl_karps?: number;
  xs_rats?: number;
  tiny_pokemon_caught?: number;
  jumbo_pokemon_caught?: number;
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
  dex_gen8a?: number;
  dex_gen9?: number;
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

export interface PeriodTrainer extends Trainer {
  date: string;
}

export interface RawPeriodTrainer extends Trainer {
  date: Date;
}
