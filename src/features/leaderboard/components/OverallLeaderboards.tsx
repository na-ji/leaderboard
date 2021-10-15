import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
  dexLeaderboardColumns,
  generalLeaderboardColumns,
  gymLeaderboardColumns,
  miscellaneousLeaderboardColumns,
  pvpLeaderboardColumns,
  raidLeaderboardColumns,
  rocketLeaderboardColumns,
  specificLeaderboardColumns,
  typeLeaderboardColumns,
} from '@/features/leaderboard/components/columnDefinitions';
import { Leaderboard } from '@/features/leaderboard/components/Leaderboard';
import { TabPanel } from '@/features/leaderboard/components/TabPanel';
import { Trainer } from '@/types';

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export const OverallLeaderboards = ({ trainers }: { trainers: Trainer[] }): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    if (trainers.length > 0) {
      void router.prefetch(`/profile/${encodeURIComponent('' + trainers[0].trainer_id)}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', position: 'relative' }} component="div">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} component="div">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab
            label={<FormattedMessage defaultMessage="General" description="General leaderboard title" />}
            {...a11yProps(0)}
          />
          <Tab
            label={<FormattedMessage defaultMessage="Battles" description="Battles leaderboards title" />}
            {...a11yProps(1)}
          />
          <Tab
            label={<FormattedMessage defaultMessage="Collection" description="Collection leaderboards title" />}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="h5">
          <FormattedMessage defaultMessage="General" description="General leaderboard title" />
        </Typography>
        <Leaderboard trainers={trainers} columns={generalLeaderboardColumns} defaultSort="xp" />
        <Typography variant="h5">
          <FormattedMessage defaultMessage="Miscellaneous" description="Miscellaneous leaderboard title" />
        </Typography>
        <Leaderboard trainers={trainers} columns={miscellaneousLeaderboardColumns} defaultSort="trade_km" />
      </TabPanel>
      <TabPanel value={value} index={1}>
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
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h5">
          <FormattedMessage defaultMessage="Pokédex" description="Pokédex leaderboard title" />
        </Typography>
        <Leaderboard trainers={trainers} columns={dexLeaderboardColumns} defaultSort="total_dex" />
        <Typography variant="h5">
          <FormattedMessage defaultMessage="Specific" description="Specific leaderboard title" />
        </Typography>
        <Leaderboard trainers={trainers} columns={specificLeaderboardColumns} defaultSort="pikachu_caught" />
        <Typography variant="h5">
          <FormattedMessage defaultMessage="Types" description="Types leaderboard title" />
        </Typography>
        <Leaderboard trainers={trainers} columns={typeLeaderboardColumns} defaultSort="caught_normal" />
      </TabPanel>
    </Box>
  );
};
