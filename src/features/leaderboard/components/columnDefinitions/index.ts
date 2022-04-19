import { ColumnsType } from './common';
import { dexLeaderboardColumns } from './dexLeaderboardColumns';
import { generalLeaderboardColumns } from './generalLeaderboardColumns';
import { gymLeaderboardColumns } from './gymLeaderboardColumns';
import { MainTab, LeaderboardTab } from '@/features/leaderboard/types';
import { miscellaneousLeaderboardColumns } from './miscellaneousLeaderboardColumns';
import { pvpLeaderboardColumns } from './pvpLeaderboardColumns';
import { raidLeaderboardColumns } from './raidLeaderboardColumns';
import { rocketLeaderboardColumns } from './rocketLeaderboardColumns';
import { specificLeaderboardColumns } from './specificLeaderboardColumns';
import { typeLeaderboardColumns } from './typeLeaderboardColumns';

export type { ColumnsType };
export const leaderboardsData: Record<
  MainTab,
  Array<{
    leaderboard: LeaderboardTab;
    columns: ColumnsType;
    defaultSort: ColumnsType[0]['field'];
  }>
> = {
  [MainTab.GENERAL]: [
    {
      leaderboard: LeaderboardTab.GENERAL,
      columns: generalLeaderboardColumns,
      defaultSort: 'xp',
    },
    {
      leaderboard: LeaderboardTab.MISCELLANEOUS,
      columns: miscellaneousLeaderboardColumns,
      defaultSort: 'trade_km',
    },
  ],
  [MainTab.BATTLES]: [
    {
      leaderboard: LeaderboardTab.RAID,
      columns: raidLeaderboardColumns,
      defaultSort: 'total_raids',
    },
    {
      leaderboard: LeaderboardTab.ROCKET,
      columns: rocketLeaderboardColumns,
      defaultSort: 'grunts_defeated',
    },
    {
      leaderboard: LeaderboardTab.GYM,
      columns: gymLeaderboardColumns,
      defaultSort: 'gym_battles_won',
    },
    {
      leaderboard: LeaderboardTab.PVP,
      columns: pvpLeaderboardColumns,
      defaultSort: 'gbl_rank',
    },
  ],
  [MainTab.COLLECTION]: [
    {
      leaderboard: LeaderboardTab.DEX,
      columns: dexLeaderboardColumns,
      defaultSort: 'total_dex',
    },
    {
      leaderboard: LeaderboardTab.SPECIFIC,
      columns: specificLeaderboardColumns,
      defaultSort: 'pikachu_caught',
    },
    {
      leaderboard: LeaderboardTab.TYPE,
      columns: typeLeaderboardColumns,
      defaultSort: 'caught_normal',
    },
  ],
};
