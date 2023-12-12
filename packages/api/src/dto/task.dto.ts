export type CreateTaskDto = {
  name: string;
};

export type UpdateTaskDto = Partial<
  CreateTaskDto & {
    finished: boolean;
  }
>;
