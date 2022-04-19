import { defineMessages } from 'react-intl';

import { LeaderboardTab } from '@/features/leaderboard/types';

export const leaderboardTabTranslations = defineMessages({
  [LeaderboardTab.GENERAL]: {
    defaultMessage: 'General',
    id: 'leaderboard.general',
    description: 'General leaderboard title',
  },
  [LeaderboardTab.MISCELLANEOUS]: {
    defaultMessage: 'Miscellaneous',
    id: 'leaderboard.miscellaneous',
    description: 'Miscellaneous leaderboard title',
  },
  [LeaderboardTab.RAID]: {
    defaultMessage: 'Raids',
    id: 'leaderboard.raid',
    description: 'Raids leaderboard title',
  },
  [LeaderboardTab.ROCKET]: {
    defaultMessage: 'Team Rocket',
    id: 'leaderboard.rocket',
    description: 'Team Rocket leaderboard title',
  },
  [LeaderboardTab.GYM]: {
    defaultMessage: 'Gyms',
    id: 'leaderboard.gym',
    description: 'Gyms leaderboard title',
  },
  [LeaderboardTab.PVP]: {
    defaultMessage: 'PVP',
    id: 'leaderboard.pvp',
    description: 'PVP leaderboard title',
  },
  [LeaderboardTab.DEX]: {
    defaultMessage: 'Pokédex',
    id: 'leaderboard.pokedex',
    description: 'Pokédex leaderboard title',
  },
  [LeaderboardTab.SPECIFIC]: {
    defaultMessage: 'Specific',
    id: 'leaderboard.specific',
    description: 'Specific leaderboard title',
  },
  [LeaderboardTab.TYPE]: {
    defaultMessage: 'Types',
    id: 'leaderboard.type',
    description: 'Types leaderboard title',
  },
});
