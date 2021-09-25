import type { ValueGetterParams } from '@ag-grid-community/core';

import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const generalLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'level',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'xp',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'caught_pokemon',
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'stops_spun',
    minWidth: 160,
    type: 'number',
  },
  {
    field: 'km_walked',
    minWidth: 110,
    type: 'number',
    valueGetter: ({ data }: ValueGetterParams): number => {
      return Math.round(data.km_walked);
    },
  },
  {
    field: 'hatched',
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'quests',
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'evolved',
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'trades',
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'battles_won',
    minWidth: 200,
    type: 'number',
  },
];
