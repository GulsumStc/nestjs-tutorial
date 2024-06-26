import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* 

main.ts file is entrypoint of the application. All initialized modules will be loaded here.
register middleware, configure librraries like  passport are done here

*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Start listening for incoming requests on port 3000.
  await app.listen(3001);
}
bootstrap();
