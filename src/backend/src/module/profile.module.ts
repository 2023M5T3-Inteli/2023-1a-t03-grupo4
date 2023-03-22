import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { profileService } from '../services/profile.service';
import { profileController } from '../controller/profile.controller';
import {Profile} from './entity/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  providers: [profileService],
  controllers: [profileController],
})
export class ProfileModule {}