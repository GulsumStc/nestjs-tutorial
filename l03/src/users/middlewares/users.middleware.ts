import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  // use(req: any, res: any, next: () => void) {
  //   next();
  // }

  use(req: Request, res: Response, next: NextFunction) {
    console.log('users middleware');
    console.log(req.headers.authorization)
    // const { authorization } = req.headers; // Destructuring :  
    // const { authorization, host, userAgent } = req.headers
    const authorization = req.headers.authorization;

    next();
  }

}
