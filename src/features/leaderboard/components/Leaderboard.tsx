import Box from '@mui/material/Box';
import styled from 'styled-components';
import { DataGrid, GridColDef, GridValueGetterParams, GridSortModel, frFR, GridLocaleText } from '@mui/x-data-grid';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';

import { getLightTeamColor } from '@/utils/team-colors';
import { SupportedLocale } from '@/utils/i18n';
import { Team, Trainer } from '@/types';

interface LeaderboardProps {
  trainers: Trainer[];
}

const columns: Array<
  GridColDef & {
    field: Extract<keyof Trainer, 'trainer_id' | 'name' | 'level' | 'xp' | 'battles_won' | 'caught_pokemon'>;
  }
> = [
  {
    field: 'trainer_id',
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
    minWidth: 150,
  },
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
    field: 'battles_won',
    flex: 1,
    minWidth: 200,
    type: 'number',
  },
  {
    field: 'caught_pokemon',
    flex: 1,
    minWidth: 200,
    type: 'number',
  },
];

const ColoredTeamRowsContainer = styled(Box)`
  [class^='team']:hover {
    cursor: pointer;
  }

  .team-${Team.MYSTIC} {
    background-color: ${getLightTeamColor(Team.MYSTIC)};
  }
  .team-${Team.VALOR} {
    background-color: ${getLightTeamColor(Team.VALOR)};
  }
  .team-${Team.INSTINCT} {
    background-color: ${getLightTeamColor(Team.INSTINCT)};
  }
`;

export const columnHeaderTranslations = defineMessages({
  trainer_id: {
    id: 'leaderboard_header.rank',
    defaultMessage: 'Rank',
    description: 'Leaderboard rank column header',
  },
  name: {
    id: 'leaderboard_header.name',
    defaultMessage: 'Trainer',
    description: 'Leaderboard trainer column header',
  },
  level: {
    id: 'leaderboard_header.level',
    defaultMessage: 'Level',
    description: 'Leaderboard level column header',
  },
  xp: {
    id: 'leaderboard_header.xp',
    defaultMessage: 'XP',
    description: 'Leaderboard xp column header',
  },
  battles_won: {
    id: 'leaderboard_header.battles_won',
    defaultMessage: 'Battles won',
    description: 'Leaderboard battles won column header',
  },
  caught_pokemon: {
    id: 'leaderboard_header.caught_pokemon',
    defaultMessage: 'Pokémon caught',
    description: 'Leaderboard caught pokemon column header',
  },
});

export const Leaderboard = ({ trainers }: LeaderboardProps): JSX.Element => {
  const router = useRouter();
  const intl = useIntl();

  const { locale } = router;
  let localeText: Partial<GridLocaleText> = {};
  if (locale === SupportedLocale.FR && 'components' in frFR) {
    localeText = frFR.components.MuiDataGrid.defaultProps.localeText;
  }

  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'xp', sort: 'desc' }]);

  useEffect(() => {
    router.prefetch(`/profile/${encodeURIComponent('' + trainers[0].trainer_id)}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ColoredTeamRowsContainer>
      <DataGrid
        autoHeight
        columns={columns.map((column) => ({
          ...column,
          headerName: intl.formatMessage(columnHeaderTranslations[column.field]),
        }))}
        getRowClassName={(params) => `team-${params.row.team}`}
        getRowId={(row) => row.trainer_id}
        hideFooter
        localeText={localeText}
        onRowClick={(params) => router.push(`/profile/${encodeURIComponent(params.row.trainer_id)}`)}
        onSortModelChange={(model) => setSortModel(model)}
        rows={trainers}
        sortingOrder={['desc', 'asc']}
        sortModel={sortModel}
      />
    </ColoredTeamRowsContainer>
  );
};
