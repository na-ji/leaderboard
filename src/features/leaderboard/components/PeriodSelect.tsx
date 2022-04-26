import { defineMessage, FormattedMessage, useIntl } from 'react-intl';
import { Transition } from '@headlessui/react';
import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';

import { Button, Label, Option, Options, Select } from '@/components/Select';

const options = [
  {
    label: defineMessage({
      id: 'leaderboard.all_time',
      defaultMessage: 'All time',
      description: 'All time period',
    }),
    value: '',
  },
  {
    label: defineMessage({
      id: 'leaderboard.today',
      defaultMessage: 'Today',
      description: 'All time period',
    }),
    value: 'day',
  },
  {
    label: defineMessage({
      id: 'leaderboard.last_week',
      defaultMessage: 'Last 7 days',
      description: 'All time period',
    }),
    value: 'week',
  },
  {
    label: defineMessage({
      id: 'leaderboard.last_month',
      defaultMessage: 'Last 30 days',
      description: 'All time period',
    }),
    value: 'month',
  },
];

export const PeriodSelect = ({ visible }: { visible: 'mobile' | 'desktop' }): JSX.Element => {
  const router = useRouter();
  const intl = useIntl();

  const selectedOption = useMemo(() => {
    const period = (Array.isArray(router.query.period) && router.query.period[0]) || '';

    return options.find((option) => option.value === period) || options[0];
  }, [router.query]);

  const setOption = useCallback(
    (option: typeof options[0]): void => {
      const nextPath = `/${option.value}`;
      if (nextPath !== router.asPath) {
        router.push(nextPath);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Select
      value={selectedOption}
      onChange={setOption}
      className={`justify-self-end ${visible === 'desktop' ? 'hidden lg:inline-flex' : 'inline-flex lg:hidden'}`}
    >
      <Label>
        <FormattedMessage defaultMessage="Period" id="leaderboard.period" description="Period dropdown" />
      </Label>
      <Button>{intl.formatMessage(selectedOption.label)}</Button>
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
              {intl.formatMessage(option.label)}
            </Option>
          ))}
        </Options>
      </Transition>
    </Select>
  );
};
