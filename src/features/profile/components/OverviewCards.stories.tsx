import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof OverviewCards>;

const Template: ComponentStory<typeof OverviewCards> = (args) => <OverviewCards {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
