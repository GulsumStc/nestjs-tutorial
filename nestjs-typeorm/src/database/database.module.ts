import { Inject, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

/* 
ConfigService is a service used to manage and utilize configuration settings within your application. It typically loads environment variables from a .env file and makes these values accessible throughout the application. */


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (consfigService: ConfigService) => ({
        type: 'postgres',
        host: consfigService.get('DB_HOST'),
        port: consfigService.get('DB_PORT'),
        username: consfigService.get('DB_USERNAME'),
        password: consfigService.get('DB_PASSWORD'),
        database: consfigService.get('DB_NAME'),
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: consfigService.get('DB_SYNCHRONIZE'), // synchronize entities with database
        autoLoadEntities: true,
        // dropSchema: true,
        
      }),
      inject: [ConfigService],
      
    })
  ],

})
export class DatabaseModule {}
