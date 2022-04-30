import type { ValueGetterParams, ICellRendererParams } from '@ag-grid-community/core';
import { FC } from 'react';

import { Trainer } from '@/types';
import { TeamCell } from '@/features/leaderboard/components/TeamCell';

export type ColumnsType = Array<{
  cellRenderer?: FC<ICellRendererParams>;
  field: keyof Trainer | 'total_raids' | 'total_dex';
  minWidth?: number;
  pinned?: boolean;
  type?: 'number';
  valueGetter?: ({ data }: ValueGetterParams) => number | string;
}>;

export const commonColumns: ColumnsType = [
  {
    field: 'name',
    minWidth: 140,
    pinned: true,
  },
  {
    field: 'team',
    cellRenderer: TeamCell,
    minWidth: 56,
    pinned: true,
  },
];
