import { List, PageHeader } from '@components/index';
import { List as IList } from '@repo/models';

async function fetchLists(): Promise<IList[]> {
  const listsResponse = await fetch('http://localhost:3333/list');

  return listsResponse.json() as Promise<IList[]>;
}

export default async function Lists() {
  const lists = await fetchLists();

  console.log('LISTS PAGE: ', lists);

  return (
    <main className="flex min-h-screen flex-col">
      <PageHeader title="Lists" subtitle="See and edit your tasks" />
      <div className="flex flex-col mt-20 justify-between">
        {lists?.map(list => <List key={list.id} data={list} />)}
      </div>
    </main>
  );
}
