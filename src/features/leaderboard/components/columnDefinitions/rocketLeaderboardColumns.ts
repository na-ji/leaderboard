import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const rocketLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'grunts_defeated',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'giovanni_defeated',
    flex: 1,
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'purified',
    flex: 1,
    minWidth: 140,
    type: 'number',
  },
];
