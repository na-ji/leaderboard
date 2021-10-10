import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-material.css';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import type { AgGridEvent } from '@ag-grid-community/core';
import { AgGridColumn, AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { memo } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

import { columnHeaderTranslations } from '@/features/leaderboard/lang';
import { ColumnsType } from '@/features/leaderboard/components/columnDefinitions';
import { getDarkTeamColor, getLightTeamColor } from '@/utils/team-colors';
import { Team, Trainer } from '@/types';
import { agGridTranslations } from '@/features/leaderboard/lang/agGridTranslations';

export interface LeaderboardProps {
  trainers: Trainer[];
  columns: ColumnsType;
  defaultSort: ColumnsType[0]['field'];
}

const ColoredTeamRowsContainer = styled(Box)`
  height: 593px;
  width: 100%;

  .ag-row:hover {
    cursor: pointer;
  }

  .team-${Team.MYSTIC} {
    background-color: ${getLightTeamColor(Team.MYSTIC)};

    :hover {
      background-color: ${getDarkTeamColor(Team.MYSTIC)};
    }
  }

  .team-${Team.VALOR} {
    background-color: ${getLightTeamColor(Team.VALOR)};

    :hover {
      background-color: ${getDarkTeamColor(Team.VALOR)};
    }
  }

  .team-${Team.INSTINCT} {
    background-color: ${getLightTeamColor(Team.INSTINCT)};

    :hover {
      background-color: ${getDarkTeamColor(Team.INSTINCT)};
    }
  }
`;

const autoSizeColumns = ({ api, columnApi }: AgGridEvent): void => {
  if (typeof window === 'undefined') {
    return api.sizeColumnsToFit();
  }

  const numberOfColumns = columnApi.getAllColumns()?.length ?? 1;
  const windowWidth = window.innerWidth ?? 100;
  const ratio = windowWidth / numberOfColumns;

  if (ratio <= 120) {
    return columnApi.autoSizeAllColumns();
  }

  api.sizeColumnsToFit();
};

export const Leaderboard = memo(({ trainers, columns, defaultSort }: LeaderboardProps): JSX.Element => {
  const intl = useIntl();
  const router = useRouter();

  return (
    <ColoredTeamRowsContainer className="ag-theme-material">
      <AgGridReact
        getRowClass={(params) => `team-${params.data.team}`}
        localeTextFunc={(key, defaultValue) => {
          return key in agGridTranslations
            ? intl.formatMessage(agGridTranslations[key as keyof typeof agGridTranslations])
            : defaultValue;
        }}
        modules={[ClientSideRowModelModule]}
        onGridReady={autoSizeColumns}
        onPaginationChanged={autoSizeColumns}
        onRowClicked={({ data }) => router.push(`/profile/${encodeURIComponent(data.trainer_id)}`)}
        onSortChanged={({ api }) => api.refreshCells()}
        pagination={true}
        paginationPageSize={10}
        rowData={trainers}
        sortingOrder={['desc', 'asc']}
      >
        <AgGridColumn
          headerName={intl.formatMessage(columnHeaderTranslations.rank)}
          valueGetter={({ node }) => (node?.rowIndex ?? 0) + 1}
        />
        {columns.map((column, index) => (
          <AgGridColumn
            field={column.field}
            headerName={
              column.field in columnHeaderTranslations
                ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  intl.formatMessage(columnHeaderTranslations[column.field])
                : column.field
            }
            key={index}
            sort={column.field === defaultSort ? 'desc' : undefined}
            sortable={true}
            valueFormatter={column.type === 'number' ? ({ value }) => intl.formatNumber(value) : undefined}
            valueGetter={column.valueGetter}
          />
        ))}
      </AgGridReact>
    </ColoredTeamRowsContainer>
  );
});
Leaderboard.displayName = 'MemoizedLeaderboard';
