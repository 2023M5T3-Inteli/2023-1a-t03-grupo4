import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AppController } from '../controller/app.controller';
import { AppService } from '../services/app.service';
import * as Joi from 'joi';
import { DatabaseModule } from './database.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { projectController } from '../controller/project.controller';
import { ProjectService } from '../services/project.service';
import { ProjectModule } from './project.module';
import { Project } from '../module/entities/project.entity'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [Project],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ProjectModule,
    DatabaseModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
