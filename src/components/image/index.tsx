import React, { useState } from 'react';
import { useLvImageFinder } from '../../hooks/useLvImageFinder';
import { playerE, playerB } from '../../static/images';

interface ImageProps {
  level: string;
}

export const Image = ({ level }: ImageProps) => {
  const [playerImg, setPlayerImg] = useState<string | undefined>(useLvImageFinder(level));
  return (
    <div className="max-w-full text-center">
      <img src={playerImg} className="max-w-lg max-h-96 w-4/5 m-auto" />
    </div>
  );
};
