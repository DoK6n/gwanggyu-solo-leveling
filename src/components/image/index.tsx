import React, { useState } from 'react';
import { useLvImageFinder } from '../../hooks/useLvImageFinder';

interface ImageProps {
  level: string;
}

export const Image = ({ level }: ImageProps) => {
  return (
    <div className="max-w-full text-center">
      <img src={useLvImageFinder(level)} className="max-w-lg max-h-96 w-4/5 m-auto" />
    </div>
  );
};
