import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [UsersModule, DatabaseModule, EmployeesModule, AnimalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
