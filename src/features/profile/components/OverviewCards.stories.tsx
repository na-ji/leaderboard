import { Meta, StoryObj } from '@storybook/react';

import { OverviewCards } from './OverviewCards';
import { trainer } from '@/utils/fixtures';

export default {
  title: 'Profile/OverviewCards',
  component: OverviewCards,
  args: {
    trainer,
  },
  parameters: {
    chromatic: { viewports: [375, 1024, 1280] },
  },
} as Meta<typeof OverviewCards>;

export const Primary: StoryObj<typeof OverviewCards> = {
  args: {},
};
