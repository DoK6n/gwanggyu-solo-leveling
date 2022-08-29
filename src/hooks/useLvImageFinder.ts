import { LEVEL_CRITERIA } from '../constants/levelcriteria';
import {
  playerF,
  playerFF,
  playerE,
  playerD,
  playerC,
  playerB,
  playerA,
  playerS,
  playerSS,
} from '../static/images';
export const useLvImageFinder = (level: string) => {
  switch (level) {
    case LEVEL_CRITERIA.F:
      return playerF;
    case LEVEL_CRITERIA['F+']:
      return playerFF;
    case LEVEL_CRITERIA.E:
      return playerE;
    case LEVEL_CRITERIA['E+']:
      return playerE;
    case LEVEL_CRITERIA.D:
      return playerD;
    case LEVEL_CRITERIA['D+']:
      return playerD;
    case LEVEL_CRITERIA.C:
      return playerC;
    case LEVEL_CRITERIA['C+']:
      return playerC;
    case LEVEL_CRITERIA.B:
      return playerB;
    case LEVEL_CRITERIA['B+']:
      return playerB;
    case LEVEL_CRITERIA.A:
      return playerA;
    case LEVEL_CRITERIA['A+']:
      return playerA;
    case LEVEL_CRITERIA.S:
      return playerS;
    case LEVEL_CRITERIA.SS:
      return playerSS;
    case LEVEL_CRITERIA.SSS:
      return playerSS;
  }
};
