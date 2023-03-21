import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Project } from './entity/project.entity';
import { Profile } from './entity/profile.entity';
import { ProjectModule } from './project.module';
import { ProfileModule } from '../module/profile.module';
import { DataSource } from 'typeorm';
import Skills from './entity/skills.entity';
import { Positions } from './entity/positions.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'grupo4-dev.cd53msdn47fe.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'grupo4123',
      database: 'postgres',
      entities: [Project, Profile, Skills, Positions],
      synchronize: true,
    }),
    ProjectModule,
    ProfileModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
