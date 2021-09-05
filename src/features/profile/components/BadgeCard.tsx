import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useIntl } from 'react-intl';

import { Badge } from '@/types/model';
import { BadgeIcon } from '@/features/profile/components/BadgeIcon';
import { badgeTranslations } from '@/features/profile/utils/badgeTranslations';

interface BadgeProps {
  badge: Badge;
  value: number;
}

export const BadgeCard = ({ badge, value }: BadgeProps): JSX.Element => {
  const intl = useIntl();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={<BadgeIcon badge={badge} value={value} />}
        title={intl.formatMessage(badgeTranslations[badge])}
        subheader={value && intl.formatNumber(value)}
      />
    </Card>
  );
};
