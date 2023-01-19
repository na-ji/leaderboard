import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Transition } from '@headlessui/react';

import { Select, Label, Button, Options, Option } from '.';

export default {
  title: 'UI Kit/Select',
  component: Select,
  args: {},
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
} as Meta<typeof Select>;

const options = [
  { label: 'All Time', value: 1 },
  { label: 'Today', value: 2 },
  { label: 'Last Week', value: 3 },
  { label: 'Last Month', value: 4 },
];

export const Primary: StoryObj<typeof Select> = {
  render: (): JSX.Element => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedOption, setSelectedOption] = useState<(typeof options)[0]>(options[0]);

    return (
      <Select value={selectedOption} onChange={setSelectedOption}>
        <Label>Period</Label>
        <Button>{selectedOption.label}</Button>
        <Transition
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Options>
            {options.map((option, index) => (
              <Option key={index} value={option}>
                {option.label}
              </Option>
            ))}
          </Options>
        </Transition>
      </Select>
    );
  },

  args: {},
};
