import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TrainerCard } from './TrainerCard';
import { trainer } from '@/utils/fixtures';
import { Team } from '@/types';

export default {
  title: 'Profile/TrainerCard',
  component: TrainerCard,
  parameters: {
    chromatic: { viewports: [375, 1024] },
  },
} as ComponentMeta<typeof TrainerCard>;

const Template: ComponentStory<typeof TrainerCard> = (args) => <TrainerCard {...args} />;

export const Level50 = Template.bind({});
Level50.args = { trainer };

export const OverLevel49 = Template.bind({});
OverLevel49.args = { trainer: { ...trainer, level: 49, team: Team.VALOR } };

export const Level40 = Template.bind({});
Level40.args = { trainer: { ...trainer, level: 40, xp: 21234567, team: Team.INSTINCT } };
