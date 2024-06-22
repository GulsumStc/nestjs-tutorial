import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // this means that any property that is not defined in the DTO will be removed
    forbidNonWhitelisted: true, // this means  if any property that is defined in the DTO, it will throw an error 

  }));
  await app.listen(3000);
}
bootstrap();
