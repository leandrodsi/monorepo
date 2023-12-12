'use client';

import { List as IList } from '@repo/models';
import { cn } from '@repo/utils';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { CheckItem } from '.';

export function List({ data: { id, name, tasks } }: { data: IList }) {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const finishedItems = tasks.filter(task => task.finished).length;
  const totalItems = tasks.length;
  const thereAreTasks = totalItems > 0;

  const toggleExpand = () => {
    setExpanded(prev => !prev);
  };

  const toggleAdding = (isAdding: boolean) => {
    setIsVisible(!isAdding);
  };

  return (
    <div className="bg-white rounded-lg mb-4">
      <div
        onClick={thereAreTasks ? toggleExpand : () => {}}
        className={cn(
          'w-full',
          thereAreTasks ? 'cursor-pointer' : 'cursor-default'
        )}
      >
        <div className="flex px-4 h-12 flex-row items-center justify-between">
          <div className="flex items-baseline gap-2">
            <p className="flex align-center text-lg text-rangoonGreen-700">
              {name}{' '}
            </p>
            <p className="flex text-sm text-rangoonGreen-500">
              ({finishedItems}/{totalItems})
            </p>
          </div>
          <div className={cn('flex flex-row px-2 py-1 bg-white rounded-full')}>
            <button onClick={() => toggleAdding(true)}>
              <Plus size={20} className="text-aquamarine-500" />
            </button>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="px-4 py-2">
          {tasks
            .sort((a, b) =>
              a.finished && !b.finished ? -1 : !a.finished && b.finished ? 1 : 0
            )
            .map(item => (
              <CheckItem key={item.id} listId={id} task={item} />
            ))}
        </div>
      )}
      {/* <Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
        <div className="bg-white px-6 py-5 rounded-lg">
          <div className="flex-row justify-between items-center mb-8">
            <p className="text-lg">Add item to list:</p>
            <Pressable onClick={() => setIsVisible(false)}>
              <X size={18} className="text-aquamarine-500" />
            </Pressable>
          </div>
          <p className="mb-2">Add a name to your item list:</p>
          <pInput
            className="mb-4 border-2 border-aquamarine-500 rounded-lg px-4 py-2"
            placeholder="Item name"
          />
          <Pressable className="h-10 bg-aquamarine-500 items-center justify-center rounded-lg">
            <p className="text-white font-bold text-lg">Add</p>
          </Pressable>
        </div>
      </Modal> */}
    </div>
  );
}
