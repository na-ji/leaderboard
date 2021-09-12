import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const gymLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'gym_battles_won',
    flex: 1,
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'hours_defended',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'berries_fed',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
];
