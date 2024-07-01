import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.fetchUsers();
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto)
  }

  @Get(':id')
  // getUserById(@Req() req:Request, @Res() res:Response) {} // express way
  getUserById(@Param('id', ParseIntPipe) id: number) {
    
  }




}
