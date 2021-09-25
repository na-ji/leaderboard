import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const rocketLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'grunts_defeated',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'giovanni_defeated',
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'purified',
    minWidth: 140,
    type: 'number',
  },
];
