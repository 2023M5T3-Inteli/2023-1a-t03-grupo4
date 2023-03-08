import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { config } from './ormconfig';
import { SubmissionModule } from './submission/submission.module';
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [ProjectModule, TypeOrmModule.forRoot(config), SubmissionModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
