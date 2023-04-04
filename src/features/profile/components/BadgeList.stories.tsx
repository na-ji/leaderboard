import { Meta, StoryObj } from '@storybook/react';

import { BadgeList } from './BadgeList';
import { trainer } from '@/utils/fixtures';
import { badgeToTierRequirements } from '../utils/badgeToTierRequirements';
import { Badge, BadgeTier } from '@/types';

export default {
  title: 'Profile/BadgeList',
  component: BadgeList,
  args: {
    trainer,
  },
  parameters: {
    chromatic: { viewports: [375, 1024] },
  },
} as Meta<typeof BadgeList>;

const generateTrainerWithOneBadgeTier = (tier: BadgeTier) => {
  const newTrainer = { ...trainer };

  (Object.entries(badgeToTierRequirements) as [Badge, [number, number, number, number]][]).forEach(
    ([badge, requirements]) => {
      if (tier === 0) {
        newTrainer[badge] = 0;

        return;
      }

      newTrainer[badge] = requirements[tier - 1];
    },
  );

  return newTrainer;
};

export const Primary: StoryObj<typeof BadgeList> = {
  args: {},
};

export const Shadow: StoryObj<typeof BadgeList> = {
  args: {
    trainer: { ...generateTrainerWithOneBadgeTier(BadgeTier.SHADOW), collections_done: undefined },
  },
};

export const Bronze: StoryObj<typeof BadgeList> = {
  args: {
    trainer: generateTrainerWithOneBadgeTier(BadgeTier.BRONZE),
  },
};

export const Silver: StoryObj<typeof BadgeList> = {
  args: {
    trainer: generateTrainerWithOneBadgeTier(BadgeTier.SILVER),
  },
};

export const Gold: StoryObj<typeof BadgeList> = {
  args: {
    trainer: generateTrainerWithOneBadgeTier(BadgeTier.GOLD),
  },
};

export const Platinum: StoryObj<typeof BadgeList> = {
  args: {
    trainer: generateTrainerWithOneBadgeTier(BadgeTier.PLATINUM),
  },
};
