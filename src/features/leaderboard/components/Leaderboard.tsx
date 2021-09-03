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
    width: 50,
    sortable: false,
    type: 'number',
    valueGetter: (params: GridValueGetterParams) => {
      return params.api.getRowIndex(params.id) + 1;
    },
  },
  {
    field: 'name',
    headerName: 'Trainer',
    flex: 1,
  },
  {
    field: 'level',
    headerName: 'Level',
    type: 'number',
    flex: 1,
  },
  {
    field: 'xp',
    headerName: 'XP',
    type: 'number',
    flex: 1,
  },
  {
    field: 'battles_won',
    headerName: 'Battles won',
    type: 'number',
    flex: 1,
  },
  {
    field: 'caught_pokemon',
    headerName: 'Caught Pokémon',
    type: 'number',
    flex: 1,
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
