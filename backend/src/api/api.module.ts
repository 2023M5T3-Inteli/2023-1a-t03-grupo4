import { Module } from '@nestjs/common';
import { ProjectsModule } from 'src/modules/projects/projects.module';
import { ApiController } from 'src/controller/api.controller';
import { ProfilesModule } from 'src/modules/projects/profile.module';
import { SubmissionModule } from 'src/modules/projects/submission.module';

@Module({
    imports: [ProjectsModule, ProfilesModule, SubmissionModule],
    controllers: [ApiController],
  })
  export class ApiModule {}