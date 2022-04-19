import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tab, Group, List, Panel, Panels } from '.';

export default {
  title: 'Tab',
  component: Tab,
  args: {},
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = ({ level = 1 }) => {
  return (
    <Group>
      <List level={level}>
        <Tab level={level}>Tab 1</Tab>
        <Tab level={level} disabled>
          Disabled Tab 2
        </Tab>
        <Tab level={level}>Tab 3</Tab>
      </List>
      <Panels>
        <Panel>Content 1</Panel>
        <Panel>Content 2</Panel>
        <Panel>Content 3</Panel>
      </Panels>
    </Group>
  );
};

export const Level1 = Template.bind({});
Level1.args = {
  level: 1,
};

export const Level2 = Template.bind({});
Level2.args = {
  level: 2,
};
