import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const typeLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'caught_normal',
    flex: 1,
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_fighting',
    flex: 1,
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_flying',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_poison',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_ground',
    flex: 1,
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_rock',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_bug',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_ghost',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_steel',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_fire',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_water',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_grass',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_electric',
    flex: 1,
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_psychic',
    flex: 1,
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_ice',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_dragon',
    flex: 1,
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_dark',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_fairy',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
];
