import { Badge, Trainer } from '@/types';
import { BadgeCard } from '@/features/profile/components/BadgeCard';

interface BadgeListProps {
  className?: string;
  trainer: Trainer;
}

export const BadgeList = ({ className, trainer }: BadgeListProps): JSX.Element => {
  return (
    <div
      className={`grid gap-3 grid-cols-[repeat(auto-fit,minmax(165px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(187px,1fr))] ${
        className || ''
      }`}
    >
      {Object.values(Badge).map(
        (badge) =>
          badge in trainer &&
          trainer[badge] !== undefined &&
          trainer[badge] !== null && <BadgeCard key={badge} badge={badge} value={trainer[badge] as number} />,
      )}
    </div>
  );
};
