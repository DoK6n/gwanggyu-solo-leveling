import React, { PropsWithChildren } from 'react';
// background-color: #273444;
export const Screen = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-white text-base px-4 py-4 my-4 w-72 flex flex-col rounded-lg shadow-[inset_0px_0px_10px_0px_#000a]  bg-[#376bbd]/40 ">
      {children}
    </div>
  );
};
// #1f324f
