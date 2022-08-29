import React, { useEffect, useState } from 'react';
import { Screen, PlayerInfo, PlayerCall, Category, PlayerHp, Image, Button } from './components';
import { currentMonthPlayerDB, totalOperatingRevenue, playerLevel } from './database';

export default function App() {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
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
          {!isShowMore ? (
            <React.Fragment>
              <PlayerCall
                commission={currentMonthPlayerDB[0].commission}
                date={currentMonthPlayerDB[0].date}
                downPayment={currentMonthPlayerDB[0].downPayment}
                operatingRevenue={currentMonthPlayerDB[0].operatingRevenue}
                key={currentMonthPlayerDB[0].id}
              />
              <PlayerCall
                commission={currentMonthPlayerDB[1].commission}
                date={currentMonthPlayerDB[1].date}
                downPayment={currentMonthPlayerDB[1].downPayment}
                operatingRevenue={currentMonthPlayerDB[1].operatingRevenue}
                key={currentMonthPlayerDB[1].id}
              />
            </React.Fragment>
          ) : (
            currentMonthPlayerDB.map(db => (
              <PlayerCall
                commission={db.commission}
                date={db.date}
                downPayment={db.downPayment}
                operatingRevenue={db.operatingRevenue}
                key={db.id}
              />
            ))
          )}
          <Button isShowMore={isShowMore} setIsShowMore={setIsShowMore}>
            {isShowMore ? '접기' : '더 보기'}
          </Button>
        </Screen>
      </section>
    </main>
  );
}
