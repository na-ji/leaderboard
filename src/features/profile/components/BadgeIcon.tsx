import { Badge, BadgeTier } from '@/types';
import { badgeToAssetId } from '@/features/profile/utils/badgeToAssetId';
import { badgeToTierRequirements } from '@/features/profile/utils/badgeToTierRequirements';

interface BadgeProps {
  badge: Badge;
  value: number;
}

const sumTier = (a: BadgeTier, b: 0 | 1) => (a + b) as BadgeTier;

const getBadgeTier = ({ badge, value }: BadgeProps): BadgeTier | undefined => {
  if (!(badge in badgeToTierRequirements) || !Array.isArray(badgeToTierRequirements[badge])) {
    return undefined;
  }

  return badgeToTierRequirements[badge]
    .map((requirement) => (value >= requirement ? 1 : 0))
    .reduce<BadgeTier>(sumTier, 0);
};

export const BadgeIcon = ({ badge, value }: BadgeProps): JSX.Element => {
  const tier = getBadgeTier({ badge, value });

  return (
    <div className="relative h-12 w-12">
      {badge in badgeToAssetId && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-full w-full object-contain"
            src={`/badges/achievements/Badge_${badgeToAssetId[badge]}${
              typeof badgeToAssetId[badge] === 'number' ? `_${tier}_01` : ''
            }.webp`}
            alt={badge}
            onError={(event) => {
              const target = event.target as HTMLImageElement;
              if (target.src.endsWith(`_${tier}_01.webp`)) {
                target.src = `/badges/achievements/Badge_${badgeToAssetId[badge]}.png`;
              }
            }}
          />
        </>
      )}
    </div>
  );
};
