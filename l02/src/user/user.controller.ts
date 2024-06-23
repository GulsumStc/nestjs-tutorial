import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, updateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly usersService: UserService,
    private readonly commentService: CommentService) { }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post("create")
  create(@Body() createUserDto:CreateUserDto){
    return this.usersService.create(createUserDto)
  }

  
  @Get(":id/comments")
  getUserComments(@Param("id") id: number) {  
    
    return this.commentService.findUserComments(id)
    
  }

  @Put(":id/update")
  updateUser(@Param("id") id: number, @Body() updateUserDto: updateUserDto) {
    return this.usersService.update(id, updateUserDto)
  }
  

}
