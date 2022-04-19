import { Tab as HeadlessTab } from '@headlessui/react';
import clsx from 'clsx';

export type TabProps = Parameters<typeof HeadlessTab>[0] & { level?: 1 | 2 };

export const Tab = ({ level = 1, children, ...props }: TabProps): JSX.Element => {
  return (
    <HeadlessTab
      className={({ selected }) => {
        return clsx({
          'px-3.5 title-3 h-5 focus:outline-none text-grey-70 relative': true,
          'before:content-[attr(data-text)] before:h-0 before:invisible before:font-semibold before:overflow-hidden before:pointer-events-none before:block':
            true,
          'first:pl-0 hover:text-black disabled:text-[#BCC3D7] lg:title-2 pb-5 lg:pb-7.5': level === 1,
          'after:content-[attr(data-text)] after:text-transparent after:h-0.5 after:bg-gradient after:block after:absolute after:bottom-[-1px] after:rounded-md':
            level === 1 && selected,
          'text-black lg:font-semibold': level === 1 && selected,
          'bg-blue-20 lg:h-10 h-9 rounded mr-1.5 lg:mr-3 last:mr-0': level === 2,
          'hover:bg-[rgba(68,121,254,0.1)] hover:text-blue-100 hover:font-semibold disabled:text-[#BCC3D7] disabled:hover:font-normal disabled:bg-[#F2F4F9]':
            level === 2,
          'bg-gradient text-white-100 hover:text-white-100 lg:font-semibold': level === 2 && selected,
        });
      }}
      data-text={children}
      {...props}
    >
      {children}
    </HeadlessTab>
  );
};
