import { Controller,Get, Param, Post, Request, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginService } from '../services/login.service';
import { AuthService } from '../auth/auth.service'


@Controller('user')
export class loginController {
  constructor(
    private readonly loginService: LoginService,
    private authService: AuthService
    ) {}
    
  @Get(':username')
  getpositionById(@Param('username') username: string) {
    return this.loginService.findOne(username);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);

  }


}