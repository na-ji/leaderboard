import type { ValueGetterParams } from '@ag-grid-community/core';

import { Trainer } from '@/types';

export type ColumnsType = Array<{
  field: keyof Trainer | 'total_raids' | 'total_dex';
  minWidth?: number;
  type?: 'number';
  valueGetter?: ({ data }: ValueGetterParams) => number | string;
}>;

export const commonColumns: ColumnsType = [
  {
    field: 'name',
    minWidth: 150,
  },
];
