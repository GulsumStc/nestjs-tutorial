import { Controller, Get, HttpCode, HttpStatus, NotImplementedException, Post, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportLocalGuard } from "./guards/passport-local.guard";
import { PassportJwtAuthGuard } from "./guards/passport-jwt.guard";


@Controller("auth-v2")
export class PassportAuthController {
  constructor(private readonly authService: AuthService) { }
  

  @HttpCode(HttpStatus.OK)
  @UseGuards(PassportLocalGuard)
  @Post("login")
  login(@Request() req) {
    return this.authService.signIn(req.user);
  }



  @Get('me')
  @UseGuards(PassportJwtAuthGuard)
  getUserInfo(@Request() req) {

    return req.user;
  }


  
}