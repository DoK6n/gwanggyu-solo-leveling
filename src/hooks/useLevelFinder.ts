import { LEVEL_CRITERIA } from '../constants/levelcriteria';

const levelCriteria = {
  0: LEVEL_CRITERIA.F,
  25: LEVEL_CRITERIA['F+'],
  50: LEVEL_CRITERIA.E,
  100: LEVEL_CRITERIA['E+'],
  150: LEVEL_CRITERIA.D,
  200: LEVEL_CRITERIA['D+'],
  250: LEVEL_CRITERIA.C,
  300: LEVEL_CRITERIA['C+'],
  350: LEVEL_CRITERIA.B,
  400: LEVEL_CRITERIA['B+'],
  450: LEVEL_CRITERIA.A,
  500: LEVEL_CRITERIA['A+'],
  600: LEVEL_CRITERIA.S,
  700: LEVEL_CRITERIA.SS,
  800: LEVEL_CRITERIA.SSS,
};

export const useLevelFinder = (totalOperatingRevenue: number) => {
  switch (true) {
    case 0 <= totalOperatingRevenue && totalOperatingRevenue < 25:
      return levelCriteria[0];
    case 25 <= totalOperatingRevenue && totalOperatingRevenue < 50:
      return levelCriteria[25];
    case 50 <= totalOperatingRevenue && totalOperatingRevenue < 100:
      return levelCriteria[50];
    case 100 <= totalOperatingRevenue && totalOperatingRevenue < 150:
      return levelCriteria[100];
    case 150 <= totalOperatingRevenue && totalOperatingRevenue < 200:
      return levelCriteria[150];
    case 200 <= totalOperatingRevenue && totalOperatingRevenue < 250:
      return levelCriteria[200];
    case 250 <= totalOperatingRevenue && totalOperatingRevenue < 300:
      return levelCriteria[250];
    case 300 <= totalOperatingRevenue && totalOperatingRevenue < 350:
      return levelCriteria[300];
    case 350 <= totalOperatingRevenue && totalOperatingRevenue < 400:
      return levelCriteria[350];
    case 400 <= totalOperatingRevenue && totalOperatingRevenue < 450:
      return levelCriteria[400];
    case 450 <= totalOperatingRevenue && totalOperatingRevenue < 500:
      return levelCriteria[450];
    case 500 <= totalOperatingRevenue && totalOperatingRevenue < 600:
      return levelCriteria[500];
    case 600 <= totalOperatingRevenue && totalOperatingRevenue < 700:
      return levelCriteria[600];
    case 700 <= totalOperatingRevenue && totalOperatingRevenue < 800:
      return levelCriteria[700];
    case 800 <= totalOperatingRevenue && totalOperatingRevenue < 900:
      return levelCriteria[800];
  }
};
