import { useIntl } from 'react-intl';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { leaderboardsData } from '@/features/leaderboard/components/columnDefinitions';
import { Leaderboard } from '@/features/leaderboard/components/Leaderboard';
import { Trainer } from '@/types';
import { Tab, Group, List } from '@/components/tab';
import { MainTab } from '@/features/leaderboard/types';
import { leaderboardTabTranslations } from '@/features/leaderboard/lang';
import { PeriodSelect } from '@/features/leaderboard/components/PeriodSelect';
import { Button } from '@/components/button';
import { SettingsIcon } from '@/features/leaderboard/components/SettingsIcon';
import { LeaderboardPagination } from '@/features/leaderboard/components/LeaderboardPagination';
import { LeaderboardPaginationContextProvider } from '@/features/leaderboard/components/LeaderbordPaginationContext';

export const OverallLeaderboards = ({ trainers }: { trainers: Trainer[] }): JSX.Element => {
  const router = useRouter();
  const intl = useIntl();

  useEffect(() => {
    if (trainers.length > 0) {
      void router.prefetch(`/profile/${encodeURIComponent('' + trainers[0].name.toLowerCase())}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedMainTab, setSelectedMainTab] = useState<MainTab>(MainTab.GENERAL);
  const [selectedLeaderboardIndex, setSelectedLeaderboardIndex] = useState<number>(0);
  const [enableSettings, setEnableSettings] = useState<boolean>(false);

  const handleMainTabChange = (newMainTab: MainTab) => {
    setSelectedMainTab(newMainTab);
    setSelectedLeaderboardIndex(0);
  };

  const currentLeaderboard = leaderboardsData[selectedMainTab][selectedLeaderboardIndex];

  return (
    <div>
      <Group selectedIndex={selectedMainTab} onChange={handleMainTabChange}>
        <List level={1} className="mb-3 lg:mb-5">
          <div className="flex justify-between w-full">
            <div>
              <Tab>
                {intl.formatMessage({
                  defaultMessage: 'General',
                  id: 'leaderboard.general',
                  description: 'General leaderboard title',
                })}
              </Tab>
              <Tab>
                {intl.formatMessage({
                  defaultMessage: 'Battles',
                  id: 'leaderboard.battle',
                  description: 'Battles leaderboards title',
                })}
              </Tab>
              <Tab>
                {intl.formatMessage({
                  defaultMessage: 'Collection',
                  id: 'leaderboard.collection',
                  description: 'Collection leaderboards title',
                })}
              </Tab>
            </div>
            <div className="hidden lg:inline-flex">
              <PeriodSelect />
            </div>
            <Button
              className="lg:hidden inline-flex items-center justify-center"
              onClick={() => setEnableSettings(!enableSettings)}
              active={enableSettings}
            >
              <SettingsIcon className="inline" />
            </Button>
          </div>
        </List>
      </Group>
      <LeaderboardPaginationContextProvider>
        <Group selectedIndex={selectedLeaderboardIndex} onChange={setSelectedLeaderboardIndex}>
          <List>
            {leaderboardsData[selectedMainTab].map((leaderboardData) => {
              return (
                <Tab key={leaderboardData.leaderboard} level={2}>
                  {intl.formatMessage(leaderboardTabTranslations[leaderboardData.leaderboard])}
                </Tab>
              );
            })}
            <div className="grow" />
            <LeaderboardPagination className="hidden lg:flex" />
          </List>
        </Group>
        <div className="flex">
          <div
            className={`lg:hidden transition-all duration-300 ${
              enableSettings ? 'max-h-10 mb-3' : 'invisible max-h-0'
            }`}
          >
            <PeriodSelect />
          </div>
        </div>
        <Leaderboard
          columns={currentLeaderboard.columns}
          defaultSort={currentLeaderboard.defaultSort}
          trainers={trainers}
        />
      </LeaderboardPaginationContextProvider>
    </div>
  );
};
