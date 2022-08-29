import React, { useState } from 'react';
import { useLevelFinder } from '../../hooks';
export const Level = () => {
  const [currentLevel, setCurrentLevel] = useState<number>(26);
  return (
    <div className="text-white">
      총 수익 {currentLevel}만 / {useLevelFinder(currentLevel)}급
    </div>
  );
};
