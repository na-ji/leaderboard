import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const specificLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'pikachu_caught',
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'unique_unown',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'xl_karps',
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'xs_rats',
    minWidth: 140,
    type: 'number',
  },
  {
    field: 'tiny_pokemon_caught',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'jumbo_pokemon_caught',
    minWidth: 120,
    type: 'number',
  },
];
