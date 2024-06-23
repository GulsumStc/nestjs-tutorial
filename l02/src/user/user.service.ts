import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, updateUserDto } from './dto/createUserDto';

@Injectable() // injectable means that it can be injected into other modules
export class UserService {



  constructor(
    
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    

  ) {}


  async findOne(id: number) {

    return await this.userRepo.findOne({where: {id: id}});

  }
  async create(createUserDto: CreateUserDto) {

    const user = await this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }

  async update(id: number, updateUserDto: updateUserDto) {
    
      return await this.userRepo.update(id, updateUserDto);

  }



}
