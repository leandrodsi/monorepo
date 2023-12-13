import { ListsWrapper, PageHeader } from '@components/index';

export default function Lists() {
  return (
    <main className="flex flex-col min-h-full">
      <PageHeader
        title={{ label: 'Lists' }}
        subtitle={{ label: 'See and edit your tasks' }}
      />
      <ListsWrapper />
    </main>
  );
}
