import { HttpException, Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/authdto';
import { JwtService } from '@nestjs/jwt';


const users = [
  {
    username: 'john',
    password: 'changeme',
  },
  {
    username: 'maria',
    password: 'guess',
  },
];


@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService) {}

  validateUser({ username, password }: AuthPayloadDto) {
    const findUser = users.find(user => user.username === username && user.password === password);
    if (!findUser) {
       throw new HttpException('Invalid username or password', 401);
    }
    if(password === findUser.password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
    return findUser;
  }

}
