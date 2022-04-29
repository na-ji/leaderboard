import { useIntl } from 'react-intl';
import { useEffect, useState } from 'react';

import { Trainer } from '@/types';
import { TrainerCard } from '@/features/profile/components/TrainerCard';
import { OverviewCards } from '@/features/profile/components/OverviewCards';
import { Group, List, Panel, Panels, Tab } from '@/components/tab';
import { BadgeList } from '@/features/profile/components/BadgeList';
import { useBreakpoint } from '@/utils/useBreakpoint';

interface ProfileProps {
  trainer: Trainer;
}

export const Profile = ({ trainer }: ProfileProps): JSX.Element => {
  const intl = useIntl();
  const isDesktop = useBreakpoint('lg');
  const isMobile = !isDesktop;
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    setSelectedTabIndex(1);
  }, [isDesktop, setSelectedTabIndex]);

  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-5">
        <div className="lg:col-span-7">
          <TrainerCard trainer={trainer} />
          <div className="mt-7">
            <Group selectedIndex={selectedTabIndex} onChange={setSelectedTabIndex}>
              <List level={1}>
                {isMobile && (
                  <Tab level={1}>
                    {intl.formatMessage({
                      defaultMessage: 'Overview',
                      id: 'profile.overview',
                      description: 'Tab in the profile page',
                    })}
                  </Tab>
                )}
                <Tab level={1}>
                  {intl.formatMessage({
                    defaultMessage: 'Medals',
                    id: 'profile.medals',
                    description: 'Tab in the profile page',
                  })}
                </Tab>
              </List>
              <Panels className="mt-5">
                {isMobile && (
                  <Panel>
                    <OverviewCards trainer={trainer} />
                  </Panel>
                )}
                <Panel>
                  <BadgeList trainer={trainer} />
                </Panel>
              </Panels>
            </Group>
          </div>
        </div>
        <div className="hidden lg:grid lg:col-span-5">
          <OverviewCards trainer={trainer} />
        </div>
      </div>
    </>
  );
};
