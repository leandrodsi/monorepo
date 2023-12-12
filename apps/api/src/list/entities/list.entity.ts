import { List } from '@prisma/client';

export class ListEntity implements List {
  id: number;
  name: string;
}
