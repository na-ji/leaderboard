import { Meta, StoryObj } from '@storybook/react';

import { GlobalStats } from './GlobalStats';

export default {
  title: 'Leaderboard/GlobalStats',
  component: GlobalStats,
  args: {
    globalStats: {
      totalRegisteredTrainers: 35,
      totalXp: 125332185245,
      totalBattlesWon: 391799,
      totalPokemonCaught: 3826344,
    },
  },
  parameters: {
    chromatic: { viewports: [375, 1440] },
  },
} as Meta<typeof GlobalStats>;

export const Primary: StoryObj<typeof GlobalStats> = {
  args: {},
};
