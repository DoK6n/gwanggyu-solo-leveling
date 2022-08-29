import React, { useEffect, useState } from 'react';
import { Screen, PlayerInfo, PlayerCall, Category, PlayerHp, Image } from './components';
import { currentMonthPlayerDB, totalOperatingRevenue, playerLevel } from './database';

export default function App() {
  return (
    <main className="container min-h-screen max-w-full p-1">
      <section className="flex flex-col items-center p-4 m-2">
        <Image level={playerLevel} />
        <Screen>
          <PlayerInfo>
            <Category categoryKey="이름" categoryValue={'이광규'} />
            <Category categoryKey="등급" categoryValue={playerLevel} />
          </PlayerInfo>
          <hr className="my-4" />
          <PlayerHp totalOperatingRevenue={totalOperatingRevenue} />
          <hr className="my-4" />
          {currentMonthPlayerDB.map(db => (
            <PlayerCall
              commission={db.commission}
              date={db.date}
              downPayment={db.downPayment}
              operatingRevenue={db.operatingRevenue}
              key={db.id}
            />
          ))}
        </Screen>
      </section>
    </main>
  );
}
