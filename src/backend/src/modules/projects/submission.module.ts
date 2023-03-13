import { Module } from '@nestjs/common';
import { SubmissionRepository } from './submission.repository';
import { PrismaModule } from 'src/prisma.module';
import { SubmissionsService } from 'src/service/submissions.service';

// Roots API
@Module({
  imports: [PrismaModule],
  providers: [SubmissionRepository, SubmissionsService],
  exports: [SubmissionsService],
})
export class SubmissionModule {}
