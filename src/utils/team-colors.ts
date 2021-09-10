import { red, blue, yellow } from '@mui/material/colors';
import { Team } from '@/types';

export const getLightTeamColor = (team: Team): string => {
  switch (team) {
    case Team.VALOR:
      return red[200];
    case Team.INSTINCT:
      return yellow[200];
    case Team.MYSTIC:
      return blue[200];
  }
};

export const getDarkTeamColor = (team: Team): string => {
  switch (team) {
    case Team.VALOR:
      return red[500];
    case Team.INSTINCT:
      return yellow[500];
    case Team.MYSTIC:
      return blue[500];
  }
};
