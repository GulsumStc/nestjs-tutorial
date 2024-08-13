import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  username: string;
  password: string;
}

//  this is mockup, replace with real database
const users: User[] = [
  {
    id: 1,
    username: 'Anson',
    password: '1234',
  },
  {
    id: 2,
    username: 'Cory',
    password: '1234',
  },
  {
    id: 3,
    username: 'Greg',
    password: '1234',
  },
];

@Injectable()
export class UsersService {

  async findUserByName(username: string): Promise<User | undefined> {
    return users.find(user => user.username === username);
  }

}
