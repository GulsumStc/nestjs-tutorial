import { Body, Controller, Post } from '@nestjs/common';
import { AuthPayloadDto } from './dto/authdto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}


  @Post('login')
  login(@Body() authPayload:AuthPayloadDto) {
    return this.authService.validateUser(authPayload);
  }



}
