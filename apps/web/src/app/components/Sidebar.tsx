'use client';

import { cn } from '@repo/utils';
import { CheckSquare, ClipboardList, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/'
  },
  {
    label: 'Lists',
    icon: ClipboardList,
    path: '/lists'
  },
  {
    label: 'Tasks',
    icon: CheckSquare,
    path: '/tasks'
  }
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[300px] px-8 py-16 min-h-screen bg-white">
      <nav className="flex flex-col gap-5">
        {routes.map(({ label, path, icon: Icon }) => {
          const selected = path === pathname;

          return (
            <li
              key={label}
              className={cn(
                'flex gap-4 h-12 items-center text-lg text-rangoonGreen-400 font-bold',
                selected && 'text-rangoonGreen-600'
              )}
            >
              <Link
                href={path}
                className={cn(
                  'flex gap-4 h-12 items-center text-lg text-rangoonGreen-400 font-bold',
                  selected && 'text-rangoonGreen-600'
                )}
              >
                <div
                  className={cn(
                    'flex w-12 h-12 rounded-lg items-center justify-center',
                    selected && 'bg-aquamarine-500'
                  )}
                >
                  <Icon
                    size={24}
                    className={
                      selected ? 'text-white' : 'text-rangoonGreen-400'
                    }
                  />
                </div>
                {label}
              </Link>
            </li>
          );
        })}
      </nav>
    </aside>
  );
};
