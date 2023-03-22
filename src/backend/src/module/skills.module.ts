import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Skills from './entity/skills.entity';
import { SkillsService } from '../services/skills.service';
import { skillsController } from '../controller/skills.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Skills])],
  controllers: [skillsController],
  providers: [SkillsService],
})
export class SkillsModule {}