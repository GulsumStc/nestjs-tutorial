import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { UsersMiddleware } from './middlewares/users.middleware';
import { AnotherMiddleware } from './middlewares/another.middleware';


@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UsersMiddleware)
      .forRoutes({
      path: 'users',
      method: RequestMethod.GET,
      },{
        path: 'users/:id',
        method: RequestMethod.GET,
      })
      .apply(AnotherMiddleware)
      .forRoutes({
      path: 'users',
      method: RequestMethod.POST,
      },{
        path: 'users/:id',
        method: RequestMethod.GET,
      }
      );
  }
  


}
