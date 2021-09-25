import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const gymLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'gym_battles_won',
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'hours_defended',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'berries_fed',
    minWidth: 130,
    type: 'number',
  },
];
