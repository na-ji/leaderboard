import { ReactNode } from 'react';

import { Card } from '@/components/Card';

interface OverviewCardProps {
  icon: ReactNode;
  title: string | number;
  value: string | number;
  valueTooltip?: string;
}

export const InfoCard = ({ icon, title, value, valueTooltip }: OverviewCardProps): JSX.Element => {
  return (
    <Card className="flex p-4 lg:p-5 justify-between items-center">
      <div className="flex flex-col grow">
        <div className="text-grey-70 text-[12px] leading-3">{title}</div>
        <div className="title-3 mt-2 lg:mt-3 font-semibold" title={valueTooltip} aria-label={valueTooltip}>
          {value}
        </div>
      </div>
      <div className="w-7.5 lg:w-9 shrink-0 flex items-center justify-center">{icon}</div>
    </Card>
  );
};
