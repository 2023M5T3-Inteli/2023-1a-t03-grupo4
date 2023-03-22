import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { submissionService } from '../services/submission.service';
import { submissionController } from '../controller/submission.controller';
import {Submission} from './entity/submission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Submission])],
  providers: [submissionService],
  controllers: [submissionController],
})
export class SubmissionModule {}