import Box from '@mui/material/Box';
import styled from 'styled-components';
import { DataGrid, frFR, GridLocaleText, GridSortModel } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

import { columnHeaderTranslations } from '@/features/leaderboard/lang';
import { ColumnsType } from '@/features/leaderboard/components/columnDefinitions';
import { getLightTeamColor } from '@/utils/team-colors';
import { SupportedLocale } from '@/utils/i18n';
import { Team, Trainer } from '@/types';

export interface LeaderboardProps {
  trainers: Trainer[];
  columns: ColumnsType;
  defaultSort: ColumnsType[0]['field'];
}

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

export const Leaderboard = ({ trainers, columns, defaultSort }: LeaderboardProps): JSX.Element => {
  const router = useRouter();
  const intl = useIntl();

  const { locale } = router;
  let localeText: Partial<GridLocaleText> = {};
  if (locale === SupportedLocale.FR && 'components' in frFR) {
    localeText = frFR.components.MuiDataGrid.defaultProps.localeText;
  }

  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: defaultSort, sort: 'desc' }]);

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
          headerName:
            column.field in columnHeaderTranslations
              ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                intl.formatMessage(columnHeaderTranslations[column.field])
              : column.field,
        }))}
        getRowClassName={(params) => `team-${params.row.team}`}
        getRowId={(row) => row.trainer_id}
        hideFooter
        localeText={localeText}
        onRowClick={(params) => router.push(`/profile/${encodeURIComponent(params.row.trainer_id)}`)}
        onSortModelChange={(model) => {
          if (
            model.length !== sortModel.length ||
            model.some(
              (gridSortItem) => gridSortItem.field !== sortModel[0].field || gridSortItem.sort !== sortModel[0].sort,
            )
          ) {
            setSortModel(model);
          }
        }}
        rows={trainers}
        sortingOrder={['desc', 'asc']}
        sortModel={sortModel}
      />
    </ColoredTeamRowsContainer>
  );
};
