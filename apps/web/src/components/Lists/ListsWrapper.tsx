'use client';

import { Spinner } from '@components/Spinner';
import { findAllLists } from '@repo/api';
import { List as IList } from '@repo/models';
import { useEffect, useState } from 'react';
import { List } from '..';

export const ListsWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lists, setLists] = useState<IList[]>();

  const onUpdateTask = (listId: number, taskId: number) => {
    setLists(
      prev =>
        prev?.map(list =>
          list.id !== listId
            ? list
            : {
                ...list,
                tasks: [
                  ...list.tasks.map(task =>
                    task.id !== taskId
                      ? task
                      : { ...task, finished: !task.finished }
                  )
                ]
              }
        )
    );
  };

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const { data } = await findAllLists();
        setLists(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="flex h-full flex-col mt-20 justify-between">
      {isLoading ? (
        <Spinner />
      ) : (
        lists?.map(list => (
          <List key={list.id} data={list} onUpdateTask={onUpdateTask} />
        ))
      )}
    </div>
  );
};
