import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListDto } from '../dto/create-list.dto';
import { UpdateListDto } from '../dto/update-list.dto';

@Injectable()
export class ListRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createListDto: CreateListDto) {
    return this.prisma.list.create({ data: createListDto });
  }

  findAll() {
    return this.prisma.list.findMany({ include: { tasks: true } });
  }

  findOne(id: number) {
    return this.prisma.list.findUnique({
      where: { id },
      include: { tasks: true },
    });
  }

  update(id: number, updateListDto: UpdateListDto) {
    return this.prisma.list.update({ where: { id }, data: updateListDto });
  }

  remove(id: number) {
    return this.prisma.list.delete({ where: { id } });
  }
}
