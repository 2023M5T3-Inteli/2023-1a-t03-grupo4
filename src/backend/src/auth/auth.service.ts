import { Injectable } from '@nestjs/common';
import { LoginService } from 'src/services/login.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private loginService: LoginService,
        private jwtService: JwtService
        ) {}
  
    async validateLogin(username: string, pass: string): Promise<any> {
      const login = await this.loginService.findOne(username);
      if (login && login.password === pass) {
        const { password, ...result } = login;
        return result;
      }
      return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
  }
