import { api } from '../api';
import { CreateTaskDto, UpdateTaskDto } from '../dto';

export const createTask = (listId: number, body: CreateTaskDto) => {
  return api.post(`/list/${listId}/task`, body);
};

export const findAllTasks = (listId: number) => {
  return api.get(`/list/${listId}/task`);
};

export const findOneTask = (listId: number, taskId: number) => {
  return api.get(`/list/${listId}/task/${taskId}`);
};

export const updateTask = (
  listId: number,
  taskId: number,
  body: UpdateTaskDto
) => {
  return api.patch(`/list/${listId}/task/${taskId}`, body);
};

export const removeTask = (listId: number, taskId: number) => {
  return api.delete(`/list/${listId}/task/${taskId}`);
};
