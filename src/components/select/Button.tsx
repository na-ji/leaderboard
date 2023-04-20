import { Listbox } from '@headlessui/react';

import { ChevronIcon } from '@/components/ChevronIcon';

export const Button: typeof Listbox.Button<'button'> = ({ children, ...props }) => {
  return (
    <Listbox.Button
      className="bg-blue-20 hover:bg-hover-blue-2 p-3 rounded text-secondary text-black flex items-center focus:outline-none"
      {...props}
    >
      {({ open }) => (
        <>
          {children}
          <ChevronIcon reversed={open} className="ml-1 fill-black" />
        </>
      )}
    </Listbox.Button>
  );
};
Button.displayName = 'Button';
