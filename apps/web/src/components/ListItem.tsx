'use client';

import { cn } from '@repo/utils';
import { Check } from 'lucide-react';

type CheckItemProps = {
  checked: boolean;
  label: string;
  onClick: () => void;
};

export const CheckItem = ({ checked, label, onClick }: CheckItemProps) => {
  return (
    <div className="mb-2">
      <button className="flex flex-row gap-2 items-center" onClick={onClick}>
        <div
          className={cn(
            'flex w-5 h-5 rounded-md border-2 border-aquamarine-500 items-center justify-center',
            checked && 'border-rangoonGreen-400'
          )}
        >
          {checked && <Check size={12} className="text-rangoonGreen-500" />}
        </div>
        <p
          className={cn(
            'flex flex-1 text-rangoonGreen-400',
            checked && 'text-rangoonGreen-300'
          )}
        >
          {label}
        </p>
      </button>
    </div>
  );
};
