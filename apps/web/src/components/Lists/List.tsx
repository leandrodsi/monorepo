'use client';

import { List as IList } from '@repo/models';
import { cn } from '@repo/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ListItem } from '..';

export function List({
  data: { id, name, tasks },
  onUpdateTask
}: {
  data: IList;
  onUpdateTask: (listId: number, taskId: number) => void;
}) {
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

          <button
            className={cn(
              'transition-all',
              expanded ? 'rotate-180' : 'rotate-0'
            )}
            onClick={() => toggleAdding(true)}
          >
            <ChevronDown size={20} className="text-aquamarine-500" />
          </button>
        </div>
      </div>
      {expanded && (
        <div className="px-4 py-2">
          {tasks
            .sort((a, b) =>
              a.finished && !b.finished ? -1 : !a.finished && b.finished ? 1 : 0
            )
            .map(item => (
              <ListItem
                key={item.id}
                listId={id}
                task={item}
                onUpdateTask={onUpdateTask}
              />
            ))}
        </div>
      )}
    </div>
  );
}
