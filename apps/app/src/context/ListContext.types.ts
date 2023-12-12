import { List, Task } from '@repo/models';
import { CONTEXT_ACTIONS } from '@utils/constants';

export type UpdateListPropsType = {
  action: keyof typeof CONTEXT_ACTIONS;
} & (
  | {
      target: 'LIST';
      data: List;
    }
  | {
      target: 'TASK';
      data: Task & { listId: number };
    }
);
