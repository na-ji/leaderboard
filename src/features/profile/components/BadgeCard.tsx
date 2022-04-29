import { useIntl } from 'react-intl';

import { Badge } from '@/types';
import { BadgeIcon } from '@/features/profile/components/BadgeIcon';
import { badgeTranslations } from '@/features/profile/utils/badgeTranslations';
import { Card } from '@/components/Card';

interface BadgeProps {
  badge: Badge;
  value: number;
}

export const BadgeCard = ({ badge, value }: BadgeProps): JSX.Element => {
  const intl = useIntl();

  return (
    <Card className="min-w-[166px] p-4">
      <BadgeIcon badge={badge} value={value} />
      <div className="mt-2.5 text-secondary font-semibold">{intl.formatMessage(badgeTranslations[badge])}</div>
      <div className="mt-1.5 text-secondary text-grey-70">{value && intl.formatNumber(value)}</div>
    </Card>
  );
};
