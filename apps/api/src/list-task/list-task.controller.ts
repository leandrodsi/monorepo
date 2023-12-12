import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ListGateway } from 'src/list/list.gateway';
import { CreateListTaskDto } from './dto/create-list-task.dto';
import { UpdateListTaskDto } from './dto/update-list-task.dto';
import { ListTaskService } from './list-task.service';

@Controller('list')
export class ListTaskController {
  constructor(
    private readonly listTaskService: ListTaskService,
    private readonly gateway: ListGateway,
  ) {}

  @Post(':listId/task')
  @HttpCode(201)
  async create(
    @Param('listId') listId: string,
    @Body() createListTaskDto: CreateListTaskDto,
  ) {
    const task = await this.listTaskService.create(+listId, createListTaskDto);

    this.gateway.server.emit('onMessage', { msg: 'created/task', body: task });
  }

  @Get(':listId/task')
  findAll(@Param('listId') listId: string) {
    return this.listTaskService.findAll(+listId);
  }

  @Get(':listId/task/:taskId')
  findOne(@Param('listId') listId: string, @Param('taskId') taskId: string) {
    return this.listTaskService.findOne(+listId, +taskId);
  }

  @Patch(':listId/task/:taskId')
  @HttpCode(204)
  async update(
    @Param('listId') listId: string,
    @Param('taskId') taskId: string,
    @Body() updateListTaskDto: UpdateListTaskDto,
  ) {
    const task = await this.listTaskService.update(
      +listId,
      +taskId,
      updateListTaskDto,
    );

    this.gateway.server.emit('onMessage', { msg: 'updated/task', body: task });
  }

  @Delete(':listId/task/:taskId')
  remove(@Param('listId') listId: string, @Param('taskId') taskId: string) {
    return this.listTaskService.remove(+listId, +taskId);
  }
}
