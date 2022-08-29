import React from 'react';

interface CatagoryProps {
  categoryKey: string;
  categoryValue: number | string;
}

export const Category = ({ categoryKey = '항목', categoryValue = '' }: CatagoryProps) => {
  return (
    <div className="">
      <span className="text-slate-400">{categoryKey}:</span> {categoryValue}
    </div>
  );
};
