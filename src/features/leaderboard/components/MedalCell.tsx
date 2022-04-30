import { ICellRendererParams } from '@ag-grid-community/core';
import { MedalIcon } from '@/features/leaderboard/components/icons/MedalIcon';

export const MedalCell = ({ value }: ICellRendererParams): JSX.Element => {
  return (
    <div className="flex items-center">
      {value}
      {value <= 3 && <MedalIcon rank={value} className="ml-2" />}
    </div>
  );
};
