import { Body, Controller, Get, HttpCode, HttpStatus, NotImplementedException, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guards';

@Controller('auth')
export class AuthController {

constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() authPayload: {username: string, password: string}) {
    return this.authService.authenticate(authPayload);
  }


  @UseGuards(AuthGuard) // This route is protected by the AuthGuard
  @Get('me')
  getUserInfo(@Request() req) {

    return req.user;

  }

}
