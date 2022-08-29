import React, { PropsWithChildren } from 'react';

export const PlayerInfo = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-2 gap-1">{children}</div>;
};
