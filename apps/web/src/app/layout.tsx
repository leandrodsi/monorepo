import { cn } from '@repo/utils';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import { Sidebar } from '@components/Sidebar';
import './globals.css';

const inter = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="gs">
      <body
        className={cn(
          inter.className,
          'antialiased flex bg-[#f1f1f7] min-h-screen'
        )}
      >
        <Sidebar />
        <div className="flex flex-col pl-[368px] pr-12 py-16">{children}</div>
      </body>
    </html>
  );
}
