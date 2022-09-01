import dayjs from 'dayjs';
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
          <div className="text-[#31548b] text-xs">
            최근 <span className="text-[#3a5d96]">1</span>건 (
            <span className="text-[#3a5d96]">{dayjs().month() + 1}</span>월 총
            <span className="text-[#3a5d96]"> {currentMonthPlayerDB.length}</span>건)
          </div>
          {isShowMore ? (
            currentMonthPlayerDB.map(db => (
              <PlayerCall
                commission={db.commission}
                date={db.date}
                downPayment={db.downPayment}
                operatingRevenue={db.operatingRevenue}
                key={db.id}
              />
            ))
          ) : currentMonthPlayerDB?.length ? (
            <React.Fragment>
              <PlayerCall
                commission={currentMonthPlayerDB[0].commission}
                date={currentMonthPlayerDB[0].date}
                downPayment={currentMonthPlayerDB[0].downPayment}
                operatingRevenue={currentMonthPlayerDB[0].operatingRevenue}
                key={currentMonthPlayerDB[0].id}
              />
            </React.Fragment>
          ) : (
            <PlayerCall commission={0} date={''} downPayment={0} operatingRevenue={0} />
          )}
          <Button isShowMore={isShowMore} setIsShowMore={setIsShowMore}>
            {isShowMore ? '접기' : '더 보기'}
          </Button>
        </Screen>
      </section>
    </main>
  );
}
