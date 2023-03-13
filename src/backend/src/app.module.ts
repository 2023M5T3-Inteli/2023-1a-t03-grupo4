import { Module } from '@nestjs/common';
import { ProjectsModule } from './modules/projects/projects.module';
import { ApiModule } from './api/api.module';
import { ProfilesModule } from './modules/projects/profile.module';
import { SubmissionModule } from './modules/projects/submission.module';

// Roots API
@Module({
  imports: [ProjectsModule, ProfilesModule, SubmissionModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
