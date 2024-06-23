import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), // isGlobal: true, it means that it will be used in all the modules no need to import it in each module 
    DatabaseModule, ItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

