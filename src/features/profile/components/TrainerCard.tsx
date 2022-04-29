import NextImage from 'next/image';
import { FormattedMessage } from 'react-intl';
import { memo } from 'react';

import { Card } from '@/components/Card';
import { Team, Trainer } from '@/types';
import { ProgressBar } from '@/features/profile/components/ProgressBar';

interface TrainerCardProps {
  className?: string;
  trainer: Trainer;
}

const avatarBackgroundColors = {
  [Team.MYSTIC]: '#c1effc',
  [Team.VALOR]: '#fdd8d8',
  [Team.INSTINCT]: '#fdf4b6',
};

export const TrainerCard = memo(({ className, trainer }: TrainerCardProps): JSX.Element => {
  return (
    <Card className={`flex h-[102px] lg:h-[172px] p-4 lg:px-[30px] lg:py-[26px] ${className || ''}`}>
      <div
        className="h-[70px] w-[70px] lg:h-[120px] lg:w-[120px] rounded-full overflow-hidden"
        style={{ backgroundColor: avatarBackgroundColors[trainer.team] }}
      >
        <NextImage
          src={`/avatar_${trainer.team}.png`}
          alt="Avatar"
          width={120}
          height={120}
          unoptimized={!!process.env.IS_STORYBOOK}
        />
      </div>
      <div className="grow ml-3.5 lg:ml-6 flex flex-col">
        <h3 className="title-2 lg:title-1">{trainer.name}</h3>
        <div className="flex justify-between my-2.5 lg:my-4 text-secondary text-grey-70 lg:title-3">
          <div>
            <FormattedMessage
              defaultMessage="Level: {level}"
              id="profile.level"
              description="Level line in the profile page"
              values={{ level: trainer.level }}
            />
          </div>
          <div>2 500 / 5 000 XP</div>
        </div>
        <ProgressBar value={60} />
      </div>
    </Card>
  );
});
TrainerCard.displayName = 'TrainerCard';
