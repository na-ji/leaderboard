import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ChevronIcon } from '@/components/ChevronIcon';

export default {
  title: 'Button',
  component: Button,
  args: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <ChevronIcon className="inline !rotate-[270deg]" />
  </Button>
);

export const Primary = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
