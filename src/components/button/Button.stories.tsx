import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Button } from './Button';
import { ChevronIcon } from '@/components/ChevronIcon';

export default {
  title: 'UI Kit/Button',
  component: Button,
  args: {},
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  render: (args) => (
    <Button {...args}>
      <ChevronIcon className="inline !rotate-[270deg]" />
    </Button>
  ),
};

export const Disabled: StoryObj<typeof Button> = {
  render: (args) => (
    <Button {...args}>
      <ChevronIcon className="inline !rotate-[270deg]" />
    </Button>
  ),

  args: {
    disabled: true,
  },
};

export const Active: StoryObj<typeof Button> = {
  render: (args) => (
    <Button {...args}>
      <ChevronIcon className="inline !rotate-[270deg]" />
    </Button>
  ),

  args: {
    active: true,
  },
};
