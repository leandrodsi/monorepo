import { Task } from '@prisma/client';

export class ListTaskEntity implements Task {
  id: number;
  name: string;
  finished: boolean;
  listId: number;
}
