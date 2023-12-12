import { Module } from '@nestjs/common';
import { ListGateway } from 'src/list/list.gateway';
import { PrismaService } from 'src/prisma/prisma.service';
import { ListTaskController } from './list-task.controller';
import { ListTaskService } from './list-task.service';
import { ListTaskRepository } from './repositories/list-task.repository';

@Module({
  controllers: [ListTaskController],
  providers: [ListTaskService, PrismaService, ListTaskRepository, ListGateway],
})
export class ListTaskModule {}
