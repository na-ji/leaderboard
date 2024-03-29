import { Tab as HeadlessTab } from '@headlessui/react';

export type TabProps = Parameters<typeof HeadlessTab.Group>[0] & { level?: 1 | 2 };

export const List = ({ children, level, className, ...props }: TabProps): JSX.Element => {
  return (
    <HeadlessTab.List
      className={`flex pb-3 lg:pb-5 items-center ${level === 1 ? ' border-b border-grey-20 ' : ''} ${className || ''}`}
      {...props}
    >
      {children}
    </HeadlessTab.List>
  );
};
