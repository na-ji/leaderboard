import { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'UI Kit/Header',
  component: Header,
  args: {
    enableAuth: false,
  },
  parameters: {
    chromatic: { viewports: [375, 1024] },
  },
} as Meta<typeof Header>;

export const Primary: StoryObj<typeof Header> = {};
