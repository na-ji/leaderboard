import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InfoCard } from './InfoCard';
import { TeamLogo } from '@/features/profile/components/TeamLogo';
import { Team } from '@/types';

export default {
  title: 'InfoCard',
  component: InfoCard,
  args: {},
  parameters: {
    chromatic: { viewports: [375, 1024] },
  },
} as ComponentMeta<typeof InfoCard>;

const Template: ComponentStory<typeof InfoCard> = (args) => <InfoCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Team',
  value: 'Valor',
  icon: <TeamLogo team={Team.VALOR} />,
};
