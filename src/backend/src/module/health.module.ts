import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { healthService } from '../services/health.service';
import { healthController } from '../controller/health.controller';

@Module({
  providers: [healthService],
  controllers: [healthController]
})
export class HealthModule {}