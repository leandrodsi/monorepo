'use client';

import { PageHeader } from '@components/components';
import { ClipboardList, Layers3, LayoutList, ListChecks } from 'lucide-react';
import { VictoryPie } from 'victory';
import { Card } from './components';

export default function Home() {
  const cards = [
    {
      id: 'total-lists',
      value: 12,
      label: 'Total lists',
      icon: Layers3,
      color: 'fuchsia'
    },
    {
      id: 'total-todos',
      value: 12,
      label: "Total to-do's",
      icon: ClipboardList,
      color: 'violet'
    },
    {
      id: 'items',
      value: 12,
      label: 'Items to-do',
      icon: LayoutList,
      color: 'orange'
    },
    {
      id: 'done',
      value: 12,
      label: 'Items done',
      icon: ListChecks,
      color: 'green'
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <PageHeader title="Dashboard" subtitle="See your performance" />
      <div className="flex w-[670px] mt-20 justify-between">
        {cards.map(cardData => (
          <Card data={cardData} />
        ))}
      </div>
      <div className="flex mt-20 justify-between">
        <div className="w-[323px] px-5 py-6 bg-white rounded-lg">
          <p className="text-2xl text-rangoonGreen-600">Performance</p>
          <VictoryPie
            data={[
              { x: 'To-do', y: 26 },
              { x: 'Done', y: 8 }
            ]}
            colorScale={['navy', 'green']}
            animate={{ duration: 500 }}
          />
        </div>
        <div className="w-[323px] px-5 py-6 bg-white rounded-lg">
          <p className="text-2xl text-rangoonGreen-600">Finished lists</p>
          <VictoryPie
            data={[
              { x: 'Progress', y: 7 },
              { x: 'Finished', y: 1 }
            ]}
            colorScale={['navy', 'green']}
            animate={{ duration: 500 }}
          />
        </div>
      </div>
    </main>
  );
}
