import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { PrismaService } from './prisma/prisma.service';
import { ListTaskModule } from './list-task/list-task.module';

@Module({
  imports: [ListModule, ListTaskModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
