import '@ag-grid-community/styles/ag-grid.css';
import { AgGridEvent, ModuleRegistry } from '@ag-grid-community/core';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import {
  ColDef,
  ColGroupDef,
  ValueFormatterFunc,
  ValueGetterFunc,
} from '@ag-grid-community/core/dist/cjs/es5/entities/colDef';

import { agGridTranslations } from '@/features/leaderboard/lang/agGridTranslations';
import { columnHeaderTranslations } from '@/features/leaderboard/lang';
import { ColumnsType } from '@/features/leaderboard/components/columnDefinitions';
import { LeaderboardPagination } from '@/features/leaderboard/components/LeaderboardPagination';
import { MedalCell } from '@/features/leaderboard/components/MedalCell';
import { Trainer } from '@/types';
import { useLeaderboardPaginationContext } from '@/features/leaderboard/components/LeaderbordPaginationContext';

export interface LeaderboardProps {
  columns: ColumnsType;
  defaultSort: ColumnsType[0]['field'];
  trainers: Trainer[];
}

ModuleRegistry.register(ClientSideRowModelModule);

const autoSizeColumns = ({ api, columnApi }: Pick<AgGridEvent<Trainer>, 'api' | 'columnApi'>): void => {
  if (typeof window === 'undefined') {
    return api.sizeColumnsToFit();
  }

  const numberOfColumns = columnApi.getColumns()?.length ?? 1;
  const windowWidth = window.innerWidth ?? 100;
  const ratio = windowWidth / numberOfColumns;

  if (ratio <= 128) {
    return columnApi.autoSizeAllColumns();
  }

  api.sizeColumnsToFit();
};

export const Leaderboard = memo(({ trainers, columns, defaultSort }: LeaderboardProps): JSX.Element => {
  const intl = useIntl();
  const router = useRouter();

  const { setGridApi, setPagination } = useLeaderboardPaginationContext();
  const gridRef = useRef<AgGridReact>(null);

  const onPaginationChanged = useCallback(
    ({ api }: AgGridEvent<Trainer>) => {
      setGridApi(api);

      const nextPagination = {
        currentPage: api.paginationGetCurrentPage(),
        totalPage: api.paginationGetTotalPages(),
      };

      setPagination((currentPagination) => {
        if (
          currentPagination.currentPage !== nextPagination.currentPage ||
          currentPagination.totalPage !== nextPagination.totalPage
        ) {
          return nextPagination;
        }

        return currentPagination;
      });
    },
    [setGridApi, setPagination],
  );

  useEffect(() => {
    if (gridRef.current && gridRef.current.api && gridRef.current.columnApi) {
      autoSizeColumns({ api: gridRef.current.api, columnApi: gridRef.current.columnApi });
    }
  }, [columns]);

  const columnDefs = useMemo((): (ColDef<Trainer> | ColGroupDef<Trainer>)[] => {
    const defs: ColDef<Trainer>[] = [
      {
        cellRenderer: MedalCell,
        headerName: intl.formatMessage(columnHeaderTranslations.rank),
        maxWidth: 64,
        minWidth: 64,
        pinned: true,
        valueGetter: (({ node }) => (node?.rowIndex ?? 0) + 1) as ValueGetterFunc,
        width: 64,
      },
    ];

    return defs.concat(
      columns.map<ColDef<Trainer>>((column) => ({
        cellRenderer: column.cellRenderer,
        field: column.field,
        headerName:
          column.field in columnHeaderTranslations
            ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              intl.formatMessage(columnHeaderTranslations[column.field])
            : column.field,
        initialSort: column.field === defaultSort ? 'desc' : undefined,
        pinned: column.pinned,
        sortable: true,
        suppressMovable: true,
        valueFormatter:
          column.type === 'number' ? ((({ value }) => intl.formatNumber(value)) as ValueFormatterFunc) : undefined,
        valueGetter: column.valueGetter,
      })),
    );
  }, [columns, defaultSort, intl]);

  return (
    <>
      <div className="ag-theme-leaderboard h-[606px] w-full">
        <AgGridReact
          columnDefs={columnDefs}
          getLocaleText={({ key, defaultValue }) => {
            return key in agGridTranslations
              ? intl.formatMessage(agGridTranslations[key as keyof typeof agGridTranslations])
              : defaultValue;
          }}
          headerHeight={45}
          onGridReady={autoSizeColumns}
          onPaginationChanged={onPaginationChanged}
          onRowClicked={({ data }) => router.push(`/profile/${encodeURIComponent(data.trainer_id)}`)}
          onSortChanged={({ api }) => api.refreshCells()}
          pagination={true}
          paginationPageSize={10}
          ref={gridRef}
          rowData={trainers}
          rowHeight={56}
          sortingOrder={['desc', 'asc']}
          suppressHorizontalScroll={true}
          suppressPaginationPanel={true}
        />
      </div>
      <div className="flex justify-end mt-7.5">
        <LeaderboardPagination />
      </div>
    </>
  );
});
Leaderboard.displayName = 'MemoizedLeaderboard';
