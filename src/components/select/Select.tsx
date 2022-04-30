import { Listbox } from '@headlessui/react';

type SelectProps = Parameters<typeof Listbox>[0];

export const Select = ({ children, className, ...props }: SelectProps): JSX.Element => {
  return (
    <Listbox as="div" className={`inline-flex items-center relative ${className}`} {...props}>
      {children}
    </Listbox>
  );
};
Select.displayName = 'Select';
