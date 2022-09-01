import dayjs from 'dayjs';
import { useLevelFinder, useTotalOperatingRevenue } from '../hooks';
import db from './db.json';
import { PlayerDB } from './types';

export const playerDB: PlayerDB[] = db;

export const sortDatePlayerDB: PlayerDB[] = playerDB.sort(
  (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf(),
);

export const currentMonthPlayerDB: PlayerDB[] = sortDatePlayerDB.filter(
  playerdb => dayjs(playerdb.date).month() + 1 === dayjs().month() + 1,
);

export const totalOperatingRevenue = useTotalOperatingRevenue(currentMonthPlayerDB);

export const playerLevel = String(useLevelFinder(useTotalOperatingRevenue(currentMonthPlayerDB)));
