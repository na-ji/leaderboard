import { Listbox } from '@headlessui/react';
import { Fragment, PropsWithChildren } from 'react';

type OptionProps = PropsWithChildren<Parameters<typeof Listbox.Option>[0]>;

export const Option = ({ children, ...props }: OptionProps): JSX.Element => {
  return (
    <Listbox.Option as={Fragment} {...props}>
      {({ selected }) => (
        <li
          className={`py-2 px-2.5 cursor-pointer focus:outline-none ${
            selected ? 'bg-[#F0F4FF] text-blue-100' : 'text-grey-70'
          }`}
        >
          {children}
        </li>
      )}
    </Listbox.Option>
  );
};
