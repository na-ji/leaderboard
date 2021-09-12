import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const pvpLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'gbl_rank',
    flex: 1,
    minWidth: 160,
    type: 'number',
  },
  {
    field: 'gbl_rating',
    flex: 1,
    minWidth: 160,
    type: 'number',
  },
  {
    field: 'league_great_won',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'league_ultra_won',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'league_master_won',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'trainings_won',
    flex: 1,
    minWidth: 180,
    type: 'number',
  },
];
