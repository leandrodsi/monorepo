'use client';

import { updateTask } from '@repo/api';
import { Task } from '@repo/models';
import { cn } from '@repo/utils';
import { Check } from 'lucide-react';

type CheckItemProps = {
  listId: number;
  task: Task;
};

export const CheckItem = ({
  listId,
  task: { id, name, finished }
}: CheckItemProps) => {
  const handleClick = async () => {
    const response = await updateTask(listId, id, { finished: !finished });

    console.log(response);
  };

  return (
    <div className="mb-2">
      <button
        className="flex flex-row gap-2 items-center"
        onClick={handleClick}
      >
        <div
          className={cn(
            'flex w-5 h-5 rounded-md border-2 border-aquamarine-500 items-center justify-center',
            finished && 'border-rangoonGreen-400'
          )}
        >
          {finished && <Check size={12} className="text-rangoonGreen-500" />}
        </div>
        <p
          className={cn(
            'flex flex-1 text-rangoonGreen-400',
            finished && 'text-rangoonGreen-300'
          )}
        >
          {name}
        </p>
      </button>
    </div>
  );
};
