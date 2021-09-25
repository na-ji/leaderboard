import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const pvpLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'gbl_rank',
    minWidth: 160,
    type: 'number',
  },
  {
    field: 'gbl_rating',
    minWidth: 160,
    type: 'number',
  },
  {
    field: 'league_great_won',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'league_ultra_won',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'league_master_won',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'trainings_won',
    minWidth: 180,
    type: 'number',
  },
];
