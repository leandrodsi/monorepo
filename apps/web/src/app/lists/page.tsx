import { List, PageHeader } from '@components/index';
import { findAllLists } from '@repo/api';
import { List as IList } from '@repo/models';
import { AxiosResponse } from 'axios';

async function fetchLists(): Promise<AxiosResponse<IList[]>> {
  return findAllLists();
}

export default async function Lists() {
  const { data: lists } = await fetchLists();

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
