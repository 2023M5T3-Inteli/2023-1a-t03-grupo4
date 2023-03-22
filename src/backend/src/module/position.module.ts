import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionsService } from '../services/position.service';
import { positionController } from '../controller/position.controller';
import {Positions} from './entity/positions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Positions])],
  providers: [PositionsService],
  controllers: [positionController],
})
export class PositionsModule {}