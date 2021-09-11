import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const dexLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'dex_gen1',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen2',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen3',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen4',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen5',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen6',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen7',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'dex_gen8',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
];
