import { GridValueGetterParams } from '@mui/x-data-grid';

import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const raidLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'total_raids',
    flex: 1,
    minWidth: 130,
    type: 'number',
    valueGetter: (params: GridValueGetterParams): number => {
      return params.row.normal_raids_won + params.row.legendary_raids_won;
    },
  },
  {
    field: 'normal_raids_won',
    flex: 1,
    minWidth: 145,
    type: 'number',
  },
  {
    field: 'legendary_raids_won',
    flex: 1,
    minWidth: 165,
    type: 'number',
  },
  {
    field: 'raids_with_friends',
    flex: 1,
    minWidth: 170,
    type: 'number',
  },
  {
    field: 'raid_achievements',
    flex: 1,
    minWidth: 180,
    type: 'number',
  },
  {
    field: 'unique_raid_bosses',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
];
