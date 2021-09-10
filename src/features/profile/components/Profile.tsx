import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';

import { Badge, Trainer } from '@/types';
import { BadgeCard } from '@/features/profile/components/BadgeCard';
import { getDarkTeamColor } from '@/utils/team-colors';
import { TeamLogo } from '@/features/profile/components/TeamLogo';

interface ProfileProps {
  trainer: Trainer;
}

export const Profile = ({ trainer }: ProfileProps): JSX.Element => {
  return (
    <>
      <Typography variant="h3" sx={{ color: getDarkTeamColor(trainer.team) }}>
        {trainer.name}
        <TeamLogo team={trainer.team} />
      </Typography>
      <Typography variant="h6">
        <FormattedMessage defaultMessage="General information" description="Subtitle in the profile page" />
      </Typography>
      <ul>
        <li>
          <FormattedMessage
            defaultMessage="Level {level}"
            description="Level line in the profile page"
            values={{ level: trainer.level }}
          />
        </li>
        <li>
          <FormattedMessage
            defaultMessage="Last updated the {date, date, short} at {date, time, short}"
            description="Last updated line in the profile page"
            values={{ date: new Date(trainer.last_seen) }}
          />
        </li>
        <li>
          <FormattedMessage
            defaultMessage="{battlesWon, number} battles won"
            description="Battle won line in the profile page"
            values={{ battlesWon: trainer.battles_won }}
          />
        </li>
        {trainer.gbl_rank && (
          <li>
            <FormattedMessage
              defaultMessage="GBL rank {gblRank}"
              description="GBL rank line in the profile page"
              values={{ gblRank: trainer.gbl_rank }}
            />
          </li>
        )}
        {trainer.gbl_rating && (
          <li>
            <FormattedMessage
              defaultMessage="GBL rating of {gblRating}"
              description="GBL rating line in the profile page"
              values={{ gblRating: trainer.gbl_rating }}
            />
          </li>
        )}
      </ul>
      <Typography variant="h6">
        <FormattedMessage defaultMessage="Medals" description="Subtitle in the profile page" />
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
