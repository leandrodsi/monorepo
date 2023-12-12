import { ListsWrapper, PageHeader } from '@components/index';

export default function Lists() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageHeader
        title={{ label: 'Lists' }}
        subtitle={{ label: 'See and edit your tasks' }}
      />
      <ListsWrapper />
    </main>
  );
}
