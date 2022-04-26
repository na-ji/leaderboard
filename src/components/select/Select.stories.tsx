import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Transition } from '@headlessui/react';

import { Select, Label, Button, Options, Option } from '.';

export default {
  title: 'Select',
  component: Select,
  args: {},
} as ComponentMeta<typeof Select>;

const options = [
  { label: 'All Time', value: 1 },
  { label: 'Today', value: 2 },
  { label: 'Last Week', value: 3 },
  { label: 'Last Month', value: 4 },
];

const Template: ComponentStory<typeof Option> = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<typeof options[0]>(options[0]);

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
};

export const Primary = Template.bind({});
Primary.args = {};
