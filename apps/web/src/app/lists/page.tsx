'use client';

import { List, PageHeader } from '@components/components';
import { useState } from 'react';

export default function Lists() {
  const [lists, setLists] = useState([
    {
      id: 'a',
      name: 'Regime',
      items: [
        { id: 'a1', name: '1 glass of fruit juice', finished: true },
        { id: 'a2', name: '30g of cheese', finished: true },
        { id: 'a3', name: '125g of yogurt', finished: false },
        { id: 'a4', name: 'Rice, pasta or semolina', finished: false },
        { id: 'a5', name: 'Lentils, chickpeas or beans', finished: false }
      ]
    },
    {
      id: 'b',
      name: 'Grocery List',
      items: [
        { id: 'b1', name: 'Meat', finished: true },
        { id: 'b2', name: 'Bread', finished: false },
        { id: 'b3', name: 'Cheese', finished: false },
        { id: 'b5', name: 'Cheese', finished: false },
        { id: 'b6', name: 'Cheese', finished: false },
        { id: 'b7', name: 'Cheese', finished: false },
        { id: 'b4', name: 'Bacon', finished: true }
      ]
    },
    {
      id: 'c',
      name: 'Project Alpha',
      items: []
    },
    {
      id: 'd',
      name: 'Project Beta',
      items: []
    },
    {
      id: 'e',
      name: 'Project Delta',
      items: []
    }
  ]);

  return (
    <main className="flex min-h-screen flex-col">
      <PageHeader title="Lists" subtitle="See and edit your tasks" />
      <div className="flex flex-col mt-20 justify-between">
        {lists.map(item => (
          <List data={item} onChange={setLists} />
        ))}
      </div>
    </main>
  );
}
