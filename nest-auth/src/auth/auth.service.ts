import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';


type AuthInput = {
  username: string;
  password: string;
};
type SignInData = {
  id: number;
  username: string;
}
type AuthResult = {
  accessToken: string;
  id: number;
  username: string;
}

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
              
  ) { }

  async authenticate(input: AuthInput): Promise<AuthResult | null> {
    
    const user = await this.validateUser(input);
    if (!user) {
       throw new UnauthorizedException("Invalid username or password");
    }

    return this.signIn(user);

  }
  
  async validateUser(input: AuthInput): Promise<SignInData | null> {
    const user = await this.userService.findUserByName(input.username);
    if (user && user.password === input.password) {
      return { id: user.id, username: user.username };
    }
    return null;
  }

  async signIn(user: SignInData): Promise<AuthResult> {
    const tokenPayload = {
      sub: user.id,
      username: user.username
    }

    // generate access token
    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return {
      accessToken,
      id: user.id,
      username: user.username
    }

  }


}
