import { Module } from '@nestjs/common';
import { ProjectsModule } from 'src/modules/projects/projects.module';
import { ApiController } from 'src/controller/api.controller';
import {SubmissionController} from 'src/controller/submission.controller'
import {ProfileController} from 'src/controller/profile.controller'
import { ProfilesModule } from 'src/modules/projects/profile.module';
import { SubmissionModule } from 'src/modules/projects/submission.module';

@Module({
    imports: [ProjectsModule, ProfilesModule, SubmissionModule],
    controllers: [ApiController, SubmissionController, ProfileController],
  })
  export class ApiModule {}