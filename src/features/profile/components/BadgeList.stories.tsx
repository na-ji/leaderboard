import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof BadgeList>;

const Template: ComponentStory<typeof BadgeList> = (args) => <BadgeList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
