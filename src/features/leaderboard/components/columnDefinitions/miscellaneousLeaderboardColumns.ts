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
    field: 'showcase_max_size_first_place',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'event_check_ins',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'parties_completed',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'total_route_play',
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
