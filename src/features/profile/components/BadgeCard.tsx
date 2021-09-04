import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { Badge } from '@/types/model';
import { BadgeIcon } from '@/features/profile/components/BadgeIcon';

interface BadgeProps {
  badge: Badge;
  value: number;
}

export const BadgeCard = ({ badge, value }: BadgeProps): JSX.Element => (
  <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={<BadgeIcon badge={badge} value={value} />}
      title={badge}
      subheader={value && value.toLocaleString()}
    />
  </Card>
);
