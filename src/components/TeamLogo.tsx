import { JSXElementConstructor } from 'react';

import { Instinct } from '@/components/icons/Instinct';
import { Mystic } from '@/components/icons/Mystic';
import { Valor } from '@/components/icons/Valor';
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
      // eslint-disable-next-line react/display-name
      return () => <div />;
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
