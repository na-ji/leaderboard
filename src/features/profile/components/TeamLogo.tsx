import styled from 'styled-components';
import type { JSXElementConstructor } from 'react';

import { getDarkTeamColor } from '@/utils/team-colors';
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
  }
};

const TeamLogoOverlay = styled.span<{ team: Team }>`
  svg {
    width: 60px;
  }

  path {
    fill: ${({ team }) => getDarkTeamColor(team)};
  }
`;

export const TeamLogo = ({ team }: { team: Team }): JSX.Element => {
  const Logo = teamToLogo(team);

  return (
    <TeamLogoOverlay team={team}>
      <Logo />
    </TeamLogoOverlay>
  );
};
