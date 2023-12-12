import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { ListGateway } from './list.gateway';
import { ListService } from './list.service';
import { ListRepository } from './repositories/list.repository';
import { ListController } from './list.controller';

@Module({
  imports: [],
  providers: [ListGateway, ListService, PrismaService, ListRepository],
  controllers: [ListController],
})
export class ListModule {}
