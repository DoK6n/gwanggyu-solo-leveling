import { PlayerDB } from '../database/types';

export const useTotalOperatingRevenue = (data: PlayerDB[]) => {
  const total = data.reduce((acc, cur, idx) => {
    return (acc += cur.operatingRevenue);
  }, 0);
  return total;
};
