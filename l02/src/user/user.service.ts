import { Injectable, Param } from '@nestjs/common';

@Injectable() // injectable means that it can be injected into other modules
export class UserService {


  findOne(id: number) {

  }
  create(createUserDto: any) {

    return `This action adds a new user`;

  }



}
