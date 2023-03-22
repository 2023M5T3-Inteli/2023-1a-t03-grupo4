import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Project } from './entity/project.entity';
import { Profile } from './entity/profile.entity';
import { ProjectModule } from './project.module';
import { ProfileModule } from './profile.module';
import { SubmissionModule } from './submission.module';
import { technologieModule } from './technologies.module'
import { SkillsModule } from './skills.module';
import { PositionsModule } from './position.module'
import { DataSource } from 'typeorm';
import Skills from './entity/skills.entity';
import { Positions } from './entity/positions.entity';
import { Technologies } from './entity/technologies.entity';
import { Submission } from './entity/submission.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'grupo4-dev.cd53msdn47fe.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'grupo4123',
      database: 'postgres',
      entities: [Project, Profile, Skills, Positions, Submission, Technologies],
      synchronize: true,
    }),
    ProjectModule,
    ProfileModule,
    SubmissionModule,
    SkillsModule,
    technologieModule,
    PositionsModule
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
