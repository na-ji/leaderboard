import { Badge, Trainer } from '@/types';
import { BadgeCard } from '@/features/profile/components/BadgeCard';
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
        <TrainerCard trainer={trainer} className="lg:col-span-7 flex" />
        <OverviewCards trainer={trainer} className="hidden lg:grid lg:col-span-5" />
        <Group as="div" className="lg:col-span-7">
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
    </>
  );
};
