import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const typeLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'caught_normal',
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_fighting',
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_flying',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_poison',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_ground',
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_rock',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_bug',
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_ghost',
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_steel',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_fire',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_water',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_grass',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_electric',
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_psychic',
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_ice',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'caught_dragon',
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'caught_dark',
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'caught_fairy',
    minWidth: 130,
    type: 'number',
  },
];
