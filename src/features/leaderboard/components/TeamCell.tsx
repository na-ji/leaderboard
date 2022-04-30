import { ICellRendererParams } from '@ag-grid-community/core';

import { TeamLogo } from '@/components/TeamLogo';

export const TeamCell = ({ value }: ICellRendererParams): JSX.Element => {
  return (
    <div className="flex items-center justify-center w-6 h-6">
      <TeamLogo team={value} />
    </div>
  );
};
