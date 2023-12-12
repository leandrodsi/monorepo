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
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ListGateway } from './list.gateway';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(
    private readonly listService: ListService,
    private readonly gateway: ListGateway,
  ) {}

  @Post('')
  @HttpCode(201)
  async create(@Body() createListDto: CreateListDto) {
    const list = await this.listService.create(createListDto);

    this.gateway.server.emit('onMessage', {
      target: 'LIST',
      action: 'CREATE',
      data: list,
    });
  }

  @Get()
  findAll() {
    return this.listService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.listService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(204)
  async update(@Param('id') id: number, @Body() updateListDto: UpdateListDto) {
    const list = await this.listService.update(+id, updateListDto);

    this.gateway.server.emit('onMessage', {
      target: 'LIST',
      action: 'UPDATE',
      data: list,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const list = await this.listService.remove(+id);

    this.gateway.server.emit('onMessage', {
      target: 'LIST',
      action: 'DELETE',
      data: list,
    });
  }
}
