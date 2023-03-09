import { Module } from '@nestjs/common';
import { ProjectsRepository } from './projects.repository';
import { PrismaModule } from 'src/prisma.module';
import { ProjectsService } from 'src/service/projects.service';


@Module({
  imports: [PrismaModule],
  providers: [ProjectsRepository, ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
