import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TrainerCard } from './TrainerCard';
import { trainer } from '@/utils/fixtures';

export default {
  title: 'Profile/TrainerCard',
  component: TrainerCard,
  args: {
    trainer,
  },
  parameters: {
    chromatic: { viewports: [375, 1024] },
  },
} as ComponentMeta<typeof TrainerCard>;

const Template: ComponentStory<typeof TrainerCard> = (args) => <TrainerCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
