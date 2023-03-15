import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../controller/app.controller';
import { AppService } from '../services/app.service';
import * as Joi from 'joi';
import { DatabaseModule } from './database.module';
import { bdSecreat } from '../../constants'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../../.env',
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.number().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
      }),
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
