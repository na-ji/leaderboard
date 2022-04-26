import { useIntl } from 'react-intl';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { leaderboardsData } from '@/features/leaderboard/components/columnDefinitions';
import { Leaderboard } from '@/features/leaderboard/components/Leaderboard';
import { Trainer } from '@/types';
import { Tab, Group, List } from '@/components/Tab';
import { MainTab } from '@/features/leaderboard/types';
import { leaderboardTabTranslations } from '@/features/leaderboard/lang';
import { PeriodSelect } from '@/features/leaderboard/components/PeriodSelect';

export const OverallLeaderboards = ({ trainers }: { trainers: Trainer[] }): JSX.Element => {
  const router = useRouter();
  const intl = useIntl();

  useEffect(() => {
    if (trainers.length > 0) {
      void router.prefetch(`/profile/${encodeURIComponent('' + trainers[0].trainer_id)}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedMainTab, setSelectedMainTab] = useState<MainTab>(MainTab.GENERAL);
  const [selectedLeaderboardIndex, setSelectedLeaderboardIndex] = useState<number>(0);

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
            <PeriodSelect visible="desktop" />
          </div>
        </List>
      </Group>
      <Group selectedIndex={selectedLeaderboardIndex} onChange={setSelectedLeaderboardIndex}>
        <List className="mb-3 lg:mb-5">
          {leaderboardsData[selectedMainTab].map((leaderboardData) => {
            return (
              <Tab key={leaderboardData.leaderboard} level={2}>
                {intl.formatMessage(leaderboardTabTranslations[leaderboardData.leaderboard])}
              </Tab>
            );
          })}
        </List>
      </Group>
      <Leaderboard
        trainers={trainers}
        columns={currentLeaderboard.columns}
        defaultSort={currentLeaderboard.defaultSort}
      />
    </div>
  );
};
