import { Meta, StoryObj } from '@storybook/react';

import { BadgeList } from './BadgeList';
import { trainer } from '@/utils/fixtures';

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

export const Primary: StoryObj<typeof BadgeList> = {
  args: {},
};
