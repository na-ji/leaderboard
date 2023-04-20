import { Listbox } from '@headlessui/react';

export const Label: typeof Listbox.Label<'label'> = ({ children, ...props }) => {
  return (
    <Listbox.Label className="mr-2.5" {...props}>
      {children}
    </Listbox.Label>
  );
};
Label.displayName = 'Label';
