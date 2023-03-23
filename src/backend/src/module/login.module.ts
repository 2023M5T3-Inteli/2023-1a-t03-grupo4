import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginService } from '../services/login.service';
import { loginController } from '../controller/login.controller';
import {Login} from './entity/login.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Login]), forwardRef(() => AuthModule)],
  providers: [LoginService],
  controllers: [loginController],
  exports:[LoginService]
})
export class LoginModule {}