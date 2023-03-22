import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Project from './entity/project.entity';
import { ProjectService } from '../services/project.service';
import { projectController } from '../controller/project.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [projectController],
  providers: [ProjectService],
})
export class ProjectModule {}