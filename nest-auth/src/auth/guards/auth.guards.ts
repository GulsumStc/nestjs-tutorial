import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

/* Guards in NestJS implement the CanActivate interface. This interface requires the implementation of a canActivate method, which returns a boolean value or a Promise/Observable that resolves to a boolean. If the method returns true, the request is allowed to proceed. If it returns false, the request is denied. */


//Guards are used to control access to routes in NestJS.
//AuthGuard example checks for a JWT token in the request header a//
//Guards can be applied to individual routes, entire controllers, or globally across the application.
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    // we can extract request from context
    const request = context.switchToHttp().getRequest();
    // from the request object we can extract the header
    const authhorization = request.headers.authorization;// 'Bearer token'
    const token = authhorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException();
    }


    try {
      const tokenPayload = await this.jwtService.verifyAsync(token);
      request.user = {
        id: tokenPayload.sub,
        username: tokenPayload.username
      }
      return true;
      
    } catch (error) {
      throw new UnauthorizedException();
    }


    return true;
  }

}