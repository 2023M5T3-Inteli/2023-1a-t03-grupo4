import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { technologiesService } from '../services/technologies.service';
import { technologieController } from '../controller/technologies.controller';
import {Technologies} from './entity/technologies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Technologies])],
  providers: [technologiesService],
  controllers: [technologieController],
})
export class technologieModule {}