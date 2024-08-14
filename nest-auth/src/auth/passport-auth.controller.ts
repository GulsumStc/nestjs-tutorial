import { Controller, Get, HttpCode, HttpStatus, NotImplementedException, Post, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportLocalGuard } from "./guards/passport-local.guard";


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
  getUserInfo() {
    throw new NotImplementedException();
  }


  
}