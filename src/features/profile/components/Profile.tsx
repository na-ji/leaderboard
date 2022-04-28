import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';

import { Badge, Trainer } from '@/types';
import { BadgeCard } from '@/features/profile/components/BadgeCard';
import { TrainerCard } from '@/features/profile/components/TrainerCard';
import { OverviewCards } from '@/features/profile/components/OverviewCards';

interface ProfileProps {
  trainer: Trainer;
}

export const Profile = ({ trainer }: ProfileProps): JSX.Element => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-5">
        <TrainerCard trainer={trainer} className="lg:col-span-7 flex" />
        <OverviewCards trainer={trainer} className="hidden lg:grid lg:col-span-5" />
      </div>
      <Typography variant="h6">
        <FormattedMessage defaultMessage="Medals" id="profile.medals" description="Subtitle in the profile page" />
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 20 }}>
        {Object.values(Badge).map(
          (badge) =>
            badge in trainer &&
            trainer[badge] !== undefined &&
            trainer[badge] !== null && (
              <Grid item xs={4} sm={4} md={4} xl={4} key={badge}>
                <BadgeCard badge={badge} value={trainer[badge] as number} />
              </Grid>
            ),
        )}
      </Grid>
    </>
  );
};
