import dayjs from 'dayjs';
import React, { PropsWithChildren } from 'react';
import { PlayerDB } from '../../database/types';
import { useMoneyToKorean } from '../../hooks';
import { Category } from './category';

interface PlayerCallProps extends Omit<PlayerDB, 'id'> {}

export const PlayerCall = ({
  operatingRevenue,
  date,
  commission,
  downPayment,
}: PlayerCallProps) => {
  return (
    <div className="grid grid-cols-2 gap-1 my-2 p-2 border-solid border-2 border-[#31548b]/30">
      <Category categoryKey="수익" categoryValue={operatingRevenue} />
      <Category categoryKey="날짜" categoryValue={date !== '' ? dayjs(date).format('M/D') : ''} />
      <Category categoryKey="수익률" categoryValue={commission + '%'} />
      <Category categoryKey="계약금" categoryValue={useMoneyToKorean(downPayment)} />
    </div>
  );
};
