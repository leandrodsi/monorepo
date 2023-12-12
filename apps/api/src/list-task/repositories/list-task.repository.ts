import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListTaskDto } from '../dto/create-list-task.dto';
import { UpdateListTaskDto } from '../dto/update-list-task.dto';

@Injectable()
export class ListTaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(listId: number, { name }: CreateListTaskDto) {
    return this.prisma.task.create({ data: { listId, name } });
  }

  findAll(listId: number) {
    return this.prisma.task.findMany({ where: { listId } });
  }

  findOne(listId: number, taskId: number) {
    return this.prisma.task.findUnique({ where: { listId, id: taskId } });
  }

  update(listId: number, taskId: number, updateListTaskDto: UpdateListTaskDto) {
    return this.prisma.task.update({
      where: { listId, id: taskId },
      data: updateListTaskDto,
    });
  }

  remove(listId: number, taskId: number) {
    return this.prisma.task.delete({ where: { listId, id: taskId } });
  }
}
