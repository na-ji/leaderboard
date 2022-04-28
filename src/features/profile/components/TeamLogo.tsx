import { Fragment, JSXElementConstructor } from 'react';

import { Instinct, Mystic, Valor } from '@/features/profile/components/icons';
import { Team } from '@/types';

const teamToLogo = (team: Team): JSXElementConstructor<Record<string, unknown>> => {
  switch (team) {
    case Team.VALOR:
      return Valor;
    case Team.INSTINCT:
      return Instinct;
    case Team.MYSTIC:
      return Mystic;
    default:
      // TODO: handle Harmony
      return Fragment;
  }
};

interface TeamLogoProps {
  team: Team;
  className?: string;
}

export const TeamLogo = ({ team, className }: TeamLogoProps): JSX.Element => {
  const Logo = teamToLogo(team);

  return <Logo className={className} />;
};
