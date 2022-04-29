import { useIntl } from 'react-intl';

import { Trainer } from '@/types';
import { InfoCard } from '@/components/InfoCard';
import { TeamLogo } from '@/features/profile/components/TeamLogo';
import { LastUpdateIcon, RankIcon } from '@/features/profile/components/icons';
import { FightIcon } from '@/components/icons/FightIcon';
import { PokeballIcon } from '@/components/icons/PokeballIcon';
import { PokemonIcon } from '@/components/icons/PokemonIcon';
import { teamTranslations } from '@/features/profile/lang/teamTranslations';

interface OverviewCardsProps {
  className?: string;
  trainer: Trainer;
}

export const OverviewCards = ({ className, trainer }: OverviewCardsProps): JSX.Element => {
  const intl = useIntl();

  return (
    <div className={`grid grid-cols-2 xl:grid-cols-3 gap-3 content-start ${className || ''}`}>
      <InfoCard
        icon={<TeamLogo team={trainer.team} />}
        title={intl.formatMessage({
          defaultMessage: 'Team',
          id: 'profile.team',
          description: 'Team info card title in the profile page',
        })}
        value={trainer.team in teamTranslations ? intl.formatMessage(teamTranslations[trainer.team]) : ''}
      />
      <InfoCard
        icon={<LastUpdateIcon />}
        title={intl.formatMessage({
          defaultMessage: 'Last Update',
          id: 'profile.last_update',
          description: 'Last update info card title in the profile page',
        })}
        value={intl.formatMessage(
          {
            defaultMessage: '{date, time, short}',
            id: 'profile.updated_at',
            description: 'Last updated line in the profile page',
          },
          { date: new Date(trainer.last_seen) },
        )}
      />
      <InfoCard
        icon={<RankIcon />}
        title={intl.formatMessage({
          defaultMessage: 'GBL Rank',
          id: 'profile.gbl_rank',
          description: 'GBL rank info card title in the profile page',
        })}
        value={`${trainer.gbl_rank || 1}${trainer.gbl_rating ? ` (${trainer.gbl_rating})` : ''}`}
      />
      <InfoCard
        icon={<PokemonIcon />}
        title={intl.formatMessage({
          defaultMessage: 'Catches',
          id: 'profile.pokemon_caught',
          description: 'Pokemon caught info card title in the profile page',
        })}
        value={intl.formatNumber(trainer.caught_pokemon || 0)}
      />
      <InfoCard
        icon={<FightIcon />}
        title={intl.formatMessage({
          defaultMessage: 'Battles',
          id: 'profile.battles',
          description: 'Battles info card title in the profile page',
        })}
        value={intl.formatNumber(trainer.battles_won || 0)}
      />
      <InfoCard
        icon={<PokeballIcon />}
        title={intl.formatMessage({
          defaultMessage: 'XP',
          id: 'profile.total_xp',
          description: 'Total XP info card title in the profile page',
        })}
        value={intl.formatNumber(trainer.xp || 0, { notation: 'compact' })}
      />
    </div>
  );
};
