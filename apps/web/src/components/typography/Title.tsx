'use client';

import { findAllLists } from '@repo/api';
import { useStore } from '@repo/store';
import { RefreshCcw } from 'lucide-react';

type TitleProps = {
  label: string;
};

export const Title = ({ label }: TitleProps) => {
  const handleRefresh = async () => {
    const { data } = await findAllLists();

    useStore(data);
  };

  return (
    <div className="flex gap-4">
      <h2 className="text-3xl font-bold text-rangoonGreen-600">{label}</h2>
      <button onClick={handleRefresh}>
        <RefreshCcw size={24} className="text-aquamarine-600" />
      </button>
    </div>
  );
};
