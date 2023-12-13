import { ClipboardList, Layers3, LayoutList, ListChecks } from 'lucide-react';

import { PageHeader, PieChart, SummaryCard } from '@components/index';
import { findAllLists } from '@repo/api';
import { List } from '@repo/models';
import { useStore } from '@repo/store';
import { AxiosResponse } from 'axios';
import StoreInitializer from '../store/StoreInitializer';

async function fetchLists(): Promise<AxiosResponse<List[]>> {
  return findAllLists();
}

export default async function Home() {
  const { data: lists } = await fetchLists();

  useStore.setState(lists);

  const totalTasks =
    lists.reduce((acc, item) => (acc += item.tasks.length), 0) || 0;
  const totalTodos =
    lists.reduce(
      (acc, item) => (acc += item.tasks.filter(task => !task.finished).length),
      0
    ) || 0;
  const totalDone =
    lists.reduce(
      (acc, item) => (acc += item.tasks.filter(task => task.finished).length),
      0
    ) || 0;
  const finishedLists = lists.filter(
    list => list.tasks.length > 0 && list.tasks.every(task => task.finished)
  ).length;

  const cards = [
    {
      id: 'total-lists',
      value: lists.length,
      label: 'Total lists',
      icon: Layers3,
      color: 'fuchsia'
    },
    {
      id: 'total-todos',
      value: totalTasks,
      label: "Total to-do's",
      icon: ClipboardList,
      color: 'violet'
    },
    {
      id: 'items',
      value: totalTodos,
      label: 'Items to-do',
      icon: LayoutList,
      color: 'orange'
    },
    {
      id: 'done',
      value: totalDone,
      label: 'Items done',
      icon: ListChecks,
      color: 'green'
    }
  ];

  return (
    <main className="flex flex-col">
      <StoreInitializer lists={lists} />
      <PageHeader
        title={{ label: 'Dashboard' }}
        subtitle={{ label: 'See your performance' }}
      />
      <div className="flex w-[670px] mt-20 justify-between">
        {cards.map(cardData => (
          <SummaryCard key={cardData.id} data={cardData} />
        ))}
      </div>
      <div className="flex mt-20 justify-between">
        <div className="w-[323px] px-5 py-6 bg-white rounded-lg">
          <p className="text-2xl text-rangoonGreen-600">Performance</p>
          <PieChart
            data={[
              { x: 'To-do', y: totalTodos },
              { x: 'Done', y: totalDone }
            ]}
          />
        </div>
        <div className="w-[323px] px-5 py-6 bg-white rounded-lg">
          <p className="text-2xl text-rangoonGreen-600">Finished lists</p>
          <PieChart
            data={[
              { x: 'Progress', y: lists.length },
              { x: 'Finished', y: finishedLists }
            ]}
          />
        </div>
      </div>
    </main>
  );
}
