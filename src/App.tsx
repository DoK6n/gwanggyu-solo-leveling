import React, { useEffect, useState } from 'react';
import { Screen, PlayerInfo, PlayerCall, Category, PlayerHp, Image } from './components';
import dayjs from 'dayjs';
import { playerDB } from './database';
import { useLevelFinder, useTotalOperatingRevenue } from './hooks';

export default function App() {
  const [currentLevel, setCurrentLevel] = useState<string>(
    String(useLevelFinder(useTotalOperatingRevenue(playerDB))),
  );
  return (
    <main className="container min-h-screen max-w-full p-1">
      <section className="flex flex-col items-center p-4 m-2">
        <Image level={currentLevel} />
        <Screen>
          <PlayerInfo>
            <Category categoryKey="이름" categoryValue={'이광규'} />
            <Category categoryKey="등급" categoryValue={currentLevel} />
          </PlayerInfo>
          <hr className="my-4" />
          <PlayerHp />
          <hr className="my-4" />
          {playerDB
            .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
            .map(db => (
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
