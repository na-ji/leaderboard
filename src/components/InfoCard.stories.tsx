import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { InfoCard } from './InfoCard';
import { TeamLogo } from '@/components/TeamLogo';
import { Team } from '@/types';

export default {
  title: 'UI Kit/InfoCard',
  component: InfoCard,
  args: {},
  parameters: {
    chromatic: { viewports: [375, 1024] },
  },
} as Meta<typeof InfoCard>;

export const Primary: StoryObj<typeof InfoCard> = {
  args: {
    title: 'Team',
    value: 'Valor',
    icon: <TeamLogo team={Team.VALOR} />,
  },
};
