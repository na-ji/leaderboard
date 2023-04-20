import { Listbox } from '@headlessui/react';
import { ForwardedRef, forwardRef } from 'react';

type OptionsProps = Parameters<typeof Listbox.Options>[0];

export const Options = forwardRef(({ children, ...props }: OptionsProps, ref) => {
  return (
    <Listbox.Options
      className="absolute focus:outline-none rounded bg-white-100 right-0 top-11 py-1 drop-shadow-normal z-10"
      ref={ref as ForwardedRef<HTMLElement>}
      {...props}
    >
      {children}
    </Listbox.Options>
  );
});
Options.displayName = 'Options';
