import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { red, blue, yellow } from '@mui/material/colors';

import { Team, Trainer } from '@/types/model';
import styled from 'styled-components';

interface LeaderboardProps {
  trainers: Trainer[];
}

const columns: GridColDef[] = [
  {
    field: 'trainer_id',
    headerName: 'Rank',
    width: 90,
    sortable: false,
    type: 'number',
    valueGetter: (params: GridValueGetterParams) => {
      return params.api.getRowIndex(params.id) + 1;
    },
  },
  {
    field: 'name',
    flex: 1,
    headerName: 'Trainer',
    minWidth: 150,
  },
  {
    field: 'level',
    flex: 1,
    headerName: 'Level',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'xp',
    flex: 1,
    headerName: 'XP',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'battles_won',
    flex: 1,
    headerName: 'Battles won',
    minWidth: 160,
    type: 'number',
  },
  {
    field: 'caught_pokemon',
    flex: 1,
    headerName: 'Caught Pokémon',
    minWidth: 200,
    type: 'number',
  },
];

const ColoredTeamRowsContainer = styled(Box)`
  .team-${Team.MYSTIC} {
    background-color: ${blue[200]};
  }
  .team-${Team.VALOR} {
    background-color: ${red[200]};
  }
  .team-${Team.INSTINCT} {
    background-color: ${yellow[200]};
  }
`;

export const Leaderboard = ({ trainers }: LeaderboardProps): JSX.Element => {
  return (
    <ColoredTeamRowsContainer>
      <DataGrid
        autoHeight
        columns={columns}
        getRowClassName={(params) => `team-${params.row.team}`}
        getRowId={(row) => row.trainer_id}
        hideFooter
        rows={trainers}
      />
    </ColoredTeamRowsContainer>
  );
};
