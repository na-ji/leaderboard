import { Trainer } from '@/types';
import { TrainerCard } from '@/features/profile/components/TrainerCard';
import { OverviewCards } from '@/features/profile/components/OverviewCards';
import { Group, List, Panel, Panels, Tab } from '@/components/tab';
import { BadgeList } from '@/features/profile/components/BadgeList';

interface ProfileProps {
  trainer: Trainer;
}

export const Profile = ({ trainer }: ProfileProps): JSX.Element => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-5">
        <div className="lg:col-span-7">
          <TrainerCard trainer={trainer} />
          <Group as="div" className="mt-7">
            <List level={1}>
              <Tab level={1}>Medals</Tab>
            </List>
            <Panels className="mt-5">
              <Panel>
                <BadgeList trainer={trainer} />
              </Panel>
            </Panels>
          </Group>
        </div>
        <div className="hidden lg:grid lg:col-span-5">
          <OverviewCards trainer={trainer} />
        </div>
      </div>
    </>
  );
};
