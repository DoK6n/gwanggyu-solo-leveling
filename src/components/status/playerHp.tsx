import React from 'react';
import { playerDB } from '../../database';
import { useTotalOperatingRevenue } from '../../hooks';
import { Category } from './category';

export const PlayerHp = () => {
  return (
    <>
      <Category categoryKey="타이틀" categoryValue={'본업과 부업이 바뀐자'} />
      <div>
        <span className="text-red-500">HP</span>: {useTotalOperatingRevenue(playerDB)} / 150
      </div>
    </>
  );
};
