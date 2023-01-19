import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Tab, Group, List, Panel, Panels } from '.';

export default {
  title: 'UI Kit/Tab',
  component: Tab,
  args: {},
  parameters: {
    chromatic: { viewports: [375, 1024] },
    backgrounds: {
      default: 'white',
    },
  },
} as Meta<typeof Tab>;

export const Level1: StoryObj<typeof Tab> = {
  render: ({ level = 1 }) => {
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
  },

  args: {
    level: 1,
  },
};

export const Level2: StoryObj<typeof Tab> = {
  render: ({ level = 1 }) => {
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
  },
  args: {
    level: 2,
  },
};
