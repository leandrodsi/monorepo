import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ListRepository } from './repositories/list.repository';

@Injectable()
export class ListService {
  constructor(private readonly listRepository: ListRepository) {}

  create(createListDto: CreateListDto) {
    return this.listRepository.create(createListDto);
  }

  findAll() {
    return this.listRepository.findAll();
  }

  findOne(id: number) {
    return this.listRepository.findOne(id);
  }

  update(id: number, updateListDto: UpdateListDto) {
    return this.listRepository.update(id, updateListDto);
  }

  remove(id: number) {
    return this.listRepository.remove(id);
  }
}
