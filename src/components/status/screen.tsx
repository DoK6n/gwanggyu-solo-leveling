import React, { PropsWithChildren } from 'react';

export const Screen = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-white text-base px-4 py-4 my-4 w-11/12 flex flex-col border-blue border-2 border-solid">
      {children}
    </div>
  );
};
