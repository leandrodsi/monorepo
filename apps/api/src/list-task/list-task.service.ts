import { Injectable } from '@nestjs/common';
import { CreateListTaskDto } from './dto/create-list-task.dto';
import { UpdateListTaskDto } from './dto/update-list-task.dto';
import { ListTaskRepository } from './repositories/list-task.repository';

@Injectable()
export class ListTaskService {
  constructor(private readonly listTaskRepository: ListTaskRepository) {}

  create(listId: number, createListTaskDto: CreateListTaskDto) {
    return this.listTaskRepository.create(listId, createListTaskDto);
  }

  findAll(listId: number) {
    return this.listTaskRepository.findAll(listId);
  }

  findOne(listId: number, taskId: number) {
    return this.listTaskRepository.findOne(listId, taskId);
  }

  update(listId: number, taskId: number, updateListTaskDto: UpdateListTaskDto) {
    return this.listTaskRepository.update(listId, taskId, updateListTaskDto);
  }

  remove(listId: number, taskId: number) {
    return this.listTaskRepository.remove(listId, taskId);
  }
}
