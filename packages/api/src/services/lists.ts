import { api } from '../api';
import { CreateListDto, UpdateListDto } from '../dto/list.dto';

export const createList = (body: CreateListDto) => {
  return api.post('/list', body);
};

export const findAllLists = () => {
  return api.get('/list');
};

export const findOneList = (listId: number) => {
  return api.get(`/list/${listId}`);
};

export const updateList = (listId: number, body: UpdateListDto) => {
  return api.patch(`/list/${listId}`, body);
};

export const removeList = (listId: number) => {
  return api.delete(`/list/${listId}`);
};
