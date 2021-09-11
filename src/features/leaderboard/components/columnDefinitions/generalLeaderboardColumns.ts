import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';
import { GridValueGetterParams } from '@mui/x-data-grid';

export const generalLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'level',
    flex: 1,
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'xp',
    flex: 1,
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'caught_pokemon',
    flex: 1,
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'stops_spun',
    flex: 1,
    minWidth: 160,
    type: 'number',
  },
  {
    field: 'km_walked',
    flex: 1,
    minWidth: 110,
    type: 'number',
    valueGetter: (params: GridValueGetterParams): number => {
      return Math.round(params.row.km_walked);
    },
  },
  {
    field: 'hatched',
    flex: 1,
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'quests',
    flex: 1,
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'evolved',
    flex: 1,
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'trades',
    flex: 1,
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'battles_won',
    flex: 1,
    minWidth: 200,
    type: 'number',
  },
];
