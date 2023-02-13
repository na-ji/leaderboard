import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const miscellaneousLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'trade_km',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'vivillon',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'collections_done',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'best_buddies',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'mega_evos',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'unique_mega_evos',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'seven_day_streaks',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'caught_at_lure',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'photobombs',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'wayfarer_agreements',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'trainers_referred',
    minWidth: 120,
    type: 'number',
  },
];
