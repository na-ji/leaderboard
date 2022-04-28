import { ReactNode, ReactText } from 'react';
import { Card } from '@/components/Card';

interface OverviewCardProps {
  icon: ReactNode;
  title: ReactText;
  value: ReactText;
}

export const InfoCard = ({ icon, title, value }: OverviewCardProps): JSX.Element => {
  return (
    <Card className="flex p-4 lg:p-5 justify-between items-center">
      <div className="flex flex-col grow">
        <div className="text-grey-70 text-[12px] leading-3">{title}</div>
        <div className="title-3 mt-2 lg:mt-3 font-semibold">{value}</div>
      </div>
      <div className="w-[30px] lg:w-9 shrink-0 flex items-center justify-center">{icon}</div>
    </Card>
  );
};
