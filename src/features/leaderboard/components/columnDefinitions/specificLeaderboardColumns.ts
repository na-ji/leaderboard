import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const specificLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'pikachu_caught',
    flex: 1,
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'unique_unown',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'xl_karps',
    flex: 1,
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'xs_rats',
    flex: 1,
    minWidth: 140,
    type: 'number',
  },
];
