import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const dexLeaderboardColumns: ColumnsType = [
  ...commonColumns,
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
