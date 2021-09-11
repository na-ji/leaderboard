import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const generalLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'level',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'xp',
    flex: 1,
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'battles_won',
    flex: 1,
    minWidth: 200,
    type: 'number',
  },
  {
    field: 'caught_pokemon',
    flex: 1,
    minWidth: 200,
    type: 'number',
  },
];
