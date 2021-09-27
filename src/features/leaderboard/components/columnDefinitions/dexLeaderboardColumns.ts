import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';
import { ValueGetterParams } from '@ag-grid-community/core';

export const dexLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'total_dex',
    minWidth: 130,
    type: 'number',
    valueGetter: ({ data }: ValueGetterParams): number => {
      return (
        data.dex_gen1 +
        data.dex_gen2 +
        data.dex_gen3 +
        data.dex_gen4 +
        data.dex_gen5 +
        data.dex_gen6 +
        data.dex_gen7 +
        data.dex_gen8
      );
    },
  },
  {
    field: 'dex_gen1',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen2',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen3',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen4',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen5',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen6',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen7',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen8',
    minWidth: 130,
    type: 'number',
  },
];
