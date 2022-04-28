import { defineMessages } from 'react-intl';

import { Team } from '@/types';

export const teamTranslations = defineMessages({
  [Team.MYSTIC]: {
    defaultMessage: 'Mystic',
    id: 'team.mystic',
    description: 'Team Mystic',
  },
  [Team.VALOR]: {
    defaultMessage: 'Valor',
    id: 'team.valor',
    description: 'Team Valor',
  },
  [Team.INSTINCT]: {
    defaultMessage: 'Instinct',
    id: 'team.instinct',
    description: 'Team Instinct',
  },
});
