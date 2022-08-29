import React, { PropsWithChildren } from 'react';

interface ButtonProps {
  setIsShowMore: React.Dispatch<React.SetStateAction<boolean>>;
  isShowMore: boolean;
}

export const Button = ({ children, setIsShowMore, isShowMore }: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className="basis-1/2 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-teal-600 hover:bg-teal-800 active:bg-teal-900"
      onClick={() => {
        setIsShowMore(!isShowMore);
      }}
    >
      {children}
    </button>
  );
};
