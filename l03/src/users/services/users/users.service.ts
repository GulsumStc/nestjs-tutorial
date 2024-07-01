import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {

  private fakeUsers = [
    { userName: 'Anson', email: 'anson@anson.com' },
    { userName: 'Cory', email: 'cory@anson.com' },
    { userName: 'Greg', email: 'greg@anson.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserDto) {
    this.fakeUsers.push(userDetails);
    return this.fakeUsers;
  }

  fetchUserById(id: number) {
    return { id, username: 'Anson', email: 'anson@email.com' };
  }


}
