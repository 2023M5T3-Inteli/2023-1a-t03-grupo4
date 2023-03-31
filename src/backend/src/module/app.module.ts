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
import { LoginModule } from './login.module';
import { DataSource } from 'typeorm';
import Skills from './entity/skills.entity';
import { Positions } from './entity/positions.entity';
import { Technologies } from './entity/technologies.entity';
import { Submission } from './entity/submission.entity';
import { Login } from './entity/login.entity';
import { AuthModule } from 'src/auth/auth.module';
import { HealthModule } from './health.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'prova-db-priscila.crobwgxh187m.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [Project, Profile, Skills, Positions, Submission, Technologies, Login],
      synchronize: true,
    }),
    ProjectModule,
    ProfileModule,
    SubmissionModule,
    SkillsModule,
    technologieModule,
    PositionsModule,
    AuthModule,
    HealthModule
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
