import { Meta, StoryObj } from '@storybook/react';

import { TrainerCard } from './TrainerCard';
import { trainer } from '@/utils/fixtures';
import { Team } from '@/types';

export default {
  title: 'Profile/TrainerCard',
  component: TrainerCard,
  parameters: {
    chromatic: { viewports: [375, 1024] },
  },
} as Meta<typeof TrainerCard>;

export const Level50: StoryObj<typeof TrainerCard> = {
  args: { trainer },
};

export const OverLevel49: StoryObj<typeof TrainerCard> = {
  args: { trainer: { ...trainer, level: 49, team: Team.VALOR } },
};

export const Level40: StoryObj<typeof TrainerCard> = {
  args: { trainer: { ...trainer, level: 40, xp: 21234567, team: Team.INSTINCT } },
};
