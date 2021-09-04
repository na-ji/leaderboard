import { Badge, Trainer } from '@/types/model';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { TeamLogo } from '@/features/profile/components/TeamLogo';
import { getDarkTeamColor } from '@/utils/team-colors';
import { BadgeCard } from '@/features/profile/components/BadgeCard';

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
      <Typography variant="h6">General information</Typography>
      <ul>
        <li>Level {trainer.level}</li>
        <li>Last updated {new Date(trainer.last_seen).toLocaleString()}</li>
        <li>Battle won {trainer.battles_won.toLocaleString()}</li>
        {trainer.gbl_rank && <li>GBL rank {trainer.gbl_rank}</li>}
        {trainer.gbl_rating && <li>GBL rank {trainer.gbl_rating}</li>}
      </ul>
      <Typography variant="h6">Medals</Typography>
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
