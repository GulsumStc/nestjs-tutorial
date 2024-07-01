import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {


  @Get()
  getUsers(@Query('sortBy', ParseBoolPipe) sortBy: boolean) {
    return {}
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userDto: CreateUserDto) {
    
  }

  @Get(':id')
  // getUserById(@Req() req:Request, @Res() res:Response) {} // express way
  getUserById(@Param('id', ParseIntPipe) id: number) {
    
  }

  


}
