import React, { PropsWithChildren } from 'react';

interface ButtonProps {
  setIsShowMore: React.Dispatch<React.SetStateAction<boolean>>;
  isShowMore: boolean;
}

export const Button = ({ children, setIsShowMore, isShowMore }: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className="basis-1/2 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-[#376bbd]/20 hover:bg-[#284e8a]/20 active:bg-[#294470]/20"
      onClick={() => {
        setIsShowMore(!isShowMore);
      }}
    >
      {children}
    </button>
  );
};
