import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {


  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    return {}
  }

  @Post('/create')
  createUser(@Body() userDto: CreateUserDto) {
    
  }

  @Get(':id')
  // getUserById(@Req() req:Request, @Res() res:Response) {} // express way
  getUserById(@Param('id') id: string) {
    
  }


}
