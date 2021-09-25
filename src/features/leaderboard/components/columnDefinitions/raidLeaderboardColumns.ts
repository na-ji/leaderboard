import type { ValueGetterParams } from '@ag-grid-community/core';

import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const raidLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'total_raids',
    minWidth: 130,
    type: 'number',
    valueGetter: ({ data }: ValueGetterParams): number => {
      return data.normal_raids_won + data.legendary_raids_won;
    },
  },
  {
    field: 'normal_raids_won',
    minWidth: 145,
    type: 'number',
  },
  {
    field: 'legendary_raids_won',
    minWidth: 165,
    type: 'number',
  },
  {
    field: 'raids_with_friends',
    minWidth: 170,
    type: 'number',
  },
  {
    field: 'raid_achievements',
    minWidth: 180,
    type: 'number',
  },
  {
    field: 'unique_raid_bosses',
    minWidth: 130,
    type: 'number',
  },
];
