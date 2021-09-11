import { FormattedMessage } from 'react-intl';

import Typography from '@mui/material/Typography';
import {
  dexLeaderboardColumns,
  generalLeaderboardColumns,
  gymLeaderboardColumns,
  pvpLeaderboardColumns,
  raidLeaderboardColumns,
  rocketLeaderboardColumns,
  specificLeaderboardColumns,
  typeLeaderboardColumns,
} from '@/features/leaderboard/components/columnDefinitions';
import { Leaderboard } from '@/features/leaderboard/components/Leaderboard';
import { Trainer } from '@/types';

export const OverallLeaderboards = ({ trainers }: { trainers: Trainer[] }): JSX.Element => {
  return (
    <>
      <Typography variant="h4">
        <FormattedMessage defaultMessage="General" description="General leaderboard title" />
      </Typography>
      <Leaderboard trainers={trainers} columns={generalLeaderboardColumns} defaultSort="xp" />

      <Typography variant="h4">
        <FormattedMessage defaultMessage="Battles" description="Battles leaderboards title" />
      </Typography>
      <Typography variant="h5">
        <FormattedMessage defaultMessage="Raids" description="Raids leaderboard title" />
      </Typography>
      <Leaderboard trainers={trainers} columns={raidLeaderboardColumns} defaultSort="total_raids" />
      <Typography variant="h5">
        <FormattedMessage defaultMessage="Team Rocket" description="Team Rocket leaderboard title" />
      </Typography>
      <Leaderboard trainers={trainers} columns={rocketLeaderboardColumns} defaultSort="grunts_defeated" />
      <Typography variant="h5">
        <FormattedMessage defaultMessage="Gyms" description="Gyms leaderboard title" />
      </Typography>
      <Leaderboard trainers={trainers} columns={gymLeaderboardColumns} defaultSort="gym_battles_won" />
      <Typography variant="h5">
        <FormattedMessage defaultMessage="PVP" description="PVP leaderboard title" />
      </Typography>
      <Leaderboard trainers={trainers} columns={pvpLeaderboardColumns} defaultSort="gbl_rank" />

      <Typography variant="h4">
        <FormattedMessage defaultMessage="Collection" description="Collection leaderboards title" />
      </Typography>
      <Typography variant="h5">
        <FormattedMessage defaultMessage="Pokédex" description="Pokédex leaderboard title" />
      </Typography>
      <Leaderboard trainers={trainers} columns={dexLeaderboardColumns} defaultSort="dex_gen1" />
      <Typography variant="h5">
        <FormattedMessage defaultMessage="Specific" description="Specific leaderboard title" />
      </Typography>
      <Leaderboard trainers={trainers} columns={specificLeaderboardColumns} defaultSort="pikachu_caught" />
      <Typography variant="h5">
        <FormattedMessage defaultMessage="Types" description="Types leaderboard title" />
      </Typography>
      <Leaderboard trainers={trainers} columns={typeLeaderboardColumns} defaultSort="caught_normal" />
    </>
  );
};
