import { Badge } from '@/types';
import { badgeToAssetId } from '@/features/profile/utils/badgeToAssetId';

interface BadgeProps {
  badge: Badge;
  value: number;
}

export const BadgeIcon = ({ badge }: BadgeProps): JSX.Element => (
  <div className="relative h-12 w-12">
    {badge in badgeToAssetId && (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-full w-full object-contain"
          src={`/badges/achievements/Badge_${badgeToAssetId[badge]}${
            typeof badgeToAssetId[badge] === 'number' ? '_3_01' : ''
          }.png`}
          alt={badge}
          onError={(event) => {
            const target = event.target as HTMLImageElement;
            if (target.src.endsWith('_3_01.png')) {
              target.src = `/badges/achievements/Badge_${badgeToAssetId[badge]}.png`;
            }
          }}
        />
      </>
    )}
  </div>
);
